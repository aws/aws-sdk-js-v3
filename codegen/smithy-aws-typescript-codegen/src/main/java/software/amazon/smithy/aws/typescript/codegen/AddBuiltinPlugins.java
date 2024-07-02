/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isSigV4Service;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.List;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds all built-in runtime client plugins to clients.
 *
 * Note that order is significant because configurations might rely on previously resolved values.
 */
@SmithyInternalApi
public class AddBuiltinPlugins implements TypeScriptIntegration {
    @Override
    public List<String> runAfter() {
        return List.of(
            software.amazon.smithy.typescript.codegen.integration.AddBuiltinPlugins.class.getCanonicalName());
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return List.of(
            // AWS or SigV4
            RuntimeClientPlugin.builder()
                .withConventions(TypeScriptDependency.CONFIG_RESOLVER.dependency, "Region", HAS_CONFIG)
                .servicePredicate((m, s) -> isAwsService(s) || isSigV4Service(s))
                .build(),
            // Can be in smithy-typescript, but the NPM package is in @aws-sdk
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.MIDDLEWARE_HOST_HEADER.dependency, "HostHeader")
                .build(),
            // Should be in smithy-typescript, but the NPM package is in @aws-sdk
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.MIDDLEWARE_LOGGER.dependency, "Logger", HAS_MIDDLEWARE)
                .build(),
            RuntimeClientPlugin.builder()
                .withConventions(AwsDependency.RECURSION_DETECTION_MIDDLEWARE.dependency,
                    "RecursionDetection", HAS_MIDDLEWARE)
                .build()
        );
    }
}
