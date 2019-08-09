import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SendTemplatedEmail } from "../model/SendTemplatedEmail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendTemplatedEmailInput } from "../types/SendTemplatedEmailInput";
import { SendTemplatedEmailOutput } from "../types/SendTemplatedEmailOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SendTemplatedEmailInput";
export * from "../types/SendTemplatedEmailOutput";
export * from "../types/SendTemplatedEmailExceptionsUnion";

export class SendTemplatedEmailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendTemplatedEmailInput,
      OutputTypesUnion,
      SendTemplatedEmailOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SendTemplatedEmail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendTemplatedEmailInput,
    SendTemplatedEmailOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendTemplatedEmailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SendTemplatedEmailInput,
    SendTemplatedEmailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendTemplatedEmailInput, SendTemplatedEmailOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
