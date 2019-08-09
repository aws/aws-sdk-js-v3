import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ValidatePipelineDefinition } from "../model/ValidatePipelineDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ValidatePipelineDefinitionInput } from "../types/ValidatePipelineDefinitionInput";
import { ValidatePipelineDefinitionOutput } from "../types/ValidatePipelineDefinitionOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/ValidatePipelineDefinitionInput";
export * from "../types/ValidatePipelineDefinitionOutput";
export * from "../types/ValidatePipelineDefinitionExceptionsUnion";

export class ValidatePipelineDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ValidatePipelineDefinitionInput,
      OutputTypesUnion,
      ValidatePipelineDefinitionOutput,
      DataPipelineResolvedConfiguration,
      Blob
    > {
  readonly model = ValidatePipelineDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ValidatePipelineDefinitionInput,
    ValidatePipelineDefinitionOutput,
    Blob
  >();

  constructor(readonly input: ValidatePipelineDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ValidatePipelineDefinitionInput,
    ValidatePipelineDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ValidatePipelineDefinitionInput,
        ValidatePipelineDefinitionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
