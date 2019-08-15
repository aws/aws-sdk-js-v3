import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateApnsSandboxChannel } from "../model/operations/UpdateApnsSandboxChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApnsSandboxChannelInput } from "../types/UpdateApnsSandboxChannelInput";
import { UpdateApnsSandboxChannelOutput } from "../types/UpdateApnsSandboxChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateApnsSandboxChannelInput";
export * from "../types/UpdateApnsSandboxChannelOutput";
export * from "../types/UpdateApnsSandboxChannelExceptionsUnion";

export class UpdateApnsSandboxChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApnsSandboxChannelInput,
      OutputTypesUnion,
      UpdateApnsSandboxChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateApnsSandboxChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApnsSandboxChannelInput,
    UpdateApnsSandboxChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateApnsSandboxChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateApnsSandboxChannelInput,
    UpdateApnsSandboxChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApnsSandboxChannelInput, UpdateApnsSandboxChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
