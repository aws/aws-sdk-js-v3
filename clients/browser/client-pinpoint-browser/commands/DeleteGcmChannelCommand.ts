import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteGcmChannel } from "../model/DeleteGcmChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteGcmChannelInput } from "../types/DeleteGcmChannelInput";
import { DeleteGcmChannelOutput } from "../types/DeleteGcmChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteGcmChannelInput";
export * from "../types/DeleteGcmChannelOutput";
export * from "../types/DeleteGcmChannelExceptionsUnion";

export class DeleteGcmChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteGcmChannelInput,
      OutputTypesUnion,
      DeleteGcmChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteGcmChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteGcmChannelInput,
    DeleteGcmChannelOutput,
    Blob
  >();

  constructor(readonly input: DeleteGcmChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteGcmChannelInput, DeleteGcmChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteGcmChannelInput, DeleteGcmChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
