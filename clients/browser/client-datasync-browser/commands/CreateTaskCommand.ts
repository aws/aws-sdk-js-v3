import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTask } from "../model/operations/CreateTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTaskInput } from "../types/CreateTaskInput";
import { CreateTaskOutput } from "../types/CreateTaskOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/CreateTaskInput";
export * from "../types/CreateTaskOutput";
export * from "../types/CreateTaskExceptionsUnion";

export class CreateTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTaskInput,
      OutputTypesUnion,
      CreateTaskOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTaskInput,
    CreateTaskOutput,
    Blob
  >();

  constructor(readonly input: CreateTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTaskInput, CreateTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTaskInput, CreateTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
