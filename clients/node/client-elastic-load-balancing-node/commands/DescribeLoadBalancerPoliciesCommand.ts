import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLoadBalancerPolicies } from "../model/operations/DescribeLoadBalancerPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoadBalancerPoliciesInput } from "../types/DescribeLoadBalancerPoliciesInput";
import { DescribeLoadBalancerPoliciesOutput } from "../types/DescribeLoadBalancerPoliciesOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DescribeLoadBalancerPoliciesInput";
export * from "../types/DescribeLoadBalancerPoliciesOutput";
export * from "../types/DescribeLoadBalancerPoliciesExceptionsUnion";

export class DescribeLoadBalancerPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoadBalancerPoliciesInput,
      OutputTypesUnion,
      DescribeLoadBalancerPoliciesOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLoadBalancerPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoadBalancerPoliciesInput,
    DescribeLoadBalancerPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLoadBalancerPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLoadBalancerPoliciesInput,
    DescribeLoadBalancerPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLoadBalancerPoliciesInput,
        DescribeLoadBalancerPoliciesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
