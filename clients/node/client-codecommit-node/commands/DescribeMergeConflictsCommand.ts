import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = DescribeMergeConflicts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMergeConflictsInput,
    DescribeMergeConflictsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeMergeConflictsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
