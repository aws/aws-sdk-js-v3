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

import static software.amazon.smithy.model.knowledge.HttpBinding.Location.DOCUMENT;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;
import software.amazon.smithy.aws.traits.auth.UnsignedPayloadTrait;
import software.amazon.smithy.model.knowledge.HttpBindingIndex;
import software.amazon.smithy.model.knowledge.NeighborProviderIndex;
import software.amazon.smithy.model.neighbor.Walker;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeVisitor;
import software.amazon.smithy.model.traits.IdempotencyTokenTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlNamespaceTrait;
import software.amazon.smithy.protocoltests.traits.HttpMalformedRequestTestCase;
import software.amazon.smithy.protocoltests.traits.HttpMessageTestCase;
import software.amazon.smithy.typescript.codegen.HttpProtocolTestGenerator;
import software.amazon.smithy.typescript.codegen.TypeScriptDependency;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpProtocolGeneratorUtils;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.typescript.codegen.util.StringStore;
import software.amazon.smithy.utils.IoUtils;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Utility methods for generating AWS protocols.
 */
@SmithyInternalApi
final class AwsProtocolUtils {

    private AwsProtocolUtils() {}

    /**
     * Writes an {@code 'x-amz-content-sha256' = 'UNSIGNED-PAYLOAD'} header for an
     * {@code @aws.api#unsignedPayload} trait that specifies the {@code "aws.v4"} auth scheme.
     *
     * @see <a href=https://smithy.io/2.0/aws/aws-auth.html#aws-auth-unsignedpayload-trait>@aws.api#unsignedPayload trait</a>
     *
     * @param context The generation context.
     * @param operation The operation being generated.
     */
    static void generateUnsignedPayloadSigV4Header(GenerationContext context, OperationShape operation) {
        TypeScriptWriter writer = context.getWriter();
        if (includeUnsignedPayloadSigV4Header(operation)) {
            writer.write("'x-amz-content-sha256': 'UNSIGNED-PAYLOAD',");
        }
    }

    static boolean includeUnsignedPayloadSigV4Header(OperationShape operation) {
        return operation.hasTrait(UnsignedPayloadTrait.ID);
    }

    /**
     * Writes a serde function for a set of shapes using the passed visitor.
     * This will walk the input set of shapes and invoke the visitor for any
     * members of aggregate shapes in the set.
     *
     * @see software.amazon.smithy.typescript.codegen.integration.DocumentShapeSerVisitor
     * @see software.amazon.smithy.typescript.codegen.integration.DocumentShapeDeserVisitor
     *
     * @param context The generation context.
     * @param shapes A list of shapes to generate serde for, including their members.
     * @param visitor A ShapeVisitor that generates a serde function for shapes.
     */
    static void generateDocumentBodyShapeSerde(
            GenerationContext context,
            Set<Shape> shapes,
            ShapeVisitor<Void> visitor
    ) {
        // Walk all the shapes within those in the document and generate for them as well.
        Walker shapeWalker = new Walker(NeighborProviderIndex.of(context.getModel()).getProvider());
        Set<Shape> shapesToGenerate = new TreeSet<>(shapes);
        shapes.forEach(shape -> shapesToGenerate.addAll(shapeWalker.walkShapes(shape)));
        shapesToGenerate.forEach(shape -> shape.accept(visitor));
    }

    /**
     * Writes a response body parser function for JSON protocols. This
     * will parse a present body after converting it to utf-8.
     *
     * @param context The generation context.
     */
    static void generateJsonParseBody(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();
        writer.addDependency(AwsDependency.AWS_SDK_CORE);
        writer.addImport("parseJsonBody", "parseBody", AwsDependency.AWS_SDK_CORE);
    }

    static void generateJsonParseBodyWithQueryHeader(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();
        writer.addImport("HeaderBag", "__HeaderBag", TypeScriptDependency.SMITHY_TYPES);
        writer.write(IoUtils.readUtf8Resource(
                AwsProtocolUtils.class, "populate-body-with-query-compatibility-code-stub.ts"));
    }

    /**
     * Writes a response body parser function for JSON errors. This
     * will populate message field in parsed object, if it's not present.
     *
     * @param context The generation context.
     */
    static void generateJsonParseErrorBody(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();
        writer.addDependency(AwsDependency.AWS_SDK_CORE);
        writer.addImport("parseJsonErrorBody", "parseErrorBody", AwsDependency.AWS_SDK_CORE);
    }

    /**
     * Writes a response body parser function for XML protocols. This
     * will parse a present body after converting it to utf-8.
     *
     * @param context The generation context.
     */
    static void generateXmlParseBody(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();
        writer.addDependency(AwsDependency.AWS_SDK_CORE);
        writer.addImport("parseXmlBody", "parseBody", AwsDependency.AWS_SDK_CORE);
    }

