import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePipeline } from "../model/operations/DescribePipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePipelineInput } from "../types/DescribePipelineInput";
import { DescribePipelineOutput } from "../types/DescribePipelineOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/DescribePipelineInput";
export * from "../types/DescribePipelineOutput";
export * from "../types/DescribePipelineExceptionsUnion";

export class DescribePipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePipelineInput,
      OutputTypesUnion,
      DescribePipelineOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePipelineInput,
    DescribePipelineOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribePipelineInput, DescribePipelineOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePipelineInput, DescribePipelineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
