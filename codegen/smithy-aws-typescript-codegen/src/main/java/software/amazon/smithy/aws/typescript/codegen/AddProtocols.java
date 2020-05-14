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
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;

/**
 * Adds all built-in AWS protocols.
 */
public class AddProtocols implements TypeScriptIntegration {

    @Override
    public List<ProtocolGenerator> getProtocolGenerators() {
        return ListUtils.of(new AwsRestJson1(), new AwsJsonRpc1_0(), new AwsJsonRpc1_1(),
                new AwsRestXml(), new AwsQuery(), new AwsEc2());
    }
}
