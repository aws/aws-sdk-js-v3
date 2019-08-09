import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPipelineExecution } from "../model/GetPipelineExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPipelineExecutionInput } from "../types/GetPipelineExecutionInput";
import { GetPipelineExecutionOutput } from "../types/GetPipelineExecutionOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/GetPipelineExecutionInput";
export * from "../types/GetPipelineExecutionOutput";
export * from "../types/GetPipelineExecutionExceptionsUnion";

export class GetPipelineExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPipelineExecutionInput,
      OutputTypesUnion,
      GetPipelineExecutionOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = GetPipelineExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPipelineExecutionInput,
    GetPipelineExecutionOutput,
    Blob
  >();

  constructor(readonly input: GetPipelineExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPipelineExecutionInput,
    GetPipelineExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPipelineExecutionInput, GetPipelineExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
