import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteCustomActionType } from "../model/DeleteCustomActionType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteCustomActionTypeInput } from "../types/DeleteCustomActionTypeInput";
import { DeleteCustomActionTypeOutput } from "../types/DeleteCustomActionTypeOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/DeleteCustomActionTypeInput";
export * from "../types/DeleteCustomActionTypeOutput";
export * from "../types/DeleteCustomActionTypeExceptionsUnion";

export class DeleteCustomActionTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteCustomActionTypeInput,
      OutputTypesUnion,
      DeleteCustomActionTypeOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteCustomActionType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteCustomActionTypeInput,
    DeleteCustomActionTypeOutput,
    Blob
  >();

  constructor(readonly input: DeleteCustomActionTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteCustomActionTypeInput,
    DeleteCustomActionTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteCustomActionTypeInput, DeleteCustomActionTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
