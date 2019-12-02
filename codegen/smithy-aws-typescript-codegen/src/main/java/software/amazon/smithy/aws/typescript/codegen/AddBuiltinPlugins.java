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
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.model.shapes.Shape;
import java.util.Set;

import software.amazon.smithy.model.knowledge.EventStreamIndex;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;

/**
 * Adds all built-in runtime client plugins to clients.
 */
public class AddBuiltinPlugins implements TypeScriptIntegration {

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        // Note that order is significant because configurations might
        // rely on previously resolved values.
        return ListUtils.of(
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.CONFIG_RESOLVER.dependency, "Region", HAS_CONFIG)
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions(TypeScriptDependency.CONFIG_RESOLVER.dependency, "Endpoints", HAS_CONFIG)
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
                        .withConventions(TypeScriptDependency.MIDDLEWARE_HOST_HEADER.dependency, "HostHeader")
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions("@aws-sdk/middleware-sdk-api-gateway", "^0.1.0-preview.5",
                                        "AcceptsHeader", HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> s.getId().getName().equals("BackplaneControlService"))
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
                        .withConventions(AwsDependency.ADD_GLACIER_API_VERSION.dependency,
                                         "AddGlacierApiVersion", HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> testServiceId(s, "Glacier"))
                        .withConventions("@aws-sdk/middleware-expect-continue", "^0.1.0-preview.5",
                                        "AddExpectContinue", HAS_MIDDLEWARE)
                        .servicePredicate((m, s) -> s.getId().getName().equals("AmazonS3"))
                        .build(),
                RuntimeClientPlugin.builder()
                        .withConventions("@aws-sdk/middleware-event-stream", "^0.1.0-preview.1", "EventStream")
                        .operationPredicate((m, s, o) -> {
                            TopDownIndex topDownIndex = m.getKnowledge(TopDownIndex.class);
                            Set<OperationShape> operations = topDownIndex.getContainedOperations(s);
                            EventStreamIndex eventStreamIndex = m.getKnowledge(EventStreamIndex.class);
                            for (OperationShape operation : operations) {
                                if (
                                    eventStreamIndex.getInputInfo(operation).isPresent()
                                    || eventStreamIndex.getOutputInfo(operation).isPresent()
                                ) {
                                    return true;
                                }
                            }
                            return false;
                        })
                        .build()
        );
    }

    private static boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }
}
