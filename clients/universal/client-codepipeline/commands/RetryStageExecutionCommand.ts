import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RetryStageExecution } from "../model/RetryStageExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RetryStageExecutionInput } from "../types/RetryStageExecutionInput";
import { RetryStageExecutionOutput } from "../types/RetryStageExecutionOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/RetryStageExecutionInput";
export * from "../types/RetryStageExecutionOutput";
export * from "../types/RetryStageExecutionExceptionsUnion";

export class RetryStageExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RetryStageExecutionInput,
      OutputTypesUnion,
      RetryStageExecutionOutput,
      CodePipelineResolvedConfiguration,
      Uint8Array
    > {
  readonly model = RetryStageExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RetryStageExecutionInput,
    RetryStageExecutionOutput,
    Uint8Array
  >();

  constructor(readonly input: RetryStageExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RetryStageExecutionInput,
    RetryStageExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RetryStageExecutionInput, RetryStageExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