    /**
     * Writes a response body parser function for XML errors. This
     * will populate message field in parsed object, if it's not present.
     *
     * @param context The generation context.
     */
    static void generateXmlParseErrorBody(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();
        writer.addDependency(AwsDependency.AWS_SDK_CORE);
        writer.addImport("parseXmlErrorBody", "parseErrorBody", AwsDependency.AWS_SDK_CORE);
    }

    /**
     * Writes a form urlencoded string builder function for query based protocols.
     * This will escape the keys and values, combine those with an '=', and combine
     * those strings with an '&'.
     *
     * @param context The generation context.
     */
    static void generateBuildFormUrlencodedString(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        // Write a single function to handle combining a map in to a valid query string.
        writer.addImport("extendedEncodeURIComponent", "__extendedEncodeURIComponent",
            TypeScriptDependency.AWS_SMITHY_CLIENT);
        writer.openBlock("const buildFormUrlencodedString = (formEntries: Record<string, string>): "
                + "string => Object.entries(formEntries).map(", ").join(\"&\");",
                () -> writer.write("([key, value]) => __extendedEncodeURIComponent(key) + '=' + "
                    + "__extendedEncodeURIComponent(value)"));
        writer.write("");
    }

    /**
     * Writes a default body for query-based operations when the operation doesn't
     * have an input defined.
     *
     * @param context The generation context.
     * @param operation The operation being generated for.
     * @return That a body variable was generated and should be set on the request.
     */
    static boolean generateUndefinedQueryInputBody(GenerationContext context, OperationShape operation) {
        TypeScriptWriter writer = context.getWriter();

        // Set the form encoded string.
        writer.openBlock("const body = buildFormUrlencodedString({", "});", () -> {
            // Set the protocol required values.
            ServiceShape serviceShape = context.getService();
            StringStore stringStore = context.getStringStore();
            writer.write(
                "[" + stringStore.var("Action") + "]: $L,",
                stringStore.var(operation.getId().getName(serviceShape))
            );
            writer.write(
                "[" + stringStore.var("Version") + "]: $L,",
                stringStore.var(serviceShape.getVersion())
            );
        });

        return true;
    }

    /**
     * Writes an attribute containing information about a Shape's optionally specified
     * XML namespace configuration to an attribute of the passed node name.
     *
     * @param context The generation context.
     * @param shape The shape to apply the namespace attribute to, if present on it.
     * @param nodeName The node to apply the namespace attribute to.
     * @return Returns if an XML namespace attribute was written.
     */
    static boolean writeXmlNamespace(GenerationContext context, Shape shape, String nodeName) {
        Optional<XmlNamespaceTrait> traitOptional = shape.getTrait(XmlNamespaceTrait.class);

        if (!traitOptional.isPresent()) {
            return false;
        }

        XmlNamespaceTrait trait = traitOptional.get();
        TypeScriptWriter writer = context.getWriter();
        String xmlns = "xmlns";
        Optional<String> prefix = trait.getPrefix();
        if (prefix.isPresent()) {
            xmlns += ":" + prefix.get();
        }
        writer.write("$L.a($S, $S);", nodeName, xmlns, trait.getUri());
        return true;
    }

    /**
     * Imports a UUID v4 generating function used for auto-filling idempotency tokens.
     *
     * @param context The generation context.
     */
    static void addItempotencyAutofillImport(GenerationContext context) {
        // servers do not autogenerate idempotency tokens during deserialization
        if (!context.getSettings().generateClient()) {
            return;
        }
        context.getModel().shapes(MemberShape.class)
                .filter(memberShape -> memberShape.hasTrait(IdempotencyTokenTrait.class))
                .findFirst()
                .ifPresent(memberShape -> {
                    TypeScriptWriter writer = context.getWriter();

                    // Include the uuid package and import the v4 function as our more clearly named alias.
                    writer.addDependency(TypeScriptDependency.UUID);
                    writer.addDependency(AwsDependency.UUID_GENERATOR_TYPES);
                    writer.addImport("v4", "generateIdempotencyToken", TypeScriptDependency.UUID);
                });
    }

    /**
     * Writes a statement that auto-fills the value of a member that is an idempotency
     * token if it is undefined at the time of serialization.
     *
     * @param context The generation context.
     * @param memberShape The member that may be an idempotency token.
     * @param inputLocation The location of input data for the member.
     */
    static void writeIdempotencyAutofill(GenerationContext context, MemberShape memberShape, String inputLocation) {
        if (memberShape.hasTrait(IdempotencyTokenTrait.class)) {
            TypeScriptWriter writer = context.getWriter();

            writer.openBlock("if ($L === undefined) {", "}", inputLocation, () ->
                    writer.write("$L = generateIdempotencyToken();", inputLocation));
        }
    }

