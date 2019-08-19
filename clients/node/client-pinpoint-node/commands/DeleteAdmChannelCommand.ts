import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAdmChannel } from "../model/operations/DeleteAdmChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAdmChannelInput } from "../types/DeleteAdmChannelInput";
import { DeleteAdmChannelOutput } from "../types/DeleteAdmChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteAdmChannelInput";
export * from "../types/DeleteAdmChannelOutput";
export * from "../types/DeleteAdmChannelExceptionsUnion";

export class DeleteAdmChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAdmChannelInput,
      OutputTypesUnion,
      DeleteAdmChannelOutput,
      PinpointResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAdmChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAdmChannelInput,
    DeleteAdmChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAdmChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAdmChannelInput, DeleteAdmChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAdmChannelInput, DeleteAdmChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
