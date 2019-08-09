import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReplicationSubnetGroups } from "../model/DescribeReplicationSubnetGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReplicationSubnetGroupsInput } from "../types/DescribeReplicationSubnetGroupsInput";
import { DescribeReplicationSubnetGroupsOutput } from "../types/DescribeReplicationSubnetGroupsOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeReplicationSubnetGroupsInput";
export * from "../types/DescribeReplicationSubnetGroupsOutput";
export * from "../types/DescribeReplicationSubnetGroupsExceptionsUnion";

export class DescribeReplicationSubnetGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReplicationSubnetGroupsInput,
      OutputTypesUnion,
      DescribeReplicationSubnetGroupsOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeReplicationSubnetGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReplicationSubnetGroupsInput,
    DescribeReplicationSubnetGroupsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeReplicationSubnetGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReplicationSubnetGroupsInput,
    DescribeReplicationSubnetGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReplicationSubnetGroupsInput,
        DescribeReplicationSubnetGroupsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
