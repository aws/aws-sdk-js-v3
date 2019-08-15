import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListJobsByPipeline } from "../model/operations/ListJobsByPipeline";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListJobsByPipelineInput } from "../types/ListJobsByPipelineInput";
import { ListJobsByPipelineOutput } from "../types/ListJobsByPipelineOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/ListJobsByPipelineInput";
export * from "../types/ListJobsByPipelineOutput";
export * from "../types/ListJobsByPipelineExceptionsUnion";

export class ListJobsByPipelineCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListJobsByPipelineInput,
      OutputTypesUnion,
      ListJobsByPipelineOutput,
      ElasticTranscoderResolvedConfiguration,
      Blob
    > {
  readonly model = ListJobsByPipeline;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListJobsByPipelineInput,
    ListJobsByPipelineOutput,
    Blob
  >();

  constructor(readonly input: ListJobsByPipelineInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListJobsByPipelineInput,
    ListJobsByPipelineOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListJobsByPipelineInput, ListJobsByPipelineOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
