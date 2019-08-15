import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeOrderableReplicationInstances } from "../model/operations/DescribeOrderableReplicationInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOrderableReplicationInstancesInput } from "../types/DescribeOrderableReplicationInstancesInput";
import { DescribeOrderableReplicationInstancesOutput } from "../types/DescribeOrderableReplicationInstancesOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeOrderableReplicationInstancesInput";
export * from "../types/DescribeOrderableReplicationInstancesOutput";
export * from "../types/DescribeOrderableReplicationInstancesExceptionsUnion";

export class DescribeOrderableReplicationInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOrderableReplicationInstancesInput,
      OutputTypesUnion,
      DescribeOrderableReplicationInstancesOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeOrderableReplicationInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOrderableReplicationInstancesInput,
    DescribeOrderableReplicationInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeOrderableReplicationInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOrderableReplicationInstancesInput,
    DescribeOrderableReplicationInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeOrderableReplicationInstancesInput,
        DescribeOrderableReplicationInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
