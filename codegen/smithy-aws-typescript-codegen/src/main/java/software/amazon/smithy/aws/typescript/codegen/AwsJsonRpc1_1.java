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
        writer.openBlock("function sharedHeaders(operation: string): __HeaderBag { return {", "}};",
            () -> {
                writer.write("'content-type': $S,", getDocumentContentType());
                writer.write("'x-amz-target': `$L`,", targetHeader);
            }
        );
    }
}
