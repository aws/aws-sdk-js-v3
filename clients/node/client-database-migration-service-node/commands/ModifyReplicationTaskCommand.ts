import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyReplicationTask } from "../model/operations/ModifyReplicationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyReplicationTaskInput } from "../types/ModifyReplicationTaskInput";
import { ModifyReplicationTaskOutput } from "../types/ModifyReplicationTaskOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/ModifyReplicationTaskInput";
export * from "../types/ModifyReplicationTaskOutput";
export * from "../types/ModifyReplicationTaskExceptionsUnion";

export class ModifyReplicationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyReplicationTaskInput,
      OutputTypesUnion,
      ModifyReplicationTaskOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyReplicationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyReplicationTaskInput,
    ModifyReplicationTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyReplicationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyReplicationTaskInput,
    ModifyReplicationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyReplicationTaskInput, ModifyReplicationTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
