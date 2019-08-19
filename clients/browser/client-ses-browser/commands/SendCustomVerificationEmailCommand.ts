import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SendCustomVerificationEmail } from "../model/operations/SendCustomVerificationEmail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendCustomVerificationEmailInput } from "../types/SendCustomVerificationEmailInput";
import { SendCustomVerificationEmailOutput } from "../types/SendCustomVerificationEmailOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SendCustomVerificationEmailInput";
export * from "../types/SendCustomVerificationEmailOutput";
export * from "../types/SendCustomVerificationEmailExceptionsUnion";

export class SendCustomVerificationEmailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendCustomVerificationEmailInput,
      OutputTypesUnion,
      SendCustomVerificationEmailOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = SendCustomVerificationEmail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendCustomVerificationEmailInput,
    SendCustomVerificationEmailOutput,
    Blob
  >();

  constructor(readonly input: SendCustomVerificationEmailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SendCustomVerificationEmailInput,
    SendCustomVerificationEmailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SendCustomVerificationEmailInput,
        SendCustomVerificationEmailOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
