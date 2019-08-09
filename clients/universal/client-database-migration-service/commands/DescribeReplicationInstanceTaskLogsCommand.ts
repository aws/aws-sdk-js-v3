import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReplicationInstanceTaskLogs } from "../model/DescribeReplicationInstanceTaskLogs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReplicationInstanceTaskLogsInput } from "../types/DescribeReplicationInstanceTaskLogsInput";
import { DescribeReplicationInstanceTaskLogsOutput } from "../types/DescribeReplicationInstanceTaskLogsOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeReplicationInstanceTaskLogsInput";
export * from "../types/DescribeReplicationInstanceTaskLogsOutput";
export * from "../types/DescribeReplicationInstanceTaskLogsExceptionsUnion";

export class DescribeReplicationInstanceTaskLogsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReplicationInstanceTaskLogsInput,
      OutputTypesUnion,
      DescribeReplicationInstanceTaskLogsOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeReplicationInstanceTaskLogs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReplicationInstanceTaskLogsInput,
    DescribeReplicationInstanceTaskLogsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeReplicationInstanceTaskLogsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReplicationInstanceTaskLogsInput,
    DescribeReplicationInstanceTaskLogsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReplicationInstanceTaskLogsInput,
        DescribeReplicationInstanceTaskLogsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
