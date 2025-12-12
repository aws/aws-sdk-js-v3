/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.logging.Logger;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.aws.typescript.codegen.AwsDependency;
import software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.traits.AuthTrait;
import software.amazon.smithy.model.traits.OptionalAuthTrait;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.auth.AuthUtils;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.ResolveConfigFunction;
import software.amazon.smithy.typescript.codegen.auth.http.SupportedHttpAuthSchemesIndex;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Add STS Auth customizations.
 */
@SmithyInternalApi
@SuppressWarnings("AbbreviationAsWordInName")
public final class AddSTSAuthCustomizations implements HttpAuthTypeScriptIntegration {
    static final String STS_ROLE_ASSUMERS_FILE = "defaultStsRoleAssumers";

    private static final Logger LOGGER = Logger.getLogger(AddSTSAuthCustomizations.class.getName());
    private static final ShapeId STS_SERVICE =
        ShapeId.from("com.amazonaws.sts#AWSSecurityTokenServiceV20110615");
    private static final Set<ShapeId> OPTIONAL_AUTH_OPERATIONS = Set.of(
        ShapeId.from("com.amazonaws.sts#AssumeRoleWithWebIdentity"),
        ShapeId.from("com.amazonaws.sts#AssumeRoleWithSAML")
    );
    private static final String NO_TOUCH_NOTICE_PREFIX =
        "// Please do not touch this file. It's generated from template in:\n"
            + "// https://github.com/aws/aws-sdk-js-v3/blob/main/codegen/smithy-aws-typescript-codegen/"
            + "src/main/resources/software/amazon/smithy/aws/typescript/codegen/";
    private static final String STS_CLIENT_PREFIX = "sts-client-";
    private static final String ROLE_ASSUMERS_FILE = "defaultRoleAssumers";
    private static final String ROLE_ASSUMERS_TEST_FILE = "defaultRoleAssumers.spec";

