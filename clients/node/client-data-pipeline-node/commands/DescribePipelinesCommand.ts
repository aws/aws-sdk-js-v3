import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePipelines } from "../model/operations/DescribePipelines";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePipelinesInput } from "../types/DescribePipelinesInput";
import { DescribePipelinesOutput } from "../types/DescribePipelinesOutput";
import { DataPipelineResolvedConfiguration } from "../DataPipelineConfiguration";
export * from "../types/DescribePipelinesInput";
export * from "../types/DescribePipelinesOutput";
export * from "../types/DescribePipelinesExceptionsUnion";

export class DescribePipelinesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePipelinesInput,
      OutputTypesUnion,
      DescribePipelinesOutput,
      DataPipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePipelines;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePipelinesInput,
    DescribePipelinesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePipelinesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataPipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribePipelinesInput, DescribePipelinesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePipelinesInput, DescribePipelinesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
