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
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generates Client and Commands for DynamoDB Document Client.
 */
@SmithyInternalApi
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
                String operationName = symbolProvider.toSymbol(operation).getName();
                String commandFileName = String.format("%s%s/%s.ts", docClientPrefix,
                    DocumentClientUtils.CLIENT_COMMANDS_FOLDER, DocumentClientUtils.getModifiedName(operationName));

                if (DocumentClientUtils.containsAttributeValue(model, symbolProvider, operation)) {
                    overridenOperationsList.add(operation);
                    writerFactory.accept(commandFileName,
                        writer -> new DocumentClientCommandGenerator(
                            settings, model, operation, symbolProvider, writer).run()
                    );
                }
            }

            writerFactory.accept(String.format("%s%s.ts", docClientPrefix, DocumentClientUtils.CLIENT_NAME),
                writer -> new DocumentClientGenerator(settings, model, symbolProvider, writer).run());

            writerFactory.accept(String.format("%s%s.ts", docClientPrefix, DocumentClientUtils.CLIENT_FULL_NAME),
                writer -> new DocumentFullClientGenerator(settings, model, symbolProvider, writer).run());

            writerFactory.accept(String.format("%sindex.ts", docClientPrefix), writer -> {
                for (OperationShape operationOverriden: overridenOperationsList) {
                    String operationFileName = DocumentClientUtils.getModifiedName(
                        symbolProvider.toSymbol(operationOverriden).getName()
                    );
                    writer.write("export * from './$L/$L';",
                        DocumentClientUtils.CLIENT_COMMANDS_FOLDER, operationFileName);
                }
                writer.write("export * from './$L';", DocumentClientUtils.CLIENT_NAME);
                writer.write("export * from './$L';", DocumentClientUtils.CLIENT_FULL_NAME);
            });

            String utilsFileLocation = String.format("%s%s", docClientPrefix, DocumentClientUtils.CLIENT_UTILS_FILE);
            writerFactory.accept(String.format("%s%s/%s.ts", docClientPrefix,
                DocumentClientUtils.CLIENT_COMMANDS_FOLDER, DocumentClientUtils.CLIENT_UTILS_FILE), writer -> {
                writer.write(IoUtils.readUtf8Resource(AddDocumentClientPlugin.class,
                    String.format("%s.ts", utilsFileLocation)));
            });
            writerFactory.accept(String.format("%s%s/%s.spec.ts", docClientPrefix,
                DocumentClientUtils.CLIENT_COMMANDS_FOLDER, DocumentClientUtils.CLIENT_UTILS_FILE), writer -> {
                writer.write(IoUtils.readUtf8Resource(AddDocumentClientPlugin.class,
                    String.format("%s.spec.ts", utilsFileLocation)));
            });
        }
    }

    private boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }
}
