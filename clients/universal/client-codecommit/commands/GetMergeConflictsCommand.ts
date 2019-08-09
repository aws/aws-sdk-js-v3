import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMergeConflicts } from "../model/GetMergeConflicts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMergeConflictsInput } from "../types/GetMergeConflictsInput";
import { GetMergeConflictsOutput } from "../types/GetMergeConflictsOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetMergeConflictsInput";
export * from "../types/GetMergeConflictsOutput";
export * from "../types/GetMergeConflictsExceptionsUnion";

export class GetMergeConflictsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMergeConflictsInput,
      OutputTypesUnion,
      GetMergeConflictsOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetMergeConflicts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMergeConflictsInput,
    GetMergeConflictsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetMergeConflictsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMergeConflictsInput, GetMergeConflictsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMergeConflictsInput, GetMergeConflictsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
