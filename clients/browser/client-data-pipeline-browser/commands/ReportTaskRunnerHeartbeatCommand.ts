import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReportTaskRunnerHeartbeat } from "../model/ReportTaskRunnerHeartbeat";
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
      Blob
    > {
  readonly model = ReportTaskRunnerHeartbeat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReportTaskRunnerHeartbeatInput,
    ReportTaskRunnerHeartbeatOutput,
    Blob
  >();

  constructor(readonly input: ReportTaskRunnerHeartbeatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
