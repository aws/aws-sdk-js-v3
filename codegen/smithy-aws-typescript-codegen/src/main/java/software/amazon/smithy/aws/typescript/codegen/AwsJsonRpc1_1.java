/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.aws.traits.protocols.AwsJson1_1Trait;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Handles generating the aws.json-1.1 protocol for services.
 *
 * @inheritDoc
 *
 * @see JsonRpcProtocolGenerator
 */
@SmithyInternalApi
final class AwsJsonRpc1_1 extends JsonRpcProtocolGenerator {

    @Override
    protected String getDocumentContentType() {
        return "application/x-amz-json-1.1";
    }

    @Override
    public ShapeId getProtocol() {
        return AwsJson1_1Trait.ID;
    }

    @Override
    public String getName() {
        return "aws.json-1.1";
    }

    /**
     * This override exists because the "x-amzn-query-error" header is only
     * sent in AwsJsonRpc1_0.
     */
    @Override
    protected void writeSharedRequestHeaders(GenerationContext context) {
        ServiceShape serviceShape = context.getService();
        TypeScriptWriter writer = context.getWriter();
        writer.addImport("HeaderBag", "__HeaderBag", TypeScriptDependency.SMITHY_TYPES);
        String targetHeader = serviceShape.getId().getName(serviceShape) + ".${operation}";
        writer.openBlock(
            "function sharedHeaders(operation: string): __HeaderBag { return {",
            "}};",
            () -> {
                writer.write("'content-type': $S,", getDocumentContentType());
                writer.write("'x-amz-target': `$L`,", targetHeader);
            }
        );
    }
}
