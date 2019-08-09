import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutSubscriptionFilter } from "../model/PutSubscriptionFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutSubscriptionFilterInput } from "../types/PutSubscriptionFilterInput";
import { PutSubscriptionFilterOutput } from "../types/PutSubscriptionFilterOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/PutSubscriptionFilterInput";
export * from "../types/PutSubscriptionFilterOutput";
export * from "../types/PutSubscriptionFilterExceptionsUnion";

export class PutSubscriptionFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutSubscriptionFilterInput,
      OutputTypesUnion,
      PutSubscriptionFilterOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutSubscriptionFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutSubscriptionFilterInput,
    PutSubscriptionFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutSubscriptionFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutSubscriptionFilterInput,
    PutSubscriptionFilterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutSubscriptionFilterInput, PutSubscriptionFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
