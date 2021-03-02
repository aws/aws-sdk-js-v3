/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;

/**
 * Generates Commands for DynamoDB Document Client.
 */
public class AddDocumentClientPlugin implements TypeScriptIntegration {

    @Override
    public void writeAdditionalFiles(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
    ) {
        ServiceShape service = settings.getService(model);
        if (testServiceId(service, "DynamoDB")) {
            String docClientPrefix = "doc-client-";
            Set<OperationShape> containedOperations =
                new TreeSet<>(TopDownIndex.of(model).getContainedOperations(service));
            List<OperationShape> overridenOperationsList = new ArrayList<>();

            for (OperationShape operation : containedOperations) {
                String operationName = operation.getId().getName();
                String commandFileName = docClientPrefix + "commands/"
                    + DocumentClientUtils.getModifiedName(operationName) + "Command.ts";

                if (containsAttributeValue(model, symbolProvider, operation)) {
                    overridenOperationsList.add(operation);
                    writerFactory.accept(commandFileName,
                        writer -> new DocumentClientCommandGenerator(
                            settings, model, operation, symbolProvider, writer).run()
                    );
                }
            }

            writerFactory.accept(docClientPrefix + "DynamoDBDocumentClient.ts",
                writer -> new DocumentClientGenerator(settings, model, symbolProvider, writer).run());

            writerFactory.accept(docClientPrefix + "index.ts", writer -> {
                for (OperationShape operationOverriden: overridenOperationsList) {
                    String operationFileName = DocumentClientUtils.getModifiedName(
                        symbolProvider.toSymbol(operationOverriden).getName()
                    );
                    writer.write("export * from './commands/$L';", operationFileName);
                }
                writer.write("export * from './DynamoDBDocumentClient';");
            });

            writerFactory.accept(docClientPrefix + "commands/utils.ts", writer -> {
                writer.write(IoUtils.readUtf8Resource(AddDocumentClientPlugin.class, "doc-client-utils.ts"));
            });
        }
    }

    private boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }

    private boolean containsAttributeValue(Model model, SymbolProvider symbolProvider, OperationShape operation) {
        OperationIndex operationIndex = OperationIndex.of(model);
        if (DocumentClientUtils.containsAttributeValue(
                model, symbolProvider, operationIndex.getInput(operation))
                || DocumentClientUtils.containsAttributeValue(
                    model, symbolProvider, operationIndex.getOutput(operation))) {
            return true;
        }
        return false;
    }
}
