import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSpotDatafeedSubscription } from "../model/operations/DescribeSpotDatafeedSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSpotDatafeedSubscriptionInput } from "../types/DescribeSpotDatafeedSubscriptionInput";
import { DescribeSpotDatafeedSubscriptionOutput } from "../types/DescribeSpotDatafeedSubscriptionOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSpotDatafeedSubscriptionInput";
export * from "../types/DescribeSpotDatafeedSubscriptionOutput";
export * from "../types/DescribeSpotDatafeedSubscriptionExceptionsUnion";

export class DescribeSpotDatafeedSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSpotDatafeedSubscriptionInput,
      OutputTypesUnion,
      DescribeSpotDatafeedSubscriptionOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSpotDatafeedSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSpotDatafeedSubscriptionInput,
    DescribeSpotDatafeedSubscriptionOutput,
    Blob
  >();

  constructor(readonly input: DescribeSpotDatafeedSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSpotDatafeedSubscriptionInput,
    DescribeSpotDatafeedSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSpotDatafeedSubscriptionInput,
        DescribeSpotDatafeedSubscriptionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
