import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SendBulkTemplatedEmail } from "../model/SendBulkTemplatedEmail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendBulkTemplatedEmailInput } from "../types/SendBulkTemplatedEmailInput";
import { SendBulkTemplatedEmailOutput } from "../types/SendBulkTemplatedEmailOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SendBulkTemplatedEmailInput";
export * from "../types/SendBulkTemplatedEmailOutput";
export * from "../types/SendBulkTemplatedEmailExceptionsUnion";

export class SendBulkTemplatedEmailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendBulkTemplatedEmailInput,
      OutputTypesUnion,
      SendBulkTemplatedEmailOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SendBulkTemplatedEmail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendBulkTemplatedEmailInput,
    SendBulkTemplatedEmailOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendBulkTemplatedEmailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SendBulkTemplatedEmailInput,
    SendBulkTemplatedEmailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendBulkTemplatedEmailInput, SendBulkTemplatedEmailOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
