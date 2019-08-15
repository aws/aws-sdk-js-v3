import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartPipelineExecution } from "../model/operations/StartPipelineExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartPipelineExecutionInput } from "../types/StartPipelineExecutionInput";
import { StartPipelineExecutionOutput } from "../types/StartPipelineExecutionOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/StartPipelineExecutionInput";
export * from "../types/StartPipelineExecutionOutput";
export * from "../types/StartPipelineExecutionExceptionsUnion";

export class StartPipelineExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartPipelineExecutionInput,
      OutputTypesUnion,
      StartPipelineExecutionOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = StartPipelineExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartPipelineExecutionInput,
    StartPipelineExecutionOutput,
    Blob
  >();

  constructor(readonly input: StartPipelineExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartPipelineExecutionInput,
    StartPipelineExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartPipelineExecutionInput, StartPipelineExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
