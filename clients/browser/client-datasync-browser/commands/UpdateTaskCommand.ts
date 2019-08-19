import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateTask } from "../model/operations/UpdateTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTaskInput } from "../types/UpdateTaskInput";
import { UpdateTaskOutput } from "../types/UpdateTaskOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/UpdateTaskInput";
export * from "../types/UpdateTaskOutput";
export * from "../types/UpdateTaskExceptionsUnion";

export class UpdateTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTaskInput,
      OutputTypesUnion,
      UpdateTaskOutput,
      DataSyncResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTaskInput,
    UpdateTaskOutput,
    Blob
  >();

  constructor(readonly input: UpdateTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTaskInput, UpdateTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTaskInput, UpdateTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
