import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopQuery } from "../model/operations/StopQuery";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopQueryInput } from "../types/StopQueryInput";
import { StopQueryOutput } from "../types/StopQueryOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/StopQueryInput";
export * from "../types/StopQueryOutput";
export * from "../types/StopQueryExceptionsUnion";

export class StopQueryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopQueryInput,
      OutputTypesUnion,
      StopQueryOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = StopQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopQueryInput,
    StopQueryOutput,
    Blob
  >();

  constructor(readonly input: StopQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<StopQueryInput, StopQueryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopQueryInput, StopQueryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
