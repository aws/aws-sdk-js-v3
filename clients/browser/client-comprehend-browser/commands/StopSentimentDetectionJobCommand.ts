import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopSentimentDetectionJob } from "../model/StopSentimentDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopSentimentDetectionJobInput } from "../types/StopSentimentDetectionJobInput";
import { StopSentimentDetectionJobOutput } from "../types/StopSentimentDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StopSentimentDetectionJobInput";
export * from "../types/StopSentimentDetectionJobOutput";
export * from "../types/StopSentimentDetectionJobExceptionsUnion";

export class StopSentimentDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopSentimentDetectionJobInput,
      OutputTypesUnion,
      StopSentimentDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = StopSentimentDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopSentimentDetectionJobInput,
    StopSentimentDetectionJobOutput,
    Blob
  >();

  constructor(readonly input: StopSentimentDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopSentimentDetectionJobInput,
    StopSentimentDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopSentimentDetectionJobInput, StopSentimentDetectionJobOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
