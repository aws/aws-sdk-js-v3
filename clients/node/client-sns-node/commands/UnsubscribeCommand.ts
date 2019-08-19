import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { Unsubscribe } from "../model/operations/Unsubscribe";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnsubscribeInput } from "../types/UnsubscribeInput";
import { UnsubscribeOutput } from "../types/UnsubscribeOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/UnsubscribeInput";
export * from "../types/UnsubscribeOutput";
export * from "../types/UnsubscribeExceptionsUnion";

export class UnsubscribeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnsubscribeInput,
      OutputTypesUnion,
      UnsubscribeOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = Unsubscribe;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnsubscribeInput,
    UnsubscribeOutput,
    _stream.Readable
  >();

  constructor(readonly input: UnsubscribeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<UnsubscribeInput, UnsubscribeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnsubscribeInput, UnsubscribeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
