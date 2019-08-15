import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTasks } from "../model/operations/ListTasks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTasksInput } from "../types/ListTasksInput";
import { ListTasksOutput } from "../types/ListTasksOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/ListTasksInput";
export * from "../types/ListTasksOutput";
export * from "../types/ListTasksExceptionsUnion";

export class ListTasksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTasksInput,
      OutputTypesUnion,
      ListTasksOutput,
      ECSResolvedConfiguration,
      Blob
    > {
  readonly model = ListTasks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTasksInput,
    ListTasksOutput,
    Blob
  >();

  constructor(readonly input: ListTasksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTasksInput, ListTasksOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTasksInput, ListTasksOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
