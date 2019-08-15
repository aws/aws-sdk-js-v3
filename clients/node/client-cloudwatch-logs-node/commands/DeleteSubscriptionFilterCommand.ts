import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSubscriptionFilter } from "../model/operations/DeleteSubscriptionFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSubscriptionFilterInput } from "../types/DeleteSubscriptionFilterInput";
import { DeleteSubscriptionFilterOutput } from "../types/DeleteSubscriptionFilterOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DeleteSubscriptionFilterInput";
export * from "../types/DeleteSubscriptionFilterOutput";
export * from "../types/DeleteSubscriptionFilterExceptionsUnion";

export class DeleteSubscriptionFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSubscriptionFilterInput,
      OutputTypesUnion,
      DeleteSubscriptionFilterOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSubscriptionFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSubscriptionFilterInput,
    DeleteSubscriptionFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSubscriptionFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteSubscriptionFilterInput,
    DeleteSubscriptionFilterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSubscriptionFilterInput, DeleteSubscriptionFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
