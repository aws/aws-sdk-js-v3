import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDeliveryChannelStatus } from "../model/DescribeDeliveryChannelStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDeliveryChannelStatusInput } from "../types/DescribeDeliveryChannelStatusInput";
import { DescribeDeliveryChannelStatusOutput } from "../types/DescribeDeliveryChannelStatusOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeDeliveryChannelStatusInput";
export * from "../types/DescribeDeliveryChannelStatusOutput";
export * from "../types/DescribeDeliveryChannelStatusExceptionsUnion";

export class DescribeDeliveryChannelStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDeliveryChannelStatusInput,
      OutputTypesUnion,
      DescribeDeliveryChannelStatusOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDeliveryChannelStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDeliveryChannelStatusInput,
    DescribeDeliveryChannelStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDeliveryChannelStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDeliveryChannelStatusInput,
    DescribeDeliveryChannelStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDeliveryChannelStatusInput,
        DescribeDeliveryChannelStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
