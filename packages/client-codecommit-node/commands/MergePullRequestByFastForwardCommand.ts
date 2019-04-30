import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { MergePullRequestByFastForward } from "../model/MergePullRequestByFastForward";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MergePullRequestByFastForwardInput } from "../types/MergePullRequestByFastForwardInput";
import { MergePullRequestByFastForwardOutput } from "../types/MergePullRequestByFastForwardOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/MergePullRequestByFastForwardInput";
export * from "../types/MergePullRequestByFastForwardOutput";
export * from "../types/MergePullRequestByFastForwardExceptionsUnion";

export class MergePullRequestByFastForwardCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MergePullRequestByFastForwardInput,
      OutputTypesUnion,
      MergePullRequestByFastForwardOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MergePullRequestByFastForwardInput,
    MergePullRequestByFastForwardOutput,
    _stream.Readable
  >();

  constructor(readonly input: MergePullRequestByFastForwardInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    MergePullRequestByFastForwardInput,
    MergePullRequestByFastForwardOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: MergePullRequestByFastForward
    };

    return stack.resolve(
      handler<
        MergePullRequestByFastForwardInput,
        MergePullRequestByFastForwardOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
