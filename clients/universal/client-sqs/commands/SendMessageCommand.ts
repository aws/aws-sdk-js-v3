import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendMessage } from "../model/SendMessage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendMessageInput } from "../types/SendMessageInput";
import { SendMessageOutput } from "../types/SendMessageOutput";
import { SQSResolvedConfiguration } from "../SQSConfiguration";
export * from "../types/SendMessageInput";
export * from "../types/SendMessageOutput";
export * from "../types/SendMessageExceptionsUnion";

export class SendMessageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendMessageInput,
      OutputTypesUnion,
      SendMessageOutput,
      SQSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SendMessage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendMessageInput,
    SendMessageOutput,
    Uint8Array
  >();

  constructor(readonly input: SendMessageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SQSResolvedConfiguration
  ): __aws_sdk_types.Handler<SendMessageInput, SendMessageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendMessageInput, SendMessageOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
