import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSSLPolicies } from "../model/DescribeSSLPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSSLPoliciesInput } from "../types/DescribeSSLPoliciesInput";
import { DescribeSSLPoliciesOutput } from "../types/DescribeSSLPoliciesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeSSLPoliciesInput";
export * from "../types/DescribeSSLPoliciesOutput";
export * from "../types/DescribeSSLPoliciesExceptionsUnion";

export class DescribeSSLPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSSLPoliciesInput,
      OutputTypesUnion,
      DescribeSSLPoliciesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeSSLPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSSLPoliciesInput,
    DescribeSSLPoliciesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeSSLPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSSLPoliciesInput,
    DescribeSSLPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSSLPoliciesInput, DescribeSSLPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
