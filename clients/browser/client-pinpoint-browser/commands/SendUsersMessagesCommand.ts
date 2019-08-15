import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendUsersMessages } from "../model/operations/SendUsersMessages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendUsersMessagesInput } from "../types/SendUsersMessagesInput";
import { SendUsersMessagesOutput } from "../types/SendUsersMessagesOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/SendUsersMessagesInput";
export * from "../types/SendUsersMessagesOutput";
export * from "../types/SendUsersMessagesExceptionsUnion";

export class SendUsersMessagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendUsersMessagesInput,
      OutputTypesUnion,
      SendUsersMessagesOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = SendUsersMessages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendUsersMessagesInput,
    SendUsersMessagesOutput,
    Blob
  >();

  constructor(readonly input: SendUsersMessagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<SendUsersMessagesInput, SendUsersMessagesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendUsersMessagesInput, SendUsersMessagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
