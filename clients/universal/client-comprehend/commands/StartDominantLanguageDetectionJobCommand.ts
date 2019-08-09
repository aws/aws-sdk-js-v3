import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartDominantLanguageDetectionJob } from "../model/StartDominantLanguageDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDominantLanguageDetectionJobInput } from "../types/StartDominantLanguageDetectionJobInput";
import { StartDominantLanguageDetectionJobOutput } from "../types/StartDominantLanguageDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StartDominantLanguageDetectionJobInput";
export * from "../types/StartDominantLanguageDetectionJobOutput";
export * from "../types/StartDominantLanguageDetectionJobExceptionsUnion";

export class StartDominantLanguageDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDominantLanguageDetectionJobInput,
      OutputTypesUnion,
      StartDominantLanguageDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StartDominantLanguageDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDominantLanguageDetectionJobInput,
    StartDominantLanguageDetectionJobOutput,
    Uint8Array
  >();

  constructor(readonly input: StartDominantLanguageDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartDominantLanguageDetectionJobInput,
    StartDominantLanguageDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StartDominantLanguageDetectionJobInput,
        StartDominantLanguageDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
