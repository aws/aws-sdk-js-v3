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

import java.nio.file.Path;
import java.nio.file.Paths;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
final class DocumentClientPaginationGenerator implements Runnable {

    static final String PAGINATION_FOLDER = "pagination";

    private final TypeScriptWriter writer;

    private final String operationTypeName;
    private final String inputTypeName;
    private final String outputTypeName;

    private final String operationName;

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
        this.paginationType = DocumentClientUtils.CLIENT_FULL_NAME + "PaginationConfiguration";
    }

    @Override
    public void run() {
        // Import Service Types
        Path commandFileLocation = Paths.get(
            ".",
            DocumentClientUtils.CLIENT_COMMANDS_FOLDER,
            DocumentClientUtils.getModifiedName(operationTypeName)
        );
        writer.addRelativeImport(operationTypeName, operationTypeName, commandFileLocation);
        writer.addRelativeImport(inputTypeName, inputTypeName, commandFileLocation);
        writer.addRelativeImport(outputTypeName, outputTypeName, commandFileLocation);
        writer.addRelativeImport(
            DocumentClientUtils.CLIENT_NAME,
            DocumentClientUtils.CLIENT_NAME,
            Paths.get(".", DocumentClientUtils.CLIENT_NAME)
        );

        // Import Pagination types
        writer.addImport("Paginator", "Paginator", TypeScriptDependency.SMITHY_TYPES);
        writer.addImport("createPaginator", "createPaginator", TypeScriptDependency.SMITHY_CORE);
        writer.addRelativeImport(
            paginationType,
            paginationType,
            Paths.get(".", getInterfaceFilelocation().replace(".ts", ""))
        );

        writer.writeDocs("@public");
        writer.write("export { Paginator }");

        writePager();
    }

    static String getOutputFilelocation(OperationShape operation) {
        return String.format(
            "%s%s/%s.ts",
            DocumentClientUtils.DOC_CLIENT_PREFIX,
            DocumentClientPaginationGenerator.PAGINATION_FOLDER,
            DocumentClientUtils.getModifiedName(operation.getId().getName()) + "Paginator"
        );
    }

    static String getInterfaceFilelocation() {
        return String.format(
            "%s%s/%s.ts",
            DocumentClientUtils.DOC_CLIENT_PREFIX,
            DocumentClientPaginationGenerator.PAGINATION_FOLDER,
            "Interfaces"
        );
    }

    static void generateServicePaginationInterfaces(TypeScriptWriter writer) {
        writer.addImport("PaginationConfiguration", "PaginationConfiguration", TypeScriptDependency.SMITHY_TYPES);

        writer.addRelativeImport(
            DocumentClientUtils.CLIENT_NAME,
            DocumentClientUtils.CLIENT_NAME,
            Paths.get(".", DocumentClientUtils.CLIENT_NAME)
        );
        writer.addRelativeImport(
            DocumentClientUtils.CLIENT_FULL_NAME,
            DocumentClientUtils.CLIENT_FULL_NAME,
            Paths.get(".", DocumentClientUtils.CLIENT_FULL_NAME)
        );

        writer.writeDocs("@public");
        writer.write("export { PaginationConfiguration };");
        writer.write("");

        writer.writeDocs("@public");
        writer.openBlock(
            "export interface $LPaginationConfiguration extends PaginationConfiguration {",
            "}",
            DocumentClientUtils.CLIENT_FULL_NAME,
            () -> {
                writer.write("client: $L | $L;", DocumentClientUtils.CLIENT_FULL_NAME, DocumentClientUtils.CLIENT_NAME);
            }
        );
    }

    private void writePager() {
        writer.writeDocs("@public");
        writer.write(
            """
            export const paginate$1L: (
              config: $2L,
              input: $3L,
              ...additionalArguments: any
            ) => Paginator<$4L> = createPaginator<
              $2L,
              $3L,
              $4L
            >(DynamoDBDocumentClient, $1LCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");
                    """,
            operationName,
            paginationType,
            inputTypeName,
            outputTypeName
        );
    }
}
