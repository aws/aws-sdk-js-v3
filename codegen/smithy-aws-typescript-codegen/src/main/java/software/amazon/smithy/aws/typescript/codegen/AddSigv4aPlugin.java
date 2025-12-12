/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collections;
import java.util.Map;
import java.util.function.Consumer;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Detects when to add sigv4a signer.
 */
@SmithyInternalApi
public final class AddSigv4aPlugin implements TypeScriptIntegration {

    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return settings.useLegacyAuth();
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        final boolean addSigv4aSignerToConfig = AwsTraitsUtils.isSigV4AsymmetricService(model, settings);

        // the sigv4a trait also appears on operations, but we will not check
        // them individually because it must appear on the service as well in that case.

        if (!addSigv4aSignerToConfig) {
            return Collections.emptyMap();
        }

        // TODO: add to shared config when sigv4a implementation is available in browser.
        switch (target) {
            case NODE:
                return MapUtils.of("signerConstructor", writer -> {
                    writer
                        .addDependency(AwsDependency.SIGNATURE_V4_MULTIREGION)
                        .addImport("SignatureV4MultiRegion", null, AwsDependency.SIGNATURE_V4_MULTIREGION)
                        .write("SignatureV4MultiRegion");
                });
            default:
                return Collections.emptyMap();
        }
    }
}
