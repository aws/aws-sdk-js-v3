/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.endpointsV2.OmitEndpointParams;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SetUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddOmittedEndpointParams implements TypeScriptIntegration {

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        setParamForOmission();
    }

    private void setParamForOmission() {
        OmitEndpointParams.addOmittedParams(SetUtils.of("AccountId"));
    }
}
