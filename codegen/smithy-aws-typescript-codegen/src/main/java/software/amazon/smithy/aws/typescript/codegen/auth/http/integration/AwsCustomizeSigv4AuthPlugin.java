/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import java.util.List;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.aws.typescript.codegen.AwsDependency;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.SupportedHttpAuthSchemesIndex;
import software.amazon.smithy.typescript.codegen.auth.http.integration.AddSigV4AuthPlugin;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Customize @aws.auth#sigv4 for AWS SDKs.
 *
 * This is the experimental behavior for `experimentalIdentityAndAuth`.
 */
@SmithyInternalApi
public class AwsCustomizeSigv4AuthPlugin implements HttpAuthTypeScriptIntegration {

    /**
     * Integration should only be used if `experimentalIdentityAndAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return settings.getExperimentalIdentityAndAuth();
    }

    /**
     * Run after default AddSigV4AuthPlugin.
     */
    @Override
    public List<String> runAfter() {
        return List.of(AddSigV4AuthPlugin.class.getCanonicalName());
    }

    @Override
    public void customizeSupportedHttpAuthSchemes(SupportedHttpAuthSchemesIndex supportedHttpAuthSchemesIndex) {
        HttpAuthScheme authScheme = supportedHttpAuthSchemesIndex.getHttpAuthScheme(SigV4Trait.ID).toBuilder()
            // Current behavior of unconfigured `credentials` is to throw an error.
            // This may need to be customized if a service is released with multiple auth schemes.
            .putDefaultIdentityProvider(LanguageTarget.BROWSER, w ->
                w.write("async () => { throw new Error(\"`credentials` is missing\"); }"))
            // Use `@aws-sdk/credential-provider-node` with `@aws-sdk/client-sts` as the
            // default identity provider chain for Node.js
            .putDefaultIdentityProvider(LanguageTarget.NODE, w -> {
                w.addDependency(AwsDependency.STS_CLIENT);
                w.addImport("decorateDefaultCredentialProvider", null, AwsDependency.STS_CLIENT);
                w.addDependency(AwsDependency.CREDENTIAL_PROVIDER_NODE);
                w.addImport("defaultProvider", "credentialDefaultProvider",
                    AwsDependency.CREDENTIAL_PROVIDER_NODE);
                w.write("decorateDefaultCredentialProvider(credentialDefaultProvider)");
            })
            .build();
        supportedHttpAuthSchemesIndex.putHttpAuthScheme(authScheme.getSchemeId(), authScheme);
    }
}
