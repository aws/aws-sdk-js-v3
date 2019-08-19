import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteApnsChannel } from "../model/operations/DeleteApnsChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApnsChannelInput } from "../types/DeleteApnsChannelInput";
import { DeleteApnsChannelOutput } from "../types/DeleteApnsChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteApnsChannelInput";
export * from "../types/DeleteApnsChannelOutput";
export * from "../types/DeleteApnsChannelExceptionsUnion";

export class DeleteApnsChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApnsChannelInput,
      OutputTypesUnion,
      DeleteApnsChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteApnsChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApnsChannelInput,
    DeleteApnsChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteApnsChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteApnsChannelInput, DeleteApnsChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApnsChannelInput, DeleteApnsChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
