import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartKeyPhrasesDetectionJob } from "../model/StartKeyPhrasesDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartKeyPhrasesDetectionJobInput } from "../types/StartKeyPhrasesDetectionJobInput";
import { StartKeyPhrasesDetectionJobOutput } from "../types/StartKeyPhrasesDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StartKeyPhrasesDetectionJobInput";
export * from "../types/StartKeyPhrasesDetectionJobOutput";
export * from "../types/StartKeyPhrasesDetectionJobExceptionsUnion";

export class StartKeyPhrasesDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartKeyPhrasesDetectionJobInput,
      OutputTypesUnion,
      StartKeyPhrasesDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartKeyPhrasesDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartKeyPhrasesDetectionJobInput,
    StartKeyPhrasesDetectionJobOutput,
    Uint8Array
  >();

  constructor(readonly input: StartKeyPhrasesDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartKeyPhrasesDetectionJobInput,
    StartKeyPhrasesDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartKeyPhrasesDetectionJobInput,
        StartKeyPhrasesDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
