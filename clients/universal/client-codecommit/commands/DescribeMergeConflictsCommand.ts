import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMergeConflicts } from "../model/DescribeMergeConflicts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMergeConflictsInput } from "../types/DescribeMergeConflictsInput";
import { DescribeMergeConflictsOutput } from "../types/DescribeMergeConflictsOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/DescribeMergeConflictsInput";
export * from "../types/DescribeMergeConflictsOutput";
export * from "../types/DescribeMergeConflictsExceptionsUnion";

export class DescribeMergeConflictsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMergeConflictsInput,
      OutputTypesUnion,
      DescribeMergeConflictsOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeMergeConflicts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMergeConflictsInput,
    DescribeMergeConflictsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeMergeConflictsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMergeConflictsInput,
    DescribeMergeConflictsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMergeConflictsInput, DescribeMergeConflictsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
