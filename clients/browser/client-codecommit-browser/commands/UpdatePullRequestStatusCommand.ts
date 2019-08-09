import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdatePullRequestStatus } from "../model/UpdatePullRequestStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePullRequestStatusInput } from "../types/UpdatePullRequestStatusInput";
import { UpdatePullRequestStatusOutput } from "../types/UpdatePullRequestStatusOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/UpdatePullRequestStatusInput";
export * from "../types/UpdatePullRequestStatusOutput";
export * from "../types/UpdatePullRequestStatusExceptionsUnion";

export class UpdatePullRequestStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePullRequestStatusInput,
      OutputTypesUnion,
      UpdatePullRequestStatusOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = UpdatePullRequestStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePullRequestStatusInput,
    UpdatePullRequestStatusOutput,
    Blob
  >();

  constructor(readonly input: UpdatePullRequestStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdatePullRequestStatusInput,
    UpdatePullRequestStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