    /**
     * Integration should be skipped if the `useLegacyAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return !settings.useLegacyAuth() && isSTSService(settings.getService());
    }

    @Override
    public List<String> runAfter() {
        return List.of(
            SupportSigV4Auth.class.getCanonicalName(),
            AwsSdkCustomizeSigV4Auth.class.getCanonicalName()
        );
    }

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        return backfillOptionalAuthOperations(model, settings);
    }

    private Model backfillOptionalAuthOperations(Model model, TypeScriptSettings settings) {
        LOGGER.info("Backfilling STS auth operations with empty auth trait");
        for (ShapeId shapeId : OPTIONAL_AUTH_OPERATIONS) {
            LOGGER.info("Backfilling STS auth operation with empty auth trait: " + shapeId.toString());
            model = model.toBuilder()
                .addShape(
                    model.expectShape(shapeId, OperationShape.class)
                        .toBuilder()
                        .addTrait(new OptionalAuthTrait())
                        .addTrait(new AuthTrait(Collections.emptySet()))
                        .build()
                )
                .build();
        }
        return model;
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        switch (target) {
            case NODE:
                return MapUtils.of(
                    "credentialDefaultProvider",
                    writer -> {
                        writer
                            .addDependency(AwsDependency.CREDENTIAL_PROVIDER_NODE)
                            .addImport(
                                "defaultProvider",
                                "credentialDefaultProvider",
                                AwsDependency.CREDENTIAL_PROVIDER_NODE
                            )
                            .write("credentialDefaultProvider");
                    }
                );
            default:
                return Collections.emptyMap();
        }
    }

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory =
            codegenContext.writerDelegator()::useFileWriter;
        // src/defaultRoleAssumers.ts
        writerFactory.accept(CodegenUtils.SOURCE_FOLDER + "/" + ROLE_ASSUMERS_FILE + ".ts", writer -> {
            String resourceName = STS_CLIENT_PREFIX + ROLE_ASSUMERS_FILE + ".ts";
            writer
                .pushState()
                .putContext(
                    Map.of(
                        "noTouchNoticePrefix",
                        NO_TOUCH_NOTICE_PREFIX,
                        "resourceName",
                        resourceName,
                        "body",
                        IoUtils.readUtf8Resource(AwsTraitsUtils.class, resourceName)
                    )
                )
                .write("""
                       ${noTouchNoticePrefix:L}${resourceName:L}
                       ${body:L}
                       """)
                .popState();
        });
        // src/defaultStsRoleAssumers.ts
        writerFactory.accept(CodegenUtils.SOURCE_FOLDER + "/" + STS_ROLE_ASSUMERS_FILE + ".ts", writer -> {
            String resourceName = STS_CLIENT_PREFIX + STS_ROLE_ASSUMERS_FILE + ".ts";
            writer
                .pushState()
                .putContext(
                    Map.of(
                        "noTouchNoticePrefix",
                        NO_TOUCH_NOTICE_PREFIX,
                        "resourceName",
                        resourceName,
                        "body",
                        IoUtils.readUtf8Resource(AwsTraitsUtils.class, resourceName)
                    )
                )
                .write("""
                       ${noTouchNoticePrefix:L}${resourceName:L}
                       ${body:L}
                       """)
                .popState();
        });
        // src/index.ts
        writerFactory.accept(CodegenUtils.SOURCE_FOLDER + "/index.ts", writer -> {
            writer.write("export * from $S", "./" + ROLE_ASSUMERS_FILE);
        });
        // test/defaultRoleAssumers.spec.ts
        writerFactory.accept("test/" + ROLE_ASSUMERS_TEST_FILE + ".ts", writer -> {
            String resourceName = STS_CLIENT_PREFIX + ROLE_ASSUMERS_TEST_FILE + ".ts";
            writer
                .pushState()
                .putContext(
                    Map.of(
                        "noTouchNoticePrefix",
                        NO_TOUCH_NOTICE_PREFIX,
                        "resourceName",
                        resourceName,
                        "body",
                        IoUtils.readUtf8Resource(AwsTraitsUtils.class, resourceName)
                    )
                )
                .write("""
                       ${noTouchNoticePrefix:L}${resourceName:L}
                       ${body:L}
                       """)
                .popState();
        });

        codegenContext.writerDelegator().useFileWriter(AuthUtils.HTTP_AUTH_SCHEME_PROVIDER_PATH, w -> {
            ServiceShape service = codegenContext.settings().getService(codegenContext.model());
            Symbol serviceSymbol = codegenContext.symbolProvider().toSymbol(service);
            w.addRelativeImport(
                serviceSymbol.getName(),
                null,
                Paths.get(".", serviceSymbol.getNamespace())
            );
            w.addRelativeImport(
                serviceSymbol.getName() + "Config",
                null,
                Paths.get(".", serviceSymbol.getNamespace())
            );
            w.write("export interface StsAuthInputConfig {}\n");
            w.openBlock(
                "export interface StsAuthResolvedConfig {",
                "}\n",
                () -> w
                    .writeDocs("""
                               Reference to STSClient class constructor.
                               @internal""")
                    .addDependency(TypeScriptDependency.SMITHY_TYPES)
                    .addImport("Client", null, TypeScriptDependency.SMITHY_TYPES)
                    .write("stsClientCtor: new (clientConfig: any) => Client<any, any, any>;")
            );
            w.openBlock("""
                        export const resolveStsAuthConfig = <T>(
                          input: T & StsAuthInputConfig
                        ): T & StsAuthResolvedConfig => Object.assign(input, {
                        """, "});", () -> {
                w.write("""
                        stsClientCtor: STSClient,
                        """);
            });
        });
    }

    @Override
    public void customizeSupportedHttpAuthSchemes(
        SupportedHttpAuthSchemesIndex supportedHttpAuthSchemesIndex,
        Model model,
        TypeScriptSettings settings
    ) {
        ShapeId service = settings.getService();
        if (isSTSService(service)) {
            HttpAuthScheme authScheme = supportedHttpAuthSchemesIndex.getHttpAuthScheme(SigV4Trait.ID)
                .toBuilder()
                // Use `@aws-sdk/credential-provider-node` with `@aws-sdk/client-sts` as the
                // default identity provider chain for Node.js
                .putDefaultIdentityProvider(
                    LanguageTarget.NODE,
                    w -> w
                        .write("""
                               async (idProps) => await \
                               credentialDefaultProvider(idProps?.__config || {})()""")
                )
                .addResolveConfigFunction(
                    ResolveConfigFunction.builder()
                        .resolveConfigFunction(
                            Symbol.builder()
                                .namespace(AuthUtils.HTTP_AUTH_SCHEME_PROVIDER_MODULE, "/")
                                .name("resolveStsAuthConfig")
                                .build()
                        )
                        .inputConfig(
                            Symbol.builder()
                                .namespace(AuthUtils.HTTP_AUTH_SCHEME_PROVIDER_MODULE, "/")
                                .name("StsAuthInputConfig")
                                .build()
                        )
                        .resolvedConfig(
                            Symbol.builder()
                                .namespace(AuthUtils.HTTP_AUTH_SCHEME_PROVIDER_MODULE, "/")
                                .name("StsAuthResolvedConfig")
                                .build()
                        )
                        .build()
                )
                .build();
            supportedHttpAuthSchemesIndex.putHttpAuthScheme(authScheme.getSchemeId(), authScheme);
        }
    }

    public static boolean isSTSService(ShapeId service) {
        return service.equals(STS_SERVICE);
    }
}
