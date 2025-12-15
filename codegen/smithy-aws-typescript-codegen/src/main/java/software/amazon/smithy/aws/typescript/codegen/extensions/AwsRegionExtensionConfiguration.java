/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen.extensions;

import software.amazon.smithy.aws.typescript.codegen.AwsDependency;
import software.amazon.smithy.typescript.codegen.Dependency;
import software.amazon.smithy.typescript.codegen.extensions.ExtensionConfigurationInterface;
import software.amazon.smithy.utils.Pair;

public class AwsRegionExtensionConfiguration implements ExtensionConfigurationInterface {
    @Override
    public Pair<String, Dependency> name() {
        return Pair.of("AwsRegionExtensionConfiguration", AwsDependency.TYPES);
    }

    @Override
    public Pair<String, Dependency> getExtensionConfigurationFn() {
        return Pair.of("getAwsRegionExtensionConfiguration", AwsDependency.REGION_CONFIG_RESOLVER);
    }

    @Override
    public Pair<String, Dependency> resolveRuntimeConfigFn() {
        return Pair.of("resolveAwsRegionExtensionConfiguration", AwsDependency.REGION_CONFIG_RESOLVER);
    }
}
