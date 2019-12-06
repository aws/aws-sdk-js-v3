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

import software.amazon.smithy.aws.traits.UnsignedPayloadTrait;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;

/**
 * Utility methods for generating AWS protocols.
 */
final class AwsProtocolUtils {

    private AwsProtocolUtils() {}

    /**
     * Writes an {@code 'x-amz-content-sha256' = 'UNSIGNED_PAYLOAD'} header for an
     * {@code @aws.api#unsignedPayload} trait that specifies the {@code "aws.v4"} auth scheme.
     *
     * @see <a href=https://awslabs.github.io/smithy/spec/aws-core.html#aws-api-unsignedpayload-trait>@aws.api#unsignedPayload trait</a>
     *
     * @param context The generation context.
     * @param operation The operation being generated.
     */
    static void generateUnsignedPayloadSigV4Header(GenerationContext context, OperationShape operation) {
        TypeScriptWriter writer = context.getWriter();

        operation.getTrait(UnsignedPayloadTrait.class)
                .filter(trait -> trait.getValues().contains("aws.v4"))
                .ifPresent(trait -> {
                    writer.write("headers['x-amz-content-sha256'] = 'UNSIGNED_PAYLOAD';");
                });
    }

    /**
     * Writes a response body parser function for JSON protocols. This
     * will parse a present body after converting it to utf-8.
     *
     * @param context The generation context.
     */
    static void generateJsonParseBody(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        // Include a JSON body parser used to deserialize documents from HTTP responses.
        writer.addImport("SerdeContext", "SerdeContext", "@aws-sdk/types");
        writer.openBlock("const parseBody = (streamBody: any, context: SerdeContext): any => {", "};", () -> {
            writer.openBlock("return context.streamCollector(streamBody).then((body: any) => {", "});", () -> {
                writer.write("const encoded = context.utf8Encoder(body);");
                writer.openBlock("if (encoded.length) {", "}", () -> {
                    writer.write("return JSON.parse(encoded);");
                });
                writer.write("return {};");
            });
        });

        writer.write("");
    }
}
