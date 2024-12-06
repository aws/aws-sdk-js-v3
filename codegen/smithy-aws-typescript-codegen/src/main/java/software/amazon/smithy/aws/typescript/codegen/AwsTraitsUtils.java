/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import java.util.Set;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.traits.auth.SigV4ATrait;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.ServiceIndex;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.traits.HttpBearerAuthTrait;
import software.amazon.smithy.rulesengine.traits.EndpointRuleSetTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Utility methods related to AWS traits.
 */
@SmithyInternalApi
public final class AwsTraitsUtils {
    // SigV4a is not declared as a trait in existing services, so we need to hard code the following:
    // This should not be copied or made public outside of this class.
    private static final Set<ShapeId> ENDPOINT_RULESET_HTTP_AUTH_SCHEME_SERVICES = Set.of(
        ShapeId.from("com.amazonaws.s3#AmazonS3"),
        ShapeId.from("com.amazonaws.eventbridge#AWSEvents"),
        ShapeId.from("com.amazonaws.cloudfrontkeyvaluestore#CloudFrontKeyValueStore"),
        ShapeId.from("com.amazonaws.sesv2#SimpleEmailService_v2")
    );

    private AwsTraitsUtils() {}

    static boolean isAwsService(TypeScriptSettings settings, Model model) {
        return isAwsService(settings.getService(model));
    }

    public static boolean isAwsService(ServiceShape serviceShape) {
        return serviceShape.hasTrait(ServiceTrait.class);
    }

    static boolean isSigV4Service(TypeScriptSettings settings, Model model) {
        return isSigV4Service(settings.getService(model));
    }

    public static boolean isSigV4Service(ServiceShape serviceShape) {
        return serviceShape.hasTrait(SigV4Trait.class);
    }

    public static boolean isSigV4AsymmetricService(Model model, TypeScriptSettings settings) {
        return isSigV4AsymmetricService(model, settings.getService(model));
    }

    public static boolean isSigV4AsymmetricService(Model model, ServiceShape service) {
        if (ENDPOINT_RULESET_HTTP_AUTH_SCHEME_SERVICES.contains(service.getId())) {
            return true;
        }

        return ServiceIndex.of(model)
            .getEffectiveAuthSchemes(service, ServiceIndex.AuthSchemeMode.NO_AUTH_AWARE)
            .containsKey(SigV4ATrait.ID);
    }

    static boolean isEndpointsV2Service(ServiceShape serviceShape) {
        return serviceShape.hasTrait(EndpointRuleSetTrait.class);
    }

    static boolean isHttpBearerAuthService(ServiceShape serviceShape) {
        return serviceShape.hasTrait(HttpBearerAuthTrait.class);
    }
}
