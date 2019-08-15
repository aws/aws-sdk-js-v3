import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMergeCommit } from "../model/operations/GetMergeCommit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMergeCommitInput } from "../types/GetMergeCommitInput";
import { GetMergeCommitOutput } from "../types/GetMergeCommitOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetMergeCommitInput";
export * from "../types/GetMergeCommitOutput";
export * from "../types/GetMergeCommitExceptionsUnion";

export class GetMergeCommitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMergeCommitInput,
      OutputTypesUnion,
      GetMergeCommitOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = GetMergeCommit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMergeCommitInput,
    GetMergeCommitOutput,
    Blob
  >();

  constructor(readonly input: GetMergeCommitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMergeCommitInput, GetMergeCommitOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMergeCommitInput, GetMergeCommitOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
