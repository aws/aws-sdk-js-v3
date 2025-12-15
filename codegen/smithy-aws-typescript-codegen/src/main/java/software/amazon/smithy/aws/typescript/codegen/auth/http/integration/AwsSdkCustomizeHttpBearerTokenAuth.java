/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isSigV4Service;

import java.util.List;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.aws.typescript.codegen.AwsDependency;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.traits.HttpBearerAuthTrait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.SupportedHttpAuthSchemesIndex;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.typescript.codegen.auth.http.integration.SupportHttpBearerAuth;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Customize @httpBearerAuth for AWS SDKs.
 */
@SmithyInternalApi
public final class AwsSdkCustomizeHttpBearerTokenAuth implements HttpAuthTypeScriptIntegration {

    /**
     * Integration should be skipped if the `useLegacyAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return !settings.useLegacyAuth();
    }

    @Override
    public List<String> runAfter() {
        return List.of(SupportHttpBearerAuth.class.getCanonicalName());
    }

    @Override
    public void customizeSupportedHttpAuthSchemes(
        SupportedHttpAuthSchemesIndex supportedHttpAuthSchemesIndex,
        Model model,
        TypeScriptSettings settings
    ) {
        ServiceShape service = settings.getService(model);
        if (isAwsService(service)) {
            HttpAuthScheme authScheme = supportedHttpAuthSchemesIndex.getHttpAuthScheme(HttpBearerAuthTrait.ID)
                .toBuilder()
                // Use `@aws-sdk/token-providers` as the default identity provider chain for Node.js
                .putDefaultIdentityProvider(
                    LanguageTarget.NODE,
                    w -> w
                        .addDependency(AwsDependency.TOKEN_PROVIDERS)
                        .addImport("nodeProvider", null, AwsDependency.TOKEN_PROVIDERS)
                        .addImport("FromSsoInit", null, AwsDependency.TOKEN_PROVIDERS)
                        .openBlock("async (idProps) => {", "}", () -> {
                            String defaultProviderReturn =
                                "return await nodeProvider(idProps as FromSsoInit)(idProps);";
                            if (useFromEnvSigningName(service)) {
                                w.openBlock("try {", "}", () -> {
                                    w.addImport("fromEnvSigningName", null, AwsDependency.TOKEN_PROVIDERS);
                                    w.write(
                                        "return await fromEnvSigningName({ signingName: $S })();",
                                        service.expectTrait(SigV4Trait.class).getName()
                                    );
                                });
                                w.openBlock("catch (error) {", "}", () -> {
                                    w.write(defaultProviderReturn);
                                });
                            } else {
                                w.write(defaultProviderReturn);
                            }
                        })
                )
                // Add identityProperties for backward compatibility of the `nodeProvider` default provider.
                // If adding new properties that need to be passed into `nodeProvider`, make sure
                // to update the propertiesExtractor below.
                // However, the goal should be to NOT add additional properties.
                .propertiesExtractor(
                    s -> w -> w
                        .addDependency(AwsDependency.TOKEN_PROVIDERS)
                        .addImport("FromSsoInit", null, AwsDependency.TOKEN_PROVIDERS)
                        .addDependency(TypeScriptDependency.SMITHY_TYPES)
                        .addImport("HandlerExecutionContext", null, TypeScriptDependency.SMITHY_TYPES)
                        .write("""
                               <T>({
                                 profile,
                                 filepath,
                                 configFilepath,
                                 ignoreCache,
                               }: T & FromSsoInit, context: HandlerExecutionContext) => ({
                                 /**
                                  * @internal
                                  */
                                 identityProperties: {
                                   profile,
                                   filepath,
                                   configFilepath,
                                   ignoreCache,
                                 },
                               }),""")
                )
                .build();
            supportedHttpAuthSchemesIndex.putHttpAuthScheme(authScheme.getSchemeId(), authScheme);
        }
    }

    private static boolean useFromEnvSigningName(ServiceShape service) {
        if (isSigV4Service(service)) {
            return service.expectTrait(SigV4Trait.class).getName().equals("bedrock");
        }
        return false;
    }
}
