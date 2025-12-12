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
import java.util.Set;
import java.util.TreeSet;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.codegen.core.SymbolReference;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.ApplicationProtocol;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;
import software.amazon.smithy.utils.StringUtils;

@SmithyInternalApi
final class DocumentAggregatedClientGenerator implements Runnable {

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

    DocumentAggregatedClientGenerator(
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
        // Note: using addImport would register this dependency on the dynamodb client, which must be avoided.
        writer.write(
            """
            import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
            """
        );
        writer.addRelativeImport(
            DocumentClientUtils.CLIENT_NAME,
            DocumentClientUtils.CLIENT_NAME,
            Paths.get(".", DocumentClientUtils.CLIENT_NAME)
        );
        writer.writeDocs(DocumentClientUtils.getClientDocs());
        writer.openBlock(
            "export class $L extends $L {",
            "}",
            DocumentClientUtils.CLIENT_FULL_NAME,
            DocumentClientUtils.CLIENT_NAME,
            () -> {
                generateStaticFactoryFrom();
                writer.write("");
                generateOperations();
            }
        );
    }

    private void generateStaticFactoryFrom() {
        String translateConfig = DocumentClientUtils.CLIENT_TRANSLATE_CONFIG_TYPE;
        writer.addRelativeImport(translateConfig, translateConfig, Paths.get(".", DocumentClientUtils.CLIENT_NAME));
        writer.openBlock("static from(client: $L, translateConfig?: $L) {", "}", serviceName, translateConfig, () -> {
            writer.write("return new $L(client, translateConfig);", DocumentClientUtils.CLIENT_FULL_NAME);
        });
    }

    private void generateOperations() {
        Set<OperationShape> containedOperations = new TreeSet<>(TopDownIndex.of(model).getContainedOperations(service));

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

                String commandFileLocation = String.format("./%s/%s", DocumentClientUtils.CLIENT_COMMANDS_FOLDER, name);
                writer.addImport(name, name, commandFileLocation);
                writer.addImport(input, input, commandFileLocation);
                writer.addImport(output, output, commandFileLocation);

                String methodName = StringUtils.uncapitalize(
                    DocumentClientUtils.getModifiedName(operationSymbol.getName().replaceAll("Command$", ""))
                );

                // Generate a multiple overloaded methods for each command.
                writer.writeDocs(DocumentClientUtils.getCommandDocs(operationSymbol.getName()));
                boolean inputOptional = model
                    .getShape(operation.getInputShape())
                    .map(shape -> shape.getAllMembers().values().stream().noneMatch(MemberShape::isRequired))
                    .orElse(true);
                if (inputOptional) {
                    writer.write("$L(): Promise<$T>;", methodName, output);
                }
                writer.write(
                    """
                    public $1L(
                      args: $2L,
                      options?: $3T,
                    ): Promise<$4L>;
                    public $1L(
                      args: $2L,
                      cb: (err: any, data?: $4L) => void
                    ): void;
                    public $1L(
                      args: $2L,
                      options: $3T,
                      cb: (err: any, data?: $4L) => void
                    ): void;
                    public $1L(
                      args: $2L,
                      optionsOrCb?: $3T | ((err: any, data?: $4L) => void),
                      cb?: (err: any, data?: $4L) => void
                    ): Promise<$4L> | void {
                        const command = new $5L(args);
                        if (typeof optionsOrCb === "function") {
                          this.send(command, optionsOrCb);
                        } else if (typeof cb === "function") {
                          if (typeof optionsOrCb !== "object") {
                            throw new Error(`Expect http options but get $${typeof optionsOrCb}`)
                          }
                          this.send(command, optionsOrCb || {}, cb);
                        } else {
                          return this.send(command, optionsOrCb);
                        }
                    }""",
                    methodName,
                    input,
                    options,
                    output,
                    name
                );
                writer.write("");
            }
        }
    }
}
