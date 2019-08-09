import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLoadBalancerTargetGroups } from "../model/DescribeLoadBalancerTargetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoadBalancerTargetGroupsInput } from "../types/DescribeLoadBalancerTargetGroupsInput";
import { DescribeLoadBalancerTargetGroupsOutput } from "../types/DescribeLoadBalancerTargetGroupsOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeLoadBalancerTargetGroupsInput";
export * from "../types/DescribeLoadBalancerTargetGroupsOutput";
export * from "../types/DescribeLoadBalancerTargetGroupsExceptionsUnion";

export class DescribeLoadBalancerTargetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoadBalancerTargetGroupsInput,
      OutputTypesUnion,
      DescribeLoadBalancerTargetGroupsOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLoadBalancerTargetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoadBalancerTargetGroupsInput,
    DescribeLoadBalancerTargetGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLoadBalancerTargetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLoadBalancerTargetGroupsInput,
    DescribeLoadBalancerTargetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeLoadBalancerTargetGroupsInput,
        DescribeLoadBalancerTargetGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
