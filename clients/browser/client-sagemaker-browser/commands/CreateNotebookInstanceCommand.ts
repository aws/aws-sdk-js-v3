import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateNotebookInstance } from "../model/operations/CreateNotebookInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNotebookInstanceInput } from "../types/CreateNotebookInstanceInput";
import { CreateNotebookInstanceOutput } from "../types/CreateNotebookInstanceOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateNotebookInstanceInput";
export * from "../types/CreateNotebookInstanceOutput";
export * from "../types/CreateNotebookInstanceExceptionsUnion";

export class CreateNotebookInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNotebookInstanceInput,
      OutputTypesUnion,
      CreateNotebookInstanceOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreateNotebookInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNotebookInstanceInput,
    CreateNotebookInstanceOutput,
    Blob
  >();

  constructor(readonly input: CreateNotebookInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNotebookInstanceInput,
    CreateNotebookInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateNotebookInstanceInput, CreateNotebookInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
