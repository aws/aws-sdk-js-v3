import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSubscription } from "../model/DescribeSubscription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSubscriptionInput } from "../types/DescribeSubscriptionInput";
import { DescribeSubscriptionOutput } from "../types/DescribeSubscriptionOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/DescribeSubscriptionInput";
export * from "../types/DescribeSubscriptionOutput";
export * from "../types/DescribeSubscriptionExceptionsUnion";

export class DescribeSubscriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSubscriptionInput,
      OutputTypesUnion,
      DescribeSubscriptionOutput,
      ShieldResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSubscription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSubscriptionInput,
    DescribeSubscriptionOutput,
    Blob
  >();

  constructor(readonly input: DescribeSubscriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSubscriptionInput,
    DescribeSubscriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSubscriptionInput, DescribeSubscriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
