import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeFlowLogs } from "../model/DescribeFlowLogs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFlowLogsInput } from "../types/DescribeFlowLogsInput";
import { DescribeFlowLogsOutput } from "../types/DescribeFlowLogsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeFlowLogsInput";
export * from "../types/DescribeFlowLogsOutput";
export * from "../types/DescribeFlowLogsExceptionsUnion";

export class DescribeFlowLogsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFlowLogsInput,
      OutputTypesUnion,
      DescribeFlowLogsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeFlowLogs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFlowLogsInput,
    DescribeFlowLogsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeFlowLogsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeFlowLogsInput, DescribeFlowLogsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFlowLogsInput, DescribeFlowLogsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
