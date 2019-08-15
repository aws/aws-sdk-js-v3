import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ReceiveMessage } from "../model/operations/ReceiveMessage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReceiveMessageInput } from "../types/ReceiveMessageInput";
import { ReceiveMessageOutput } from "../types/ReceiveMessageOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/ReceiveMessageInput";
export * from "../types/ReceiveMessageOutput";
export * from "../types/ReceiveMessageExceptionsUnion";

export class ReceiveMessageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReceiveMessageInput,
      OutputTypesUnion,
      ReceiveMessageOutput,
      SQSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ReceiveMessage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReceiveMessageInput,
    ReceiveMessageOutput,
    _stream.Readable
  >();

  constructor(readonly input: ReceiveMessageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<ReceiveMessageInput, ReceiveMessageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReceiveMessageInput, ReceiveMessageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
