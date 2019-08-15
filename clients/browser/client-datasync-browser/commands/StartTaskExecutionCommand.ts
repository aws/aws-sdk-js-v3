import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartTaskExecution } from "../model/operations/StartTaskExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartTaskExecutionInput } from "../types/StartTaskExecutionInput";
import { StartTaskExecutionOutput } from "../types/StartTaskExecutionOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/StartTaskExecutionInput";
export * from "../types/StartTaskExecutionOutput";
export * from "../types/StartTaskExecutionExceptionsUnion";

export class StartTaskExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartTaskExecutionInput,
      OutputTypesUnion,
      StartTaskExecutionOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = StartTaskExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartTaskExecutionInput,
    StartTaskExecutionOutput,
    Blob
  >();

  constructor(readonly input: StartTaskExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartTaskExecutionInput,
    StartTaskExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartTaskExecutionInput, StartTaskExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
