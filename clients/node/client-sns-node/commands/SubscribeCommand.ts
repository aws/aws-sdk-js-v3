import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { Subscribe } from "../model/Subscribe";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SubscribeInput } from "../types/SubscribeInput";
import { SubscribeOutput } from "../types/SubscribeOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/SubscribeInput";
export * from "../types/SubscribeOutput";
export * from "../types/SubscribeExceptionsUnion";

export class SubscribeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SubscribeInput,
      OutputTypesUnion,
      SubscribeOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = Subscribe;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SubscribeInput,
    SubscribeOutput,
    _stream.Readable
  >();

  constructor(readonly input: SubscribeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<SubscribeInput, SubscribeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SubscribeInput, SubscribeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
