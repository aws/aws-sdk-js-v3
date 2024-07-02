/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen.auth.http.integration;

import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isAwsService;
import static software.amazon.smithy.aws.typescript.codegen.AwsTraitsUtils.isSigV4Service;

import java.util.logging.Logger;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.aws.traits.auth.SigV4Trait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Configure clients with Default AWS Signing Name.
 */
@SmithyInternalApi
public final class AddAwsDefaultSigningName implements TypeScriptIntegration {
    private static final Logger LOGGER = Logger.getLogger(AddAwsDefaultSigningName.class.getName());

    /**
     * Integration should be skipped if the `useLegacyAuth` flag is true.
     */
    @Override
    public boolean matchesSettings(TypeScriptSettings settings) {
        return !settings.useLegacyAuth();
    }

    @Override
    public void addConfigInterfaceFields(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        TypeScriptWriter writer
    ) {
        ServiceShape service = settings.getService(model);
        // Do nothing if service doesn't use sigv4 and is not an AWS service
        if (!isSigV4Service(service) && !isAwsService(service)) {
            return;
        }

        // Write config field if service uses sigv4 and is not an AWS service
        if (isSigV4Service(service) && !isAwsService(service)) {
            writer
                .writeDocs("The service name to use as the signing service for AWS Auth\n@internal")
                .write("signingName?: string;\n");
        }

        // Set default name setting for service based on: SigV4 first, then the AWS Service trait
        try {
            settings.setDefaultSigningName(
                service.getTrait(SigV4Trait.class)
                    .map(SigV4Trait::getName)
                    .orElseGet(() -> service.expectTrait(ServiceTrait.class).getArnNamespace())
            );
        } catch (Exception e) {
            LOGGER.warning("Unable to set service default signing name. A SigV4 or Service trait is needed.");
        }
    }

}
