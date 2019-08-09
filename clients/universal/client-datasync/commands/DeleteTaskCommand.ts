import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTask } from "../model/DeleteTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTaskInput } from "../types/DeleteTaskInput";
import { DeleteTaskOutput } from "../types/DeleteTaskOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DeleteTaskInput";
export * from "../types/DeleteTaskOutput";
export * from "../types/DeleteTaskExceptionsUnion";

export class DeleteTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTaskInput,
      OutputTypesUnion,
      DeleteTaskOutput,
      DataSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTaskInput,
    DeleteTaskOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTaskInput, DeleteTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTaskInput, DeleteTaskOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
