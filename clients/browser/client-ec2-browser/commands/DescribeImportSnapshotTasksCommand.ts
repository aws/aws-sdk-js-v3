import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeImportSnapshotTasks } from "../model/DescribeImportSnapshotTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeImportSnapshotTasksInput } from "../types/DescribeImportSnapshotTasksInput";
import { DescribeImportSnapshotTasksOutput } from "../types/DescribeImportSnapshotTasksOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeImportSnapshotTasksInput";
export * from "../types/DescribeImportSnapshotTasksOutput";
export * from "../types/DescribeImportSnapshotTasksExceptionsUnion";

export class DescribeImportSnapshotTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeImportSnapshotTasksInput,
      OutputTypesUnion,
      DescribeImportSnapshotTasksOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeImportSnapshotTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeImportSnapshotTasksInput,
    DescribeImportSnapshotTasksOutput,
    Blob
  >();

  constructor(readonly input: DescribeImportSnapshotTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeImportSnapshotTasksInput,
    DescribeImportSnapshotTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeImportSnapshotTasksInput,
        DescribeImportSnapshotTasksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
