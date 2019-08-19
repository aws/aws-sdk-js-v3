import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyReplicationSubnetGroup } from "../model/operations/ModifyReplicationSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyReplicationSubnetGroupInput } from "../types/ModifyReplicationSubnetGroupInput";
import { ModifyReplicationSubnetGroupOutput } from "../types/ModifyReplicationSubnetGroupOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/ModifyReplicationSubnetGroupInput";
export * from "../types/ModifyReplicationSubnetGroupOutput";
export * from "../types/ModifyReplicationSubnetGroupExceptionsUnion";

export class ModifyReplicationSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyReplicationSubnetGroupInput,
      OutputTypesUnion,
      ModifyReplicationSubnetGroupOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyReplicationSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyReplicationSubnetGroupInput,
    ModifyReplicationSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyReplicationSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyReplicationSubnetGroupInput,
    ModifyReplicationSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyReplicationSubnetGroupInput,
        ModifyReplicationSubnetGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
