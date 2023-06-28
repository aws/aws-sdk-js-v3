/*
 * Copyright 2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

package software.amazon.smithy.aws.typescript.codegen;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isSigV4Service;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_CONFIG;
import static software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin.Convention.HAS_MIDDLEWARE;

import java.nio.file.Paths;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.logging.Logger;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.OptionalAuthTrait;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.RuntimeClientPlugin;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.ListUtils;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SetUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Configure clients with AWS auth configurations and plugin.
 */
@SmithyInternalApi
public final class AddAwsAuthPlugin implements TypeScriptIntegration {
    static final String STS_CLIENT_PREFIX = "sts-client-";
    static final String ROLE_ASSUMERS_FILE = "defaultRoleAssumers";
    static final String ROLE_ASSUMERS_TEST_FILE = "defaultRoleAssumers.spec";
    static final String STS_ROLE_ASSUMERS_FILE = "defaultStsRoleAssumers";

    private static final Logger LOGGER = Logger.getLogger(AddAwsAuthPlugin.class.getName());

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        if (!isSigV4Service(service) && isAwsService(service)) {
            ServiceTrait serviceTrait = service.getTrait(ServiceTrait.class).get();
            settings.setDefaultSigningName(
                serviceTrait.getArnNamespace()
            );
            return;
        }

        if (!isSigV4Service(service)) {
            return;
        }

        if (!isAwsService(service)) {
            writer.writeDocs("The service name to use as the signing service for AWS Auth\n@internal")
                    .write("signingName?: string;\n");
        }

        if (!areAllOptionalAuthOperations(model, service)) {
            writer.addImport("Credentials", "__Credentials", TypeScriptDependency.AWS_SDK_TYPES);
            writer.writeDocs("Default credentials provider; Not available in browser runtime.\n"
                            + "@internal");
            writer.write("credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;\n");
        }

