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
import software.amazon.smithy.aws.typescript.codegen.AwsCredentialProviderUtils;
import software.amazon.smithy.aws.typescript.codegen.AwsDependency;
import software.amazon.smithy.codegen.core.Symbol;
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
import software.amazon.smithy.typescript.codegen.auth.http.ResolveConfigFunction;
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
public class AwsSdkCustomizeSigV4Auth implements HttpAuthTypeScriptIntegration {

    /**
     * Integration should only be used if `experimentalIdentityAndAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return settings.getExperimentalIdentityAndAuth();
    }

    @Override
    public List<String> runAfter() {
        return List.of(SupportSigV4Auth.class.getCanonicalName());
    }

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        if (isAwsService(service) && isSigV4Service(service)) {
            writer
                .writeDocs("The AWS region to which this client will send requests")
                .write("region?: string | __Provider<string>;\n");
            if (!areAllOptionalAuthOperations(model, service)) {

                writer
                    .addImport("AwsCredentialIdentityProvider", null, TypeScriptDependency.SMITHY_TYPES)
                    .writeDocs("""
                        Default credentials provider; Not available in browser runtime.
                        @deprecated
                        @internal""")
                    .write("credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;\n");
            }
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
                                .addDependency(AwsDependency.CREDENTIAL_PROVIDER_NODE)
                                .addImport("defaultProvider", "credentialDefaultProvider",
                                    AwsDependency.CREDENTIAL_PROVIDER_NODE)
                                .write("credentialDefaultProvider");
                            AwsCredentialProviderUtils.addAwsCredentialProviderDependencies(service, writer);
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
                .removeConfigField("region")
                .removeConfigField("signingName")
                .removeConfigField("credentials")
                .addConfigField(SupportSigV4Auth.CREDENTIALS_CONFIG_FIELD.toBuilder()
                    .configFieldWriter(null)
                    .build())
                .propertiesExtractor(s -> w -> w
                    .write("""
                      (config: $T, context) => ({
                        /**
                         * @internal
                         */
                        signingProperties: {
                          config,
                          context,
                        },
                      }),""", s))
                .addResolveConfigFunction(ResolveConfigFunction.builder()
                    .resolveConfigFunction(Symbol.builder()
                        .name("resolveAwsSdkSigV4Config")
                        .namespace(AwsDependency.AWS_SDK_CORE.getPackageName(), "/")
                        .addDependency(AwsDependency.AWS_SDK_CORE)
                        .build())
                    .inputConfig(Symbol.builder()
                        .name("AwsSdkSigV4AuthInputConfig")
                        .namespace(AwsDependency.AWS_SDK_CORE.getPackageName(), "/")
                        .addDependency(AwsDependency.AWS_SDK_CORE)
                        .build())
                    .previouslyResolved(Symbol.builder()
                        .name("AwsSdkSigV4PreviouslyResolved")
                        .namespace(AwsDependency.AWS_SDK_CORE.getPackageName(), "/")
                        .addDependency(AwsDependency.AWS_SDK_CORE)
                        .build())
                    .resolvedConfig(Symbol.builder()
                        .name("AwsSdkSigV4AuthResolvedConfig")
                        .namespace(AwsDependency.AWS_SDK_CORE.getPackageName(), "/")
                        .addDependency(AwsDependency.AWS_SDK_CORE)
                        .build())
                    .build())
                .putDefaultSigner(LanguageTarget.SHARED, w -> w
                    .addDependency(AwsDependency.AWS_SDK_CORE)
                    .addImport("AwsSdkSigV4Signer", null, AwsDependency.AWS_SDK_CORE)
                    .write("new AwsSdkSigV4Signer()"))
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
