import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdatePipelineStatus } from "../model/UpdatePipelineStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePipelineStatusInput } from "../types/UpdatePipelineStatusInput";
import { UpdatePipelineStatusOutput } from "../types/UpdatePipelineStatusOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/UpdatePipelineStatusInput";
export * from "../types/UpdatePipelineStatusOutput";
export * from "../types/UpdatePipelineStatusExceptionsUnion";

export class UpdatePipelineStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePipelineStatusInput,
      OutputTypesUnion,
      UpdatePipelineStatusOutput,
      ElasticTranscoderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdatePipelineStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePipelineStatusInput,
    UpdatePipelineStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdatePipelineStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdatePipelineStatusInput,
    UpdatePipelineStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePipelineStatusInput, UpdatePipelineStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
