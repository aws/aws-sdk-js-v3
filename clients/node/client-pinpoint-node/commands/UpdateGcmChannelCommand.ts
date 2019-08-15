import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateGcmChannel } from "../model/operations/UpdateGcmChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateGcmChannelInput } from "../types/UpdateGcmChannelInput";
import { UpdateGcmChannelOutput } from "../types/UpdateGcmChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateGcmChannelInput";
export * from "../types/UpdateGcmChannelOutput";
export * from "../types/UpdateGcmChannelExceptionsUnion";

export class UpdateGcmChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateGcmChannelInput,
      OutputTypesUnion,
      UpdateGcmChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateGcmChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateGcmChannelInput,
    UpdateGcmChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateGcmChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateGcmChannelInput, UpdateGcmChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateGcmChannelInput, UpdateGcmChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
