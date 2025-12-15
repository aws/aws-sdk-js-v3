/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.util.List;
import java.util.Set;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.SetUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddOmitRetryHeadersDependency implements TypeScriptIntegration {
    private static final Set<String> SERVICE_IDS = SetUtils.of(
        "ConnectParticipant", // P43593766
        "DataBrew", // P55897945
        "IoT", // P39759657
        "Kinesis Video Signaling"
    );

    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                .withConventions(
                    TypeScriptDependency.MIDDLEWARE_RETRY.dependency,
                    "OmitRetryHeaders",
                    HAS_MIDDLEWARE
                )
                .servicePredicate((m, s) -> {
                    String sdkId = s.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
                    return SERVICE_IDS.contains(sdkId);
                })
                .build()
        );
    }
}