    /**
     * Gets a value provider for the timestamp member handling proper serialization
     * formatting.
     *
     * @param context The generation context.
     * @param memberShape The member that needs timestamp serialization.
     * @param defaultFormat The timestamp format to default to.
     * @param inputLocation The location of input data for the member.
     * @return A string representing the proper value provider for this timestamp.
     */
    static String getInputTimestampValueProvider(
            GenerationContext context,
            MemberShape memberShape,
            Format defaultFormat,
            String inputLocation
    ) {
        HttpBindingIndex httpIndex = HttpBindingIndex.of(context.getModel());
        TimestampFormatTrait.Format format = httpIndex.determineTimestampFormat(memberShape, DOCUMENT, defaultFormat);
        return HttpProtocolGeneratorUtils.getTimestampInputParam(context, inputLocation, memberShape, format);
    }

    static void generateProtocolTests(ProtocolGenerator generator, GenerationContext context) {
        new HttpProtocolTestGenerator(context,
                generator,
                AwsProtocolUtils::filterProtocolTests,
                AwsProtocolUtils::filterMalformedRequestTests).run();
    }

    private static boolean filterProtocolTests(
            ServiceShape service,
            OperationShape operation,
            HttpMessageTestCase testCase,
            TypeScriptSettings settings
    ) {
        // TODO: Remove when requestCompression has been implemented.
        if (testCase.getId().startsWith("SDKAppliedContentEncoding_")
            || testCase.getId().startsWith("SDKAppendsGzipAndIgnoresHttpProvidedEncoding_")
            || testCase.getId().startsWith("SDKAppendedGzipAfterProvidedEncoding_")) {
            return true;
        }

        if (testCase.getTags().contains("defaults")) {
            return true;
        }

        // TODO: remove when there's a decision on separator to use
        // https://github.com/awslabs/smithy/issues/1014
        if (testCase.getId().equals("RestJsonInputAndOutputWithQuotedStringHeaders")) {
            return true;
        }

        // TODO: implementation change pending.
        List<String> extraUnionKey = Arrays.asList(
            "RestXmlHttpPayloadWithUnsetUnion",
            "RestJsonHttpPayloadWithUnsetUnion"
        );
        if (extraUnionKey.contains(testCase.getId())) {
            return true;
        }

        return false;
    }

    private static boolean filterMalformedRequestTests(
            ServiceShape service,
            OperationShape operation,
            HttpMalformedRequestTestCase testCase,
            TypeScriptSettings settings
    ) {
        // Handling overflow/underflow of longs in JS is extraordinarily tricky.
        // Numbers are actually all 62-bit floats, and so any integral number is
        // limited to 53 bits. In typical JS fashion, a value outside of this
        // range just kinda silently bumbles on in some third state between valid
        // and invalid. Infuriatingly, there doesn't seem to be a consistent way
        // to detect this. We could *try* to do bounds checking, but the constants
        // we use wouldn't necessarily work, so it could work in some environments
        // but not others.
        if (operation.getId().getName().equals("MalformedLong") && testCase.hasTag("underflow/overflow")) {
            return true;
        }

        //TODO: we don't validate map values
        if (testCase.getId().equals("RestJsonBodyMalformedMapNullValue")) {
            return true;
        }

        // TODO: fix in https://github.com/aws/aws-sdk-js-v3/issues/5545
        if (testCase.getId().equals("RestJsonMalformedUnionUnknownMember")) {
            return true;
        }

        //TODO: reenable when the SSDK uses RE2 and not built-in regex for pattern constraints
        if (testCase.getId().equals("RestJsonMalformedPatternReDOSString")) {
            return true;
        }

        // skipped to allow unambiguous type conversions to unblock minor type inconsistencies
        List<String> typeCoercionCases = Arrays.asList(
            "RestJsonBodyTimestampDefaultRejectsStringifiedEpochSeconds_case1",
            "RestJsonBodyTimestampDefaultRejectsStringifiedEpochSeconds_case0",
            "RestJsonBodyTimestampDefaultRejectsDateTime_case2",
            "RestJsonBodyTimestampDefaultRejectsDateTime_case1",
            "RestJsonBodyTimestampDefaultRejectsDateTime_case0",
            "RestJsonBodyBooleanBadLiteral_case18",
            "RestJsonBodyBooleanBadLiteral_case7",
            "RestJsonBodyBooleanStringCoercion_case14",
            "RestJsonBodyBooleanStringCoercion_case13",
            "RestJsonBodyBooleanStringCoercion_case12",
            "RestJsonBodyBooleanStringCoercion_case2",
            "RestJsonBodyBooleanStringCoercion_case1",
            "RestJsonBodyBooleanStringCoercion_case0"
        );

        if (typeCoercionCases.contains(testCase.getId())) {
            return true;
        }

        return false;
    }
}
