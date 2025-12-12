/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.List;
import java.util.Set;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds service customization runtime client plugins.
 */
@SmithyInternalApi
public class AddServiceCustomizationPlugins implements TypeScriptIntegration {

    private static final Set<String> ROUTE_53_ID_MEMBERS = Set.of("DelegationSetId", "HostedZoneId", "Id");

    @Override
    public List<String> runAfter() {
        return List.of(AddBuiltinPlugins.class.getCanonicalName());
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return List.of(
            // API Gateway
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.ACCEPT_HEADER.dependency, "AcceptHeader", HAS_MIDDLEWARE)
                .servicePredicate((m, s) -> testServiceId(s, "API Gateway"))
                .build(),
            // Glacier
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.GLACIER_MIDDLEWARE.dependency, "Glacier", HAS_MIDDLEWARE)
                .servicePredicate((m, s) -> testServiceId(s, "Glacier"))
                .build(),
            // EC2
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.EC2_MIDDLEWARE.dependency, "CopySnapshotPresignedUrl", HAS_MIDDLEWARE)
                .operationPredicate((m, s, o) -> o.getId().getName(s).equals("CopySnapshot") && testServiceId(s, "EC2"))
                .build(),
            // Machine Learning
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.MACHINELEARNING_MIDDLEWARE.dependency, "PredictEndpoint", HAS_MIDDLEWARE)
                .operationPredicate(
                    (m, s, o) -> o.getId().getName(s).equals("Predict") && testServiceId(s, "Machine Learning")
                )
                .build(),
            // Route 53
            RuntimeClientPlugin.builder()
                .withConventions(
                    AwsDependency.ROUTE53_MIDDLEWARE.dependency,
                    "ChangeResourceRecordSets",
                    HAS_MIDDLEWARE
                )
                .operationPredicate(
                    (m, s, o) -> o.getId().getName(s).equals("ChangeResourceRecordSets") && testServiceId(s, "Route 53")
                )
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.ROUTE53_MIDDLEWARE.dependency, "IdNormalizer", HAS_MIDDLEWARE)
                .operationPredicate(
                    (m, s, o) -> testInputContainsMember(m, o, ROUTE_53_ID_MEMBERS) && testServiceId(s, "Route 53")
                )
                .build()
        );
    }

    private static boolean testInputContainsMember(
        Model model,
        OperationShape operationShape,
        Set<String> expectedMemberNames
    ) {
        OperationIndex operationIndex = OperationIndex.of(model);
        return operationIndex
            .getInput(operationShape)
            .filter(input -> input.getMemberNames().stream().anyMatch(expectedMemberNames::contains))
            .isPresent();
    }

    private static boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }
}
