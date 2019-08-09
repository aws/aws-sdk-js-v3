import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SendTaskSuccess } from "../model/SendTaskSuccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SendTaskSuccessInput } from "../types/SendTaskSuccessInput";
import { SendTaskSuccessOutput } from "../types/SendTaskSuccessOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/SendTaskSuccessInput";
export * from "../types/SendTaskSuccessOutput";
export * from "../types/SendTaskSuccessExceptionsUnion";

export class SendTaskSuccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SendTaskSuccessInput,
      OutputTypesUnion,
      SendTaskSuccessOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SendTaskSuccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SendTaskSuccessInput,
    SendTaskSuccessOutput,
    _stream.Readable
  >();

  constructor(readonly input: SendTaskSuccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<SendTaskSuccessInput, SendTaskSuccessOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SendTaskSuccessInput, SendTaskSuccessOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
