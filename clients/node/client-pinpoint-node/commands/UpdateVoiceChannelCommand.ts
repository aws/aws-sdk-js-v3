import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateVoiceChannel } from "../model/operations/UpdateVoiceChannel";
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
      _stream.Readable
    > {
  readonly model = UpdateVoiceChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateVoiceChannelInput,
    UpdateVoiceChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateVoiceChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
