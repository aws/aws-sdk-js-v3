/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
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
