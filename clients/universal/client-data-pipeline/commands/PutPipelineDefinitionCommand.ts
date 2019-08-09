import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutPipelineDefinition } from "../model/PutPipelineDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPipelineDefinitionInput } from "../types/PutPipelineDefinitionInput";
import { PutPipelineDefinitionOutput } from "../types/PutPipelineDefinitionOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/PutPipelineDefinitionInput";
export * from "../types/PutPipelineDefinitionOutput";
export * from "../types/PutPipelineDefinitionExceptionsUnion";

export class PutPipelineDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutPipelineDefinitionInput,
      OutputTypesUnion,
      PutPipelineDefinitionOutput,
      DataPipelineResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutPipelineDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPipelineDefinitionInput,
    PutPipelineDefinitionOutput,
    Uint8Array
  >();

  constructor(readonly input: PutPipelineDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutPipelineDefinitionInput,
    PutPipelineDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutPipelineDefinitionInput, PutPipelineDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
