import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSentimentDetectionJobs } from "../model/ListSentimentDetectionJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSentimentDetectionJobsInput } from "../types/ListSentimentDetectionJobsInput";
import { ListSentimentDetectionJobsOutput } from "../types/ListSentimentDetectionJobsOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/ListSentimentDetectionJobsInput";
export * from "../types/ListSentimentDetectionJobsOutput";
export * from "../types/ListSentimentDetectionJobsExceptionsUnion";

export class ListSentimentDetectionJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSentimentDetectionJobsInput,
      OutputTypesUnion,
      ListSentimentDetectionJobsOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = ListSentimentDetectionJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSentimentDetectionJobsInput,
    ListSentimentDetectionJobsOutput,
    Blob
  >();

  constructor(readonly input: ListSentimentDetectionJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSentimentDetectionJobsInput,
    ListSentimentDetectionJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListSentimentDetectionJobsInput,
        ListSentimentDetectionJobsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
