import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetBuilds } from "../model/BatchGetBuilds";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetBuildsInput } from "../types/BatchGetBuildsInput";
import { BatchGetBuildsOutput } from "../types/BatchGetBuildsOutput";
import { CodeBuildResolvedConfiguration } from "../CodeBuildConfiguration";
export * from "../types/BatchGetBuildsInput";
export * from "../types/BatchGetBuildsOutput";
export * from "../types/BatchGetBuildsExceptionsUnion";

export class BatchGetBuildsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetBuildsInput,
      OutputTypesUnion,
      BatchGetBuildsOutput,
      CodeBuildResolvedConfiguration,
      Blob
    > {
  readonly model = BatchGetBuilds;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetBuildsInput,
    BatchGetBuildsOutput,
    Blob
  >();

  constructor(readonly input: BatchGetBuildsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeBuildResolvedConfiguration
  ): __aws_sdk_types.Handler<BatchGetBuildsInput, BatchGetBuildsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetBuildsInput, BatchGetBuildsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
