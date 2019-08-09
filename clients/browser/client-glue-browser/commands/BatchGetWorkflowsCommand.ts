import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetWorkflows } from "../model/BatchGetWorkflows";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetWorkflowsInput } from "../types/BatchGetWorkflowsInput";
import { BatchGetWorkflowsOutput } from "../types/BatchGetWorkflowsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/BatchGetWorkflowsInput";
export * from "../types/BatchGetWorkflowsOutput";
export * from "../types/BatchGetWorkflowsExceptionsUnion";

export class BatchGetWorkflowsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetWorkflowsInput,
      OutputTypesUnion,
      BatchGetWorkflowsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetWorkflows;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetWorkflowsInput,
    BatchGetWorkflowsOutput,
    Blob
  >();

  constructor(readonly input: BatchGetWorkflowsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetWorkflowsInput, BatchGetWorkflowsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetWorkflowsInput, BatchGetWorkflowsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
