import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreDBInstanceFromDBSnapshot } from "../model/operations/RestoreDBInstanceFromDBSnapshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreDBInstanceFromDBSnapshotInput } from "../types/RestoreDBInstanceFromDBSnapshotInput";
import { RestoreDBInstanceFromDBSnapshotOutput } from "../types/RestoreDBInstanceFromDBSnapshotOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/RestoreDBInstanceFromDBSnapshotInput";
export * from "../types/RestoreDBInstanceFromDBSnapshotOutput";
export * from "../types/RestoreDBInstanceFromDBSnapshotExceptionsUnion";

export class RestoreDBInstanceFromDBSnapshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreDBInstanceFromDBSnapshotInput,
      OutputTypesUnion,
      RestoreDBInstanceFromDBSnapshotOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreDBInstanceFromDBSnapshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreDBInstanceFromDBSnapshotInput,
    RestoreDBInstanceFromDBSnapshotOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreDBInstanceFromDBSnapshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreDBInstanceFromDBSnapshotInput,
    RestoreDBInstanceFromDBSnapshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RestoreDBInstanceFromDBSnapshotInput,
        RestoreDBInstanceFromDBSnapshotOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
