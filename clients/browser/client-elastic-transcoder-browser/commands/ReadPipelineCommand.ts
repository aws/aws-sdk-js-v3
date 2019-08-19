import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ReadPipeline } from "../model/operations/ReadPipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ReadPipelineInput } from "../types/ReadPipelineInput";
import { ReadPipelineOutput } from "../types/ReadPipelineOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/ReadPipelineInput";
export * from "../types/ReadPipelineOutput";
export * from "../types/ReadPipelineExceptionsUnion";

export class ReadPipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ReadPipelineInput,
      OutputTypesUnion,
      ReadPipelineOutput,
      ElasticTranscoderResolvedConfiguration,
      Blob
    > {
  readonly model = ReadPipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ReadPipelineInput,
    ReadPipelineOutput,
    Blob
  >();

  constructor(readonly input: ReadPipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<ReadPipelineInput, ReadPipelineOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ReadPipelineInput, ReadPipelineOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
