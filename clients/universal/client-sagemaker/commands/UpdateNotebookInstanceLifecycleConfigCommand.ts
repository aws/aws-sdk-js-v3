import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateNotebookInstanceLifecycleConfig } from "../model/UpdateNotebookInstanceLifecycleConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateNotebookInstanceLifecycleConfigInput } from "../types/UpdateNotebookInstanceLifecycleConfigInput";
import { UpdateNotebookInstanceLifecycleConfigOutput } from "../types/UpdateNotebookInstanceLifecycleConfigOutput";
import { SageMakerResolvedConfiguration } from "../SageMakerConfiguration";
export * from "../types/UpdateNotebookInstanceLifecycleConfigInput";
export * from "../types/UpdateNotebookInstanceLifecycleConfigOutput";
export * from "../types/UpdateNotebookInstanceLifecycleConfigExceptionsUnion";

export class UpdateNotebookInstanceLifecycleConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateNotebookInstanceLifecycleConfigInput,
      OutputTypesUnion,
      UpdateNotebookInstanceLifecycleConfigOutput,
      SageMakerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateNotebookInstanceLifecycleConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateNotebookInstanceLifecycleConfigInput,
    UpdateNotebookInstanceLifecycleConfigOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateNotebookInstanceLifecycleConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SageMakerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateNotebookInstanceLifecycleConfigInput,
    UpdateNotebookInstanceLifecycleConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateNotebookInstanceLifecycleConfigInput,
        UpdateNotebookInstanceLifecycleConfigOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
