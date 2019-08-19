import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLoadBalancerAttributes } from "../model/operations/DescribeLoadBalancerAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoadBalancerAttributesInput } from "../types/DescribeLoadBalancerAttributesInput";
import { DescribeLoadBalancerAttributesOutput } from "../types/DescribeLoadBalancerAttributesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeLoadBalancerAttributesInput";
export * from "../types/DescribeLoadBalancerAttributesOutput";
export * from "../types/DescribeLoadBalancerAttributesExceptionsUnion";

export class DescribeLoadBalancerAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoadBalancerAttributesInput,
      OutputTypesUnion,
      DescribeLoadBalancerAttributesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeLoadBalancerAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoadBalancerAttributesInput,
    DescribeLoadBalancerAttributesOutput,
    Blob
  >();

  constructor(readonly input: DescribeLoadBalancerAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLoadBalancerAttributesInput,
    DescribeLoadBalancerAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLoadBalancerAttributesInput,
        DescribeLoadBalancerAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
