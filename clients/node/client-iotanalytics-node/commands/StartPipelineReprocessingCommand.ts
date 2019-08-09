import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartPipelineReprocessing } from "../model/StartPipelineReprocessing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartPipelineReprocessingInput } from "../types/StartPipelineReprocessingInput";
import { StartPipelineReprocessingOutput } from "../types/StartPipelineReprocessingOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/StartPipelineReprocessingInput";
export * from "../types/StartPipelineReprocessingOutput";
export * from "../types/StartPipelineReprocessingExceptionsUnion";

export class StartPipelineReprocessingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartPipelineReprocessingInput,
      OutputTypesUnion,
      StartPipelineReprocessingOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartPipelineReprocessing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartPipelineReprocessingInput,
    StartPipelineReprocessingOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartPipelineReprocessingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartPipelineReprocessingInput,
    StartPipelineReprocessingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartPipelineReprocessingInput, StartPipelineReprocessingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
