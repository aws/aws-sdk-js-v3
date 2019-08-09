import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportCatalogToGlue } from "../model/ImportCatalogToGlue";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportCatalogToGlueInput } from "../types/ImportCatalogToGlueInput";
import { ImportCatalogToGlueOutput } from "../types/ImportCatalogToGlueOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/ImportCatalogToGlueInput";
export * from "../types/ImportCatalogToGlueOutput";
export * from "../types/ImportCatalogToGlueExceptionsUnion";

export class ImportCatalogToGlueCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportCatalogToGlueInput,
      OutputTypesUnion,
      ImportCatalogToGlueOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ImportCatalogToGlue;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportCatalogToGlueInput,
    ImportCatalogToGlueOutput,
    Uint8Array
  >();

  constructor(readonly input: ImportCatalogToGlueInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportCatalogToGlueInput,
    ImportCatalogToGlueOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportCatalogToGlueInput, ImportCatalogToGlueOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
