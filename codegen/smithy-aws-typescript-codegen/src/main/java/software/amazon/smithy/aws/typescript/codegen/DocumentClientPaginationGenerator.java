/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.nio.file.Paths;
import java.util.Optional;
import software.amazon.smithy.codegen.core.CodegenException;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.PaginatedIndex;
import software.amazon.smithy.model.knowledge.PaginationInfo;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
final class DocumentClientPaginationGenerator implements Runnable {

    static final String PAGINATION_FOLDER = "pagination";

    private final TypeScriptWriter writer;
    private final PaginationInfo paginatedInfo;

    private final String operationTypeName;
    private final String inputTypeName;
    private final String outputTypeName;

    private final String operationName;
    private final String methodName;
    private final String paginationType;

    DocumentClientPaginationGenerator(
            Model model,
            ServiceShape service,
            OperationShape operation,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        this.writer = writer;

        Symbol operationSymbol = symbolProvider.toSymbol(operation);
        Symbol inputSymbol = symbolProvider.toSymbol(operation).expectProperty("inputType", Symbol.class);
        Symbol outputSymbol = symbolProvider.toSymbol(operation).expectProperty("outputType", Symbol.class);

        this.operationTypeName = DocumentClientUtils.getModifiedName(operationSymbol.getName());
        this.inputTypeName = DocumentClientUtils.getModifiedName(inputSymbol.getName());
        this.outputTypeName = DocumentClientUtils.getModifiedName(outputSymbol.getName());

        // e.g. listObjects
        this.operationName = operationTypeName.replace("Command", "");
        this.methodName = Character.toLowerCase(operationName.charAt(0)) + operationName.substring(1);
        this.paginationType = DocumentClientUtils.CLIENT_FULL_NAME + "PaginationConfiguration";

        PaginatedIndex paginatedIndex = PaginatedIndex.of(model);
        Optional<PaginationInfo> paginationInfo = paginatedIndex.getPaginationInfo(service, operation);
        this.paginatedInfo = paginationInfo.orElseThrow(() -> {
            return new CodegenException("Expected Paginator to have pagination information.");
        });
    }

    @Override
    public void run() {
        // Import Service Types
        String commandFileLocation = Paths.get(".", DocumentClientUtils.CLIENT_COMMANDS_FOLDER,
            DocumentClientUtils.getModifiedName(operationTypeName)).toString();
        writer.addImport(operationTypeName, operationTypeName, commandFileLocation);
        writer.addImport(inputTypeName, inputTypeName, commandFileLocation);
        writer.addImport(outputTypeName, outputTypeName, commandFileLocation);
        writer.addImport(
            DocumentClientUtils.CLIENT_NAME,
            DocumentClientUtils.CLIENT_NAME,
            Paths.get(".", DocumentClientUtils.CLIENT_NAME).toString());
        writer.addImport(
            DocumentClientUtils.CLIENT_FULL_NAME,
            DocumentClientUtils.CLIENT_FULL_NAME,
            Paths.get(".", DocumentClientUtils.CLIENT_FULL_NAME).toString());

        // Import Pagination types
        writer.addImport("Paginator", "Paginator", TypeScriptDependency.SMITHY_TYPES);
        writer.addImport(paginationType, paginationType,
            Paths.get(".", getInterfaceFilelocation().replace(".ts", "")).toString());

        writer.writeDocs("@public");
        writer.write("export { Paginator }");

        writeCommandRequest();
        writeMethodRequest();
        writePager();
    }

    static String getOutputFilelocation(OperationShape operation) {
        return String.format("%s%s/%s.ts", DocumentClientUtils.DOC_CLIENT_PREFIX,
            DocumentClientPaginationGenerator.PAGINATION_FOLDER,
            DocumentClientUtils.getModifiedName(operation.getId().getName()) + "Paginator");
    }

    static String getInterfaceFilelocation() {
        return String.format("%s%s/%s.ts", DocumentClientUtils.DOC_CLIENT_PREFIX,
            DocumentClientPaginationGenerator.PAGINATION_FOLDER, "Interfaces");
    }

