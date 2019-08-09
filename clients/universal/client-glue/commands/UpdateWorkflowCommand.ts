import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateWorkflow } from "../model/UpdateWorkflow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateWorkflowInput } from "../types/UpdateWorkflowInput";
import { UpdateWorkflowOutput } from "../types/UpdateWorkflowOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdateWorkflowInput";
export * from "../types/UpdateWorkflowOutput";
export * from "../types/UpdateWorkflowExceptionsUnion";

export class UpdateWorkflowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateWorkflowInput,
      OutputTypesUnion,
      UpdateWorkflowOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateWorkflow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateWorkflowInput,
    UpdateWorkflowOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateWorkflowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateWorkflowInput, UpdateWorkflowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateWorkflowInput, UpdateWorkflowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
