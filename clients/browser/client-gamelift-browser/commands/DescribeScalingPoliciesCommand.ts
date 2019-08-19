import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScalingPolicies } from "../model/operations/DescribeScalingPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalingPoliciesInput } from "../types/DescribeScalingPoliciesInput";
import { DescribeScalingPoliciesOutput } from "../types/DescribeScalingPoliciesOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeScalingPoliciesInput";
export * from "../types/DescribeScalingPoliciesOutput";
export * from "../types/DescribeScalingPoliciesExceptionsUnion";

export class DescribeScalingPoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScalingPoliciesInput,
      OutputTypesUnion,
      DescribeScalingPoliciesOutput,
      GameLiftResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeScalingPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalingPoliciesInput,
    DescribeScalingPoliciesOutput,
    Blob
  >();

  constructor(readonly input: DescribeScalingPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScalingPoliciesInput,
    DescribeScalingPoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScalingPoliciesInput, DescribeScalingPoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
