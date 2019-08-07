import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePullRequest } from "../model/CreatePullRequest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePullRequestInput } from "../types/CreatePullRequestInput";
import { CreatePullRequestOutput } from "../types/CreatePullRequestOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/CreatePullRequestInput";
export * from "../types/CreatePullRequestOutput";
export * from "../types/CreatePullRequestExceptionsUnion";

export class CreatePullRequestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePullRequestInput,
      OutputTypesUnion,
      CreatePullRequestOutput,
      CodeCommitResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePullRequest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePullRequestInput,
    CreatePullRequestOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePullRequestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePullRequestInput, CreatePullRequestOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePullRequestInput, CreatePullRequestOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
