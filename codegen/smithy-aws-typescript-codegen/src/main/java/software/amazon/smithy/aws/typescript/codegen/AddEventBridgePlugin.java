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

import java.util.Collections;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Adds customizations for EventBridge service.
 */
@SmithyInternalApi
public final class AddEventBridgePlugin implements TypeScriptIntegration {
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(TypeScriptSettings settings, Model model,
            SymbolProvider symbolProvider, LanguageTarget target) {
        if (!testServiceId(settings.getService(model))) {
            return Collections.emptyMap();
        }
        if (settings.getExperimentalIdentityAndAuth()) {
            return Collections.emptyMap();
        }
        // feat(experimentalIdentityAndAuth): control branch for EventBridge runtime config
        switch (target) {
            case SHARED:
                return MapUtils.of("signerConstructor", writer -> {
                    writer.addDependency(AwsDependency.SIGNATURE_V4_MULTIREGION)
                    .addImport("SignatureV4MultiRegion", "SignatureV4MultiRegion",
                            AwsDependency.SIGNATURE_V4_MULTIREGION.packageName)
                    .write("SignatureV4MultiRegion");
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean testServiceId(Shape serviceShape) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals("EventBridge");
    }
}
