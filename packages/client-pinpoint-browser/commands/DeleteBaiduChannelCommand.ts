import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBaiduChannel } from "../model/DeleteBaiduChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBaiduChannelInput } from "../types/DeleteBaiduChannelInput";
import { DeleteBaiduChannelOutput } from "../types/DeleteBaiduChannelOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteBaiduChannelInput";
export * from "../types/DeleteBaiduChannelOutput";
export * from "../types/DeleteBaiduChannelExceptionsUnion";

export class DeleteBaiduChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBaiduChannelInput,
      OutputTypesUnion,
      DeleteBaiduChannelOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteBaiduChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBaiduChannelInput,
    DeleteBaiduChannelOutput,
    Blob
  >();

  constructor(readonly input: DeleteBaiduChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteBaiduChannelInput,
    DeleteBaiduChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBaiduChannelInput, DeleteBaiduChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
