import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeWorkflowType } from "../model/operations/DescribeWorkflowType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeWorkflowTypeInput } from "../types/DescribeWorkflowTypeInput";
import { DescribeWorkflowTypeOutput } from "../types/DescribeWorkflowTypeOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/DescribeWorkflowTypeInput";
export * from "../types/DescribeWorkflowTypeOutput";
export * from "../types/DescribeWorkflowTypeExceptionsUnion";

export class DescribeWorkflowTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeWorkflowTypeInput,
      OutputTypesUnion,
      DescribeWorkflowTypeOutput,
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeWorkflowType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeWorkflowTypeInput,
    DescribeWorkflowTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeWorkflowTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeWorkflowTypeInput,
    DescribeWorkflowTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeWorkflowTypeInput, DescribeWorkflowTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
