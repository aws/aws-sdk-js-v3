import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BatchDescribeMergeConflicts } from "../model/BatchDescribeMergeConflicts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BatchDescribeMergeConflictsInput } from "../types/BatchDescribeMergeConflictsInput";
import { BatchDescribeMergeConflictsOutput } from "../types/BatchDescribeMergeConflictsOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/BatchDescribeMergeConflictsInput";
export * from "../types/BatchDescribeMergeConflictsOutput";
export * from "../types/BatchDescribeMergeConflictsExceptionsUnion";

export class BatchDescribeMergeConflictsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BatchDescribeMergeConflictsInput,
      OutputTypesUnion,
      BatchDescribeMergeConflictsOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = BatchDescribeMergeConflicts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BatchDescribeMergeConflictsInput,
    BatchDescribeMergeConflictsOutput,
    Blob
  >();

  constructor(readonly input: BatchDescribeMergeConflictsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    BatchDescribeMergeConflictsInput,
    BatchDescribeMergeConflictsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        BatchDescribeMergeConflictsInput,
        BatchDescribeMergeConflictsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
