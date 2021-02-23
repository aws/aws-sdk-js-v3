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
import java.util.Calendar;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.traits.DocumentationTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.StringUtils;

public final class AwsPackageFixturesGeneratorIntegration implements TypeScriptIntegration {
    @Override
    public void writeAdditionalFiles(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
    ) {
        writerFactory.accept(".gitignore", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "gitignore");
            writer.write(resource);
        });
        writerFactory.accept(".npmignore", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "npmignore");
            writer.write(resource);
        });
        writerFactory.accept("LICENSE", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "LICENSE.template");
            resource = resource.replace("${year}", Integer.toString(Calendar.getInstance().get(Calendar.YEAR)));
            writer.write(resource);
        });
        writerFactory.accept("README.md", writer -> {
            ServiceShape service = settings.getService(model);
            String resource =  IoUtils.readUtf8Resource(getClass(), "README.md.template");
            resource = resource.replaceAll(Pattern.quote("${packageName}"), settings.getPackageName());

            String sdkId = service.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse(null);
            String clientName = Arrays.asList(sdkId.split(" ")).stream()
                    .map(StringUtils::capitalize)
                    .collect(Collectors.joining(""));
            resource = resource.replaceAll(Pattern.quote("${serviceId}"), clientName);

            String rawDocumentation = service.getTrait(DocumentationTrait.class)
                    .map(DocumentationTrait::getValue)
                    .orElse("");
            String documentation = Arrays.asList(rawDocumentation.split("\n")).stream()
                    .map(StringUtils::trim)
                    .collect(Collectors.joining("\n"));
            resource = resource.replaceAll(Pattern.quote("${documentation}"), documentation);

            TopDownIndex topDownIndex = TopDownIndex.of(model);
            OperationShape firstOperation = topDownIndex.getContainedOperations(service).iterator().next();
            String operationName = firstOperation.getId().getName();
            resource = resource.replaceAll(Pattern.quote("${commandName}"), operationName);
            resource = resource.replaceAll(Pattern.quote("${operationName}"),
                    operationName.substring(0, 1).toLowerCase() + operationName.substring(1));

            writer.write(resource);
        });
    }
}
