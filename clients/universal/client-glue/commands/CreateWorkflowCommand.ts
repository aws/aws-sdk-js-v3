import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateWorkflow } from "../model/CreateWorkflow";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateWorkflowInput } from "../types/CreateWorkflowInput";
import { CreateWorkflowOutput } from "../types/CreateWorkflowOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateWorkflowInput";
export * from "../types/CreateWorkflowOutput";
export * from "../types/CreateWorkflowExceptionsUnion";

export class CreateWorkflowCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateWorkflowInput,
      OutputTypesUnion,
      CreateWorkflowOutput,
      GlueResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateWorkflow;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateWorkflowInput,
    CreateWorkflowOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateWorkflowInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateWorkflowInput, CreateWorkflowOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateWorkflowInput, CreateWorkflowOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
