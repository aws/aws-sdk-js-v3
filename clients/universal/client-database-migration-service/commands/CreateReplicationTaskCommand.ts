import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateReplicationTask } from "../model/CreateReplicationTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateReplicationTaskInput } from "../types/CreateReplicationTaskInput";
import { CreateReplicationTaskOutput } from "../types/CreateReplicationTaskOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/CreateReplicationTaskInput";
export * from "../types/CreateReplicationTaskOutput";
export * from "../types/CreateReplicationTaskExceptionsUnion";

export class CreateReplicationTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateReplicationTaskInput,
      OutputTypesUnion,
      CreateReplicationTaskOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateReplicationTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateReplicationTaskInput,
    CreateReplicationTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateReplicationTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateReplicationTaskInput,
    CreateReplicationTaskOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateReplicationTaskInput, CreateReplicationTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
