import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateEmailChannel } from "../model/UpdateEmailChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateEmailChannelInput } from "../types/UpdateEmailChannelInput";
import { UpdateEmailChannelOutput } from "../types/UpdateEmailChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/UpdateEmailChannelInput";
export * from "../types/UpdateEmailChannelOutput";
export * from "../types/UpdateEmailChannelExceptionsUnion";

export class UpdateEmailChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateEmailChannelInput,
      OutputTypesUnion,
      UpdateEmailChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateEmailChannelInput,
    UpdateEmailChannelOutput,
    Blob
  >();

  constructor(readonly input: UpdateEmailChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateEmailChannelInput,
    UpdateEmailChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: UpdateEmailChannel
    };

    return stack.resolve(
      handler<UpdateEmailChannelInput, UpdateEmailChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
