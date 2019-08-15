import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetApnsSandboxChannel } from "../model/operations/GetApnsSandboxChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApnsSandboxChannelInput } from "../types/GetApnsSandboxChannelInput";
import { GetApnsSandboxChannelOutput } from "../types/GetApnsSandboxChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetApnsSandboxChannelInput";
export * from "../types/GetApnsSandboxChannelOutput";
export * from "../types/GetApnsSandboxChannelExceptionsUnion";

export class GetApnsSandboxChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApnsSandboxChannelInput,
      OutputTypesUnion,
      GetApnsSandboxChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetApnsSandboxChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApnsSandboxChannelInput,
    GetApnsSandboxChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetApnsSandboxChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetApnsSandboxChannelInput,
    GetApnsSandboxChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApnsSandboxChannelInput, GetApnsSandboxChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
