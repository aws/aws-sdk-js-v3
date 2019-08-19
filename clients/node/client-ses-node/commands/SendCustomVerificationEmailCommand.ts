import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = SendCustomVerificationEmail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendCustomVerificationEmailInput,
    SendCustomVerificationEmailOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendCustomVerificationEmailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
