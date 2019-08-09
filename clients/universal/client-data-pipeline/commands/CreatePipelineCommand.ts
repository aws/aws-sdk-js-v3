import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePipeline } from "../model/CreatePipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePipelineInput } from "../types/CreatePipelineInput";
import { CreatePipelineOutput } from "../types/CreatePipelineOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/CreatePipelineInput";
export * from "../types/CreatePipelineOutput";
export * from "../types/CreatePipelineExceptionsUnion";

export class CreatePipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePipelineInput,
      OutputTypesUnion,
      CreatePipelineOutput,
      DataPipelineResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreatePipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePipelineInput,
    CreatePipelineOutput,
    Uint8Array
  >();

  constructor(readonly input: CreatePipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePipelineInput, CreatePipelineOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePipelineInput, CreatePipelineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
