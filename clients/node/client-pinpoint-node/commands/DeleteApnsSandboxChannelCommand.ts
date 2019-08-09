import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteApnsSandboxChannel } from "../model/DeleteApnsSandboxChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApnsSandboxChannelInput } from "../types/DeleteApnsSandboxChannelInput";
import { DeleteApnsSandboxChannelOutput } from "../types/DeleteApnsSandboxChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteApnsSandboxChannelInput";
export * from "../types/DeleteApnsSandboxChannelOutput";
export * from "../types/DeleteApnsSandboxChannelExceptionsUnion";

export class DeleteApnsSandboxChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApnsSandboxChannelInput,
      OutputTypesUnion,
      DeleteApnsSandboxChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteApnsSandboxChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApnsSandboxChannelInput,
    DeleteApnsSandboxChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteApnsSandboxChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApnsSandboxChannelInput,
    DeleteApnsSandboxChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApnsSandboxChannelInput, DeleteApnsSandboxChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
