import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutConfigurationSetDeliveryOptions } from "../model/PutConfigurationSetDeliveryOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutConfigurationSetDeliveryOptionsInput } from "../types/PutConfigurationSetDeliveryOptionsInput";
import { PutConfigurationSetDeliveryOptionsOutput } from "../types/PutConfigurationSetDeliveryOptionsOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutConfigurationSetDeliveryOptionsInput";
export * from "../types/PutConfigurationSetDeliveryOptionsOutput";
export * from "../types/PutConfigurationSetDeliveryOptionsExceptionsUnion";

export class PutConfigurationSetDeliveryOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutConfigurationSetDeliveryOptionsInput,
      OutputTypesUnion,
      PutConfigurationSetDeliveryOptionsOutput,
      PinpointEmailResolvedConfiguration,
      Blob
    > {
  readonly model = PutConfigurationSetDeliveryOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutConfigurationSetDeliveryOptionsInput,
    PutConfigurationSetDeliveryOptionsOutput,
    Blob
  >();

  constructor(readonly input: PutConfigurationSetDeliveryOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutConfigurationSetDeliveryOptionsInput,
    PutConfigurationSetDeliveryOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        PutConfigurationSetDeliveryOptionsInput,
        PutConfigurationSetDeliveryOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
