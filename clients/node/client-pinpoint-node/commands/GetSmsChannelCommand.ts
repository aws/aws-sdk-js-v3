import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSmsChannel } from "../model/GetSmsChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSmsChannelInput } from "../types/GetSmsChannelInput";
import { GetSmsChannelOutput } from "../types/GetSmsChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetSmsChannelInput";
export * from "../types/GetSmsChannelOutput";
export * from "../types/GetSmsChannelExceptionsUnion";

export class GetSmsChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSmsChannelInput,
      OutputTypesUnion,
      GetSmsChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSmsChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSmsChannelInput,
    GetSmsChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSmsChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSmsChannelInput, GetSmsChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSmsChannelInput, GetSmsChannelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