        try {
            ServiceTrait serviceTrait = service.getTrait(ServiceTrait.class).get();
            settings.setDefaultSigningName(
                service.getTrait(SigV4Trait.class).map(SigV4Trait::getName)
                    .orElse(serviceTrait.getArnNamespace())
            );
        } catch (Exception e) {
            LOGGER.warning("Unable to set service default signing name. A SigV4 or Service trait is needed.");
        }
    }

    // Only one of AwsAuth or SigV4Auth should be used
    // AwsAuth - for AWS services
    // SigV4Auth - for non AWS services
    @Override
    public List<RuntimeClientPlugin> getClientPlugins() {
        return ListUtils.of(
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_CONFIG)
                    .servicePredicate((m, s) -> isSigV4Service(s)
                            && isAwsService(s)
                            && !testServiceId(s, "STS")
                            && !areAllOptionalAuthOperations(m, s))
                    .build(),
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "SigV4Auth", HAS_CONFIG)
                    .servicePredicate((m, s) -> isSigV4Service(s)
                            && !isAwsService(s)
                            && !areAllOptionalAuthOperations(m, s))
                    .build(),
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.STS_MIDDLEWARE.dependency,
                            "StsAuth", HAS_CONFIG)
                    .additionalResolveFunctionParamsSupplier((m, s, o) -> new HashMap<String, Object>() {{
                        put("stsClientCtor", Symbol.builder().name("STSClient").build());
                    }})
                    .servicePredicate((m, s) -> testServiceId(s, "STS"))
                    .build(),
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_MIDDLEWARE)
                    // See operationUsesAwsAuth() below for AwsAuth Middleware customizations.
                    .servicePredicate((m, s) -> isSigV4Service(s)
                            && isAwsService(s)
                            && !testServiceId(s, "STS")
                            && !hasOptionalAuthOperation(m, s)
                    ).build(),
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "SigV4Auth", HAS_MIDDLEWARE)
                    // See operationUsesAwsAuth() below for AwsAuth Middleware customizations.
                    .servicePredicate((m, s) -> isSigV4Service(s)
                            && !isAwsService(s)
                            && !hasOptionalAuthOperation(m, s)
                    ).build(),
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "AwsAuth", HAS_MIDDLEWARE)
                    .operationPredicate((m, s, o) -> isSigV4Service(s)
                            && isAwsService(s)
                            && operationUsesAwsAuth(m, s, o))
                    .build(),
            RuntimeClientPlugin.builder()
                    .withConventions(AwsDependency.MIDDLEWARE_SIGNING.dependency, "SigV4Auth", HAS_MIDDLEWARE)
                    .operationPredicate((m, s, o) -> isSigV4Service(s)
                            && !isAwsService(s)
                            && operationUsesAwsAuth(m, s, o))
                    .build()

        );
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
                String signingService = service.getTrait(SigV4Trait.class).get().getName();
                return MapUtils.of(
                    "signingName", writer -> {
                        writer.write("$S", signingService);
                    }
                );
            case BROWSER:
                return MapUtils.of(
                    "credentialDefaultProvider", writer -> {
                        writer.write("((_: unknown) => () => Promise.reject(new Error(\"Credential is missing\")))");
                    }
                );
            case NODE:
                return MapUtils.of(
                    "credentialDefaultProvider", writer -> {
                        if (!testServiceId(service, "STS")) {
                            writer.addDependency(AwsDependency.STS_CLIENT);
                            writer.addImport("decorateDefaultCredentialProvider", "decorateDefaultCredentialProvider",
                                    AwsDependency.STS_CLIENT.packageName);
                        } else {
                            writer.addImport("decorateDefaultCredentialProvider", "decorateDefaultCredentialProvider",
                                Paths.get(".", CodegenUtils.SOURCE_FOLDER, STS_ROLE_ASSUMERS_FILE).toString());
                        }
                        writer.addDependency(AwsDependency.CREDENTIAL_PROVIDER_NODE);
                        writer.addImport("defaultProvider", "credentialDefaultProvider",
                                AwsDependency.CREDENTIAL_PROVIDER_NODE.packageName);
                        writer.write("decorateDefaultCredentialProvider(credentialDefaultProvider)");
                    }
                );
            default:
                return Collections.emptyMap();
        }
    }

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        TypeScriptSettings settings = codegenContext.settings();
        Model model = codegenContext.model();
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory = codegenContext.writerDelegator()::useFileWriter;

        writeAdditionalFiles(settings, model, writerFactory);

        writerFactory.accept(Paths.get(CodegenUtils.SOURCE_FOLDER, "index.ts").toString(), writer -> {
            writeAdditionalExports(settings, model, writer);
        });
    }

    private void writeAdditionalFiles(
        TypeScriptSettings settings,
        Model model,
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
    ) {
        ServiceShape service = settings.getService(model);
        if (!testServiceId(service, "STS")) {
            return;
        }
        String noTouchNoticePrefix = "// Please do not touch this file. It's generated from template in:\n"
                + "// https://github.com/aws/aws-sdk-js-v3/blob/main/codegen/smithy-aws-typescript-codegen/"
                + "src/main/resources/software/amazon/smithy/aws/typescript/codegen/";
        writerFactory.accept(Paths.get(CodegenUtils.SOURCE_FOLDER, "defaultRoleAssumers.ts").toString(), writer -> {
            String resourceName = String.format("%s%s.ts", STS_CLIENT_PREFIX, ROLE_ASSUMERS_FILE);
            String source = IoUtils.readUtf8Resource(getClass(), resourceName);
            writer.write("$L$L", noTouchNoticePrefix, resourceName);
            writer.write("$L", source);
        });
        writerFactory.accept(Paths.get(CodegenUtils.SOURCE_FOLDER, "defaultStsRoleAssumers.ts").toString(), writer -> {
            String resourceName = String.format("%s%s.ts", STS_CLIENT_PREFIX, STS_ROLE_ASSUMERS_FILE);
            String source = IoUtils.readUtf8Resource(getClass(), resourceName);
            writer.write("$L$L", noTouchNoticePrefix, resourceName);
            writer.write("$L", source);
        });
        writerFactory.accept("test/defaultRoleAssumers.spec.ts", writer -> {
            String resourceName = String.format("%s%s.ts", STS_CLIENT_PREFIX, ROLE_ASSUMERS_TEST_FILE);
            String source = IoUtils.readUtf8Resource(getClass(), resourceName);
            writer.write("$L$L", noTouchNoticePrefix, resourceName);
            writer.write("$L", source);
        });
    }

    private void writeAdditionalExports(
        TypeScriptSettings settings,
        Model model,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        if (!testServiceId(service, "STS")) {
            return;
        }
        writer.write("export * from $S", Paths.get(".", ROLE_ASSUMERS_FILE).toString());
    }

    private static boolean testServiceId(Shape serviceShape, String expectedId) {
        return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
    }

    private static boolean operationUsesAwsAuth(Model model, ServiceShape service, OperationShape operation) {
        // STS doesn't need auth for AssumeRoleWithWebIdentity, AssumeRoleWithSAML.
        // Remove when optionalAuth model update is published in 0533102932.
        if (testServiceId(service, "STS")) {
            Boolean isUnsignedCommand = SetUtils
                    .of("AssumeRoleWithWebIdentity", "AssumeRoleWithSAML")
                    .contains(operation.getId().getName(service));
            return !isUnsignedCommand;
        }

        // optionalAuth trait doesn't require authentication.
        if (hasOptionalAuthOperation(model, service)) {
            return !operation.hasTrait(OptionalAuthTrait.class);
        }
        return false;
    }

    private static boolean hasOptionalAuthOperation(Model model, ServiceShape service) {
        TopDownIndex topDownIndex = TopDownIndex.of(model);
        Set<OperationShape> operations = topDownIndex.getContainedOperations(service);
        for (OperationShape operation : operations) {
            if (operation.hasTrait(OptionalAuthTrait.class)) {
                return true;
            }
        }
        return false;
    }

    private static boolean areAllOptionalAuthOperations(Model model, ServiceShape service) {
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
