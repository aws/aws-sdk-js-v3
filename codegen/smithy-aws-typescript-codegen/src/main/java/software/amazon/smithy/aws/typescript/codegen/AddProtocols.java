/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.List;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds all built-in AWS protocols.
 */
@SmithyInternalApi
public class AddProtocols implements TypeScriptIntegration {

    @Override
    public List<String> runAfter() {
        return List.of(
            software.amazon.smithy.typescript.codegen.protocols.AddProtocols.class.getCanonicalName()
        );
    }

    /**
     * This order differs from the base protocol selection specification
     * in that for JavaScript runtimes, JSON-based protocols have higher default priority than CBOR-based.
     * This behavior may be fine-tuned at the service level in a case-by-case basis.
     *
     * @return a list of ProtocolGenerators in the default priority order, highest first.
     */
    @Override
    public List<ProtocolGenerator> getProtocolGenerators() {
        return ListUtils.of(
            new AwsJsonRpc1_0(),
            new AwsJsonRpc1_1(),
            new AwsRestJson1(),
            new AwsSmithyRpcV2Cbor(),
            new AwsRestXml(),
            new AwsQuery(),
            new AwsEc2()
        );
    }
}
