import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePresignedNotebookInstanceUrl } from "../model/CreatePresignedNotebookInstanceUrl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePresignedNotebookInstanceUrlInput } from "../types/CreatePresignedNotebookInstanceUrlInput";
import { CreatePresignedNotebookInstanceUrlOutput } from "../types/CreatePresignedNotebookInstanceUrlOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreatePresignedNotebookInstanceUrlInput";
export * from "../types/CreatePresignedNotebookInstanceUrlOutput";
export * from "../types/CreatePresignedNotebookInstanceUrlExceptionsUnion";

export class CreatePresignedNotebookInstanceUrlCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePresignedNotebookInstanceUrlInput,
      OutputTypesUnion,
      CreatePresignedNotebookInstanceUrlOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePresignedNotebookInstanceUrl;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePresignedNotebookInstanceUrlInput,
    CreatePresignedNotebookInstanceUrlOutput,
    Blob
  >();

  constructor(readonly input: CreatePresignedNotebookInstanceUrlInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePresignedNotebookInstanceUrlInput,
    CreatePresignedNotebookInstanceUrlOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreatePresignedNotebookInstanceUrlInput,
        CreatePresignedNotebookInstanceUrlOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
