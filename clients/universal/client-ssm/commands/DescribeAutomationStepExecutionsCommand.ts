import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAutomationStepExecutions } from "../model/DescribeAutomationStepExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAutomationStepExecutionsInput } from "../types/DescribeAutomationStepExecutionsInput";
import { DescribeAutomationStepExecutionsOutput } from "../types/DescribeAutomationStepExecutionsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeAutomationStepExecutionsInput";
export * from "../types/DescribeAutomationStepExecutionsOutput";
export * from "../types/DescribeAutomationStepExecutionsExceptionsUnion";

export class DescribeAutomationStepExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAutomationStepExecutionsInput,
      OutputTypesUnion,
      DescribeAutomationStepExecutionsOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeAutomationStepExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAutomationStepExecutionsInput,
    DescribeAutomationStepExecutionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAutomationStepExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAutomationStepExecutionsInput,
    DescribeAutomationStepExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAutomationStepExecutionsInput,
        DescribeAutomationStepExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
