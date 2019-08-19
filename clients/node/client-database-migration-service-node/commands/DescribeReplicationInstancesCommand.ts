import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeReplicationInstances } from "../model/operations/DescribeReplicationInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReplicationInstancesInput } from "../types/DescribeReplicationInstancesInput";
import { DescribeReplicationInstancesOutput } from "../types/DescribeReplicationInstancesOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeReplicationInstancesInput";
export * from "../types/DescribeReplicationInstancesOutput";
export * from "../types/DescribeReplicationInstancesExceptionsUnion";

export class DescribeReplicationInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReplicationInstancesInput,
      OutputTypesUnion,
      DescribeReplicationInstancesOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeReplicationInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReplicationInstancesInput,
    DescribeReplicationInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeReplicationInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReplicationInstancesInput,
    DescribeReplicationInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReplicationInstancesInput,
        DescribeReplicationInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
