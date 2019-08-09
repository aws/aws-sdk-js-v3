import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListEnabledProductsForImport } from "../model/ListEnabledProductsForImport";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEnabledProductsForImportInput } from "../types/ListEnabledProductsForImportInput";
import { ListEnabledProductsForImportOutput } from "../types/ListEnabledProductsForImportOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/ListEnabledProductsForImportInput";
export * from "../types/ListEnabledProductsForImportOutput";
export * from "../types/ListEnabledProductsForImportExceptionsUnion";

export class ListEnabledProductsForImportCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEnabledProductsForImportInput,
      OutputTypesUnion,
      ListEnabledProductsForImportOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListEnabledProductsForImport;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEnabledProductsForImportInput,
    ListEnabledProductsForImportOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListEnabledProductsForImportInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEnabledProductsForImportInput,
    ListEnabledProductsForImportOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListEnabledProductsForImportInput,
        ListEnabledProductsForImportOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
