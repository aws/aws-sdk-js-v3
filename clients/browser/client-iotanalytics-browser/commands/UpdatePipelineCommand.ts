import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdatePipeline } from "../model/operations/UpdatePipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePipelineInput } from "../types/UpdatePipelineInput";
import { UpdatePipelineOutput } from "../types/UpdatePipelineOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/UpdatePipelineInput";
export * from "../types/UpdatePipelineOutput";
export * from "../types/UpdatePipelineExceptionsUnion";

export class UpdatePipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePipelineInput,
      OutputTypesUnion,
      UpdatePipelineOutput,
      IoTAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdatePipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePipelineInput,
    UpdatePipelineOutput,
    Blob
  >();

  constructor(readonly input: UpdatePipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdatePipelineInput, UpdatePipelineOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePipelineInput, UpdatePipelineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
