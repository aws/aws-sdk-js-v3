/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.function.Function;
import java.util.stream.Collectors;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.ApplicationProtocol;
import software.amazon.smithy.typescript.codegen.SmithyCoreSubmodules;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
final class DocumentBareBonesClientGenerator implements Runnable {
    static final String CLIENT_CONFIG_SECTION = "client_config";
    static final String CLIENT_PROPERTIES_SECTION = "client_properties";
    static final String CLIENT_CONSTRUCTOR_SECTION = "client_constructor";
    static final String CLIENT_DESTROY_SECTION = "client_destroy";

    private final Model model;
    private final SymbolProvider symbolProvider;
    private final ServiceShape service;
    private final TypeScriptWriter writer;
    private final Symbol symbol;
    private final String serviceName;
    private final String configType;

    DocumentBareBonesClientGenerator(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        this.model = model;
        this.symbolProvider = symbolProvider;
        this.service = settings.getService(model);
        this.writer = writer;

        symbol = symbolProvider.toSymbol(service);
        serviceName = symbol.getName();
        configType = DocumentClientUtils.getResolvedConfigTypeName(symbol.getName());
    }

    @Override
    public void run() {
        String serviceInputTypes = "ServiceInputTypes";
        String serviceOutputTypes = "ServiceOutputTypes";

        // Add required imports.
        // Note: using addImport would register these dependencies on the dynamodb client, which must be avoided.
        writer.write("""
                     import type {
                       DynamoDBClient,
                       DynamoDBClientResolvedConfig,
                       ServiceInputTypes as __ServiceInputTypes,
                       ServiceOutputTypes as __ServiceOutputTypes,
                     } from "@aws-sdk/client-dynamodb";
                     import type { marshallOptions, unmarshallOptions } from "@aws-sdk/util-dynamodb";
                     """);

        writer.addImportSubmodule("Client", "__Client", TypeScriptDependency.SMITHY_CORE, SmithyCoreSubmodules.CLIENT);
        writer.writeDocs("@public");
        writer.write("export { __Client };");
        generateInputOutputImports(serviceInputTypes, serviceOutputTypes);

        generateInputOutputTypeUnion(
            serviceInputTypes,
            operationSymbol -> operationSymbol.expectProperty("inputType", Symbol.class).getName()
        );
        generateInputOutputTypeUnion(
            serviceOutputTypes,
            operationSymbol -> operationSymbol.expectProperty("outputType", Symbol.class).getName()
        );
        writer.write("");
        generateConfiguration();

        writer.writeDocs(DocumentClientUtils.getClientDocs() + "\n\n@public");
        writer.openBlock(
            "export class $L extends __Client<$T, $L, $L, $L> {",
            "}",
            DocumentClientUtils.CLIENT_NAME,
            ApplicationProtocol.createDefaultHttpApplicationProtocol().getOptionsType(),
            serviceInputTypes,
            serviceOutputTypes,
            DocumentClientUtils.CLIENT_CONFIG_NAME,
            () -> {

                generateClientProperties();
                writer.write("");
                generateClientConstructor();
                writer.write("");
                generateStaticFactoryFrom();
                writer.write("");
                generateDestroy();
            }
        );
    }

    private void generateInputOutputImports(String serviceInputTypes, String serviceOutputTypes) {
        Set<OperationShape> containedOperations =
            new TreeSet<>(TopDownIndex.of(model).getContainedOperations(service));

        for (OperationShape operation : containedOperations) {
            if (DocumentClientUtils.containsAttributeValue(model, symbolProvider, operation)) {
                Symbol operationSymbol = symbolProvider.toSymbol(operation);

                String name = DocumentClientUtils.getModifiedName(operationSymbol.getName());
                String input = DocumentClientUtils.getModifiedName(
                    operationSymbol.expectProperty("inputType", Symbol.class).getName()
                );
                String output = DocumentClientUtils.getModifiedName(
                    operationSymbol.expectProperty("outputType", Symbol.class).getName()
                );

                Path commandFileLocation = Paths.get(
                    ".",
                    DocumentClientUtils.CLIENT_COMMANDS_FOLDER,
                    name
                );
                writer.addRelativeTypeImport(input, input, commandFileLocation);
                writer.addRelativeTypeImport(output, output, commandFileLocation);
            }
        }
    }

