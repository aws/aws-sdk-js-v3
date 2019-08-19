import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteSmsChannel } from "../model/operations/DeleteSmsChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteSmsChannelInput } from "../types/DeleteSmsChannelInput";
import { DeleteSmsChannelOutput } from "../types/DeleteSmsChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteSmsChannelInput";
export * from "../types/DeleteSmsChannelOutput";
export * from "../types/DeleteSmsChannelExceptionsUnion";

export class DeleteSmsChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteSmsChannelInput,
      OutputTypesUnion,
      DeleteSmsChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteSmsChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSmsChannelInput,
    DeleteSmsChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteSmsChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteSmsChannelInput, DeleteSmsChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteSmsChannelInput, DeleteSmsChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
