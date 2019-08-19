import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartSentimentDetectionJob } from "../model/operations/StartSentimentDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartSentimentDetectionJobInput } from "../types/StartSentimentDetectionJobInput";
import { StartSentimentDetectionJobOutput } from "../types/StartSentimentDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StartSentimentDetectionJobInput";
export * from "../types/StartSentimentDetectionJobOutput";
export * from "../types/StartSentimentDetectionJobExceptionsUnion";

export class StartSentimentDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartSentimentDetectionJobInput,
      OutputTypesUnion,
      StartSentimentDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = StartSentimentDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartSentimentDetectionJobInput,
    StartSentimentDetectionJobOutput,
    Blob
  >();

  constructor(readonly input: StartSentimentDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartSentimentDetectionJobInput,
    StartSentimentDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartSentimentDetectionJobInput,
        StartSentimentDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
