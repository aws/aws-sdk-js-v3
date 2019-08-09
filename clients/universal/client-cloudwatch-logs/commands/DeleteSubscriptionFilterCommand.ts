import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSubscriptionFilter } from "../model/DeleteSubscriptionFilter";
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
      Uint8Array
    > {
  readonly model = DeleteSubscriptionFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSubscriptionFilterInput,
    DeleteSubscriptionFilterOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteSubscriptionFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
