import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopDominantLanguageDetectionJob } from "../model/operations/StopDominantLanguageDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopDominantLanguageDetectionJobInput } from "../types/StopDominantLanguageDetectionJobInput";
import { StopDominantLanguageDetectionJobOutput } from "../types/StopDominantLanguageDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/StopDominantLanguageDetectionJobInput";
export * from "../types/StopDominantLanguageDetectionJobOutput";
export * from "../types/StopDominantLanguageDetectionJobExceptionsUnion";

export class StopDominantLanguageDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopDominantLanguageDetectionJobInput,
      OutputTypesUnion,
      StopDominantLanguageDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = StopDominantLanguageDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopDominantLanguageDetectionJobInput,
    StopDominantLanguageDetectionJobOutput,
    Blob
  >();

  constructor(readonly input: StopDominantLanguageDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopDominantLanguageDetectionJobInput,
    StopDominantLanguageDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        StopDominantLanguageDetectionJobInput,
        StopDominantLanguageDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
