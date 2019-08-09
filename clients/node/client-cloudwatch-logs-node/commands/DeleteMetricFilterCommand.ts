import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteMetricFilter } from "../model/DeleteMetricFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMetricFilterInput } from "../types/DeleteMetricFilterInput";
import { DeleteMetricFilterOutput } from "../types/DeleteMetricFilterOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/DeleteMetricFilterInput";
export * from "../types/DeleteMetricFilterOutput";
export * from "../types/DeleteMetricFilterExceptionsUnion";

export class DeleteMetricFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMetricFilterInput,
      OutputTypesUnion,
      DeleteMetricFilterOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteMetricFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMetricFilterInput,
    DeleteMetricFilterOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteMetricFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMetricFilterInput,
    DeleteMetricFilterOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMetricFilterInput, DeleteMetricFilterOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
