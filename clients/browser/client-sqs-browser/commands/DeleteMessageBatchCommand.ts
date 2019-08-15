import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMessageBatch } from "../model/operations/DeleteMessageBatch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMessageBatchInput } from "../types/DeleteMessageBatchInput";
import { DeleteMessageBatchOutput } from "../types/DeleteMessageBatchOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/DeleteMessageBatchInput";
export * from "../types/DeleteMessageBatchOutput";
export * from "../types/DeleteMessageBatchExceptionsUnion";

export class DeleteMessageBatchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMessageBatchInput,
      OutputTypesUnion,
      DeleteMessageBatchOutput,
      SQSResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteMessageBatch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMessageBatchInput,
    DeleteMessageBatchOutput,
    Blob
  >();

  constructor(readonly input: DeleteMessageBatchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMessageBatchInput,
    DeleteMessageBatchOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMessageBatchInput, DeleteMessageBatchOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
