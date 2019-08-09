import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SendMessages } from "../model/SendMessages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendMessagesInput } from "../types/SendMessagesInput";
import { SendMessagesOutput } from "../types/SendMessagesOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/SendMessagesInput";
export * from "../types/SendMessagesOutput";
export * from "../types/SendMessagesExceptionsUnion";

export class SendMessagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendMessagesInput,
      OutputTypesUnion,
      SendMessagesOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SendMessages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendMessagesInput,
    SendMessagesOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendMessagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<SendMessagesInput, SendMessagesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendMessagesInput, SendMessagesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
