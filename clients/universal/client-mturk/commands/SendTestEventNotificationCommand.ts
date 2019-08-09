import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendTestEventNotification } from "../model/SendTestEventNotification";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendTestEventNotificationInput } from "../types/SendTestEventNotificationInput";
import { SendTestEventNotificationOutput } from "../types/SendTestEventNotificationOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/SendTestEventNotificationInput";
export * from "../types/SendTestEventNotificationOutput";
export * from "../types/SendTestEventNotificationExceptionsUnion";

export class SendTestEventNotificationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendTestEventNotificationInput,
      OutputTypesUnion,
      SendTestEventNotificationOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SendTestEventNotification;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendTestEventNotificationInput,
    SendTestEventNotificationOutput,
    Uint8Array
  >();

  constructor(readonly input: SendTestEventNotificationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SendTestEventNotificationInput,
    SendTestEventNotificationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendTestEventNotificationInput, SendTestEventNotificationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
