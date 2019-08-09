import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutMetricFilter } from "../model/PutMetricFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutMetricFilterInput } from "../types/PutMetricFilterInput";
import { PutMetricFilterOutput } from "../types/PutMetricFilterOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/PutMetricFilterInput";
export * from "../types/PutMetricFilterOutput";
export * from "../types/PutMetricFilterExceptionsUnion";

export class PutMetricFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutMetricFilterInput,
      OutputTypesUnion,
      PutMetricFilterOutput,
      CloudWatchLogsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutMetricFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutMetricFilterInput,
    PutMetricFilterOutput,
    Uint8Array
  >();

  constructor(readonly input: PutMetricFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<PutMetricFilterInput, PutMetricFilterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutMetricFilterInput, PutMetricFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
