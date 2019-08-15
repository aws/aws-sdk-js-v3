import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFunctions } from "../model/operations/ListFunctions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFunctionsInput } from "../types/ListFunctionsInput";
import { ListFunctionsOutput } from "../types/ListFunctionsOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/ListFunctionsInput";
export * from "../types/ListFunctionsOutput";
export * from "../types/ListFunctionsExceptionsUnion";

export class ListFunctionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFunctionsInput,
      OutputTypesUnion,
      ListFunctionsOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFunctions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFunctionsInput,
    ListFunctionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFunctionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFunctionsInput, ListFunctionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFunctionsInput, ListFunctionsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
