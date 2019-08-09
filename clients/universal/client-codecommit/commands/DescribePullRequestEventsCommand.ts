import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePullRequestEvents } from "../model/DescribePullRequestEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePullRequestEventsInput } from "../types/DescribePullRequestEventsInput";
import { DescribePullRequestEventsOutput } from "../types/DescribePullRequestEventsOutput";
import { CodeCommitResolvedConfiguration } from "../CodeCommitConfiguration";
export * from "../types/DescribePullRequestEventsInput";
export * from "../types/DescribePullRequestEventsOutput";
export * from "../types/DescribePullRequestEventsExceptionsUnion";

export class DescribePullRequestEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePullRequestEventsInput,
      OutputTypesUnion,
      DescribePullRequestEventsOutput,
      CodeCommitResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribePullRequestEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePullRequestEventsInput,
    DescribePullRequestEventsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribePullRequestEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CodeCommitResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePullRequestEventsInput,
    DescribePullRequestEventsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePullRequestEventsInput, DescribePullRequestEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
