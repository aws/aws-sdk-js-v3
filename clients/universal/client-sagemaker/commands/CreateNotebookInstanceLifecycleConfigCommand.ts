import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateNotebookInstanceLifecycleConfig } from "../model/CreateNotebookInstanceLifecycleConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateNotebookInstanceLifecycleConfigInput } from "../types/CreateNotebookInstanceLifecycleConfigInput";
import { CreateNotebookInstanceLifecycleConfigOutput } from "../types/CreateNotebookInstanceLifecycleConfigOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/CreateNotebookInstanceLifecycleConfigInput";
export * from "../types/CreateNotebookInstanceLifecycleConfigOutput";
export * from "../types/CreateNotebookInstanceLifecycleConfigExceptionsUnion";

export class CreateNotebookInstanceLifecycleConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateNotebookInstanceLifecycleConfigInput,
      OutputTypesUnion,
      CreateNotebookInstanceLifecycleConfigOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateNotebookInstanceLifecycleConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateNotebookInstanceLifecycleConfigInput,
    CreateNotebookInstanceLifecycleConfigOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateNotebookInstanceLifecycleConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateNotebookInstanceLifecycleConfigInput,
    CreateNotebookInstanceLifecycleConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateNotebookInstanceLifecycleConfigInput,
        CreateNotebookInstanceLifecycleConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
