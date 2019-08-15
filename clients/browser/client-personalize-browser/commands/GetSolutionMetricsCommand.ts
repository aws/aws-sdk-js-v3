import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSolutionMetrics } from "../model/operations/GetSolutionMetrics";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSolutionMetricsInput } from "../types/GetSolutionMetricsInput";
import { GetSolutionMetricsOutput } from "../types/GetSolutionMetricsOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/GetSolutionMetricsInput";
export * from "../types/GetSolutionMetricsOutput";
export * from "../types/GetSolutionMetricsExceptionsUnion";

export class GetSolutionMetricsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSolutionMetricsInput,
      OutputTypesUnion,
      GetSolutionMetricsOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = GetSolutionMetrics;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSolutionMetricsInput,
    GetSolutionMetricsOutput,
    Blob
  >();

  constructor(readonly input: GetSolutionMetricsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetSolutionMetricsInput,
    GetSolutionMetricsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSolutionMetricsInput, GetSolutionMetricsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
