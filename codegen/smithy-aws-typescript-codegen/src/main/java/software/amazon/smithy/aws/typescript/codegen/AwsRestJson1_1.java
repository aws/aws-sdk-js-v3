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

import java.util.List;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.knowledge.HttpBinding;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.traits.JsonNameTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpBindingProtocolGenerator;

public class AwsRestJson1_1 extends HttpBindingProtocolGenerator {

    @Override
    public String getName() {
        return "aws.rest-json-1.1";
    }

    @Override
    protected String getDocumentContentType() {
        return "application/x-amz-json-1.1";
    }

    @Override
    protected void serializeDocument(
            GenerationContext context,
            OperationShape operation,
            List<HttpBinding> documentBindings
    ) {
        SymbolProvider symbolProvider = context.getSymbolProvider();
        TypeScriptWriter writer = context.getWriter();

        writer.write("let bodyParams: any = {};");
        for (HttpBinding binding : documentBindings) {
            // The name of the member to get from the input shape.
            String memberName = symbolProvider.toMemberName(binding.getMember());
            // Use the jsonName trait value if present, otherwise use the member name.
            String locationName = binding.getMember().getTrait(JsonNameTrait.class)
                    .map(JsonNameTrait::getValue)
                    .orElseGet(binding::getLocationName);
            writer.openBlock("if (input.$L !== undefined) {", "}", memberName, () -> {
                // TODO: walk the input to serialize appropriately.
                // TODO: we need to serialize Date values as epoch-seconds.
                // TODO: we need to serialize blob values as base64 encoded strings.
                writer.write("bodyParams['$L'] = input.$L;", locationName, memberName);
            });
        }

        writer.write("body = JSON.stringify(bodyParams);");
    }
}
