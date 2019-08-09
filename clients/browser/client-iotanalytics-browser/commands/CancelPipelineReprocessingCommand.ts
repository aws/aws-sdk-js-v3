import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelPipelineReprocessing } from "../model/CancelPipelineReprocessing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelPipelineReprocessingInput } from "../types/CancelPipelineReprocessingInput";
import { CancelPipelineReprocessingOutput } from "../types/CancelPipelineReprocessingOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/CancelPipelineReprocessingInput";
export * from "../types/CancelPipelineReprocessingOutput";
export * from "../types/CancelPipelineReprocessingExceptionsUnion";

export class CancelPipelineReprocessingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelPipelineReprocessingInput,
      OutputTypesUnion,
      CancelPipelineReprocessingOutput,
      IoTAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = CancelPipelineReprocessing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelPipelineReprocessingInput,
    CancelPipelineReprocessingOutput,
    Blob
  >();

  constructor(readonly input: CancelPipelineReprocessingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CancelPipelineReprocessingInput,
    CancelPipelineReprocessingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CancelPipelineReprocessingInput,
        CancelPipelineReprocessingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
