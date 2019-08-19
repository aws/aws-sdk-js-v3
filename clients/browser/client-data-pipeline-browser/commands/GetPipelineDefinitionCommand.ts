import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPipelineDefinition } from "../model/operations/GetPipelineDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPipelineDefinitionInput } from "../types/GetPipelineDefinitionInput";
import { GetPipelineDefinitionOutput } from "../types/GetPipelineDefinitionOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/GetPipelineDefinitionInput";
export * from "../types/GetPipelineDefinitionOutput";
export * from "../types/GetPipelineDefinitionExceptionsUnion";

export class GetPipelineDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPipelineDefinitionInput,
      OutputTypesUnion,
      GetPipelineDefinitionOutput,
      DataPipelineResolvedConfiguration,
      Blob
    > {
  readonly model = GetPipelineDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPipelineDefinitionInput,
    GetPipelineDefinitionOutput,
    Blob
  >();

  constructor(readonly input: GetPipelineDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPipelineDefinitionInput,
    GetPipelineDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPipelineDefinitionInput, GetPipelineDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
