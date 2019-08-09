import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { MergePullRequestBySquash } from "../model/MergePullRequestBySquash";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MergePullRequestBySquashInput } from "../types/MergePullRequestBySquashInput";
import { MergePullRequestBySquashOutput } from "../types/MergePullRequestBySquashOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/MergePullRequestBySquashInput";
export * from "../types/MergePullRequestBySquashOutput";
export * from "../types/MergePullRequestBySquashExceptionsUnion";

export class MergePullRequestBySquashCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MergePullRequestBySquashInput,
      OutputTypesUnion,
      MergePullRequestBySquashOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = MergePullRequestBySquash;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MergePullRequestBySquashInput,
    MergePullRequestBySquashOutput,
    _stream.Readable
  >();

  constructor(readonly input: MergePullRequestBySquashInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    MergePullRequestBySquashInput,
    MergePullRequestBySquashOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MergePullRequestBySquashInput, MergePullRequestBySquashOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
