import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeScalingPolicies } from "../model/operations/DescribeScalingPolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalingPoliciesInput } from "../types/DescribeScalingPoliciesInput";
import { DescribeScalingPoliciesOutput } from "../types/DescribeScalingPoliciesOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
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
      ApplicationAutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeScalingPolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalingPoliciesInput,
    DescribeScalingPoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeScalingPoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
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
