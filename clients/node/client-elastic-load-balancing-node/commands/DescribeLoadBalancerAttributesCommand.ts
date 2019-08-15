import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLoadBalancerAttributes } from "../model/operations/DescribeLoadBalancerAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoadBalancerAttributesInput } from "../types/DescribeLoadBalancerAttributesInput";
import { DescribeLoadBalancerAttributesOutput } from "../types/DescribeLoadBalancerAttributesOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
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
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLoadBalancerAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoadBalancerAttributesInput,
    DescribeLoadBalancerAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLoadBalancerAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
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
