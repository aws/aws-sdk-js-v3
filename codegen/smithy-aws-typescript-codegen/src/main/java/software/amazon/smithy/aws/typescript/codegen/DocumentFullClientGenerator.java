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

import java.util.Set;
import java.util.TreeSet;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.codegen.core.SymbolReference;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.ApplicationProtocol;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;
import software.amazon.smithy.utils.StringUtils;

@SmithyInternalApi
final class DocumentFullClientGenerator implements Runnable {
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

    DocumentFullClientGenerator(
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
    }

    @Override
    public void run() {
        writer.addImport(DocumentClientUtils.CLIENT_NAME,
            DocumentClientUtils.CLIENT_NAME, "./" + DocumentClientUtils.CLIENT_NAME);
        writer.writeDocs(DocumentClientUtils.getClientDocs());
        writer.openBlock("export class $L extends $L {", "}",
            DocumentClientUtils.CLIENT_FULL_NAME, DocumentClientUtils.CLIENT_NAME, () -> {

            generateStaticFactoryFrom();
            writer.write("");
            generateOperations();
        });
    }

    private void generateStaticFactoryFrom() {
        String translateConfig = DocumentClientUtils.CLIENT_TRANSLATE_CONFIG_TYPE;
        writer.addImport(serviceName, serviceName, "@aws-sdk/client-dynamodb");
        writer.addImport(translateConfig, translateConfig, "./" + DocumentClientUtils.CLIENT_NAME);
        writer.openBlock("static from(client: $L, translateConfig?: $L) {", "}",
            serviceName, translateConfig, () -> {
                writer.write("return new $L(client, translateConfig);", DocumentClientUtils.CLIENT_FULL_NAME);
            });
    }

    private void generateOperations() {
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
                SymbolReference options = ApplicationProtocol.createDefaultHttpApplicationProtocol().getOptionsType();

                String commandFileLocation = String.format("./%s/%s",
                    DocumentClientUtils.CLIENT_COMMANDS_FOLDER, name);
                writer.addImport(name, name, commandFileLocation);
                writer.addImport(input, input, commandFileLocation);
                writer.addImport(output, output, commandFileLocation);

                String methodName = StringUtils.uncapitalize(
                    DocumentClientUtils.getModifiedName(operationSymbol.getName().replaceAll("Command$", ""))
                );

                // Generate a multiple overloaded methods for each command.
                writer.writeDocs(DocumentClientUtils.getCommandDocs(operationSymbol.getName()));
                writer.write("public $L(\n"
                            + "  args: $L,\n"
                            + "  options?: $T,\n"
                            + "): Promise<$L>;", methodName, input, options, output);
                writer.write("public $L(\n"
                             + "  args: $L,\n"
                             + "  cb: (err: any, data?: $L) => void\n"
                             + "): void;", methodName, input, output);
                writer.write("public $L(\n"
                            + "  args: $L,\n"
                            + "  options: $T,\n"
                            + "  cb: (err: any, data?: $L) => void\n"
                            + "): void;", methodName, input, options, output);
                writer.openBlock("public $1L(\n"
                                 + "  args: $2L,\n"
                                 + "  optionsOrCb?: $3T | ((err: any, data?: $4L) => void),\n"
                                 + "  cb?: (err: any, data?: $4L) => void\n"
                                 + "): Promise<$4L> | void { ", "}",
                        methodName,
                        input,
                        options,
                        output,
                        () -> {
                    writer.write("const command = new $L(args);\n"
                                 + "if (typeof optionsOrCb === \"function\") {\n"
                                 + "  this.send(command, optionsOrCb)\n"
                                 + "} else if (typeof cb === \"function\") {\n"
                                 + "  if (typeof optionsOrCb !== \"object\")\n"
                                 + "    throw new Error(`Expect http options but get $${typeof optionsOrCb}`)\n"
                                 + "  this.send(command, optionsOrCb || {}, cb)\n"
                                 + "} else {\n"
                                 + "  return this.send(command, optionsOrCb);\n"
                                 + "}", name);
                });
                writer.write("");
            }
        }
    }
}
