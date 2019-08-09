import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopKeyPhrasesDetectionJob } from "../model/StopKeyPhrasesDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopKeyPhrasesDetectionJobInput } from "../types/StopKeyPhrasesDetectionJobInput";
import { StopKeyPhrasesDetectionJobOutput } from "../types/StopKeyPhrasesDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StopKeyPhrasesDetectionJobInput";
export * from "../types/StopKeyPhrasesDetectionJobOutput";
export * from "../types/StopKeyPhrasesDetectionJobExceptionsUnion";

export class StopKeyPhrasesDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopKeyPhrasesDetectionJobInput,
      OutputTypesUnion,
      StopKeyPhrasesDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = StopKeyPhrasesDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopKeyPhrasesDetectionJobInput,
    StopKeyPhrasesDetectionJobOutput,
    Blob
  >();

  constructor(readonly input: StopKeyPhrasesDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopKeyPhrasesDetectionJobInput,
    StopKeyPhrasesDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StopKeyPhrasesDetectionJobInput,
        StopKeyPhrasesDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
