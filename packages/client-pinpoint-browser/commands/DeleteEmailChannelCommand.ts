import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteEmailChannel } from "../model/DeleteEmailChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEmailChannelInput } from "../types/DeleteEmailChannelInput";
import { DeleteEmailChannelOutput } from "../types/DeleteEmailChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteEmailChannelInput";
export * from "../types/DeleteEmailChannelOutput";
export * from "../types/DeleteEmailChannelExceptionsUnion";

export class DeleteEmailChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEmailChannelInput,
      OutputTypesUnion,
      DeleteEmailChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEmailChannelInput,
    DeleteEmailChannelOutput,
    Blob
  >();

  constructor(readonly input: DeleteEmailChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEmailChannelInput,
    DeleteEmailChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DeleteEmailChannel
    };

    return stack.resolve(
      handler<DeleteEmailChannelInput, DeleteEmailChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
