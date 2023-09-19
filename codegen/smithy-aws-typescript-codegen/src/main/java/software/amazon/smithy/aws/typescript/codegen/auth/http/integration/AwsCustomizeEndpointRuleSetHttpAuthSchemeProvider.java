/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import java.nio.file.Paths;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.rulesengine.traits.EndpointRuleSetTrait;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.auth.AuthUtils;
import software.amazon.smithy.typescript.codegen.auth.http.HttpAuthScheme;
import software.amazon.smithy.typescript.codegen.auth.http.SupportedHttpAuthSchemesIndex;
import software.amazon.smithy.typescript.codegen.auth.http.integration.AddSigV4AuthPlugin;
import software.amazon.smithy.typescript.codegen.auth.http.integration.HttpAuthTypeScriptIntegration;
import software.amazon.smithy.typescript.codegen.endpointsV2.EndpointsV2Generator;
import software.amazon.smithy.typescript.codegen.sections.SmithyContextCodeSection;
import software.amazon.smithy.utils.CodeInterceptor;
import software.amazon.smithy.utils.CodeSection;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Customize default {@code httpAuthSchemeProvider} and {@code httpAuthSchemeParametersProvider} for AWS SDKs.
 *
 * This code generates `HttpAuthSchemeProvider` interfaces based on {@code @smithy.rules#endpointRuleSet} for
 * identity and auth purposes only.
 *
 * This is the experimental behavior for `experimentalIdentityAndAuth`.
 */
@SmithyInternalApi
public final class AwsCustomizeEndpointRuleSetHttpAuthSchemeProvider implements HttpAuthTypeScriptIntegration {
    private static final Set<ShapeId> ENDPOINT_RULESET_HTTP_AUTH_SCHEME_SERVICES = Set.of(
        ShapeId.from("com.amazonaws.s3#AmazonS3"),
        ShapeId.from("com.amazonaws.eventbridge#AWSEvents"));

    /**
     * Integration should only be used if `experimentalIdentityAndAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return settings.getExperimentalIdentityAndAuth()
            && ENDPOINT_RULESET_HTTP_AUTH_SCHEME_SERVICES.contains(settings.getService());
    }

    @Override
    public List<String> runAfter() {
        return List.of(AddSigV4AuthPlugin.class.getCanonicalName());
    }

    @Override
    public Optional<Symbol> getDefaultHttpAuthSchemeProvider() {
        return Optional.of(Symbol.builder()
            .name("defaultEndpointRuleSetHttpAuthSchemeProvider")
            .namespace(AuthUtils.AUTH_HTTP_PROVIDER_DEPENDENCY.getPackageName(), "/")
            .build());
    }

    @Override
    public Optional<Symbol> getDefaultHttpAuthSchemeParametersProvider() {
        return Optional.of(Symbol.builder()
            .name("defaultEndpointRuleSetHttpAuthSchemeParametersProvider")
            .namespace(AuthUtils.AUTH_HTTP_PROVIDER_DEPENDENCY.getPackageName(), "/")
            .build());
    }

    @Override
    public void customizeSupportedHttpAuthSchemes(SupportedHttpAuthSchemesIndex supportedHttpAuthSchemesIndex) {
        // TODO(experimentalIdentityAndAuth): should be removed when @aws.auth#sigv4a is supported
        ShapeId sigv4a = ShapeId.from("aws.auth#sigv4a");
        if (supportedHttpAuthSchemesIndex.getHttpAuthScheme(sigv4a) == null) {
            ShapeId sigv4 = ShapeId.from("aws.auth#sigv4");
            HttpAuthScheme sigv4Scheme = supportedHttpAuthSchemesIndex.getHttpAuthScheme(sigv4);
            supportedHttpAuthSchemesIndex.putHttpAuthScheme(sigv4a, sigv4Scheme.toBuilder()
                .schemeId(sigv4a)
                .traitId(sigv4)
                .build());
        }
    }

    @Override
    public List<? extends CodeInterceptor<? extends CodeSection, TypeScriptWriter>> interceptors(
            TypeScriptCodegenContext codegenContext
    ) {
        return List.of(CodeInterceptor.appender(SmithyContextCodeSection.class, (w, s) -> {
            if (s.getService().hasTrait(EndpointRuleSetTrait.ID)) {
                w.openBlock("endpointRuleSet: {", "},", () -> {
                    w.write("getEndpointParameterInstructions: $T.getEndpointParameterInstructions,",
                        codegenContext.symbolProvider().toSymbol(s.getOperation()));
                });
            }
        }));
    }

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        if (!codegenContext.settings().generateClient()) {
            return;
        }

        codegenContext.writerDelegator().useFileWriter(AuthUtils.HTTP_AUTH_SCHEME_PROVIDER_PATH, w -> {
            Model model = codegenContext.model();
            ServiceShape serviceShape = codegenContext.settings().getService(model);
            SymbolProvider symbolProvider = codegenContext.symbolProvider();
            Symbol serviceSymbol = symbolProvider.toSymbol(serviceShape);
            String service = CodegenUtils.getServiceName(codegenContext.settings(), model, symbolProvider);

            generateEndpointRuleSetHttpAuthSchemeParametersInterface(w, service);
            generateEndpointRuleSetHttpAuthSchemeParametersProviderInterface(w, service, serviceSymbol);
            generateDefaultEndpointRuleSetHttpAuthSchemeParametersProviderFunction(
                w, symbolProvider, service, serviceShape, model);
            generateEndpointRuleSetHttpAuthSchemeProviderInterface(w, service);
            generateDefaultEndpointRuleSetHttpAuthSchemeProviderFunction(w, service);
        });
    }

    /*
    import { EndpointParameters } from "../endpoint/EndpointParameters.ts";

    // ...

    export interface WeatherEndpointRuleSetHttpAuthSchemeParameters
        extends EndpointParameters, WeatherHttpAuthSchemeParameters {}
    */
    private void generateEndpointRuleSetHttpAuthSchemeParametersInterface(
        TypeScriptWriter w,
        String service
    ) {
        w.addImport("EndpointParameters", null, EndpointsV2Generator.ENDPOINT_PARAMETERS_DEPENDENCY);
        w.write("""
            /**
             * @internal
             */
            export interface $LEndpointRuleSetHttpAuthSchemeParameters extends \
            EndpointParameters, $LHttpAuthSchemeParameters {}
            """,
            service, service);
    }

    /*
    import { HttpAuthSchemeParametersProvider } from "@smithy/types";

    import { WeatherClientResolvedConfig } from "../WeatherClient";
    import { EndpointParameters } from "../endpoint/EndpointParameters.ts";

    // ...

    export interface WeatherEndpointRuleSetHttpAuthSchemeParametersProvider extends
        HttpAuthSchemeParametersProvider<WeatherResolvedConfig, WeatherEndpointRuleSetHttpAuthSchemeParameters> {}
    */
    private void generateEndpointRuleSetHttpAuthSchemeParametersProviderInterface(
        TypeScriptWriter w,
        String service,
        Symbol serviceSymbol
    ) {
        w.addRelativeImport(serviceSymbol.getName() + "ResolvedConfig", null,
            Paths.get(".", serviceSymbol.getNamespace()));
        w.addDependency(TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.addImport("HttpAuthSchemeParametersProvider", null, TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.write("""
            /**
             * @internal
             */
            export interface $LEndpointRuleSetHttpAuthSchemeParametersProvider extends \
            HttpAuthSchemeParametersProvider<$LResolvedConfig, $LEndpointRuleSetHttpAuthSchemeParameters> {}
            """,
            service, serviceSymbol.getName(), service);
    }

    /*
    import { createEndpointRuleSetHttpAuthSchemeParametersProvider } from "@smithy/util-identity-and-auth";

    // ...

    export const defaultEndpointRuleSetHttpAuthSchemeParametersProvider: WeatherEndpointRuleSetHttpAuthSchemeParametersProvider =
      createEndpointRuleSetHttpAuthSchemeParametersProvider(defaultWeatherHttpAuthSchemeParametersProvider);
    */
    private void generateDefaultEndpointRuleSetHttpAuthSchemeParametersProviderFunction(
        TypeScriptWriter w,
        SymbolProvider symbolProvider,
        String service,
        ServiceShape serviceShape,
        Model model
    ) {
        w.addDependency(TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.addImport("createEndpointRuleSetHttpAuthSchemeParametersProvider", null,
            TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.write("""
            /**
             * @internal
             */
            export const defaultEndpointRuleSetHttpAuthSchemeParametersProvider: \
            $LEndpointRuleSetHttpAuthSchemeParametersProvider = createEndpointRuleSetHttpAuthSchemeParametersProvider(\
            default$LHttpAuthSchemeParametersProvider);
            """,
            service, service);
    }

    /*
    import { EndpointParameters } from "../endpoint/EndpointParameters.ts";

    // ...

    export interface WeatherEndpointRuleSetHttpAuthSchemeProvider extends
        HttpAuthSchemeProvider<WeatherEndpointRuleSetHttpAuthSchemeParameters> {}
    */
    private void generateEndpointRuleSetHttpAuthSchemeProviderInterface(
        TypeScriptWriter w,
        String service
    ) {
        w.addDependency(TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.addImport("HttpAuthSchemeProvider", null, TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.write("""
            /**
             * @internal
             */
            export interface $LEndpointRuleSetHttpAuthSchemeProvider extends \
            HttpAuthSchemeProvider<$LEndpointRuleSetHttpAuthSchemeParameters> {}
            """,
            service, service);
    }

    /*
    import { createEndpointRuleSetHttpAuthSchemeProvider } from "@smithy/util-identity-and-auth";
    import { defaultEndpointResolver } from "../endpoint/endpointResolver.ts";

    // ...

    export const defaultEndpointRuleSetHttpAuthSchemeProvider: WeatherEndpointRuleSetHttpAuthSchemeProvider =
      createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, defaultWeatherHttpAuthSchemeProvider);
    */
    private void generateDefaultEndpointRuleSetHttpAuthSchemeProviderFunction(
        TypeScriptWriter w,
        String service
    ) {
        w.addDependency(TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.addImport("createEndpointRuleSetHttpAuthSchemeProvider", null,
            TypeScriptDependency.EXPERIMENTAL_IDENTITY_AND_AUTH);
        w.addImport("defaultEndpointResolver", null, EndpointsV2Generator.ENDPOINT_RESOLVER_DEPENDENCY);
        w.write("""
            /**
             * @internal
             */
            export const defaultEndpointRuleSetHttpAuthSchemeProvider: $LEndpointRuleSetHttpAuthSchemeProvider = \
            createEndpointRuleSetHttpAuthSchemeProvider(defaultEndpointResolver, default$LHttpAuthSchemeProvider);
            """,
            service, service);
    }
}
