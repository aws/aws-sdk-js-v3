import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDeliveryChannel } from "../model/operations/DeleteDeliveryChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDeliveryChannelInput } from "../types/DeleteDeliveryChannelInput";
import { DeleteDeliveryChannelOutput } from "../types/DeleteDeliveryChannelOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DeleteDeliveryChannelInput";
export * from "../types/DeleteDeliveryChannelOutput";
export * from "../types/DeleteDeliveryChannelExceptionsUnion";

export class DeleteDeliveryChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDeliveryChannelInput,
      OutputTypesUnion,
      DeleteDeliveryChannelOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDeliveryChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDeliveryChannelInput,
    DeleteDeliveryChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDeliveryChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDeliveryChannelInput,
    DeleteDeliveryChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDeliveryChannelInput, DeleteDeliveryChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
