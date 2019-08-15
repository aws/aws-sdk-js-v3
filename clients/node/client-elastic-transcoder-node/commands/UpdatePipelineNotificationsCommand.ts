import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdatePipelineNotifications } from "../model/operations/UpdatePipelineNotifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePipelineNotificationsInput } from "../types/UpdatePipelineNotificationsInput";
import { UpdatePipelineNotificationsOutput } from "../types/UpdatePipelineNotificationsOutput";
import { ElasticTranscoderResolvedConfiguration } from "../ElasticTranscoderConfiguration";
export * from "../types/UpdatePipelineNotificationsInput";
export * from "../types/UpdatePipelineNotificationsOutput";
export * from "../types/UpdatePipelineNotificationsExceptionsUnion";

export class UpdatePipelineNotificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePipelineNotificationsInput,
      OutputTypesUnion,
      UpdatePipelineNotificationsOutput,
      ElasticTranscoderResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdatePipelineNotifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePipelineNotificationsInput,
    UpdatePipelineNotificationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdatePipelineNotificationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticTranscoderResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdatePipelineNotificationsInput,
    UpdatePipelineNotificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdatePipelineNotificationsInput,
        UpdatePipelineNotificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
