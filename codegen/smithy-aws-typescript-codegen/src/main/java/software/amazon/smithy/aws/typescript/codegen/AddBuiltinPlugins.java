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

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.List;
import java.util.Set;

import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.OperationIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SetUtils;

/**
 * Adds all built-in runtime client plugins to clients.
 */
public class AddBuiltinPlugins implements TypeScriptIntegration {

    private static final Set<String> SSEC_OPERATIONS = SetUtils.of("SSECustomerKey", "CopySourceSSECustomerKey");

    private static final Set<String> ROUTE_53_ID_MEMBERS = SetUtils.of("DelegationSetId", "HostedZoneId", "Id");

    private static final Set<String> S3_MD5_OPERATIONS = SetUtils.of(
            "DeleteObjects",
            "PutBucketCors",
            "PutBucketLifecycle",
            "PutBucketLifecycleConfiguration",
            "PutBucketPolicy",
            "PutBucketTagging",
            "PutBucketReplication"
    );

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        // Note that order is significant because configurations might
        // rely on previously resolved values.
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.CONFIG_RESOLVER.dependency, "Region", HAS_CONFIG)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.CONFIG_RESOLVER.dependency, "Endpoints", HAS_CONFIG)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.MIDDLEWARE_RETRY.dependency, "Retry")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.MIDDLEWARE_USER_AGENT.dependency, "UserAgent")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.MIDDLEWARE_CONTENT_LENGTH.dependency, "ContentLength",
                                         HAS_MIDDLEWARE)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ACCEPTS_HEADER.dependency, "AcceptsHeader",
                                         HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "API Gateway"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.VALIDATE_BUCKET_NAME.dependency, "ValidateBucketName",
                                         HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "S3"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ADD_EXPECT_CONTINUE.dependency, "AddExpectContinue",
                                         HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "S3"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.GLACIER_MIDDLEWARE.dependency,
                                         "Glacier", HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "Glacier"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SSEC_MIDDLEWARE.dependency, "Ssec", HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "S3"))
                        .operationPredicate((m, s, o) -> testInputContainsMember(m, o, SSEC_OPERATIONS))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.LOCATION_CONSTRAINT.dependency, "LocationConstraint",
                                         HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "S3"))
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("CreateBucket"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MACHINELEARNING_MIDDLEWARE.dependency, "PredictEndpoint",
                                HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "Machine Learning"))
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("Predict"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.BODY_CHECKSUM.dependency, "ApplyMd5BodyChecksum",
                                         HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "S3"))
                        .operationPredicate((m, s, o) -> S3_MD5_OPERATIONS.contains(o.getId().getName()))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ROUTE53_MIDDLEWARE.dependency, "ChangeBatchAliasTargetIdNormalizer",
                                HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "Route 53"))
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("ChangeResourceRecordSets"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ROUTE53_MIDDLEWARE.dependency, "IdNormalizer",
                                HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "Route 53"))
                        .operationPredicate((m, s, o) -> testContainsMember(m, o, ROUTE_53_ID_MEMBERS))
                        .build()
        );
    }

    private static boolean testInputContainsMember(
            Model model,
            OperationShape operationShape,
            Set<String> expectedMemberNames
    ) {
        OperationIndex operationIndex = model.getKnowledge(OperationIndex.class);
        return operationIndex.getInput(operationShape)
                .filter(input -> input.getMemberNames().stream().anyMatch(expectedMemberNames::contains))
                .isPresent();
    }

    private static boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }
}
