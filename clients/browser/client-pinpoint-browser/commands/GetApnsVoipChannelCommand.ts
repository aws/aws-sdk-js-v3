import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApnsVoipChannel } from "../model/operations/GetApnsVoipChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApnsVoipChannelInput } from "../types/GetApnsVoipChannelInput";
import { GetApnsVoipChannelOutput } from "../types/GetApnsVoipChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetApnsVoipChannelInput";
export * from "../types/GetApnsVoipChannelOutput";
export * from "../types/GetApnsVoipChannelExceptionsUnion";

export class GetApnsVoipChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApnsVoipChannelInput,
      OutputTypesUnion,
      GetApnsVoipChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetApnsVoipChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApnsVoipChannelInput,
    GetApnsVoipChannelOutput,
    Blob
  >();

  constructor(readonly input: GetApnsVoipChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetApnsVoipChannelInput,
    GetApnsVoipChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApnsVoipChannelInput, GetApnsVoipChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
