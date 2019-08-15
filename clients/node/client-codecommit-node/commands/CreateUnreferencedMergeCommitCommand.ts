import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateUnreferencedMergeCommit } from "../model/operations/CreateUnreferencedMergeCommit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateUnreferencedMergeCommitInput } from "../types/CreateUnreferencedMergeCommitInput";
import { CreateUnreferencedMergeCommitOutput } from "../types/CreateUnreferencedMergeCommitOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/CreateUnreferencedMergeCommitInput";
export * from "../types/CreateUnreferencedMergeCommitOutput";
export * from "../types/CreateUnreferencedMergeCommitExceptionsUnion";

export class CreateUnreferencedMergeCommitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateUnreferencedMergeCommitInput,
      OutputTypesUnion,
      CreateUnreferencedMergeCommitOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateUnreferencedMergeCommit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateUnreferencedMergeCommitInput,
    CreateUnreferencedMergeCommitOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateUnreferencedMergeCommitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateUnreferencedMergeCommitInput,
    CreateUnreferencedMergeCommitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateUnreferencedMergeCommitInput,
        CreateUnreferencedMergeCommitOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