    private void generateInputOutputTypeUnion(String typeName, Function<Symbol, String> mapper) {
        writer.writeDocs("@public");
        Set<OperationShape> containedOperations =
            new TreeSet<>(TopDownIndex.of(model).getContainedOperations(service));

        List<String> operationTypeNames = containedOperations.stream()
            .filter(operation -> DocumentClientUtils.containsAttributeValue(model, symbolProvider, operation))
            .map(symbolProvider::toSymbol)
            .map(operation -> mapper.apply(operation))
            .map(operationtypeName -> DocumentClientUtils.getModifiedName(operationtypeName))
            .collect(Collectors.toList());

        writer.writeInline("export type $L =", typeName);
        writer.write("");
        writer.indent();
        writer.write("| $L", String.format("__%s", typeName));
        for (int i = 0; i < operationTypeNames.size(); i++) {
            writer.write("| $L$L", operationTypeNames.get(i), i == operationTypeNames.size() - 1 ? ";" : "");
        }
        writer.dedent();
        writer.write("");
    }

    private void generateDestroy() {
        writer.pushState(CLIENT_DESTROY_SECTION);
        writer.openBlock("destroy(): void {", "}", () -> {
            writer.write("// A no-op, since client is passed in constructor");
        });
        writer.popState();
    }

    private void generateStaticFactoryFrom() {
        writer.openBlock(
            "static from(client: $L, translateConfig?: $L) {",
            "}",
            serviceName,
            DocumentClientUtils.CLIENT_TRANSLATE_CONFIG_TYPE,
            () -> {
                writer.write("return new $L(client, translateConfig);", DocumentClientUtils.CLIENT_NAME);
            }
        );
    }

    private void generateClientProperties() {
        writer.pushState(CLIENT_PROPERTIES_SECTION);
        writer.write("readonly config: $L;\n", DocumentClientUtils.CLIENT_CONFIG_NAME);
        writer.popState();
    }

    private void generateClientConstructor() {
        writer.openBlock(
            "protected constructor(client: $L, translateConfig?: $L) {",
            "}",
            symbol.getName(),
            DocumentClientUtils.CLIENT_TRANSLATE_CONFIG_TYPE,
            () -> {
                writer.pushState(CLIENT_CONSTRUCTOR_SECTION);
                writer.write("super(client.config);");
                writer.write("this.config = client.config;");
                writer.write("this.config.translateConfig = translateConfig;");
                writer.write("this.middlewareStack = client.middlewareStack;");
                writer.openBlock("if (this.config?.cacheMiddleware) {", "}", () -> {
                    writer.write("throw new Error(");
                    writer.indent();
                    writer.write("\"@aws-sdk/lib-dynamodb - cacheMiddleware=true is not compatible with the\" +");
                    writer.write("  \" DynamoDBDocumentClient. This option must be set to false.\"");
                    writer.dedent();
                    writer.write(");");
                });
                writer.popState();
            }
        );
    }

    private void generateConfiguration() {
        writer.pushState(CLIENT_CONFIG_SECTION);
        String translateConfigType = DocumentClientUtils.CLIENT_TRANSLATE_CONFIG_TYPE;
        writer.writeDocs("@public");
        writer.openBlock("export type $L = {", "};", translateConfigType, () -> {
            generateTranslateConfigOption(DocumentClientUtils.CLIENT_MARSHALL_OPTIONS);
            generateTranslateConfigOption(DocumentClientUtils.CLIENT_UNMARSHALL_OPTIONS);
        });
        writer.write("");
        writer.writeDocs("@public");
        writer.openBlock(
            "export type $L = $L & {",
            "};",
            DocumentClientUtils.CLIENT_CONFIG_NAME,
            configType,
            () -> {
                writer.write("$L?: $L;", DocumentClientUtils.CLIENT_TRANSLATE_CONFIG_KEY, translateConfigType);
            }
        );
        writer.write("");
        writer.popState();
    }

    private void generateTranslateConfigOption(String translateOption) {
        writer.write("${1L}?: ${1L};", translateOption);
    }
}
