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

import java.util.function.Consumer;
import java.util.logging.Logger;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;

/**
 * AWS clients need to know the service name used to sign requests,
 * credentials for signing requests, and the region name used to resolve
 * endpoints.
 *
 * <p>This plugin adds the following config interface fields:
 *
 * <ul>
 *     <li>signingName: Defines the service name that signs AWS requests.</li>
 *     <li>credentialDefaultProvider: Provides credentials if no credentials
 *     are explicitly provided.</li>
 *     <li>regionDefaultProvider: Provides a region if no region is
 *     explicitly provided</li>
 * </ul>
 *
 * <p>This plugin adds the following Node runtime specific values:
 *
 * <ul>
 *     <li>signingName: Sets this to the signing name derived from the model.</li>
 *     <li>credentialDefaultProvider: Uses the default credential provider that
 *     checks things like environment variables and the AWS config file.</li>
 *     <li>regionDefaultProvider: Uses the default region provider that
 *     checks things like environment variables and the AWS config file.</li>
 * </ul>
 *
 * <p>This plugin adds the following Browser runtime specific values:
 *
 * <ul>
 *     <li>signingName: Sets this to the signing name derived from the model.</li>
 *     <li>credentialDefaultProvider: Throws an exception since credentials must
 *     be explicitly provided in the browser (environment variables and
 *     the shared config can't be resolved from the browser).</li>
 *     <li>regionDefaultProvider: Throws an exception since a region must
 *     be explicitly provided in the browser (environment variables and
 *     the shared config can't be resolved from the browser).</li>
 * </ul>
 */
public final class AddAwsRuntimeConfig implements TypeScriptIntegration {

    private static final Logger LOGGER = Logger.getLogger(AddAwsRuntimeConfig.class.getName());

    @Override
    public void addConfigInterfaceFields(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer
    ) {
        writer.addImport("Provider", "__Provider", TypeScriptDependency.AWS_SDK_TYPES.packageName);
        writer.addImport("Credentials", "__Credentials", TypeScriptDependency.AWS_SDK_TYPES.packageName);

        writer.writeDocs("The service name with which to sign requests.")
                .write("signingName?: string;\n");
        writer.writeDocs("Default credentials provider; Not available in browser runtime")
                .write("credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;\n");
        writer.writeDocs("Provider function that return promise of a region string")
                .write("regionDefaultProvider?: (input: any) => __Provider<string>;\n");
    }

    @Override
    public void addRuntimeConfigValues(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            TypeScriptWriter writer,
            LanguageTarget target
    ) {
        ServiceShape service = settings.getService(model);
        if (target.equals(LanguageTarget.SHARED)) {
            String signingName = service.getTrait(ServiceTrait.class)
                    .map(ServiceTrait::getArnNamespace)
                    .orElse(null);
            if (signingName != null) {
                writer.write("signingName: $S,", signingName);
            } else {
                LOGGER.info("Cannot generate a signing name for the client because no aws.api#Service "
                        + "trait was found on " + service.getId());
            }
        }

        getRuntimeConfig(writer, service, target);
    }

    private void getRuntimeConfig(TypeScriptWriter writer, ServiceShape service, LanguageTarget target) {
        String serviceId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("");
        if (serviceId.equals("Cognito Identity")) {
            getCognitoIdentityConfig(target).accept(writer);
        } else {
            getDefaultConfig(target).accept(writer);
        }
    }

    private Consumer<TypeScriptWriter> getDefaultConfig(LanguageTarget target) {
        switch (target) {
            case BROWSER:
                return writer -> {
                    writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
                    writer.addImport("invalidFunction", "invalidFunction",
                            TypeScriptDependency.INVALID_DEPENDENCY.packageName);
                    writer.write("credentialDefaultProvider: invalidFunction(\"Credential is missing\") as any,");
                    writer.write("regionDefaultProvider: invalidFunction(\"Region is missing\") as any,");
                };
            case NODE:
                return  writer -> {
                    writer.addDependency(AwsDependency.CREDENTIAL_PROVIDER_NODE);
                    writer.addDependency(AwsDependency.REGION_PROVIDER);
                    writer.addImport("defaultProvider", "credentialDefaultProvider",
                            AwsDependency.CREDENTIAL_PROVIDER_NODE.packageName);
                    writer.addImport("defaultProvider", "regionDefaultProvider",
                            AwsDependency.REGION_PROVIDER.packageName);
                    writer.write("credentialDefaultProvider,");
                    writer.write("regionDefaultProvider,");
                };
            default:
                return writer -> LOGGER.info("Unknown JavaScript target: " + target);
        }
    }

    /**
     * Cognito Identity client doesn't require signing for some commands, so we are tolerant to
     * credential config resolver failure.
     */
    private Consumer<TypeScriptWriter> getCognitoIdentityConfig(LanguageTarget target) {
        switch (target) {
            case BROWSER:
                return writer -> {
                    writer.addDependency(TypeScriptDependency.INVALID_DEPENDENCY);
                    writer.addImport("invalidFunction", "invalidFunction",
                            TypeScriptDependency.INVALID_DEPENDENCY.packageName);
                    writer.write("credentialDefaultProvider: (() => {}) as any,");
                    writer.write("regionDefaultProvider: invalidFunction(\"Region is missing\") as any,");
                };
            case NODE:
                return writer -> {
                    writer.addDependency(AwsDependency.CREDENTIAL_PROVIDER_NODE);
                    writer.addImport("defaultProvider", "credentialDefaultProvider",
                            AwsDependency.CREDENTIAL_PROVIDER_NODE.packageName);
                    writer.addDependency(AwsDependency.REGION_PROVIDER);
                    writer.addImport("defaultProvider", "regionDefaultProvider",
                            AwsDependency.REGION_PROVIDER.packageName);
                    writer.openBlock(
                            "credentialDefaultProvider: ((options: any) => {", "}) as any,", () -> {
                        writer.write("try {").indent();
                            writer.write("return credentialDefaultProvider(options);");
                        writer.dedent().write("} catch(e){}");
                        writer.write("return {}");
                    });
                    writer.write("regionDefaultProvider,");
                };
            default:
                return writer -> LOGGER.info("Unknown JavaScript target: " + target);
        }
    }
}
