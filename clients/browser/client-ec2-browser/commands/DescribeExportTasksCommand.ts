import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeExportTasks } from "../model/operations/DescribeExportTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeExportTasksInput } from "../types/DescribeExportTasksInput";
import { DescribeExportTasksOutput } from "../types/DescribeExportTasksOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeExportTasksInput";
export * from "../types/DescribeExportTasksOutput";
export * from "../types/DescribeExportTasksExceptionsUnion";

export class DescribeExportTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeExportTasksInput,
      OutputTypesUnion,
      DescribeExportTasksOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeExportTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeExportTasksInput,
    DescribeExportTasksOutput,
    Blob
  >();

  constructor(readonly input: DescribeExportTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeExportTasksInput,
    DescribeExportTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeExportTasksInput, DescribeExportTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
