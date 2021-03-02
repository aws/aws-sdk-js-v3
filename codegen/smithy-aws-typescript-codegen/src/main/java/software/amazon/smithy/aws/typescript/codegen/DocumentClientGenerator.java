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

import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.ApplicationProtocol;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;

final class DocumentClientGenerator implements Runnable {
    static final String CLIENT_CONFIG_SECTION = "client_config";
    static final String CLIENT_PROPERTIES_SECTION = "client_properties";
    static final String CLIENT_CONSTRUCTOR_SECTION = "client_constructor";
    static final String CLIENT_DESTROY_SECTION = "client_destroy";

    private final ServiceShape service;
    private final TypeScriptWriter writer;
    private final Symbol symbol;
    private final String serviceName;
    private final String originalServiceName;
    private final String configType;
    private final String originalConfigType;

    DocumentClientGenerator(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        this.service = settings.getService(model);
        this.writer = writer;

        symbol = symbolProvider.toSymbol(service);
        serviceName = "DynamoDBDocumentClient";
        originalServiceName = symbol.getName();
        configType = serviceName + "ResolvedConfig";
        originalConfigType = getResolvedConfigTypeName(symbol);
    }

    static String getResolvedConfigTypeName(Symbol symbol) {
        return symbol.getName() + "ResolvedConfig";
    }

    @Override
    public void run() {
        String serviceInputTypes = "ServiceInputTypes";
        String serviceOutputTypes = "ServiceOutputTypes";

        // Add required imports.
        writer.addImport(originalServiceName, originalServiceName, "@aws-sdk/client-dynamodb");
        writer.addImport(originalConfigType, originalConfigType, "@aws-sdk/client-dynamodb");
        writer.addImport(serviceInputTypes, serviceInputTypes, "@aws-sdk/client-dynamodb");
        writer.addImport(serviceOutputTypes, serviceOutputTypes, "@aws-sdk/client-dynamodb");
        writer.addImport("Client", "__Client", "@aws-sdk/smithy-client");

        writer.addImport("unmarshallOptions", "unmarshallOptions", "@aws-sdk/util-dynamodb");

        generateConfiguration();

        writer.openBlock("export class $L extends __Client<$T, $L, $L, $L> {", "}",
            serviceName, ApplicationProtocol.createDefaultHttpApplicationProtocol().getOptionsType(),
            serviceInputTypes, serviceOutputTypes, configType, () -> {

            generateClientProperties();
            writer.write("");
            generateClientConstructor();
            writer.write("");
            generateStaticFactoryFrom();
            writer.write("");
            generateDestroy();
        });
    }

    private void generateDestroy() {
        writer.pushState(CLIENT_DESTROY_SECTION);
        writer.openBlock("destroy(): void {", "}", () -> {
            writer.write("// A no-op, since client is passed in constructor");
        });
        writer.popState();
    }

    private void generateStaticFactoryFrom() {
        writer.openBlock("static from(client: $L, translateConfig?: TranslateConfig) {", "}",
            originalServiceName, () -> {
                writer.write("return new $L(client, translateConfig);", serviceName);
            });
    }

    private void generateClientProperties() {
        writer.pushState(CLIENT_PROPERTIES_SECTION);
        writer.write("readonly config: $L;\n", configType);
        writer.popState();
    }

    private void generateClientConstructor() {
        writer.openBlock("protected constructor(client: $L, translateConfig?: TranslateConfig){", "}",
            symbol.getName(), () -> {
                writer.pushState(CLIENT_CONSTRUCTOR_SECTION);
                writer.write("super(client.config);");
                writer.write("this.config = client.config;");
                writer.write("this.config.translateConfig = translateConfig;");
                writer.write("this.middlewareStack = client.middlewareStack;");
                writer.popState();
            });
    }

    private void generateConfiguration() {
        writer.pushState(CLIENT_CONFIG_SECTION);
        writer.openBlock("export type TranslateConfig = {", "}", () -> {
            generateTranslateConfigOption("marshallOptions");
            generateTranslateConfigOption("unmarshallOptions");
        });
        writer.write("");
        writer.openBlock("export type $L = $L & {", "};", configType, originalConfigType, () -> {
            writer.write("translateConfig?: TranslateConfig;");
        });
        writer.write("");
        writer.popState();
    }

    private void generateTranslateConfigOption(String translateOption) {
        writer.addImport(translateOption, translateOption, "@aws-sdk/util-dynamodb");
        writer.write("${1L}?: ${1L};", translateOption);
    }
}
