import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SendMessageBatch } from "../model/SendMessageBatch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendMessageBatchInput } from "../types/SendMessageBatchInput";
import { SendMessageBatchOutput } from "../types/SendMessageBatchOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/SendMessageBatchInput";
export * from "../types/SendMessageBatchOutput";
export * from "../types/SendMessageBatchExceptionsUnion";

export class SendMessageBatchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendMessageBatchInput,
      OutputTypesUnion,
      SendMessageBatchOutput,
      SQSResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendMessageBatchInput,
    SendMessageBatchOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendMessageBatchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<SendMessageBatchInput, SendMessageBatchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: SendMessageBatch
    };

    return stack.resolve(
      handler<SendMessageBatchInput, SendMessageBatchOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
