/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isSigV4Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.aws.typescript.codegen.AwsDependency;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.traits.OptionalAuthTrait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.SupportedHttpAuthSchemesIndex;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
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
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        // TODO(experimentalIdentityAndAuth): separate generic codegen from SDK tech debt
        if (isAwsService(service) && isSigV4Service(service) && !areAllOptionalAuthOperations(model, service)) {
            writer
                .addImport("AwsCredentialIdentityProvider", null, TypeScriptDependency.SMITHY_TYPES)
                .writeDocs("""
                    Default credentials provider; Not available in browser runtime.
                    @deprecated
                    @internal""")
                .write("credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;\n");
        }
        if (isAwsService(service) && isSigV4Service(service)) {
            writer
                .writeDocs("The AWS region to which this client will send requests")
                .write("region?: string | __Provider<string>;\n");
        }
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        ServiceShape service = settings.getService(model);
        if (!isSigV4Service(service) || areAllOptionalAuthOperations(model, service)) {
            return Collections.emptyMap();
        }
        switch (target) {
            case SHARED:
                if (isAwsService(service)) {
                    return Collections.emptyMap();
                }
                return MapUtils.of(
                    "signingName", w ->
                        w.write("$S", service.expectTrait(SigV4Trait.class).getName())
                );
            case BROWSER:
                if (isAwsService(service)) {
                    return MapUtils.of(
                        "credentialDefaultProvider", w ->
                            w.write("((_: unknown) => () => Promise.reject(new Error(\"Credential is missing\")))")
                    );
                }
            case NODE:
                if (isAwsService(service)) {
                    return MapUtils.of(
                        "credentialDefaultProvider", writer -> {
                            writer
                                .addDependency(AwsDependency.STS_CLIENT)
                                .addImport("decorateDefaultCredentialProvider", "decorateDefaultCredentialProvider",
                                        AwsDependency.STS_CLIENT)
                                .addDependency(AwsDependency.CREDENTIAL_PROVIDER_NODE)
                                .addImport("defaultProvider", "credentialDefaultProvider",
                                    AwsDependency.CREDENTIAL_PROVIDER_NODE)
                                .write("decorateDefaultCredentialProvider(credentialDefaultProvider)");
                        }
                    );
                }
            default:
                return Collections.emptyMap();
        }
    }

    @Override
    public void customizeSupportedHttpAuthSchemes(
        SupportedHttpAuthSchemesIndex supportedHttpAuthSchemesIndex,
        Model model,
        TypeScriptSettings settings
    ) {
        ServiceShape service = settings.getService(model);
        if (isAwsService(service)) {
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
                    w.write("""
                        async (idProps) => await \
                        decorateDefaultCredentialProvider(credentialDefaultProvider)(idProps?.__config || {})()""");
                })
                .removeConfigField("region")
                .removeConfigField("signingName")
                // Add __config as an identityProperty for backward compatibility of `credentialDefaultProvider`
                .propertiesExtractor(s -> w -> w.write("""
                    (__config, context) => ({
                        /**
                         * @internal
                         */
                        identityProperties: {
                            __config,
                        },
                    }),"""))
                .build();
            supportedHttpAuthSchemesIndex.putHttpAuthScheme(authScheme.getSchemeId(), authScheme);
        }
    }

    private boolean areAllOptionalAuthOperations(Model model, ServiceShape service) {
        TopDownIndex topDownIndex = TopDownIndex.of(model);
        Set<OperationShape> operations = topDownIndex.getContainedOperations(service);
        for (OperationShape operation : operations) {
            if (!operation.hasTrait(OptionalAuthTrait.class)) {
                return false;
            }
        }
        return true;
    }
}
