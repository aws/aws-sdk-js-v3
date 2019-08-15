import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { MergePullRequestByThreeWay } from "../model/operations/MergePullRequestByThreeWay";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MergePullRequestByThreeWayInput } from "../types/MergePullRequestByThreeWayInput";
import { MergePullRequestByThreeWayOutput } from "../types/MergePullRequestByThreeWayOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/MergePullRequestByThreeWayInput";
export * from "../types/MergePullRequestByThreeWayOutput";
export * from "../types/MergePullRequestByThreeWayExceptionsUnion";

export class MergePullRequestByThreeWayCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MergePullRequestByThreeWayInput,
      OutputTypesUnion,
      MergePullRequestByThreeWayOutput,
      CodeCommitResolvedConfiguration,
      Blob
    > {
  readonly model = MergePullRequestByThreeWay;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MergePullRequestByThreeWayInput,
    MergePullRequestByThreeWayOutput,
    Blob
  >();

  constructor(readonly input: MergePullRequestByThreeWayInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    MergePullRequestByThreeWayInput,
    MergePullRequestByThreeWayOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        MergePullRequestByThreeWayInput,
        MergePullRequestByThreeWayOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
