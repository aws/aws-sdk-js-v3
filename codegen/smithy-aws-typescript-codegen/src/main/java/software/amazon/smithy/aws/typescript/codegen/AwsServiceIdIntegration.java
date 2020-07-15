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

import java.util.Arrays;
import java.util.logging.Logger;
import java.util.stream.Collectors;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.Symbol;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.StringUtils;

/**
 * Uses the {@code aws.api#service$sdkId} trait property to determine the
 * name of a service.
 */
public final class AwsServiceIdIntegration implements TypeScriptIntegration {

    private static final Logger LOGGER = Logger.getLogger(AwsServiceIdIntegration.class.getName());

    @Override
    public SymbolProvider decorateSymbolProvider(
            TypeScriptSettings settings, Model model, SymbolProvider symbolProvider) {
        return shape -> {
            Symbol symbol = symbolProvider.toSymbol(shape);

            if (!shape.isServiceShape()) {
                return symbol;
            }

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
        String name = Arrays.asList(serviceId.split(" ")).stream()
                .map(StringUtils::capitalize)
                .collect(Collectors.joining("")) + "Client";
        return symbol.toBuilder()
                .name(name)
                .namespace("./" + name, "/")
                .definitionFile(name + ".ts")
                .build();
    }
}
