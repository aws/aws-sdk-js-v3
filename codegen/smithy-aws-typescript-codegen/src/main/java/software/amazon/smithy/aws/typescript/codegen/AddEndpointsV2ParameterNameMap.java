/*
 * Copyright 2022 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import software.amazon.smithy.typescript.codegen.endpointsV2.EndpointsParamNameMap;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddEndpointsV2ParameterNameMap implements TypeScriptIntegration {
    public AddEndpointsV2ParameterNameMap() {
        EndpointsParamNameMap.setNameMapping(MapUtils.of(
            "Region", "region",
            "UseFIPS", "useFipsEndpoint",
            "UseDualStack", "useDualstackEndpoint",
            "ForcePathStyle", "forcePathStyle",
            "Accelerate", "useAccelerateEndpoint",
            "DisableMRAP", "disableMultiregionAccessPoints",
            "DisableMultiRegionAccessPoints", "disableMultiregionAccessPoints",
            "UseArnRegion", "useArnRegion",
            "Endpoint", "endpoint",
            "UseGlobalEndpoint", "useGlobalEndpoint"
        ));
    }
}
