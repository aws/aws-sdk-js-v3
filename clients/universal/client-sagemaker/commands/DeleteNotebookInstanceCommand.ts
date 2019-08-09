import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteNotebookInstance } from "../model/DeleteNotebookInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteNotebookInstanceInput } from "../types/DeleteNotebookInstanceInput";
import { DeleteNotebookInstanceOutput } from "../types/DeleteNotebookInstanceOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/DeleteNotebookInstanceInput";
export * from "../types/DeleteNotebookInstanceOutput";
export * from "../types/DeleteNotebookInstanceExceptionsUnion";

export class DeleteNotebookInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteNotebookInstanceInput,
      OutputTypesUnion,
      DeleteNotebookInstanceOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteNotebookInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteNotebookInstanceInput,
    DeleteNotebookInstanceOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteNotebookInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteNotebookInstanceInput,
    DeleteNotebookInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteNotebookInstanceInput, DeleteNotebookInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
