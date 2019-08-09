import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeScalingPlanResources } from "../model/DescribeScalingPlanResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeScalingPlanResourcesInput } from "../types/DescribeScalingPlanResourcesInput";
import { DescribeScalingPlanResourcesOutput } from "../types/DescribeScalingPlanResourcesOutput";
import { AutoScalingPlansResolvedConfiguration } from "../AutoScalingPlansConfiguration";
export * from "../types/DescribeScalingPlanResourcesInput";
export * from "../types/DescribeScalingPlanResourcesOutput";
export * from "../types/DescribeScalingPlanResourcesExceptionsUnion";

export class DescribeScalingPlanResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeScalingPlanResourcesInput,
      OutputTypesUnion,
      DescribeScalingPlanResourcesOutput,
      AutoScalingPlansResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeScalingPlanResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeScalingPlanResourcesInput,
    DescribeScalingPlanResourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeScalingPlanResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AutoScalingPlansResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeScalingPlanResourcesInput,
    DescribeScalingPlanResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeScalingPlanResourcesInput,
        DescribeScalingPlanResourcesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
