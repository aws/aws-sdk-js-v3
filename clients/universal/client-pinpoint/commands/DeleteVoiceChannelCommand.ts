import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVoiceChannel } from "../model/DeleteVoiceChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVoiceChannelInput } from "../types/DeleteVoiceChannelInput";
import { DeleteVoiceChannelOutput } from "../types/DeleteVoiceChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteVoiceChannelInput";
export * from "../types/DeleteVoiceChannelOutput";
export * from "../types/DeleteVoiceChannelExceptionsUnion";

export class DeleteVoiceChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVoiceChannelInput,
      OutputTypesUnion,
      DeleteVoiceChannelOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteVoiceChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVoiceChannelInput,
    DeleteVoiceChannelOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteVoiceChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVoiceChannelInput,
    DeleteVoiceChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteVoiceChannelInput, DeleteVoiceChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
