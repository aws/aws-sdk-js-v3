/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.ArrayList;
import java.util.List;
import software.amazon.smithy.aws.traits.protocols.AwsJson1_0Trait;
import software.amazon.smithy.aws.traits.protocols.AwsJson1_1Trait;
import software.amazon.smithy.aws.traits.protocols.AwsQueryCompatibleTrait;
import software.amazon.smithy.aws.traits.protocols.AwsQueryTrait;
import software.amazon.smithy.aws.traits.protocols.Ec2QueryTrait;
import software.amazon.smithy.aws.traits.protocols.RestJson1Trait;
import software.amazon.smithy.aws.traits.protocols.RestXmlTrait;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.protocol.traits.Rpcv2CborTrait;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds all built-in AWS protocols.
 */
@SmithyInternalApi
public class AddProtocols implements TypeScriptIntegration {

    public static List<ShapeId> getSupportedProtocols(ServiceShape service) {
        List<ShapeId> supported = new ArrayList<>();
        List<ShapeId> protocols = List.of(
            AwsJson1_0Trait.ID,
            AwsJson1_1Trait.ID,
            RestJson1Trait.ID,
            Rpcv2CborTrait.ID,
            RestXmlTrait.ID,
            AwsQueryTrait.ID,
            Ec2QueryTrait.ID
        );

        for (ShapeId protocol : protocols) {
            if (service.hasTrait(protocol)) {
                supported.add(protocol);
            }
        }

        if (service.hasTrait(AwsQueryCompatibleTrait.ID)) {
            // As the first protocol migration, SQS did not retain the AwsQueryTrait
            // at the time, switching entirely to JSON. But the queryCompatible trait
            // implies Query support.
            supported.add(AwsQueryTrait.ID);
        }

        return supported;
    }

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
