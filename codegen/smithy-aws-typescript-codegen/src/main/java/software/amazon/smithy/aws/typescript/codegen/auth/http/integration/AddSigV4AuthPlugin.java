/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import java.util.Optional;
import java.util.function.Consumer;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.typescript.codegen.ApplicationProtocol;
import software.amazon.smithy.typescript.codegen.ConfigField;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthOptionProperty;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthSchemeParameter;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Support for generic @aws.auth#sigv4.
 *
 * This is the experimental behavior for `experimentalIdentityAndAuth`.
 */
@SmithyInternalApi
public final class AddSigV4AuthPlugin implements HttpAuthTypeScriptIntegration {
    private static final Consumer<TypeScriptWriter> AWS_SIGV4_AUTH_SIGNER = w -> {
        w.addDependency(TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.addImport("SigV4Signer", null, TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.write("new SigV4Signer()");
    };

    /**
     * Integration should only be used if `experimentalIdentityAndAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return settings.getExperimentalIdentityAndAuth();
    }

    @Override
    public Optional<HttpAuthScheme> getHttpAuthScheme() {
        return Optional.of(HttpAuthScheme.builder()
                .schemeId(ShapeId.from("aws.auth#sigv4"))
                .applicationProtocol(ApplicationProtocol.createDefaultHttpApplicationProtocol())
                .putDefaultSigner(LanguageTarget.SHARED, AWS_SIGV4_AUTH_SIGNER)
                .addConfigField(ConfigField.builder()
                    .name("credentials")
                    .type(ConfigField.Type.MAIN)
                    .docs(w -> w.write("The credentials used to sign requests."))
                    .inputType(w -> {
                        w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                        w.addImport("AwsCredentialIdentity", null, TypeScriptDependency.SMITHY_TYPES);
                        w.addImport("AwsCredentialIdentityProvider", null, TypeScriptDependency.SMITHY_TYPES);
                        w.write("AwsCredentialIdentity | AwsCredentialIdentityProvider");
                    })
                    .resolvedType(w -> {
                        w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                        w.addImport("AwsCredentialIdentityProvider", null, TypeScriptDependency.SMITHY_TYPES);
                        w.write("AwsCredentialIdentityProvider");
                    })
                    .configFieldWriter(ConfigField::writeDefaultMainConfigField)
                    .build())
                .addConfigField(ConfigField.builder()
                    .name("region")
                    .type(ConfigField.Type.AUXILIARY)
                    .docs(w -> w.write("The AWS region to which this client will send requests."))
                    .inputType(w -> {
                        w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                        w.addImport("Provider", "__Provider", TypeScriptDependency.SMITHY_TYPES);
                        w.write("string | __Provider<string>");
                    })
                    .resolvedType(w -> {
                        w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                        w.addImport("Provider", "__Provider", TypeScriptDependency.SMITHY_TYPES);
                        w.write("__Provider<string>");
                    })
                    .configFieldWriter(ConfigField::writeDefaultAuxiliaryConfigField)
                    .build())
                .addConfigField(ConfigField.builder()
                    .name("sha256")
                    .type(ConfigField.Type.PREVIOUSLY_RESOLVED)
                    .resolvedType(w -> {
                        w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                        w.addImport("ChecksumConstructor", null, TypeScriptDependency.SMITHY_TYPES);
                        w.addImport("HashConstructor", null, TypeScriptDependency.SMITHY_TYPES);
                        w.write("ChecksumConstructor | HashConstructor");
                    })
                    .build())
                .addConfigField(ConfigField.builder()
                    .name("signingName")
                    .type(ConfigField.Type.PREVIOUSLY_RESOLVED)
                    .resolvedType(w -> w.write("string"))
                    .build())
                .addHttpAuthSchemeParameter(HttpAuthSchemeParameter.builder()
                    .name("region")
                    .type(w -> w.write("string"))
                    .source(w -> {
                        w.addDependency(TypeScriptDependency.UTIL_MIDDLEWARE);
                        w.addImport("normalizeProvider", null, TypeScriptDependency.UTIL_MIDDLEWARE);
                        w.openBlock("await normalizeProvider(config.region)() || (() => {", "})()", () -> {
                            w.write("throw new Error(\"expected `region` to be configured for `aws.auth#sigv4`\");");
                        });
                    })
                    .build())
                .addHttpAuthOptionProperty(HttpAuthOptionProperty.builder()
                    .name("name")
                    .type(HttpAuthOptionProperty.Type.SIGNING)
                    .source(s -> w -> {
                        w.write("$S", s.trait().toNode().expectObjectNode().getMember("name"));
                    })
                    .build())
                .addHttpAuthOptionProperty(HttpAuthOptionProperty.builder()
                    .name("region")
                    .type(HttpAuthOptionProperty.Type.SIGNING)
                    .source(t -> w -> {
                        w.write("authParameters.region");
                    })
                    .build())
                .build());
    }
}
