import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ReportTaskProgress } from "../model/operations/ReportTaskProgress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReportTaskProgressInput } from "../types/ReportTaskProgressInput";
import { ReportTaskProgressOutput } from "../types/ReportTaskProgressOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/ReportTaskProgressInput";
export * from "../types/ReportTaskProgressOutput";
export * from "../types/ReportTaskProgressExceptionsUnion";

export class ReportTaskProgressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReportTaskProgressInput,
      OutputTypesUnion,
      ReportTaskProgressOutput,
      DataPipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ReportTaskProgress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReportTaskProgressInput,
    ReportTaskProgressOutput,
    _stream.Readable
  >();

  constructor(readonly input: ReportTaskProgressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReportTaskProgressInput,
    ReportTaskProgressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReportTaskProgressInput, ReportTaskProgressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
