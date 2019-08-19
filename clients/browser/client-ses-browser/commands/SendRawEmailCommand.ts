import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendRawEmail } from "../model/operations/SendRawEmail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendRawEmailInput } from "../types/SendRawEmailInput";
import { SendRawEmailOutput } from "../types/SendRawEmailOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SendRawEmailInput";
export * from "../types/SendRawEmailOutput";
export * from "../types/SendRawEmailExceptionsUnion";

export class SendRawEmailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendRawEmailInput,
      OutputTypesUnion,
      SendRawEmailOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = SendRawEmail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendRawEmailInput,
    SendRawEmailOutput,
    Blob
  >();

  constructor(readonly input: SendRawEmailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<SendRawEmailInput, SendRawEmailOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendRawEmailInput, SendRawEmailOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
