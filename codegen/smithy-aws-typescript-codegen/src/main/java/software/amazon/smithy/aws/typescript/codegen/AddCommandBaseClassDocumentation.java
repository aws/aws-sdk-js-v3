/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
package software.amazon.smithy.aws.typescript.codegen;

import java.util.function.BiConsumer;
import java.util.function.Consumer;
import software.amazon.smithy.typescript.codegen.TypeScriptCodegenContext;
import software.amazon.smithy.typescript.codegen.TypeScriptWriter;
import software.amazon.smithy.typescript.codegen.integration.TypeScriptIntegration;
import software.amazon.smithy.utils.SmithyInternalApi;


/**
 * Generates a TypeScript file that re-exports the Command base class with proper
 * JSDoc documentation explaining what it is.
 * 
 * This integration addresses GitHub issue #6173 where the API documentation
 * shows "extends ListBucketsCommand_base" without explaining what the base
 * class is. By creating a CommandBase.ts file with documentation, users can
 * understand that Commands extend the base Command class from @smithy/smithy-client.
 * 
 * @see <a href="https://github.com/aws/aws-sdk-js-v3/issues/6173">Issue #6173</a>
 */
@SmithyInternalApi
public class AddCommandBaseClassDocumentation implements TypeScriptIntegration {

    @Override
    public void customize(TypeScriptCodegenContext codegenContext) {
        BiConsumer<String, Consumer<TypeScriptWriter>> writerFactory = codegenContext.writerDelegator()::useFileWriter;

        // Generate a TypeScript file that documents the Command base class
        writerFactory.accept("src/commands/CommandBase.ts", writer -> {
            writer.writeDocs(
                "Re-export of the base Command class from @smithy/smithy-client.\n"
                + "\n"
                + "All Command classes in this package extend from this base class.\n"
                + "When you see a Command class signature like:\n"
                + "```typescript\n"
                + "export class ListBucketsCommand extends ListBucketsCommand_base\n"
                + "```\n"
                + "\n"
                + "The `*_base` type is a TypeScript type alias that ultimately represents\n"
                + "an extension of this Command class with specific type parameters.\n"
                + "\n"
                + "@see {@link https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-smithy-client/Class/Command/ | Command Class API Reference}\n"
                + "@see {@link https://www.npmjs.com/package/@smithy/smithy-client | @smithy/smithy-client on npm}\n"
                + "@public"
            );
            writer.write("export { Command as CommandBase } from \"@smithy/smithy-client\";");
            writer.write("");
            writer.writeDocs(
                "Type alias for any Command instance.\n"
                + "\n"
                + "@public"
            );
            writer.write("export type { Command } from \"@smithy/smithy-client\";");
        });
    }

    @Override
    public String name() {
        return "AddCommandBaseClassDocumentation";
    }
}
