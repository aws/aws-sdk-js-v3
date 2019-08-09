import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ActivatePipeline } from "../model/ActivatePipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ActivatePipelineInput } from "../types/ActivatePipelineInput";
import { ActivatePipelineOutput } from "../types/ActivatePipelineOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/ActivatePipelineInput";
export * from "../types/ActivatePipelineOutput";
export * from "../types/ActivatePipelineExceptionsUnion";

export class ActivatePipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ActivatePipelineInput,
      OutputTypesUnion,
      ActivatePipelineOutput,
      DataPipelineResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ActivatePipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ActivatePipelineInput,
    ActivatePipelineOutput,
    Uint8Array
  >();

  constructor(readonly input: ActivatePipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<ActivatePipelineInput, ActivatePipelineOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ActivatePipelineInput, ActivatePipelineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
