/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import java.nio.file.Paths;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.function.Consumer;
import software.amazon.smithy.aws.typescript.codegen.AwsDependency;
import software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.ServiceIndex;
import software.amazon.smithy.model.knowledge.ServiceIndex.AuthSchemeMode;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.node.ObjectNode;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.traits.DynamicTrait;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.auth.AuthUtils;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthSchemeParameter;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthSchemeProviderGenerator;
import software.amazon.smithy.typescript.codegen.auth.http.SupportedHttpAuthSchemesIndex;
import software.amazon.smithy.typescript.codegen.auth.http.integration.AddHttpAuthSchemePlugin;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.typescript.codegen.auth.http.sections.DefaultHttpAuthSchemeParametersProviderFunctionCodeSection;
import software.amazon.smithy.typescript.codegen.auth.http.sections.DefaultHttpAuthSchemeProviderFunctionCodeSection;
import software.amazon.smithy.typescript.codegen.auth.http.sections.HttpAuthSchemeParametersInterfaceCodeSection;
import software.amazon.smithy.typescript.codegen.auth.http.sections.HttpAuthSchemeProviderInterfaceCodeSection;
import software.amazon.smithy.typescript.codegen.endpointsV2.EndpointsV2Generator;
import software.amazon.smithy.utils.CodeInterceptor;
import software.amazon.smithy.utils.CodeSection;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Customize default {@code httpAuthSchemeProvider} and {@code httpAuthSchemeParametersProvider} for AWS SDKs.
 *
 * This code generates `HttpAuthSchemeProvider` interfaces based on {@code @smithy.rules#endpointRuleSet} for
 * identity and auth purposes only.
 */
@SmithyInternalApi
public final class AwsSdkCustomizeEndpointRuleSetHttpAuthSchemeProvider implements HttpAuthTypeScriptIntegration {

    private static final ShapeId SIGV4A_ID = ShapeId.from("aws.auth#sigv4a");

    /**
     * Integration should be skipped if the `useLegacyAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return !settings.useLegacyAuth();
    }

    @Override
    public List<String> runBefore() {
        return List.of(AddHttpAuthSchemePlugin.class.getCanonicalName());
    }

    @Override
    public List<String> runAfter() {
        return List.of(SupportSigV4Auth.class.getCanonicalName(), AwsSdkCustomizeSigV4Auth.class.getCanonicalName());
    }

    @Override
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        if (!AwsTraitsUtils.isSigV4AsymmetricService(model, settings)) {
            return Collections.emptyMap();
        }

        if (Objects.requireNonNull(target) == LanguageTarget.SHARED) {
            return MapUtils.of("signerConstructor", writer -> {
                writer
                    .addDependency(AwsDependency.SIGNATURE_V4_MULTIREGION)
                    .addImport("SignatureV4MultiRegion", null, AwsDependency.SIGNATURE_V4_MULTIREGION)
                    .write("SignatureV4MultiRegion");
            });
        }
        return Collections.emptyMap();
    }

    @Override
    public void customizeSupportedHttpAuthSchemes(
        SupportedHttpAuthSchemesIndex supportedHttpAuthSchemesIndex,
        Model model,
        TypeScriptSettings settings
    ) {
        if (!AwsTraitsUtils.isSigV4AsymmetricService(model, settings)) {
            return;
        }

        // TODO(experimentalIdentityAndAuth): should be removed when @aws.auth#sigv4a is supported
        if (supportedHttpAuthSchemesIndex.getHttpAuthScheme(SIGV4A_ID) == null) {
            ShapeId sigv4 = ShapeId.from("aws.auth#sigv4");
            HttpAuthScheme sigv4Scheme = supportedHttpAuthSchemesIndex.getHttpAuthScheme(sigv4);
            supportedHttpAuthSchemesIndex.putHttpAuthScheme(
                SIGV4A_ID,
                sigv4Scheme.toBuilder().schemeId(SIGV4A_ID).traitId(sigv4).build()
            );
        }
    }

    @Override
    public List<? extends CodeInterceptor<? extends CodeSection, TypeScriptWriter>> interceptors(
        TypeScriptCodegenContext codegenContext
    ) {
        if (!AwsTraitsUtils.isSigV4AsymmetricService(codegenContext.model(), codegenContext.settings())) {
            return Collections.emptyList();
        }
        return List.of(
            new CodeInterceptor<HttpAuthSchemeParametersInterfaceCodeSection, TypeScriptWriter>() {
                @Override
                public Class<HttpAuthSchemeParametersInterfaceCodeSection> sectionType() {
                    return HttpAuthSchemeParametersInterfaceCodeSection.class;
                }

                @Override
                public void write(
                    TypeScriptWriter w,
                    String previousText,
                    HttpAuthSchemeParametersInterfaceCodeSection s
                ) {
                    String serviceName = CodegenUtils.getServiceName(
                        s.getSettings(),
                        s.getModel(),
                        s.getSymbolProvider()
                    );
                    ServiceIndex serviceIndex = ServiceIndex.of(s.getModel());
                    SupportedHttpAuthSchemesIndex authIndex = new SupportedHttpAuthSchemesIndex(
                        codegenContext.integrations(),
                        s.getModel(),
                        s.getSettings()
                    );
                    TopDownIndex topDownIndex = TopDownIndex.of(s.getModel());
                    Map<ShapeId, HttpAuthScheme> effectiveHttpAuthSchemes =
                        AuthUtils.getAllEffectiveNoAuthAwareAuthSchemes(
                            s.getService(),
                            serviceIndex,
                            authIndex,
                            topDownIndex
                        );
                    Map<String, HttpAuthSchemeParameter> httpAuthSchemeParameters =
                        AuthUtils.collectHttpAuthSchemeParameters(effectiveHttpAuthSchemes.values());
                    w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                    w.addImport("HttpAuthSchemeParameters", null, TypeScriptDependency.SMITHY_TYPES);
                    w.writeDocs("@internal");
                    w.openBlock("""
                    interface _$LHttpAuthSchemeParameters extends HttpAuthSchemeParameters {""", "}\n", serviceName, () -> {
                        for (HttpAuthSchemeParameter parameter : httpAuthSchemeParameters.values()) {
                            w.write("$L?: $C;", parameter.name(), parameter.type());
                        }
                    });
                    w.addImport("EndpointParameters", null, EndpointsV2Generator.ENDPOINT_PARAMETERS_DEPENDENCY);
                    w.writeDocs("@internal");
                    w.openBlock("""
                    export interface $LHttpAuthSchemeParameters extends \
                    _$LHttpAuthSchemeParameters, EndpointParameters {""", "}", serviceName, serviceName, () -> {
                        for (HttpAuthSchemeParameter parameter : httpAuthSchemeParameters.values()) {
                            w.write("$L?: $C;", parameter.name(), parameter.type());
                        }
                    });
                }
            },
            new CodeInterceptor<DefaultHttpAuthSchemeParametersProviderFunctionCodeSection, TypeScriptWriter>() {
                @Override
                public Class<DefaultHttpAuthSchemeParametersProviderFunctionCodeSection> sectionType() {
                    return DefaultHttpAuthSchemeParametersProviderFunctionCodeSection.class;
                }

                @Override
                public void write(
                    TypeScriptWriter w,
                    String previousText,
                    DefaultHttpAuthSchemeParametersProviderFunctionCodeSection s
                ) {
                    String serviceName = CodegenUtils.getServiceName(
                        s.getSettings(),
                        s.getModel(),
                        s.getSymbolProvider()
                    );
                    ServiceIndex serviceIndex = ServiceIndex.of(s.getModel());
                    SupportedHttpAuthSchemesIndex authIndex = new SupportedHttpAuthSchemesIndex(
                        codegenContext.integrations(),
                        s.getModel(),
                        s.getSettings()
                    );
                    TopDownIndex topDownIndex = TopDownIndex.of(s.getModel());
                    Map<ShapeId, HttpAuthScheme> effectiveHttpAuthSchemes =
                        AuthUtils.getAllEffectiveNoAuthAwareAuthSchemes(
                            s.getService(),
                            serviceIndex,
                            authIndex,
                            topDownIndex
                        );
                    Map<String, HttpAuthSchemeParameter> httpAuthSchemeParameters =
                        AuthUtils.collectHttpAuthSchemeParameters(effectiveHttpAuthSchemes.values());
                    Symbol serviceSymbol = s.getSymbolProvider().toSymbol(s.getService());
                    w.addRelativeImport(
                        serviceSymbol.getName() + "ResolvedConfig",
                        null,
                        Paths.get(".", serviceSymbol.getNamespace())
                    );
                    w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                    w.addImport("HandlerExecutionContext", null, TypeScriptDependency.SMITHY_TYPES);
                    w.addDependency(TypeScriptDependency.UTIL_MIDDLEWARE);
                    w.addImport("getSmithyContext", null, TypeScriptDependency.UTIL_MIDDLEWARE);
                    w.addDependency(TypeScriptDependency.MIDDLEWARE_ENDPOINTS_V2);
                    w.addImport("EndpointParameterInstructions", null, TypeScriptDependency.MIDDLEWARE_ENDPOINTS_V2);
                    w.addImport("resolveParams", null, TypeScriptDependency.MIDDLEWARE_ENDPOINTS_V2);
                    w.writeDocs("@internal");
                    w.write(
                        """
                        interface EndpointRuleSetSmithyContext {
                          commandInstance?: {
                            constructor?: {
                              getEndpointParameterInstructions(): EndpointParameterInstructions;
                            };
                          };
                        }"""
                    );
                    w.writeDocs("@internal");
                    w.write(
                        """
                        interface EndpointRuleSetHttpAuthSchemeParametersProvider<
                          TConfig extends object,
                          TContext extends HandlerExecutionContext,
                          TParameters extends HttpAuthSchemeParameters & EndpointParameters,
                          TInput extends object
                        > extends HttpAuthSchemeParametersProvider<TConfig, TContext, TParameters, TInput> {}"""
                    );
                    w.writeDocs("@internal");
                    w.write(
                        """
                        const createEndpointRuleSetHttpAuthSchemeParametersProvider =
                          <
                            TConfig extends object,
                            TContext extends HandlerExecutionContext,
                            THttpAuthSchemeParameters extends HttpAuthSchemeParameters,
                            TEndpointParameters extends EndpointParameters,
                            TParameters extends THttpAuthSchemeParameters & TEndpointParameters,
                            TInput extends object
                          >(
                            defaultHttpAuthSchemeParametersProvider: HttpAuthSchemeParametersProvider<
                              TConfig,
                              TContext,
                              THttpAuthSchemeParameters,
                              TInput
                            >
                          ): EndpointRuleSetHttpAuthSchemeParametersProvider<
                            TConfig,
                            TContext,
                            THttpAuthSchemeParameters & TEndpointParameters,
                            TInput
                          > =>
                            async (config: TConfig, context: TContext, input: TInput): Promise<TParameters> => {
                              if (!input) {
                                throw new Error(`Could not find \\`input\\` for \
                        \\`defaultEndpointRuleSetHttpAuthSchemeParametersProvider\\``);
                              }
                              const defaultParameters = \
                        await defaultHttpAuthSchemeParametersProvider(config, context, input);
                              const instructionsFn = (getSmithyContext(context) as \
                        EndpointRuleSetSmithyContext)?.commandInstance?.constructor
                                ?.getEndpointParameterInstructions;
                              if (!instructionsFn) {
                                throw new Error(`getEndpointParameterInstructions() is not defined on \
                        \\`$${context.commandName!}\\``);
                              }
                              const endpointParameters = await resolveParams(
                                input as Record<string, unknown>,
                                { getEndpointParameterInstructions: instructionsFn! },
                                config as Record<string, unknown>
                              );
                              return Object.assign(defaultParameters, endpointParameters) as TParameters;
                            };"""
                    );
                    w.writeDocs("@internal");
                    w.openBlock("""
                    const _default$LHttpAuthSchemeParametersProvider = async (\
                    config: $LResolvedConfig, \
                    context: HandlerExecutionContext, \
                    input: object): Promise<_$LHttpAuthSchemeParameters> => {""", "};", serviceName, serviceSymbol.getName(), serviceName, () -> {
                        w.openBlock("return {", "};", () -> {
                            w.write("operation: getSmithyContext(context).operation as string,");
                            for (HttpAuthSchemeParameter parameter : httpAuthSchemeParameters.values()) {
                                w.write("$L: $C,", parameter.name(), parameter.source());
                            }
                        });
                    });
                    w.writeDocs("@internal");
                    w.write(
                        """
                        export const default$LHttpAuthSchemeParametersProvider: \
                        $LHttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(\
                        _default$LHttpAuthSchemeParametersProvider);
                        """,
                        serviceName,
                        serviceName,
                        serviceName
                    );
                }
            },
            new CodeInterceptor<HttpAuthSchemeProviderInterfaceCodeSection, TypeScriptWriter>() {
                @Override
                public Class<HttpAuthSchemeProviderInterfaceCodeSection> sectionType() {
                    return HttpAuthSchemeProviderInterfaceCodeSection.class;
                }

                @Override
                public void write(
                    TypeScriptWriter w,
                    String previousText,
                    HttpAuthSchemeProviderInterfaceCodeSection s
                ) {
                    String serviceName = CodegenUtils.getServiceName(
                        s.getSettings(),
                        s.getModel(),
                        s.getSymbolProvider()
                    );
                    w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                    w.addImport("HttpAuthSchemeProvider", null, TypeScriptDependency.SMITHY_TYPES);
                    w.writeDocs("@internal");
                    w.write(
                        """
                        interface _$LHttpAuthSchemeProvider extends HttpAuthSchemeProvider<$LHttpAuthSchemeParameters> {}
                        """,
                        serviceName,
                        serviceName
                    );
                    w.writeDocs("@internal");
                    w.write(
                        """
                        export interface $LHttpAuthSchemeProvider extends \
                        HttpAuthSchemeProvider<$LHttpAuthSchemeParameters> {}
                        """,
                        serviceName,
                        serviceName
                    );
                }
            },
            new CodeInterceptor<DefaultHttpAuthSchemeProviderFunctionCodeSection, TypeScriptWriter>() {
                @Override
                public Class<DefaultHttpAuthSchemeProviderFunctionCodeSection> sectionType() {
                    return DefaultHttpAuthSchemeProviderFunctionCodeSection.class;
                }

                @Override
                public void write(
                    TypeScriptWriter w,
                    String previousText,
                    DefaultHttpAuthSchemeProviderFunctionCodeSection s
                ) {
                    String serviceName = CodegenUtils.getServiceName(
                        s.getSettings(),
                        s.getModel(),
                        s.getSymbolProvider()
                    );
                    ServiceIndex serviceIndex = ServiceIndex.of(s.getModel());
                    TopDownIndex topDownIndex = TopDownIndex.of(s.getModel());
                    SupportedHttpAuthSchemesIndex authIndex = new SupportedHttpAuthSchemesIndex(
                        codegenContext.integrations(),
                        s.getModel(),
                        s.getSettings()
                    );
                    Map<ShapeId, HttpAuthScheme> effectiveHttpAuthSchemes =
                        AuthUtils.getAllEffectiveNoAuthAwareAuthSchemes(
                            s.getService(),
                            serviceIndex,
                            authIndex,
                            topDownIndex
                        );
                    w.writeDocs("@internal");
                    w.write(
                        """
                        interface EndpointRuleSetHttpAuthSchemeProvider<
                          EndpointParametersT extends EndpointParameters,
                          HttpAuthSchemeParametersT extends HttpAuthSchemeParameters
                        > extends HttpAuthSchemeProvider<EndpointParametersT & HttpAuthSchemeParametersT> { }"""
                    );
                    w.addDependency(TypeScriptDependency.SMITHY_TYPES);
                    w.addImport("SignatureV4MultiRegion", null, AwsDependency.SIGNATURE_V4_MULTIREGION);
                    w.addImport("Logger", null, TypeScriptDependency.SMITHY_TYPES);
                    w.addImport("EndpointV2", null, TypeScriptDependency.SMITHY_TYPES);
                    w.writeDocs("@internal");
                    w.write(
                        """
                        interface DefaultEndpointResolver<EndpointParametersT extends EndpointParameters> {
                          (params: EndpointParametersT, context?: { logger?: Logger; }): EndpointV2;
                        }"""
                    );
                    w.addImport("HttpAuthSchemeId", null, TypeScriptDependency.SMITHY_TYPES);
                    w.writeDocs("@internal");
                    w.write(
                        """
                        const createEndpointRuleSetHttpAuthSchemeProvider = <
                          EndpointParametersT extends EndpointParameters,
                          HttpAuthSchemeParametersT extends HttpAuthSchemeParameters
                        >(
                          defaultEndpointResolver: DefaultEndpointResolver<EndpointParametersT>,
                          defaultHttpAuthSchemeResolver: HttpAuthSchemeProvider<HttpAuthSchemeParametersT>,
                          createHttpAuthOptionFunctions: Record<
                            HttpAuthSchemeId,
                            (authParameters: EndpointParametersT & HttpAuthSchemeParametersT) => HttpAuthOption
                          >
                        ): EndpointRuleSetHttpAuthSchemeProvider<EndpointParametersT, HttpAuthSchemeParametersT> => {
                          const endpointRuleSetHttpAuthSchemeProvider: EndpointRuleSetHttpAuthSchemeProvider<
                            EndpointParametersT,
                            HttpAuthSchemeParametersT
                          > = (authParameters) => {
                            const endpoint: EndpointV2 = defaultEndpointResolver(authParameters);
                            const authSchemes = endpoint.properties?.authSchemes;
                            if (!authSchemes) {
                              return defaultHttpAuthSchemeResolver(authParameters);
                            }
                            const options: HttpAuthOption[] = [];
                            for (const scheme of authSchemes) {
                              const { name: resolvedName, properties = {}, ...rest } = scheme;
                              const name = resolvedName.toLowerCase();
                              if (resolvedName !== name) {
                                console.warn(`HttpAuthScheme has been normalized with lowercasing: \
                        \\`$${resolvedName}\\` to \\`$${name}\\``);
                              }
                              let schemeId;
                              if (name === "sigv4a") {
                                schemeId = "aws.auth#sigv4a";
                                const sigv4Present = authSchemes.find(s => {
                                  const name = s.name.toLowerCase();
                                  return name !== "sigv4a" && name.startsWith("sigv4");
                                });
                                if (SignatureV4MultiRegion.sigv4aDependency() === "none" && sigv4Present) {
                                  // sigv4a -> sigv4 fallback.
                                  continue;
                                }
                              } else if (name.startsWith("sigv4")) {
                                schemeId = "aws.auth#sigv4";
                              } else {
                                throw new Error(`Unknown HttpAuthScheme found in \
                        \\`@smithy.rules#endpointRuleSet\\`: \\`$${name}\\``);
                              }
                              const createOption = createHttpAuthOptionFunctions[schemeId];
                              if (!createOption) {
                                throw new Error(`Could not find HttpAuthOption create function for \
                        \\`$${schemeId}\\``);
                              }
                              const option = createOption(authParameters);
                              option.schemeId = schemeId;
                              option.signingProperties = { ...(option.signingProperties || {}), \
                        ...rest, ...properties };
                              options.push(option);
                            }
                            return options;
                          };

                          return endpointRuleSetHttpAuthSchemeProvider;
                        }"""
                    );
                    w.writeDocs("@internal");
                    w.openBlock("""
                    const _default$LHttpAuthSchemeProvider: _$LHttpAuthSchemeProvider = \
                    (authParameters) => {""", "};", serviceName, serviceName, () -> {
                        w.write("const options: HttpAuthOption[] = [];");
                        w.openBlock("switch (authParameters.operation) {", "};", () -> {
                            var serviceAuthSchemes = serviceIndex.getEffectiveAuthSchemes(
                                s.getService(),
                                AuthSchemeMode.NO_AUTH_AWARE
                            );
                            serviceAuthSchemes.put(SIGV4A_ID, new DynamicTrait(SIGV4A_ID, ObjectNode.objectNode()));
                            for (OperationShape operationShape : topDownIndex.getContainedOperations(s.getService())) {
                                ShapeId operationShapeId = operationShape.getId();
                                var operationAuthSchemes = serviceIndex.getEffectiveAuthSchemes(
                                    s.getService(),
                                    operationShapeId,
                                    AuthSchemeMode.NO_AUTH_AWARE
                                );
                                operationAuthSchemes.put(
                                    SIGV4A_ID,
                                    new DynamicTrait(SIGV4A_ID, ObjectNode.objectNode())
                                );
                                // Skip operation generation if operation auth schemes are equivalent to the default
                                // service auth schemes.
                                if (AuthUtils.areHttpAuthSchemesEqual(serviceAuthSchemes, operationAuthSchemes)) {
                                    continue;
                                }
                                w.openBlock("case $S: {", "};", operationShapeId.getName(), () -> {
                                    operationAuthSchemes
                                        .keySet()
                                        .forEach(shapeId -> {
                                            w.write(
                                                "options.push(create$LHttpAuthOption(authParameters));",
                                                HttpAuthSchemeProviderGenerator.normalizeAuthSchemeName(shapeId)
                                            );
                                        });
                                    w.write("break;");
                                });
                            }
                            w.openBlock("default: {", "};", () -> {
                                serviceAuthSchemes
                                    .keySet()
                                    .forEach(shapeId -> {
                                        w.write(
                                            "options.push(create$LHttpAuthOption(authParameters));",
                                            HttpAuthSchemeProviderGenerator.normalizeAuthSchemeName(shapeId)
                                        );
                                    });
                            });
                        });
                        w.write("return options;");
                    });
                    w.addImport("defaultEndpointResolver", null, EndpointsV2Generator.ENDPOINT_RESOLVER_DEPENDENCY);
                    w.writeInline(
                        """
                        /**
                         * @internal
                         */
                        export const default$LHttpAuthSchemeProvider: $LHttpAuthSchemeProvider = \
                        createEndpointRuleSetHttpAuthSchemeProvider(\
                        defaultEndpointResolver, \
                        _default$LHttpAuthSchemeProvider, """,
                        serviceName,
                        serviceName,
                        serviceName
                    );
                    w.openBlock("{", "});", () -> {
                        for (HttpAuthScheme scheme : effectiveHttpAuthSchemes.values()) {
                            w.write(
                                "$S: create$LHttpAuthOption,",
                                scheme.getSchemeId(),
                                HttpAuthSchemeProviderGenerator.normalizeAuthSchemeName(scheme.getSchemeId())
                            );
                        }
                    });
                }
            }
        );
    }
}
