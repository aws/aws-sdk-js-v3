import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAdmChannel } from "../model/operations/GetAdmChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAdmChannelInput } from "../types/GetAdmChannelInput";
import { GetAdmChannelOutput } from "../types/GetAdmChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetAdmChannelInput";
export * from "../types/GetAdmChannelOutput";
export * from "../types/GetAdmChannelExceptionsUnion";

export class GetAdmChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAdmChannelInput,
      OutputTypesUnion,
      GetAdmChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetAdmChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAdmChannelInput,
    GetAdmChannelOutput,
    Blob
  >();

  constructor(readonly input: GetAdmChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAdmChannelInput, GetAdmChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAdmChannelInput, GetAdmChannelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
