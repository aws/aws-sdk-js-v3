import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScalableTargets } from "../model/operations/DescribeScalableTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalableTargetsInput } from "../types/DescribeScalableTargetsInput";
import { DescribeScalableTargetsOutput } from "../types/DescribeScalableTargetsOutput";
import { ApplicationAutoScalingResolvedConfiguration } from "../ApplicationAutoScalingConfiguration";
export * from "../types/DescribeScalableTargetsInput";
export * from "../types/DescribeScalableTargetsOutput";
export * from "../types/DescribeScalableTargetsExceptionsUnion";

export class DescribeScalableTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScalableTargetsInput,
      OutputTypesUnion,
      DescribeScalableTargetsOutput,
      ApplicationAutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeScalableTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalableTargetsInput,
    DescribeScalableTargetsOutput,
    Blob
  >();

  constructor(readonly input: DescribeScalableTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ApplicationAutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScalableTargetsInput,
    DescribeScalableTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeScalableTargetsInput, DescribeScalableTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
