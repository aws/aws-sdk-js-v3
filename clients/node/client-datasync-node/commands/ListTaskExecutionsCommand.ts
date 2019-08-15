import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTaskExecutions } from "../model/operations/ListTaskExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTaskExecutionsInput } from "../types/ListTaskExecutionsInput";
import { ListTaskExecutionsOutput } from "../types/ListTaskExecutionsOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/ListTaskExecutionsInput";
export * from "../types/ListTaskExecutionsOutput";
export * from "../types/ListTaskExecutionsExceptionsUnion";

export class ListTaskExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTaskExecutionsInput,
      OutputTypesUnion,
      ListTaskExecutionsOutput,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTaskExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTaskExecutionsInput,
    ListTaskExecutionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTaskExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTaskExecutionsInput,
    ListTaskExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTaskExecutionsInput, ListTaskExecutionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
