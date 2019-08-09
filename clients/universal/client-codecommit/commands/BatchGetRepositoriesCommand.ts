import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchGetRepositories } from "../model/BatchGetRepositories";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchGetRepositoriesInput } from "../types/BatchGetRepositoriesInput";
import { BatchGetRepositoriesOutput } from "../types/BatchGetRepositoriesOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/BatchGetRepositoriesInput";
export * from "../types/BatchGetRepositoriesOutput";
export * from "../types/BatchGetRepositoriesExceptionsUnion";

export class BatchGetRepositoriesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchGetRepositoriesInput,
      OutputTypesUnion,
      BatchGetRepositoriesOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = BatchGetRepositories;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchGetRepositoriesInput,
    BatchGetRepositoriesOutput,
    Uint8Array
  >();

  constructor(readonly input: BatchGetRepositoriesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchGetRepositoriesInput,
    BatchGetRepositoriesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BatchGetRepositoriesInput, BatchGetRepositoriesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
