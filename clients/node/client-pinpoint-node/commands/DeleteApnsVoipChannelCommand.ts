import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteApnsVoipChannel } from "../model/operations/DeleteApnsVoipChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApnsVoipChannelInput } from "../types/DeleteApnsVoipChannelInput";
import { DeleteApnsVoipChannelOutput } from "../types/DeleteApnsVoipChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteApnsVoipChannelInput";
export * from "../types/DeleteApnsVoipChannelOutput";
export * from "../types/DeleteApnsVoipChannelExceptionsUnion";

export class DeleteApnsVoipChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApnsVoipChannelInput,
      OutputTypesUnion,
      DeleteApnsVoipChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteApnsVoipChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApnsVoipChannelInput,
    DeleteApnsVoipChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteApnsVoipChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApnsVoipChannelInput,
    DeleteApnsVoipChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApnsVoipChannelInput, DeleteApnsVoipChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
