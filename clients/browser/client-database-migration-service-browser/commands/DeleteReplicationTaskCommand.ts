import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteReplicationTask } from "../model/DeleteReplicationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteReplicationTaskInput } from "../types/DeleteReplicationTaskInput";
import { DeleteReplicationTaskOutput } from "../types/DeleteReplicationTaskOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DeleteReplicationTaskInput";
export * from "../types/DeleteReplicationTaskOutput";
export * from "../types/DeleteReplicationTaskExceptionsUnion";

export class DeleteReplicationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteReplicationTaskInput,
      OutputTypesUnion,
      DeleteReplicationTaskOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteReplicationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteReplicationTaskInput,
    DeleteReplicationTaskOutput,
    Blob
  >();

  constructor(readonly input: DeleteReplicationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteReplicationTaskInput,
    DeleteReplicationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteReplicationTaskInput, DeleteReplicationTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
