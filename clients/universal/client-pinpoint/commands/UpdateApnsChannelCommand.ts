import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateApnsChannel } from "../model/UpdateApnsChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApnsChannelInput } from "../types/UpdateApnsChannelInput";
import { UpdateApnsChannelOutput } from "../types/UpdateApnsChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateApnsChannelInput";
export * from "../types/UpdateApnsChannelOutput";
export * from "../types/UpdateApnsChannelExceptionsUnion";

export class UpdateApnsChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApnsChannelInput,
      OutputTypesUnion,
      UpdateApnsChannelOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateApnsChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApnsChannelInput,
    UpdateApnsChannelOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateApnsChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateApnsChannelInput, UpdateApnsChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApnsChannelInput, UpdateApnsChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
