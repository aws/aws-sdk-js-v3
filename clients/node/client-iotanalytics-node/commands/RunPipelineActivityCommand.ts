import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RunPipelineActivity } from "../model/operations/RunPipelineActivity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RunPipelineActivityInput } from "../types/RunPipelineActivityInput";
import { RunPipelineActivityOutput } from "../types/RunPipelineActivityOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/RunPipelineActivityInput";
export * from "../types/RunPipelineActivityOutput";
export * from "../types/RunPipelineActivityExceptionsUnion";

export class RunPipelineActivityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RunPipelineActivityInput,
      OutputTypesUnion,
      RunPipelineActivityOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RunPipelineActivity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RunPipelineActivityInput,
    RunPipelineActivityOutput,
    _stream.Readable
  >();

  constructor(readonly input: RunPipelineActivityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RunPipelineActivityInput,
    RunPipelineActivityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RunPipelineActivityInput, RunPipelineActivityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
