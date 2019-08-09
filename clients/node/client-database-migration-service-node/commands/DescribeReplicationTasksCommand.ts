import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReplicationTasks } from "../model/DescribeReplicationTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReplicationTasksInput } from "../types/DescribeReplicationTasksInput";
import { DescribeReplicationTasksOutput } from "../types/DescribeReplicationTasksOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeReplicationTasksInput";
export * from "../types/DescribeReplicationTasksOutput";
export * from "../types/DescribeReplicationTasksExceptionsUnion";

export class DescribeReplicationTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReplicationTasksInput,
      OutputTypesUnion,
      DescribeReplicationTasksOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReplicationTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReplicationTasksInput,
    DescribeReplicationTasksOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReplicationTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReplicationTasksInput,
    DescribeReplicationTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeReplicationTasksInput, DescribeReplicationTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
