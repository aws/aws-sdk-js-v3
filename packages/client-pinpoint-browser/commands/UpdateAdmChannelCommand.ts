import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateAdmChannel } from "../model/UpdateAdmChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAdmChannelInput } from "../types/UpdateAdmChannelInput";
import { UpdateAdmChannelOutput } from "../types/UpdateAdmChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateAdmChannelInput";
export * from "../types/UpdateAdmChannelOutput";
export * from "../types/UpdateAdmChannelExceptionsUnion";

export class UpdateAdmChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAdmChannelInput,
      OutputTypesUnion,
      UpdateAdmChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAdmChannelInput,
    UpdateAdmChannelOutput,
    Blob
  >();

  constructor(readonly input: UpdateAdmChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateAdmChannelInput, UpdateAdmChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: UpdateAdmChannel
    };

    return stack.resolve(
      handler<UpdateAdmChannelInput, UpdateAdmChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
