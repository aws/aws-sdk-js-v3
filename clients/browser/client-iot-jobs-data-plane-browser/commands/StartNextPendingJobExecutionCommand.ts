import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartNextPendingJobExecution } from "../model/operations/StartNextPendingJobExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartNextPendingJobExecutionInput } from "../types/StartNextPendingJobExecutionInput";
import { StartNextPendingJobExecutionOutput } from "../types/StartNextPendingJobExecutionOutput";
import { IoTJobsDataPlaneResolvedConfiguration } from "../IoTJobsDataPlaneConfiguration";
export * from "../types/StartNextPendingJobExecutionInput";
export * from "../types/StartNextPendingJobExecutionOutput";
export * from "../types/StartNextPendingJobExecutionExceptionsUnion";

export class StartNextPendingJobExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartNextPendingJobExecutionInput,
      OutputTypesUnion,
      StartNextPendingJobExecutionOutput,
      IoTJobsDataPlaneResolvedConfiguration,
      Blob
    > {
  readonly model = StartNextPendingJobExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartNextPendingJobExecutionInput,
    StartNextPendingJobExecutionOutput,
    Blob
  >();

  constructor(readonly input: StartNextPendingJobExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTJobsDataPlaneResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartNextPendingJobExecutionInput,
    StartNextPendingJobExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartNextPendingJobExecutionInput,
        StartNextPendingJobExecutionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
