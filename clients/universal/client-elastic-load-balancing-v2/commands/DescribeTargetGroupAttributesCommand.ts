import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTargetGroupAttributes } from "../model/DescribeTargetGroupAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTargetGroupAttributesInput } from "../types/DescribeTargetGroupAttributesInput";
import { DescribeTargetGroupAttributesOutput } from "../types/DescribeTargetGroupAttributesOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeTargetGroupAttributesInput";
export * from "../types/DescribeTargetGroupAttributesOutput";
export * from "../types/DescribeTargetGroupAttributesExceptionsUnion";

export class DescribeTargetGroupAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTargetGroupAttributesInput,
      OutputTypesUnion,
      DescribeTargetGroupAttributesOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeTargetGroupAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTargetGroupAttributesInput,
    DescribeTargetGroupAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTargetGroupAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTargetGroupAttributesInput,
    DescribeTargetGroupAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTargetGroupAttributesInput,
        DescribeTargetGroupAttributesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
