/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.ArrayList;
import java.util.List;
import java.util.regex.Pattern;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.model.traits.DocumentationTrait;
import software.amazon.smithy.model.transform.ModelTransformer;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;

/**
 * Sanitizes documentation traits by removing empty self-closing HTML tags
 * such as {@code <p/>} that render as literal text in generated docs.
 */
@SmithyInternalApi
public final class SanitizeDocumentation implements TypeScriptIntegration {

    private static final Pattern EMPTY_SELF_CLOSING_TAGS = Pattern.compile("<\\s*(p|br|hr)\\s*/>");

    @Override
    public Model preprocessModel(Model model, TypeScriptSettings settings) {
        List<Shape> modifiedShapes = new ArrayList<>();

        for (Shape shape : model.toSet()) {
            shape.getTrait(DocumentationTrait.class).ifPresent(trait -> {
                String original = trait.getValue();
                String sanitized = EMPTY_SELF_CLOSING_TAGS.matcher(original).replaceAll("");
                if (!sanitized.equals(original)) {
                    modifiedShapes.add(
                        Shape.shapeToBuilder(shape)
                            .addTrait(new DocumentationTrait(sanitized, trait.getSourceLocation()))
                            .build()
                    );
                }
            });
        }

        if (!modifiedShapes.isEmpty()) {
            model = ModelTransformer.create().replaceShapes(model, modifiedShapes);
        }

        return model;
    }
}
