import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteReplicationSubnetGroup } from "../model/DeleteReplicationSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReplicationSubnetGroupInput } from "../types/DeleteReplicationSubnetGroupInput";
import { DeleteReplicationSubnetGroupOutput } from "../types/DeleteReplicationSubnetGroupOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DeleteReplicationSubnetGroupInput";
export * from "../types/DeleteReplicationSubnetGroupOutput";
export * from "../types/DeleteReplicationSubnetGroupExceptionsUnion";

export class DeleteReplicationSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReplicationSubnetGroupInput,
      OutputTypesUnion,
      DeleteReplicationSubnetGroupOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteReplicationSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReplicationSubnetGroupInput,
    DeleteReplicationSubnetGroupOutput,
    Blob
  >();

  constructor(readonly input: DeleteReplicationSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteReplicationSubnetGroupInput,
    DeleteReplicationSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteReplicationSubnetGroupInput,
        DeleteReplicationSubnetGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
