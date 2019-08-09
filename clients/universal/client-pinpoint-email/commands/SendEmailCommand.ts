import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendEmail } from "../model/SendEmail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendEmailInput } from "../types/SendEmailInput";
import { SendEmailOutput } from "../types/SendEmailOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/SendEmailInput";
export * from "../types/SendEmailOutput";
export * from "../types/SendEmailExceptionsUnion";

export class SendEmailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendEmailInput,
      OutputTypesUnion,
      SendEmailOutput,
      PinpointEmailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SendEmail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendEmailInput,
    SendEmailOutput,
    Uint8Array
  >();

  constructor(readonly input: SendEmailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<SendEmailInput, SendEmailOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendEmailInput, SendEmailOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
