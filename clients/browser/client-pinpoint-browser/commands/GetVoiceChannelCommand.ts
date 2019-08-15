import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetVoiceChannel } from "../model/operations/GetVoiceChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetVoiceChannelInput } from "../types/GetVoiceChannelInput";
import { GetVoiceChannelOutput } from "../types/GetVoiceChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetVoiceChannelInput";
export * from "../types/GetVoiceChannelOutput";
export * from "../types/GetVoiceChannelExceptionsUnion";

export class GetVoiceChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetVoiceChannelInput,
      OutputTypesUnion,
      GetVoiceChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetVoiceChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetVoiceChannelInput,
    GetVoiceChannelOutput,
    Blob
  >();

  constructor(readonly input: GetVoiceChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetVoiceChannelInput, GetVoiceChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetVoiceChannelInput, GetVoiceChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
