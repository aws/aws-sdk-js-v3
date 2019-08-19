import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartReplicationTask } from "../model/operations/StartReplicationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartReplicationTaskInput } from "../types/StartReplicationTaskInput";
import { StartReplicationTaskOutput } from "../types/StartReplicationTaskOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/StartReplicationTaskInput";
export * from "../types/StartReplicationTaskOutput";
export * from "../types/StartReplicationTaskExceptionsUnion";

export class StartReplicationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartReplicationTaskInput,
      OutputTypesUnion,
      StartReplicationTaskOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartReplicationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartReplicationTaskInput,
    StartReplicationTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartReplicationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartReplicationTaskInput,
    StartReplicationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartReplicationTaskInput, StartReplicationTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
