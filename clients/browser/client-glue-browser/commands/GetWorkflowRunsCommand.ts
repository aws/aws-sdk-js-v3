import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetWorkflowRuns } from "../model/GetWorkflowRuns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetWorkflowRunsInput } from "../types/GetWorkflowRunsInput";
import { GetWorkflowRunsOutput } from "../types/GetWorkflowRunsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetWorkflowRunsInput";
export * from "../types/GetWorkflowRunsOutput";
export * from "../types/GetWorkflowRunsExceptionsUnion";

export class GetWorkflowRunsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetWorkflowRunsInput,
      OutputTypesUnion,
      GetWorkflowRunsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetWorkflowRuns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetWorkflowRunsInput,
    GetWorkflowRunsOutput,
    Blob
  >();

  constructor(readonly input: GetWorkflowRunsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetWorkflowRunsInput, GetWorkflowRunsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetWorkflowRunsInput, GetWorkflowRunsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
