import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteSmsChannel } from "../model/DeleteSmsChannel";
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
      Blob
    > {
  readonly model = DeleteSmsChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteSmsChannelInput,
    DeleteSmsChannelOutput,
    Blob
  >();

  constructor(readonly input: DeleteSmsChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
