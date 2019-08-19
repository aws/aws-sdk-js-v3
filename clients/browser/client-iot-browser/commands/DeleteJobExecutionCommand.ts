import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteJobExecution } from "../model/operations/DeleteJobExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteJobExecutionInput } from "../types/DeleteJobExecutionInput";
import { DeleteJobExecutionOutput } from "../types/DeleteJobExecutionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteJobExecutionInput";
export * from "../types/DeleteJobExecutionOutput";
export * from "../types/DeleteJobExecutionExceptionsUnion";

export class DeleteJobExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteJobExecutionInput,
      OutputTypesUnion,
      DeleteJobExecutionOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteJobExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteJobExecutionInput,
    DeleteJobExecutionOutput,
    Blob
  >();

  constructor(readonly input: DeleteJobExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteJobExecutionInput,
    DeleteJobExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteJobExecutionInput, DeleteJobExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
