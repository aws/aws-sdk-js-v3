import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopQuery } from "../model/StopQuery";
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
      _stream.Readable
    > {
  readonly model = StopQuery;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopQueryInput,
    StopQueryOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopQueryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
