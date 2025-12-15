/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.nio.file.Paths;
import java.util.Arrays;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.CodegenUtils;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;
import software.amazon.smithy.utils.StringUtils;

/**
 * Uses the {@code aws.api#service$sdkId} trait property to determine the
 * name of a service.
 */
@SmithyInternalApi
public final class AwsServiceIdIntegration implements TypeScriptIntegration {

    private static final Logger LOGGER = Logger.getLogger(AwsServiceIdIntegration.class.getName());

    /**
     * Decorating the symbol provider should be run before any other integration.
     */
    @Override
    public byte priority() {
        return Byte.MAX_VALUE;
    }

    @Override
    public SymbolProvider decorateSymbolProvider(
        Model model,
        TypeScriptSettings settings,
        SymbolProvider symbolProvider
    ) {
        return shape -> {
            Symbol symbol = symbolProvider.toSymbol(shape);

            if (!shape.isServiceShape() || !settings.generateClient()) {
                return symbol;
            }

            // TODO: Should this WARNING be avoided somehow if client is not for an AWS service?
            // If the SDK service ID trait is present, use that, otherwise fall back to
            // the default naming strategy for the service.
            return shape.getTrait(ServiceTrait.class)
                .map(ServiceTrait::getSdkId)
                .map(id -> updateServiceSymbol(symbol, id))
                .orElseGet(() -> {
                    LOGGER.warning(String.format("No `%s` trait found on `%s`", ServiceTrait.ID, shape.getId()));
                    return symbol;
                });
        };
    }

    private static Symbol updateServiceSymbol(Symbol symbol, String serviceId) {
        String name = Arrays.asList(serviceId.split(" "))
            .stream()
            .map(StringUtils::capitalize)
            .collect(Collectors.joining("")) + "Client";
        return symbol.toBuilder()
            .name(name)
            .namespace(Paths.get(".", CodegenUtils.SOURCE_FOLDER, name).toString(), "/")
            .definitionFile(Paths.get(".", CodegenUtils.SOURCE_FOLDER, name + ".ts").toString())
            .build();
    }
}
