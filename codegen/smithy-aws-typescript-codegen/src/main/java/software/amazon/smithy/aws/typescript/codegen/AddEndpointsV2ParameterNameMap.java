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

import java.util.Map;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.endpointsV2.EndpointsParamNameMap;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddEndpointsV2ParameterNameMap implements TypeScriptIntegration {

    public static final Map<String, String> NAME_MAP = MapUtils.of(
        "Region",
        "region",
        "UseFIPS",
        "useFipsEndpoint",
        "UseDualStack",
        "useDualstackEndpoint",
        "ForcePathStyle",
        "forcePathStyle",
        "Accelerate",
        "useAccelerateEndpoint",
        "DisableMRAP",
        "disableMultiregionAccessPoints",
        "DisableMultiRegionAccessPoints",
        "disableMultiregionAccessPoints",
        "UseArnRegion",
        "useArnRegion",
        "Endpoint",
        "endpoint",
        "UseGlobalEndpoint",
        "useGlobalEndpoint"
    );

    public AddEndpointsV2ParameterNameMap() {
        setParameterNameMapForAws();
    }

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        setParameterNameMapForAws();
        return TypeScriptIntegration.super.preprocessModel(model, settings);
    }

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        setParameterNameMapForAws();
    }

    private static void setParameterNameMapForAws() {
        EndpointsParamNameMap.addNameMapping(NAME_MAP);
    }
}
