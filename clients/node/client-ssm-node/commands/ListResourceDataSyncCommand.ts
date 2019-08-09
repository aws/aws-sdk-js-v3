import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListResourceDataSync } from "../model/ListResourceDataSync";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListResourceDataSyncInput } from "../types/ListResourceDataSyncInput";
import { ListResourceDataSyncOutput } from "../types/ListResourceDataSyncOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/ListResourceDataSyncInput";
export * from "../types/ListResourceDataSyncOutput";
export * from "../types/ListResourceDataSyncExceptionsUnion";

export class ListResourceDataSyncCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListResourceDataSyncInput,
      OutputTypesUnion,
      ListResourceDataSyncOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListResourceDataSync;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListResourceDataSyncInput,
    ListResourceDataSyncOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListResourceDataSyncInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListResourceDataSyncInput,
    ListResourceDataSyncOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListResourceDataSyncInput, ListResourceDataSyncOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
