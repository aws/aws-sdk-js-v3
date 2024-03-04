/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

package software.amazon.smithy.aws.typescript.codegen;

import java.util.Collection;
import java.util.Collections;
import java.util.Map;
import java.util.Set;
import java.util.function.Consumer;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.ServiceIndex;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.ShapeId;
import software.amazon.smithy.model.traits.Trait;
import software.amazon.smithy.typescript.codegen.LanguageTarget;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.MapUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Detects when to add sigv4a signer.
 */
@SmithyInternalApi
public final class AddSigv4aPlugin implements TypeScriptIntegration {
    public Map<String, Consumer<TypeScriptWriter>> getRuntimeConfigWriters(
        TypeScriptSettings settings,
        Model model,
        SymbolProvider symbolProvider,
        LanguageTarget target
    ) {
        boolean useSigv4aCapableSigner = false;

        ServiceIndex serviceIndex = ServiceIndex.of(model);
        Set<ServiceShape> services = model.getServiceShapes();
        for (ServiceShape service : services) {
            Map<ShapeId, Trait> authSchemes = serviceIndex.getAuthSchemes(service);
            useSigv4aCapableSigner = useSigv4aCapableSigner || usesSigv4a(authSchemes);
            if (useSigv4aCapableSigner) {
                break;
            }

            TopDownIndex topDownIndex = TopDownIndex.of(model);
            for (OperationShape operationShape : topDownIndex.getContainedOperations(service)) {
                useSigv4aCapableSigner = usesSigv4a(operationShape.getAllTraits());
                if (useSigv4aCapableSigner) {
                    break;
                }
            }
        }

        if (!useSigv4aCapableSigner) {
            return Collections.emptyMap();
        }

        switch (target) {
            case SHARED:
                return MapUtils.of("signerConstructor", writer -> {
                    writer.addDependency(AwsDependency.SIGNATURE_V4_MULTIREGION)
                        .addImport("SignatureV4MultiRegion", "SignatureV4MultiRegion",
                                AwsDependency.SIGNATURE_V4_MULTIREGION)
                        .write("SignatureV4MultiRegion");
                });
            default:
                return Collections.emptyMap();
        }
    }

    private boolean usesSigv4a(Collection<Trait> traits) {
        return traits.stream()
            .anyMatch(trait -> trait.toString().equals("aws.auth#sigv4a"));
    }

    private boolean usesSigv4a(Map<ShapeId, Trait> traits) {
        return usesSigv4a(traits.values());
    }
}
