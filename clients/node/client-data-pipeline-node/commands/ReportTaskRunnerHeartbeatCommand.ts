import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ReportTaskRunnerHeartbeat } from "../model/operations/ReportTaskRunnerHeartbeat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReportTaskRunnerHeartbeatInput } from "../types/ReportTaskRunnerHeartbeatInput";
import { ReportTaskRunnerHeartbeatOutput } from "../types/ReportTaskRunnerHeartbeatOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/ReportTaskRunnerHeartbeatInput";
export * from "../types/ReportTaskRunnerHeartbeatOutput";
export * from "../types/ReportTaskRunnerHeartbeatExceptionsUnion";

export class ReportTaskRunnerHeartbeatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReportTaskRunnerHeartbeatInput,
      OutputTypesUnion,
      ReportTaskRunnerHeartbeatOutput,
      DataPipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ReportTaskRunnerHeartbeat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReportTaskRunnerHeartbeatInput,
    ReportTaskRunnerHeartbeatOutput,
    _stream.Readable
  >();

  constructor(readonly input: ReportTaskRunnerHeartbeatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ReportTaskRunnerHeartbeatInput,
    ReportTaskRunnerHeartbeatOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReportTaskRunnerHeartbeatInput, ReportTaskRunnerHeartbeatOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
