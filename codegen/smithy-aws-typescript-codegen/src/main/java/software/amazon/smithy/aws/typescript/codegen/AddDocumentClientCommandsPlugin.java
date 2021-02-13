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

import java.util.function.BiConsumer;
import java.util.function.Consumer;
import software.amazon.smithy.aws.traits.ServiceTrait;
import software.amazon.smithy.codegen.core.SymbolProvider;
import software.amazon.smithy.model.Model;
import software.amazon.smithy.model.shapes.ServiceShape;
import software.amazon.smithy.model.shapes.Shape;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.typescript.codegen.TypeScriptSettings;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;

/**
 * Generates Commands for DynamoDB Document Client.
 */
public class AddDocumentClientCommandsPlugin implements TypeScriptIntegration {
  @Override
  public void writeAdditionalFiles(
      TypeScriptSettings settings,
      Model model,
      SymbolProvider symbolProvider,
      BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory
  ) {
      ServiceShape service = settings.getService(model);
      if (testServiceId(service, "DynamoDB")) {
        writerFactory.accept("commands/PutNativeItemCommand.ts", writer -> {
          writer.write("// Hello!");
        });
      }
  }

  private static boolean testServiceId(Shape serviceShape, String expectedId) {
      return serviceShape.getTrait(ServiceTrait.class).map(ServiceTrait::getSdkId).orElse("").equals(expectedId);
  }
}
