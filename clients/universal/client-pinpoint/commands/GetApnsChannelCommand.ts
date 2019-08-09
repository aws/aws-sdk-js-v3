import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApnsChannel } from "../model/GetApnsChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApnsChannelInput } from "../types/GetApnsChannelInput";
import { GetApnsChannelOutput } from "../types/GetApnsChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetApnsChannelInput";
export * from "../types/GetApnsChannelOutput";
export * from "../types/GetApnsChannelExceptionsUnion";

export class GetApnsChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApnsChannelInput,
      OutputTypesUnion,
      GetApnsChannelOutput,
      PinpointResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetApnsChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApnsChannelInput,
    GetApnsChannelOutput,
    Uint8Array
  >();

  constructor(readonly input: GetApnsChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetApnsChannelInput, GetApnsChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApnsChannelInput, GetApnsChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
