import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutDeliveryChannel } from "../model/operations/PutDeliveryChannel";
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
      Blob
    > {
  readonly model = PutDeliveryChannel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDeliveryChannelInput,
    PutDeliveryChannelOutput,
    Blob
  >();

  constructor(readonly input: PutDeliveryChannelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
