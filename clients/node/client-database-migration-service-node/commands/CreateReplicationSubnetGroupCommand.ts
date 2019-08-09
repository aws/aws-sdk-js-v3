import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateReplicationSubnetGroup } from "../model/CreateReplicationSubnetGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReplicationSubnetGroupInput } from "../types/CreateReplicationSubnetGroupInput";
import { CreateReplicationSubnetGroupOutput } from "../types/CreateReplicationSubnetGroupOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/CreateReplicationSubnetGroupInput";
export * from "../types/CreateReplicationSubnetGroupOutput";
export * from "../types/CreateReplicationSubnetGroupExceptionsUnion";

export class CreateReplicationSubnetGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReplicationSubnetGroupInput,
      OutputTypesUnion,
      CreateReplicationSubnetGroupOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateReplicationSubnetGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReplicationSubnetGroupInput,
    CreateReplicationSubnetGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateReplicationSubnetGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateReplicationSubnetGroupInput,
    CreateReplicationSubnetGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateReplicationSubnetGroupInput,
        CreateReplicationSubnetGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
