import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetProjects } from "../model/BatchGetProjects";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetProjectsInput } from "../types/BatchGetProjectsInput";
import { BatchGetProjectsOutput } from "../types/BatchGetProjectsOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/BatchGetProjectsInput";
export * from "../types/BatchGetProjectsOutput";
export * from "../types/BatchGetProjectsExceptionsUnion";

export class BatchGetProjectsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetProjectsInput,
      OutputTypesUnion,
      BatchGetProjectsOutput,
      CodeBuildResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetProjects;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetProjectsInput,
    BatchGetProjectsOutput,
    Blob
  >();

  constructor(readonly input: BatchGetProjectsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetProjectsInput, BatchGetProjectsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetProjectsInput, BatchGetProjectsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
