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

import java.util.Arrays;
import java.util.Calendar;
import java.util.Collection;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.function.BiConsumer;
import java.util.function.Consumer;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.knowledge.TopDownIndex;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.DocumentationTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.SmithyInternalApi;
import software.amazon.smithy.utils.StringUtils;

@SmithyInternalApi
public final class AwsPackageFixturesGeneratorIntegration implements TypeScriptIntegration {
    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        TypeScriptSettings settings = codegenContext.settings();
        Model model = codegenContext.model();
        SymbolProvider symbolProvider = codegenContext.symbolProvider();
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory = codegenContext.writerDelegator()::useFileWriter;

        writeAdditionalFiles(settings, model, symbolProvider, writerFactory);
    }

    private void writeAdditionalFiles(
            TypeScriptSettings settings,
            Model model,
            SymbolProvider symbolProvider,
            BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
    ) {
        writerFactory.accept(".gitignore", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "gitignore");
            writer.write(resource);
        });
        writerFactory.accept("api-extractor.json", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "api-extractor.json");
            writer.write(resource);
        });
        writerFactory.accept("LICENSE", writer -> {
            String resource =  IoUtils.readUtf8Resource(getClass(), "LICENSE.template");
            resource = resource.replace("${year}", Integer.toString(Calendar.getInstance().get(Calendar.YEAR)));
            writer.write(resource);
        });

        // TODO: May need to generate a different/modified README.md for these cases
        if (!settings.generateClient() || !isAwsService(settings, model)) {
            return;
        }

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
            resource = resource.replaceAll(Pattern.quote("${documentation}"), Matcher.quoteReplacement(documentation));

            TopDownIndex topDownIndex = TopDownIndex.of(model);

            OperationShape sampleOperation =
                getPreferredExampleOperation(topDownIndex.getContainedOperations(service), model);

            String operationName = sampleOperation.getId().getName(service);
            resource = resource.replaceAll(Pattern.quote("${commandName}"), operationName);
            resource = resource.replaceAll(Pattern.quote("${operationName}"),
                    operationName.substring(0, 1).toLowerCase() + operationName.substring(1));

            writer.write(resource.replaceAll(Pattern.quote("$"), Matcher.quoteReplacement("$$")));
            writeOperationList(writer, model, settings);
        });
    }

    /**
     * Tries to find an operation with a read-like name prefix "get", "describe", "list" etc.
     * And has few or no required input parameters.
     */
    private OperationShape getPreferredExampleOperation(Collection<OperationShape> operations, Model model) {
        // Heuristic score used to rank the candidate operations.
        long candidateOperationScore = Long.MIN_VALUE;
        OperationShape candidateOperation = null;

        for (OperationShape operation : operations) {
            long heuristicScore = 0;

            String name = operation.getId().getName().toLowerCase();

            heuristicScore -= name.length() / 6;

            if (name.startsWith("list")) {
                heuristicScore += 20;
            } else if (
                name.startsWith("get")
                || name.startsWith("describe")
                || name.startsWith("retrieve")
                || name.startsWith("fetch")
            ) {
                heuristicScore += 10;
            } else if (
                name.startsWith("delete")
                || name.startsWith("remove")
                || name.startsWith("stop")
                || name.startsWith("abort")
                || name.startsWith("terminate")
                || name.startsWith("deactivate")
                || name.startsWith("toggle")
            ) {
                heuristicScore -= 20;
            }

            Optional<Shape> input = model.getShape(operation.getInputShape());
            if (input.isPresent()) {
                long inputFields = input.get().getAllMembers().values().stream()
                    .filter(member -> member.isRequired())
                    .count();

                heuristicScore -= inputFields;
            }

            if (heuristicScore > candidateOperationScore) {
                candidateOperation = operation;
                candidateOperationScore = heuristicScore;
            }
        }

        return candidateOperation;
    }

    private void writeOperationList(TypeScriptWriter writer, Model model, TypeScriptSettings settings) {
        writer.write("## Client Commands (Operations List)");
        writer.write("");
        Set<OperationShape> operationShapesSet = model.getOperationShapes();

        List<OperationShape> operationShapes = operationShapesSet.stream()
                .sorted(Comparator.comparing(Shape::getId)).toList();

        for (OperationShape operationShape : operationShapes) {
            writer.write("<details>");
            writer.write("<summary>");
            writer.write("$L", operationShape.getId().getName());
            writer.write("</summary>");
            writer.write("");

            // sample URL for command
            // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/classes/abortmultipartuploadcommand.html

            String commandNameLowercase = operationShape.getId().getName().toLowerCase();
            String serviceId = settings.getService(model).getTrait(ServiceTrait.class)
                    .orElseThrow(() -> new RuntimeException("Missing Service Trait during README doc generation."))
                    .getSdkId().toLowerCase().replaceAll(" ", "-");

            String commandUrl = "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-"
                    + serviceId + "/classes/" + commandNameLowercase + "command.html";

            // sample URL for command input and outputs
            // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/abortmultipartuploadcommandinput.html
            String commandInputUrl = "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-"
                    + serviceId + "/interfaces/" + commandNameLowercase + "commandinput.html";

            // https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-s3/interfaces/abortmultipartuploadcommandoutput.html
            String commandOutputUrl = "https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-"
                    + serviceId + "/interfaces/" + commandNameLowercase + "commandoutput.html";

            writer.write(
                    "[Command API Reference]($L) / [Input]($L) / [Output]($L)",
                    commandUrl,
                    commandInputUrl,
                    commandOutputUrl
            );

            writer.write("</details>");
        }
    }
}