    static void generateServicePaginationInterfaces(TypeScriptWriter writer) {
        writer.addImport("PaginationConfiguration", "PaginationConfiguration", TypeScriptDependency.SMITHY_TYPES);

        writer.addImport(
            DocumentClientUtils.CLIENT_NAME,
            DocumentClientUtils.CLIENT_NAME,
            Paths.get(".", DocumentClientUtils.CLIENT_NAME).toString());
        writer.addImport(
            DocumentClientUtils.CLIENT_FULL_NAME,
            DocumentClientUtils.CLIENT_FULL_NAME,
            Paths.get(".", DocumentClientUtils.CLIENT_FULL_NAME).toString());

        writer.writeDocs("@public");
        writer.write("export { PaginationConfiguration };");
        writer.write("");

        writer.writeDocs("@public");
        writer.openBlock("export interface $LPaginationConfiguration extends PaginationConfiguration {",
                "}", DocumentClientUtils.CLIENT_FULL_NAME, () -> {
            writer.write("client: $L | $L;", DocumentClientUtils.CLIENT_FULL_NAME, DocumentClientUtils.CLIENT_NAME);
        });
    }

    private String destructurePath(String path) {
        return "."  + path.replace(".", "!.");
    }

    private void writePager() {
        String inputTokenName = paginatedInfo.getPaginatedTrait().getInputToken().get();
        String outputTokenName = paginatedInfo.getPaginatedTrait().getOutputToken().get();

        writer.writeDocs("@public\n\n"
            + String.format("@param %s - {@link %s}%n", inputTypeName, inputTypeName)
            + String.format("@returns {@link %s}%n", outputTypeName)
            );
        writer.openBlock(
                "export async function* paginate$L(config: $L, input: $L, ...additionalArguments: any): Paginator<$L>{",
                "}",  operationName, paginationType, inputTypeName, outputTypeName, () -> {
            String destructuredInputTokenName = destructurePath(inputTokenName);
            writer.write("// ToDo: replace with actual type instead of typeof input$L", destructuredInputTokenName);
            writer.write("let token: typeof input$L | undefined = config.startingToken || undefined;",
                    destructuredInputTokenName);

            writer.write("let hasNext = true;");
            writer.write("let page: $L;", outputTypeName);
            writer.openBlock("while (hasNext) {", "}", () -> {
                writer.write("input$L = token;", destructuredInputTokenName);

                if (paginatedInfo.getPageSizeMember().isPresent()) {
                    String pageSize = paginatedInfo.getPageSizeMember().get().getMemberName();
                    writer.write("input[$S] = config.pageSize;", pageSize);
                }

                writer.openBlock("if (config.client instanceof $L) {", "}", DocumentClientUtils.CLIENT_FULL_NAME,
                    () -> {
                        writer.write("page = await makePagedRequest(config.client, input, ...additionalArguments);");
                    }
                );
                writer.openBlock("else if (config.client instanceof $L) {", "}", DocumentClientUtils.CLIENT_NAME,
                    () -> {
                        writer.write(
                            "page = await makePagedClientRequest(config.client, input, ...additionalArguments);");
                    }
                );
                writer.openBlock("else {", "}", () -> {
                    writer.write("throw new Error(\"Invalid client, expected $L | $L\");",
                            DocumentClientUtils.CLIENT_FULL_NAME, DocumentClientUtils.CLIENT_NAME);
                });

                writer.write("yield page;");
                writer.write("token = page$L;", destructurePath(outputTokenName));

                writer.write("hasNext = !!(token);");
            });

            writer.write("// @ts-ignore");
            writer.write("return undefined;");
        });
    }


    /**
     * Paginated command that calls client.method({...}) under the hood. This is meant for server side environments and
     * exposes the entire service.
     */
    private void writeMethodRequest() {
        writer.writeDocs("@internal");
        writer.openBlock(
                "const makePagedRequest = async (client: $L, input: $L, ...args: any): Promise<$L> => {",
                "}", DocumentClientUtils.CLIENT_FULL_NAME, inputTypeName,
                outputTypeName, () -> {
            writer.write("// @ts-ignore");
            writer.write("return await client.$L(input, ...args);", methodName);
        });
    }

    /**
     * Paginated command that calls CommandClient().send({...}) under the hood. This is meant for client side (browser)
     * environments and does not generally expose the entire service.
     */
    private void writeCommandRequest() {
        writer.writeDocs("@internal");
        writer.openBlock(
                "const makePagedClientRequest = async (client: $L, input: $L, ...args: any): Promise<$L> => {",
                "}", DocumentClientUtils.CLIENT_NAME, inputTypeName,
                outputTypeName, () -> {
            writer.write("// @ts-ignore");
            writer.write("return await client.send(new $L(input), ...args);", operationTypeName);
        });
    }
}
