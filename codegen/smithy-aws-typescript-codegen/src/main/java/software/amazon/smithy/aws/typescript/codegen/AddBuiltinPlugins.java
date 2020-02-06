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
import software.amazon.smithy.model.shapes.ServiceShape;
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

    private static final Set<String> RDS_PRESIGNED_URL_OPERATIONS = SetUtils.of(
        "CopyDBSnapshot",
        "CreateDBInstanceReadReplica",
        "CreateDBCluster",
        "CopyDBClusterSnapshot"
    );

    private static final Set<String> S3_MD5_OPERATIONS = SetUtils.of(
            "DeleteObjects",
            "PutBucketCors",
            "PutBucketLifecycle",
            "PutBucketLifecycleConfiguration",
            "PutBucketPolicy",
            "PutBucketTagging",
            "PutBucketReplication"
    );

    private static final Set<String> NON_BUCKET_ENDPOINT_OPERATIONS = SetUtils.of(
            "CreateBucket",
            "DeleteBucket",
            "ListBuckets"
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
                        .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_CONFIG)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_MIDDLEWARE)
                        // See operationUsesAwsAuth() below for AwsAuth Middleware customizations.
                        .servicePredicate((m, s) -> !testServiceId(s, "Cognito Identity"))
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
                        .withConventions(AwsDependency.ACCEPT_HEADER.dependency, "AcceptHeader",
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
                        .withConventions(AwsDependency.EC2_MIDDLEWARE.dependency,
                                         "CopySnapshotPresignedUrl", HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("CopySnapshot")
                                            && testServiceId(s, "EC2"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SSEC_MIDDLEWARE.dependency, "Ssec", HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> testInputContainsMember(m, o, SSEC_OPERATIONS)
                                            && testServiceId(s, "S3"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.LOCATION_CONSTRAINT.dependency, "LocationConstraint",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("CreateBucket")
                                            && testServiceId(s, "S3"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MACHINELEARNING_MIDDLEWARE.dependency, "PredictEndpoint",
                                HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("Predict")
                                            && testServiceId(s, "Machine Learning"))
                        .build(),
                /**
                 * BUCKET_ENDPOINT_MIDDLEWARE needs two separate plugins. The first resolves the config in the client.
                 * The second applies the middleware to bucket endpoint operations.
                 */
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE.dependency, "BucketEndpoint",
                                         HAS_CONFIG)
                        .servicePredicate((m, s) -> testServiceId(s, "S3"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.BUCKET_ENDPOINT_MIDDLEWARE.dependency, "BucketEndpoint",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> !NON_BUCKET_ENDPOINT_OPERATIONS.contains(o.getId().getName())
                                            && testServiceId(s, "S3"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.BODY_CHECKSUM.dependency, "ApplyMd5BodyChecksum",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> S3_MD5_OPERATIONS.contains(o.getId().getName())
                                            && testServiceId(s, "S3"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ROUTE53_MIDDLEWARE.dependency,
                                         "ChangeResourceRecordSets", HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("ChangeResourceRecordSets")
                                            && testServiceId(s, "Route 53"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.RDS_MIDDLEWARE.dependency, "CrossRegionPresignedUrl",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> RDS_PRESIGNED_URL_OPERATIONS.contains(o.getId().getName())
                                            && testServiceId(s, "RDS"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.ROUTE53_MIDDLEWARE.dependency, "IdNormalizer",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> testInputContainsMember(m, o, ROUTE_53_ID_MEMBERS)
                                            && testServiceId(s, "Route 53"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.S3_CONTROL_MIDDLEWARE.dependency, "PrependAccountId",
                                         HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "S3 Control"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "SendMessage",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("SendMessage")
                                            && testServiceId(s, "SQS"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "SendMessageBatch",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("SendMessageBatch")
                                            && testServiceId(s, "SQS"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.SQS_MIDDLEWARE.dependency, "ReceiveMessage",
                                         HAS_MIDDLEWARE)
                        .operationPredicate((m, s, o) -> o.getId().getName().equals("ReceiveMessage")
                                            && testServiceId(s, "SQS"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_HOST_HEADER.dependency, "HostHeader")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_MIDDLEWARE)
                        .operationPredicate(AddBuiltinPlugins::operationUsesAwsAuth)
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

    private static boolean operationUsesAwsAuth(Model model, ServiceShape service, OperationShape operation) {
        // Cognito Identity service doesn't need auth for GetId, GetOpenIdToken, GetCredentialsForIdentity.
        if (testServiceId(service, "Cognito Identity")) {
            Boolean isUnsignedCommand = SetUtils.of("GetId", "GetOpenIdToken", "GetCredentialsForIdentity")
                    .contains(operation.getId().getName());
            return !isUnsignedCommand;
        }
        return false;
    }
}
