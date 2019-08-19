import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteReplicationInstance } from "../model/operations/DeleteReplicationInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReplicationInstanceInput } from "../types/DeleteReplicationInstanceInput";
import { DeleteReplicationInstanceOutput } from "../types/DeleteReplicationInstanceOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DeleteReplicationInstanceInput";
export * from "../types/DeleteReplicationInstanceOutput";
export * from "../types/DeleteReplicationInstanceExceptionsUnion";

export class DeleteReplicationInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReplicationInstanceInput,
      OutputTypesUnion,
      DeleteReplicationInstanceOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteReplicationInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReplicationInstanceInput,
    DeleteReplicationInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteReplicationInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteReplicationInstanceInput,
    DeleteReplicationInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReplicationInstanceInput, DeleteReplicationInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
