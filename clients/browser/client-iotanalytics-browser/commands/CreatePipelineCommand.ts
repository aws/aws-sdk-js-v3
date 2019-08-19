import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePipeline } from "../model/operations/CreatePipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePipelineInput } from "../types/CreatePipelineInput";
import { CreatePipelineOutput } from "../types/CreatePipelineOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
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
      IoTAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePipelineInput,
    CreatePipelineOutput,
    Blob
  >();

  constructor(readonly input: CreatePipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTAnalyticsResolvedConfiguration
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
