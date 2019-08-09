import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteChannel } from "../model/DeleteChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteChannelInput } from "../types/DeleteChannelInput";
import { DeleteChannelOutput } from "../types/DeleteChannelOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DeleteChannelInput";
export * from "../types/DeleteChannelOutput";
export * from "../types/DeleteChannelExceptionsUnion";

export class DeleteChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteChannelInput,
      OutputTypesUnion,
      DeleteChannelOutput,
      MediaLiveResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteChannelInput,
    DeleteChannelOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteChannelInput, DeleteChannelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteChannelInput, DeleteChannelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
