import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPullRequest } from "../model/GetPullRequest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPullRequestInput } from "../types/GetPullRequestInput";
import { GetPullRequestOutput } from "../types/GetPullRequestOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/GetPullRequestInput";
export * from "../types/GetPullRequestOutput";
export * from "../types/GetPullRequestExceptionsUnion";

export class GetPullRequestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPullRequestInput,
      OutputTypesUnion,
      GetPullRequestOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = GetPullRequest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPullRequestInput,
    GetPullRequestOutput,
    Blob
  >();

  constructor(readonly input: GetPullRequestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<GetPullRequestInput, GetPullRequestOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPullRequestInput, GetPullRequestOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
