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
import software.amazon.smithy.model.traits.PaginatedTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Generates Client and Commands for DynamoDB Document Client.
 */
@SmithyInternalApi
public class AddDocumentClientPlugin implements TypeScriptIntegration {

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        TypeScriptSettings settings = codegenContext.settings();
        Model model = codegenContext.model();
        SymbolProvider symbolProvider = codegenContext.symbolProvider();
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory = codegenContext.writerDelegator()::useFileWriter;

        writeAdditionalFiles(settings, model, symbolProvider, writerFactory);
    }

    private void writeAdditionalFiles(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
    ) {
        ServiceShape service = settings.getService(model);
        if (testServiceId(service, "DynamoDB")) {
            Set<OperationShape> containedOperations =
                new TreeSet<>(TopDownIndex.of(model).getContainedOperations(service));
            List<OperationShape> overridenOperationsList = new ArrayList<>();

            for (OperationShape operation : containedOperations) {
                String operationName = symbolProvider.toSymbol(operation).getName();
                String commandFileName = String.format("%s%s/%s.ts", DocumentClientUtils.DOC_CLIENT_PREFIX,
                    DocumentClientUtils.CLIENT_COMMANDS_FOLDER, DocumentClientUtils.getModifiedName(operationName));

                if (DocumentClientUtils.containsAttributeValue(model, symbolProvider, operation)) {
                    overridenOperationsList.add(operation);
                    writerFactory.accept(commandFileName,
                        writer -> new DocumentClientCommandGenerator(
                            settings, model, operation, symbolProvider, writer).run()
                    );

                    if (operation.hasTrait(PaginatedTrait.ID)) {
                        String paginationFileName = DocumentClientPaginationGenerator.getOutputFilelocation(operation);
                        writerFactory.accept(paginationFileName, paginationWriter ->
                            new DocumentClientPaginationGenerator(model, service, operation, symbolProvider,
                                    paginationWriter).run());
                    }
                }
            }

            writerFactory.accept(String.format("%s%s.ts", DocumentClientUtils.DOC_CLIENT_PREFIX,
                DocumentClientUtils.CLIENT_NAME),
                writer -> new DocumentBareBonesClientGenerator(settings, model, symbolProvider, writer).run());

            writerFactory.accept(String.format("%s%s.ts", DocumentClientUtils.DOC_CLIENT_PREFIX,
                DocumentClientUtils.CLIENT_FULL_NAME),
                writer -> new DocumentAggregatedClientGenerator(settings, model, symbolProvider, writer).run());

            writerFactory.accept(String.format("%s%s/index.ts", DocumentClientUtils.DOC_CLIENT_PREFIX,
                DocumentClientUtils.CLIENT_COMMANDS_FOLDER), writer -> {
                    for (OperationShape operation : overridenOperationsList) {
                        String operationFileName = DocumentClientUtils.getModifiedName(
                            symbolProvider.toSymbol(operation).getName()
                        );
                        writer.write("export * from './$L';", operationFileName);
                    }
            });

            writerFactory.accept(String.format("%s%s/index.ts", DocumentClientUtils.DOC_CLIENT_PREFIX,
                DocumentClientPaginationGenerator.PAGINATION_FOLDER), writer -> {
                    writer.write("export * from './Interfaces';");
                    for (OperationShape operation : overridenOperationsList) {
                        if (operation.hasTrait(PaginatedTrait.ID)) {
                            String paginationFileName =
                                DocumentClientUtils.getModifiedName(operation.getId().getName()) + "Paginator";
                            writer.write("export * from './$L';", paginationFileName);
                        }
                    }
            });

            String paginationInterfaceFileName = DocumentClientPaginationGenerator.getInterfaceFilelocation();
            writerFactory.accept(paginationInterfaceFileName, paginationWriter ->
                    DocumentClientPaginationGenerator.generateServicePaginationInterfaces(paginationWriter));

            writerFactory.accept(String.format("%sindex.ts", DocumentClientUtils.DOC_CLIENT_PREFIX), writer -> {
                writer.write("export * from './commands';");
                writer.write("export * from './pagination';");
                writer.write("export * from './$L';", DocumentClientUtils.CLIENT_NAME);
                writer.write("export * from './$L';", DocumentClientUtils.CLIENT_FULL_NAME);
            });
        }
    }

    private boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }
}
