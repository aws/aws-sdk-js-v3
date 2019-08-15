import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLoadBalancerPolicyTypes } from "../model/operations/DescribeLoadBalancerPolicyTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoadBalancerPolicyTypesInput } from "../types/DescribeLoadBalancerPolicyTypesInput";
import { DescribeLoadBalancerPolicyTypesOutput } from "../types/DescribeLoadBalancerPolicyTypesOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/DescribeLoadBalancerPolicyTypesInput";
export * from "../types/DescribeLoadBalancerPolicyTypesOutput";
export * from "../types/DescribeLoadBalancerPolicyTypesExceptionsUnion";

export class DescribeLoadBalancerPolicyTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoadBalancerPolicyTypesInput,
      OutputTypesUnion,
      DescribeLoadBalancerPolicyTypesOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLoadBalancerPolicyTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoadBalancerPolicyTypesInput,
    DescribeLoadBalancerPolicyTypesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLoadBalancerPolicyTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLoadBalancerPolicyTypesInput,
    DescribeLoadBalancerPolicyTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLoadBalancerPolicyTypesInput,
        DescribeLoadBalancerPolicyTypesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
