import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelTaskExecution } from "../model/operations/CancelTaskExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelTaskExecutionInput } from "../types/CancelTaskExecutionInput";
import { CancelTaskExecutionOutput } from "../types/CancelTaskExecutionOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/CancelTaskExecutionInput";
export * from "../types/CancelTaskExecutionOutput";
export * from "../types/CancelTaskExecutionExceptionsUnion";

export class CancelTaskExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelTaskExecutionInput,
      OutputTypesUnion,
      CancelTaskExecutionOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = CancelTaskExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelTaskExecutionInput,
    CancelTaskExecutionOutput,
    Blob
  >();

  constructor(readonly input: CancelTaskExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelTaskExecutionInput,
    CancelTaskExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelTaskExecutionInput, CancelTaskExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
