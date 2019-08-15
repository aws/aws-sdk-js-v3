import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteResourceDataSync } from "../model/operations/DeleteResourceDataSync";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResourceDataSyncInput } from "../types/DeleteResourceDataSyncInput";
import { DeleteResourceDataSyncOutput } from "../types/DeleteResourceDataSyncOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeleteResourceDataSyncInput";
export * from "../types/DeleteResourceDataSyncOutput";
export * from "../types/DeleteResourceDataSyncExceptionsUnion";

export class DeleteResourceDataSyncCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteResourceDataSyncInput,
      OutputTypesUnion,
      DeleteResourceDataSyncOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteResourceDataSync;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResourceDataSyncInput,
    DeleteResourceDataSyncOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteResourceDataSyncInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteResourceDataSyncInput,
    DeleteResourceDataSyncOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteResourceDataSyncInput, DeleteResourceDataSyncOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
