import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMigrationTasks } from "../model/ListMigrationTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMigrationTasksInput } from "../types/ListMigrationTasksInput";
import { ListMigrationTasksOutput } from "../types/ListMigrationTasksOutput";
import { MigrationHubResolvedConfiguration } from "../MigrationHubConfiguration";
export * from "../types/ListMigrationTasksInput";
export * from "../types/ListMigrationTasksOutput";
export * from "../types/ListMigrationTasksExceptionsUnion";

export class ListMigrationTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMigrationTasksInput,
      OutputTypesUnion,
      ListMigrationTasksOutput,
      MigrationHubResolvedConfiguration,
      Blob
    > {
  readonly model = ListMigrationTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMigrationTasksInput,
    ListMigrationTasksOutput,
    Blob
  >();

  constructor(readonly input: ListMigrationTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MigrationHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListMigrationTasksInput,
    ListMigrationTasksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMigrationTasksInput, ListMigrationTasksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
