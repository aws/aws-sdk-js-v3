/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
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
