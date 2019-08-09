import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteWorkflow } from "../model/DeleteWorkflow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteWorkflowInput } from "../types/DeleteWorkflowInput";
import { DeleteWorkflowOutput } from "../types/DeleteWorkflowOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/DeleteWorkflowInput";
export * from "../types/DeleteWorkflowOutput";
export * from "../types/DeleteWorkflowExceptionsUnion";

export class DeleteWorkflowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteWorkflowInput,
      OutputTypesUnion,
      DeleteWorkflowOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteWorkflow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteWorkflowInput,
    DeleteWorkflowOutput,
    Blob
  >();

  constructor(readonly input: DeleteWorkflowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteWorkflowInput, DeleteWorkflowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteWorkflowInput, DeleteWorkflowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
