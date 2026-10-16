/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.List;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds the DynamoDB BatchGet paginator to the generated document client.
 */
@SmithyInternalApi
public final class AddBatchGetPaginatorPlugin implements TypeScriptIntegration {
    @Override
    public List<String> runAfter() {
        return List.of(AddDocumentClientPlugin.class.getCanonicalName());
    }

    @Override
    public void customize(TypeScriptCodegenContext context) {
        Model model = context.model();
        ServiceShape service = context.settings().getService(model);
        if (!service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals("DynamoDB")) {
            return;
        }

        boolean hasBatchGetItem = TopDownIndex.of(model)
            .getContainedOperations(service)
            .stream()
            .anyMatch(
                operation -> operation.getId().getName().equals("BatchGetItem")
                    && DocumentClientUtils.containsAttributeValue(model, context.symbolProvider(), operation)
            );
        if (!hasBatchGetItem) {
            return;
        }

        context.writerDelegator()
            .useFileWriter(
                BatchGetPaginatorGenerator.DOCUMENT_FILE,
                BatchGetPaginatorGenerator::generateDocument
            );
        TypeScriptWriter documentIndex = context.writerDelegator()
            .getWriters()
            .get(DocumentClientPaginationGenerator.getIndexFilelocation());
        if (documentIndex == null) {
            throw new IllegalStateException("DynamoDB document client pagination index was not generated");
        }
        documentIndex.write("export * from './PaginatedBatchGet';");
    }
}
