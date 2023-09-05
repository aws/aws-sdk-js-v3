/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import java.util.List;
import software.amazon.smithy.aws.typescript.codegen.AwsDependency;
import software.amazon.smithy.model.traits.HttpBearerAuthTrait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.SupportedHttpAuthSchemesIndex;
import software.amazon.smithy.typescript.codegen.auth.http.integration.AddHttpBearerAuthPlugin;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Customize @httpBearerAuth for AWS SDKs.
 *
 * This is the experimental behavior for `experimentalIdentityAndAuth`.
 */
@SmithyInternalApi
public final class AwsCustomizeHttpBearerTokenAuthPlugin implements HttpAuthTypeScriptIntegration {

    /**
     * Integration should only be used if `experimentalIdentityAndAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return settings.getExperimentalIdentityAndAuth();
    }

    /**
     * Run after default AddHttpBearerAuthPlugin.
     */
    @Override
    public List<String> runAfter() {
        return List.of(AddHttpBearerAuthPlugin.class.getCanonicalName());
    }

    @Override
    public void customizeSupportedHttpAuthSchemes(SupportedHttpAuthSchemesIndex supportedHttpAuthSchemesIndex) {
        HttpAuthScheme authScheme = supportedHttpAuthSchemesIndex.getHttpAuthScheme(HttpBearerAuthTrait.ID).toBuilder()
            // Current behavior of unconfigured `token` is to throw an error.
            // This may need to be customized if a service is released with multiple auth schemes.
            .putDefaultIdentityProvider(LanguageTarget.BROWSER, w ->
                w.write("async () => { throw new Error(\"`token` is missing\"); }"))
            // Use `@aws-sdk/token-providers` as the default identity provider chain for Node.js
            .putDefaultIdentityProvider(LanguageTarget.NODE, w -> {
                w.addDependency(AwsDependency.TOKEN_PROVIDERS);
                w.addImport("nodeProvider", null, AwsDependency.TOKEN_PROVIDERS);
                w.write("nodeProvider");
            })
            .build();
        supportedHttpAuthSchemesIndex.putHttpAuthScheme(authScheme.getSchemeId(), authScheme);
    }
}
