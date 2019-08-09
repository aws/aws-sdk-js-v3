import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTargetHealth } from "../model/DescribeTargetHealth";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTargetHealthInput } from "../types/DescribeTargetHealthInput";
import { DescribeTargetHealthOutput } from "../types/DescribeTargetHealthOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/DescribeTargetHealthInput";
export * from "../types/DescribeTargetHealthOutput";
export * from "../types/DescribeTargetHealthExceptionsUnion";

export class DescribeTargetHealthCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTargetHealthInput,
      OutputTypesUnion,
      DescribeTargetHealthOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeTargetHealth;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTargetHealthInput,
    DescribeTargetHealthOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeTargetHealthInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTargetHealthInput,
    DescribeTargetHealthOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTargetHealthInput, DescribeTargetHealthOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
