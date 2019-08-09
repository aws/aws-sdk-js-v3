import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopReplicationTask } from "../model/StopReplicationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopReplicationTaskInput } from "../types/StopReplicationTaskInput";
import { StopReplicationTaskOutput } from "../types/StopReplicationTaskOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/StopReplicationTaskInput";
export * from "../types/StopReplicationTaskOutput";
export * from "../types/StopReplicationTaskExceptionsUnion";

export class StopReplicationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopReplicationTaskInput,
      OutputTypesUnion,
      StopReplicationTaskOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Blob
    > {
  readonly model = StopReplicationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopReplicationTaskInput,
    StopReplicationTaskOutput,
    Blob
  >();

  constructor(readonly input: StopReplicationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopReplicationTaskInput,
    StopReplicationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopReplicationTaskInput, StopReplicationTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
