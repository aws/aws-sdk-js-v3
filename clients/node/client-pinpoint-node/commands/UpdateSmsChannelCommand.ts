import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateSmsChannel } from "../model/UpdateSmsChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateSmsChannelInput } from "../types/UpdateSmsChannelInput";
import { UpdateSmsChannelOutput } from "../types/UpdateSmsChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateSmsChannelInput";
export * from "../types/UpdateSmsChannelOutput";
export * from "../types/UpdateSmsChannelExceptionsUnion";

export class UpdateSmsChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateSmsChannelInput,
      OutputTypesUnion,
      UpdateSmsChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateSmsChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateSmsChannelInput,
    UpdateSmsChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateSmsChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateSmsChannelInput, UpdateSmsChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateSmsChannelInput, UpdateSmsChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
