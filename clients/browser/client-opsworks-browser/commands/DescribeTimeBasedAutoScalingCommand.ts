import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTimeBasedAutoScaling } from "../model/DescribeTimeBasedAutoScaling";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTimeBasedAutoScalingInput } from "../types/DescribeTimeBasedAutoScalingInput";
import { DescribeTimeBasedAutoScalingOutput } from "../types/DescribeTimeBasedAutoScalingOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeTimeBasedAutoScalingInput";
export * from "../types/DescribeTimeBasedAutoScalingOutput";
export * from "../types/DescribeTimeBasedAutoScalingExceptionsUnion";

export class DescribeTimeBasedAutoScalingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTimeBasedAutoScalingInput,
      OutputTypesUnion,
      DescribeTimeBasedAutoScalingOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTimeBasedAutoScaling;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTimeBasedAutoScalingInput,
    DescribeTimeBasedAutoScalingOutput,
    Blob
  >();

  constructor(readonly input: DescribeTimeBasedAutoScalingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTimeBasedAutoScalingInput,
    DescribeTimeBasedAutoScalingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTimeBasedAutoScalingInput,
        DescribeTimeBasedAutoScalingOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
