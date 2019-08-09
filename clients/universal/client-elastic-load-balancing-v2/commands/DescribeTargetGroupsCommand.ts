import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTargetGroups } from "../model/DescribeTargetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTargetGroupsInput } from "../types/DescribeTargetGroupsInput";
import { DescribeTargetGroupsOutput } from "../types/DescribeTargetGroupsOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeTargetGroupsInput";
export * from "../types/DescribeTargetGroupsOutput";
export * from "../types/DescribeTargetGroupsExceptionsUnion";

export class DescribeTargetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTargetGroupsInput,
      OutputTypesUnion,
      DescribeTargetGroupsOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeTargetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTargetGroupsInput,
    DescribeTargetGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTargetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTargetGroupsInput,
    DescribeTargetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTargetGroupsInput, DescribeTargetGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
