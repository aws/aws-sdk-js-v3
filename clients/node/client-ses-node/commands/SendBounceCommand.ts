import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SendBounce } from "../model/SendBounce";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendBounceInput } from "../types/SendBounceInput";
import { SendBounceOutput } from "../types/SendBounceOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SendBounceInput";
export * from "../types/SendBounceOutput";
export * from "../types/SendBounceExceptionsUnion";

export class SendBounceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendBounceInput,
      OutputTypesUnion,
      SendBounceOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SendBounce;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendBounceInput,
    SendBounceOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendBounceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<SendBounceInput, SendBounceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendBounceInput, SendBounceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
