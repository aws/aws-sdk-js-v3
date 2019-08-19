import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDeliveryChannels } from "../model/operations/DescribeDeliveryChannels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDeliveryChannelsInput } from "../types/DescribeDeliveryChannelsInput";
import { DescribeDeliveryChannelsOutput } from "../types/DescribeDeliveryChannelsOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeDeliveryChannelsInput";
export * from "../types/DescribeDeliveryChannelsOutput";
export * from "../types/DescribeDeliveryChannelsExceptionsUnion";

export class DescribeDeliveryChannelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDeliveryChannelsInput,
      OutputTypesUnion,
      DescribeDeliveryChannelsOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDeliveryChannels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDeliveryChannelsInput,
    DescribeDeliveryChannelsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDeliveryChannelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDeliveryChannelsInput,
    DescribeDeliveryChannelsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDeliveryChannelsInput, DescribeDeliveryChannelsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
