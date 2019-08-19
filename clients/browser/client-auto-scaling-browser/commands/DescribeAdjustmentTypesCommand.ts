import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAdjustmentTypes } from "../model/operations/DescribeAdjustmentTypes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAdjustmentTypesInput } from "../types/DescribeAdjustmentTypesInput";
import { DescribeAdjustmentTypesOutput } from "../types/DescribeAdjustmentTypesOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/DescribeAdjustmentTypesInput";
export * from "../types/DescribeAdjustmentTypesOutput";
export * from "../types/DescribeAdjustmentTypesExceptionsUnion";

export class DescribeAdjustmentTypesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAdjustmentTypesInput,
      OutputTypesUnion,
      DescribeAdjustmentTypesOutput,
      AutoScalingResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAdjustmentTypes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAdjustmentTypesInput,
    DescribeAdjustmentTypesOutput,
    Blob
  >();

  constructor(readonly input: DescribeAdjustmentTypesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAdjustmentTypesInput,
    DescribeAdjustmentTypesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAdjustmentTypesInput, DescribeAdjustmentTypesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
