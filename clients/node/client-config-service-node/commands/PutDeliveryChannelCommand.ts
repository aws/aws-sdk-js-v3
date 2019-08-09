import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutDeliveryChannel } from "../model/PutDeliveryChannel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutDeliveryChannelInput } from "../types/PutDeliveryChannelInput";
import { PutDeliveryChannelOutput } from "../types/PutDeliveryChannelOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutDeliveryChannelInput";
export * from "../types/PutDeliveryChannelOutput";
export * from "../types/PutDeliveryChannelExceptionsUnion";

export class PutDeliveryChannelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutDeliveryChannelInput,
      OutputTypesUnion,
      PutDeliveryChannelOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutDeliveryChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDeliveryChannelInput,
    PutDeliveryChannelOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutDeliveryChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutDeliveryChannelInput,
    PutDeliveryChannelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutDeliveryChannelInput, PutDeliveryChannelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
