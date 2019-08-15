import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ImportServerCatalog } from "../model/operations/ImportServerCatalog";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ImportServerCatalogInput } from "../types/ImportServerCatalogInput";
import { ImportServerCatalogOutput } from "../types/ImportServerCatalogOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/ImportServerCatalogInput";
export * from "../types/ImportServerCatalogOutput";
export * from "../types/ImportServerCatalogExceptionsUnion";

export class ImportServerCatalogCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ImportServerCatalogInput,
      OutputTypesUnion,
      ImportServerCatalogOutput,
      SMSResolvedConfiguration,
      Blob
    > {
  readonly model = ImportServerCatalog;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ImportServerCatalogInput,
    ImportServerCatalogOutput,
    Blob
  >();

  constructor(readonly input: ImportServerCatalogInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ImportServerCatalogInput,
    ImportServerCatalogOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ImportServerCatalogInput, ImportServerCatalogOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
