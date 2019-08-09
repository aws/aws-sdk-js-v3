import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMetrics } from "../model/ListMetrics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMetricsInput } from "../types/ListMetricsInput";
import { ListMetricsOutput } from "../types/ListMetricsOutput";
import { CloudWatchResolvedConfiguration } from "../CloudWatchConfiguration";
export * from "../types/ListMetricsInput";
export * from "../types/ListMetricsOutput";
export * from "../types/ListMetricsExceptionsUnion";

export class ListMetricsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMetricsInput,
      OutputTypesUnion,
      ListMetricsOutput,
      CloudWatchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListMetrics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMetricsInput,
    ListMetricsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListMetricsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchResolvedConfiguration
  ): __aws_sdk_types.Handler<ListMetricsInput, ListMetricsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMetricsInput, ListMetricsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
