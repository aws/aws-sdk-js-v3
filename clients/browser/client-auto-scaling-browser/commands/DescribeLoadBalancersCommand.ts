import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLoadBalancers } from "../model/DescribeLoadBalancers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoadBalancersInput } from "../types/DescribeLoadBalancersInput";
import { DescribeLoadBalancersOutput } from "../types/DescribeLoadBalancersOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeLoadBalancersInput";
export * from "../types/DescribeLoadBalancersOutput";
export * from "../types/DescribeLoadBalancersExceptionsUnion";

export class DescribeLoadBalancersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoadBalancersInput,
      OutputTypesUnion,
      DescribeLoadBalancersOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeLoadBalancers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoadBalancersInput,
    DescribeLoadBalancersOutput,
    Blob
  >();

  constructor(readonly input: DescribeLoadBalancersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLoadBalancersInput,
    DescribeLoadBalancersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLoadBalancersInput, DescribeLoadBalancersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
