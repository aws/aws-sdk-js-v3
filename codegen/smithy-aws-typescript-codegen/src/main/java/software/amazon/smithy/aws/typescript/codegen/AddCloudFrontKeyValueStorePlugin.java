/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
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
 * Adds customizations for CloudFront KeyValueStore service.
 */
@SmithyInternalApi
public final class AddCloudFrontKeyValueStorePlugin implements TypeScriptIntegration {
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(TypeScriptSettings settings, Model model,
            SymbolProvider symbolProvider, LanguageTarget target) {
        if (!testServiceId(settings.getService(model))) {
            return Collections.emptyMap();
        }
        switch (target) {
            case SHARED:
                return MapUtils.of("signerConstructor", writer -> {
                    writer.addDependency(AwsDependency.SIGNATURE_V4_MULTIREGION)
                    .addImport("SignatureV4MultiRegion", "SignatureV4MultiRegion",
                            AwsDependency.SIGNATURE_V4_MULTIREGION)
                    .write("SignatureV4MultiRegion");
                });
            default:
                return Collections.emptyMap();
        }
    }

    private static boolean testServiceId(Shape serviceShape) {
        return serviceShape.getTrait(ServiceTrait.class)
        .map(ServiceTrait::getSdkId).orElse("")
        .equals("CloudFront KeyValueStore");
    }
}
