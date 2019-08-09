import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAutomationExecutions } from "../model/DescribeAutomationExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAutomationExecutionsInput } from "../types/DescribeAutomationExecutionsInput";
import { DescribeAutomationExecutionsOutput } from "../types/DescribeAutomationExecutionsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeAutomationExecutionsInput";
export * from "../types/DescribeAutomationExecutionsOutput";
export * from "../types/DescribeAutomationExecutionsExceptionsUnion";

export class DescribeAutomationExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAutomationExecutionsInput,
      OutputTypesUnion,
      DescribeAutomationExecutionsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAutomationExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAutomationExecutionsInput,
    DescribeAutomationExecutionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAutomationExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAutomationExecutionsInput,
    DescribeAutomationExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAutomationExecutionsInput,
        DescribeAutomationExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
