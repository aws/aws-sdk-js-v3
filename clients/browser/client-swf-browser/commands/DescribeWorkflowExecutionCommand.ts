import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeWorkflowExecution } from "../model/DescribeWorkflowExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkflowExecutionInput } from "../types/DescribeWorkflowExecutionInput";
import { DescribeWorkflowExecutionOutput } from "../types/DescribeWorkflowExecutionOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/DescribeWorkflowExecutionInput";
export * from "../types/DescribeWorkflowExecutionOutput";
export * from "../types/DescribeWorkflowExecutionExceptionsUnion";

export class DescribeWorkflowExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkflowExecutionInput,
      OutputTypesUnion,
      DescribeWorkflowExecutionOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeWorkflowExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkflowExecutionInput,
    DescribeWorkflowExecutionOutput,
    Blob
  >();

  constructor(readonly input: DescribeWorkflowExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWorkflowExecutionInput,
    DescribeWorkflowExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeWorkflowExecutionInput, DescribeWorkflowExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
