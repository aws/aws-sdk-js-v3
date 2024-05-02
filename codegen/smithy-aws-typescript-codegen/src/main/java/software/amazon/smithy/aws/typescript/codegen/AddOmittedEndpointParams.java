/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
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

import java.util.Collections;
import java.util.HashSet;
import java.util.Set;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.endpointsV2.OmitEndpointParams;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

@SmithyInternalApi
public class AddOmittedEndpointParams implements TypeScriptIntegration {

    private static final Set<String> OMITTED_PARAMS = new HashSet<>();

    static {
        OMITTED_PARAMS.add("AccountId");
    }

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        setParamForOmission();
    }

    private void setParamForOmission() {
        OmitEndpointParams.addOmittedParams(OMITTED_PARAMS);
    }
}