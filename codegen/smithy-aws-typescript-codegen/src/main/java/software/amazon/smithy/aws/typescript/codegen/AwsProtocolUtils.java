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

import java.util.Optional;
import java.util.Set;
import java.util.TreeSet;
import software.amazon.smithy.aws.traits.auth.UnsignedPayloadTrait;
import software.amazon.smithy.model.knowledge.HttpBindingIndex;
import software.amazon.smithy.model.knowledge.NeighborProviderIndex;
import software.amazon.smithy.model.neighbor.Walker;
import software.amazon.smithy.model.shapes.MemberShape;
import software.amazon.smithy.model.shapes.OperationShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.shapes.ShapeVisitor;
import software.amazon.smithy.model.traits.IdempotencyTokenTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait;
import software.amazon.smithy.model.traits.TimestampFormatTrait.Format;
import software.amazon.smithy.model.traits.XmlNamespaceTrait;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.HttpProtocolGeneratorUtils;
import software.amazon.smithy.typescript.codegen.integration.ProtocolGenerator.GenerationContext;
import software.amazon.smithy.utils.IoUtils;

/**
 * Utility methods for generating AWS protocols.
 */
final class AwsProtocolUtils {

    private AwsProtocolUtils() {}

    /**
     * Writes an {@code 'x-amz-content-sha256' = 'UNSIGNED_PAYLOAD'} header for an
     * {@code @aws.api#unsignedPayload} trait that specifies the {@code "aws.v4"} auth scheme.
     *
     * @see <a href=https://awslabs.github.io/smithy/spec/aws-core.html#aws-api-unsignedpayload-trait>@aws.api#unsignedPayload trait</a>
     *
     * @param context The generation context.
     * @param operation The operation being generated.
     */
    static void generateUnsignedPayloadSigV4Header(GenerationContext context, OperationShape operation) {
        TypeScriptWriter writer = context.getWriter();

        operation.getTrait(UnsignedPayloadTrait.class)
                .ifPresent(trait -> {
                    writer.write("'x-amz-content-sha256': 'UNSIGNED_PAYLOAD',");
                });
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
        Walker shapeWalker = new Walker(context.getModel().getKnowledge(NeighborProviderIndex.class).getProvider());
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

        // Include a JSON body parser used to deserialize documents from HTTP responses.
        writer.addImport("SerdeContext", "__SerdeContext", "@aws-sdk/types");
        writer.openBlock("const parseBody = (streamBody: any, context: __SerdeContext): "
                + "any => collectBodyString(streamBody, context).then(encoded => {", "});", () -> {
                    writer.openBlock("if (encoded.length) {", "}", () -> {
                        writer.write("return JSON.parse(encoded);");
                    });
                    writer.write("return {};");
                });

        writer.write("");
    }

    /**
     * Writes a response body parser function for XML protocols. This
     * will parse a present body after converting it to utf-8.
     *
     * @param context The generation context.
     */
    static void generateXmlParseBody(GenerationContext context) {
        TypeScriptWriter writer = context.getWriter();

        // Include function that decodes XML escape characters.
        writer.write(IoUtils.readUtf8Resource(AwsProtocolUtils.class, "decodeEscapedXML.ts"));

        // Include an XML body parser used to deserialize documents from HTTP responses.
        writer.addImport("SerdeContext", "__SerdeContext", "@aws-sdk/types");
        writer.addImport("getValueFromTextNode", "__getValueFromTextNode", "@aws-sdk/smithy-client");
        writer.addDependency(AwsDependency.XML_PARSER);
        writer.addImport("parse", "xmlParse", "fast-xml-parser");
        writer.openBlock("const parseBody = (streamBody: any, context: __SerdeContext): "
                + "any => collectBodyString(streamBody, context).then(encoded => {", "});", () -> {
                    writer.openBlock("if (encoded.length) {", "}", () -> {
                        writer.write("const parsedObj = xmlParse(encoded, { attributeNamePrefix: '', "
                                + "ignoreAttributes: false, parseNodeValue: false, tagValueProcessor: (val, tagName) "
                                + "=> decodeEscapedXML(val) });");
                        writer.write("const textNodeName = '#text';");
                        writer.write("const key = Object.keys(parsedObj)[0];");
                        writer.write("const parsedObjToReturn = parsedObj[key];");
                        writer.openBlock("if (parsedObjToReturn[textNodeName]) {", "}", () -> {
                            writer.write("parsedObjToReturn[key] = parsedObjToReturn[textNodeName];");
                            writer.write("delete parsedObjToReturn[textNodeName];");
                        });
                        writer.write("return __getValueFromTextNode(parsedObjToReturn);");
                    });
                    writer.write("return {};");
                });
        writer.write("");
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
        writer.addImport("extendedEncodeURIComponent", "__extendedEncodeURIComponent", "@aws-sdk/smithy-client");
        writer.openBlock("const buildFormUrlencodedString = (formEntries: { [key: string]: string }): "
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
            writer.write("Action: $S,", operation.getId().getName());
            writer.write("Version: $S,", context.getService().getVersion());
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
        writer.write("$L.addAttribute($S, $S);", nodeName, xmlns, trait.getUri());
        return true;
    }

    /**
     * Imports a UUID v4 generating function used for auto-filling idempotency tokens.
     *
     * @param context The generation context.
     */
    static void addItempotencyAutofillImport(GenerationContext context) {
        context.getModel().shapes(MemberShape.class)
                .filter(memberShape -> memberShape.hasTrait(IdempotencyTokenTrait.class))
                .findFirst()
                .ifPresent(memberShape -> {
                    TypeScriptWriter writer = context.getWriter();

                    // Include the uuid package and import the v4 function as our more clearly named alias.
                    writer.addDependency(AwsDependency.UUID_GENERATOR);
                    writer.addDependency(AwsDependency.UUID_GENERATOR_TYPES);
                    writer.addImport("v4", "generateIdempotencyToken", "uuid");
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
        HttpBindingIndex httpIndex = context.getModel().getKnowledge(HttpBindingIndex.class);
        TimestampFormatTrait.Format format = httpIndex.determineTimestampFormat(memberShape, DOCUMENT, defaultFormat);
        return HttpProtocolGeneratorUtils.getTimestampInputParam(context, inputLocation, memberShape, format);
    }
}
