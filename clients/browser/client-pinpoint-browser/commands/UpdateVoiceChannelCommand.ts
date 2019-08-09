import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateVoiceChannel } from "../model/UpdateVoiceChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateVoiceChannelInput } from "../types/UpdateVoiceChannelInput";
import { UpdateVoiceChannelOutput } from "../types/UpdateVoiceChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateVoiceChannelInput";
export * from "../types/UpdateVoiceChannelOutput";
export * from "../types/UpdateVoiceChannelExceptionsUnion";

export class UpdateVoiceChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateVoiceChannelInput,
      OutputTypesUnion,
      UpdateVoiceChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateVoiceChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVoiceChannelInput,
    UpdateVoiceChannelOutput,
    Blob
  >();

  constructor(readonly input: UpdateVoiceChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateVoiceChannelInput,
    UpdateVoiceChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateVoiceChannelInput, UpdateVoiceChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
