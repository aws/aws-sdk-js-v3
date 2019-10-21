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

import software.amazon.smithy.typescript.codegen.ApplicationProtocol;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator;

public class AwsRestJson1_1 implements ProtocolGenerator {
    @Override
    public String getName() {
        return "aws.rest-json-1.1";
    }

    @Override
    public ApplicationProtocol getApplicationProtocol() {
        return ApplicationProtocol.createDefaultHttpApplicationProtocol();
    }

    @Override
    public void generateRequestSerializers(GenerationContext context) {
        context.getWriter().write("// TODO: write request deserializers");
    }

    @Override
    public void generateResponseDeserializers(GenerationContext context) {
        context.getWriter().write("// TODO: write response deserializers");
    }
}
