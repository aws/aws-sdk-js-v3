import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartNotebookInstance } from "../model/StartNotebookInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartNotebookInstanceInput } from "../types/StartNotebookInstanceInput";
import { StartNotebookInstanceOutput } from "../types/StartNotebookInstanceOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/StartNotebookInstanceInput";
export * from "../types/StartNotebookInstanceOutput";
export * from "../types/StartNotebookInstanceExceptionsUnion";

export class StartNotebookInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartNotebookInstanceInput,
      OutputTypesUnion,
      StartNotebookInstanceOutput,
      SageMakerResolvedConfiguration,
      Blob
    > {
  readonly model = StartNotebookInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartNotebookInstanceInput,
    StartNotebookInstanceOutput,
    Blob
  >();

  constructor(readonly input: StartNotebookInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartNotebookInstanceInput,
    StartNotebookInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartNotebookInstanceInput, StartNotebookInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
