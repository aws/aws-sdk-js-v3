import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdatePullRequestTitle } from "../model/operations/UpdatePullRequestTitle";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePullRequestTitleInput } from "../types/UpdatePullRequestTitleInput";
import { UpdatePullRequestTitleOutput } from "../types/UpdatePullRequestTitleOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/UpdatePullRequestTitleInput";
export * from "../types/UpdatePullRequestTitleOutput";
export * from "../types/UpdatePullRequestTitleExceptionsUnion";

export class UpdatePullRequestTitleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePullRequestTitleInput,
      OutputTypesUnion,
      UpdatePullRequestTitleOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdatePullRequestTitle;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePullRequestTitleInput,
    UpdatePullRequestTitleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdatePullRequestTitleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdatePullRequestTitleInput,
    UpdatePullRequestTitleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
