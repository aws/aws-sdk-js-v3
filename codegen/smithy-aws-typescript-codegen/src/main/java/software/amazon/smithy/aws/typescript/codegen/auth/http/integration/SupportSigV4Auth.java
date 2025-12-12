/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import java.util.Optional;
import java.util.function.Consumer;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolReference;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.typescript.codegen.ApplicationProtocol;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.auth.http.ConfigField;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthOptionProperty;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthSchemeParameter;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Support for generic @aws.auth#sigv4.
 */
@SmithyInternalApi
public final class SupportSigV4Auth implements HttpAuthTypeScriptIntegration {

    static final Symbol AWS_CREDENTIAL_IDENTITY = Symbol.builder()
        .name("AwsCredentialIdentity")
        .namespace(TypeScriptDependency.SMITHY_TYPES.getPackageName(), "/")
        .addDependency(TypeScriptDependency.SMITHY_TYPES)
        .build();
    static final Symbol AWS_CREDENTIAL_IDENTITY_PROVIDER = Symbol.builder()
        .name("AwsCredentialIdentityProvider")
        .namespace(TypeScriptDependency.SMITHY_TYPES.getPackageName(), "/")
        .addDependency(TypeScriptDependency.SMITHY_TYPES)
        .build();
    static final ConfigField CREDENTIALS_CONFIG_FIELD = ConfigField.builder()
        .name("credentials")
        .type(ConfigField.Type.MAIN)
        .docs(w -> w.write("The credentials used to sign requests."))
        .inputType(
            Symbol.builder()
                .name("AwsCredentialIdentity | AwsCredentialIdentityProvider")
                .addReference(AWS_CREDENTIAL_IDENTITY)
                .addReference(AWS_CREDENTIAL_IDENTITY_PROVIDER)
                .build()
        )
        .resolvedType(
            Symbol.builder()
                .name("AwsCredentialIdentityProvider")
                .addReference(AWS_CREDENTIAL_IDENTITY)
                .addReference(AWS_CREDENTIAL_IDENTITY_PROVIDER)
                .build()
        )
        .configFieldWriter(ConfigField::defaultMainConfigFieldWriter)
        .build();
    private static final Consumer<TypeScriptWriter> AWS_SIGV4_AUTH_SIGNER = w -> {
        w.addDependency(TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.addImport("SigV4Signer", null, TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.write("new SigV4Signer()");
    };
    private static final SymbolReference PROVIDER = SymbolReference.builder()
        .symbol(
            Symbol.builder()
                .name("Provider")
                .namespace(TypeScriptDependency.SMITHY_TYPES.getPackageName(), "/")
                .addDependency(TypeScriptDependency.SMITHY_TYPES)
                .build()
        )
        .alias("__Provider")
        .build();

    /**
     * Integration should be skipped if the `useLegacyAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return !settings.useLegacyAuth();
    }

    @Override
    public Optional<HttpAuthScheme> getHttpAuthScheme() {
        return Optional.of(
            HttpAuthScheme.builder()
                .schemeId(ShapeId.from("aws.auth#sigv4"))
                .applicationProtocol(ApplicationProtocol.createDefaultHttpApplicationProtocol())
                .putDefaultSigner(LanguageTarget.SHARED, AWS_SIGV4_AUTH_SIGNER)
                .addConfigField(CREDENTIALS_CONFIG_FIELD)
                .addConfigField(
                    ConfigField.builder()
                        .name("region")
                        .type(ConfigField.Type.AUXILIARY)
                        .docs(w -> w.write("The AWS region to which this client will send requests."))
                        .inputType(Symbol.builder().name("string | __Provider<string>").addReference(PROVIDER).build())
                        .resolvedType(Symbol.builder().name("__Provider<string>").addReference(PROVIDER).build())
                        .configFieldWriter(ConfigField::defaultAuxiliaryConfigFieldWriter)
                        .build()
                )
                .addHttpAuthSchemeParameter(
                    HttpAuthSchemeParameter.builder()
                        .name("region")
                        .type(w -> w.write("string"))
                        .source(w -> {
                            w.addDependency(TypeScriptDependency.UTIL_MIDDLEWARE);
                            w.addImport("normalizeProvider", null, TypeScriptDependency.UTIL_MIDDLEWARE);
                            w.openBlock("await normalizeProvider(config.region)() || (() => {", "})()", () -> {
                                w.write(
                                    "throw new Error(\"expected `region` to be configured for `aws.auth#sigv4`\");"
                                );
                            });
                        })
                        .build()
                )
                .addHttpAuthOptionProperty(
                    HttpAuthOptionProperty.builder()
                        .name("name")
                        .type(HttpAuthOptionProperty.Type.SIGNING)
                        .source(
                            s ->
                                w -> {
                                    w.write("$S", s.trait().toNode().expectObjectNode().getMember("name"));
                                }
                        )
                        .build()
                )
                .addHttpAuthOptionProperty(
                    HttpAuthOptionProperty.builder()
                        .name("region")
                        .type(HttpAuthOptionProperty.Type.SIGNING)
                        .source(
                            t ->
                                w -> {
                                    w.write("authParameters.region");
                                }
                        )
                        .build()
                )
                .propertiesExtractor(
                    s ->
                        w ->
                            w.write(
                                """
                                (config, context) => {
                                  return {
                                    /**
                                     * @internal
                                     */
                                    signingProperties: {
                                      context,
                                      sha256: (config as any).sha256,
                                    },
                                  };
                                },"""
                            )
                )
                .build()
        );
    }
}
