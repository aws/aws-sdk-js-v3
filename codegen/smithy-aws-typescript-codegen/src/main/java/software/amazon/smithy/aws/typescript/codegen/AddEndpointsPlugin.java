/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isEndpointsV2Service;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;

import java.util.List;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds all built-in runtime client plugins to clients.
 */
@SmithyInternalApi
public class AddEndpointsPlugin implements TypeScriptIntegration {
    @Override
    public List<String> runAfter() {
        return List.of(AddBuiltinPlugins.class.getCanonicalName());
    }

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return List.of(
            // AWS but not EP 2.0
            RuntimeClientPlugin.builder()
                .withConventions(
                    TypeScriptDependency.CONFIG_RESOLVER.dependency, "Endpoints", HAS_CONFIG)
                .servicePredicate((m, s) -> isAwsService(s) && !isEndpointsV2Service(s))
                .build(),
            // AWS and EP 2.0
            RuntimeClientPlugin.builder()
                .withConventions(
                    TypeScriptDependency.MIDDLEWARE_ENDPOINTS_V2.dependency, "Endpoint", HAS_CONFIG)
                .servicePredicate((m, s) -> isAwsService(s) && isEndpointsV2Service(s))
                .build()
        );
    }

    @Override
    public void mutateClientPlugins(List<RuntimeClientPlugin> plugins) {
        // TODO
        RuntimeClientPlugin genericCustomEndpoints = plugins.stream()
            .filter(p -> p.getResolveFunction()
                .map(r -> r.getAlias().equals("resolveCustomEndpointsConfig"))
                .orElse(false))
            .findAny()
            .orElseThrow(() -> new IllegalStateException("Expected generic CustomEndpoints config"));
        int index = plugins.indexOf(genericCustomEndpoints);
        RuntimeClientPlugin modifiedCustomEndpoints = genericCustomEndpoints.toBuilder()
            .servicePredicate((m, s) -> !isAwsService(s) && !isEndpointsV2Service(s))
            .build();
        plugins.set(index, modifiedCustomEndpoints);
    }
}
