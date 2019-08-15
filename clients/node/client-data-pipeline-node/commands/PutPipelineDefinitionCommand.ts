import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutPipelineDefinition } from "../model/operations/PutPipelineDefinition";
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
      _stream.Readable
    > {
  readonly model = PutPipelineDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPipelineDefinitionInput,
    PutPipelineDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutPipelineDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
