import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDominantLanguageDetectionJob } from "../model/DescribeDominantLanguageDetectionJob";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDominantLanguageDetectionJobInput } from "../types/DescribeDominantLanguageDetectionJobInput";
import { DescribeDominantLanguageDetectionJobOutput } from "../types/DescribeDominantLanguageDetectionJobOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/DescribeDominantLanguageDetectionJobInput";
export * from "../types/DescribeDominantLanguageDetectionJobOutput";
export * from "../types/DescribeDominantLanguageDetectionJobExceptionsUnion";

export class DescribeDominantLanguageDetectionJobCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDominantLanguageDetectionJobInput,
      OutputTypesUnion,
      DescribeDominantLanguageDetectionJobOutput,
      ComprehendResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDominantLanguageDetectionJob;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDominantLanguageDetectionJobInput,
    DescribeDominantLanguageDetectionJobOutput,
    Blob
  >();

  constructor(readonly input: DescribeDominantLanguageDetectionJobInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDominantLanguageDetectionJobInput,
    DescribeDominantLanguageDetectionJobOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDominantLanguageDetectionJobInput,
        DescribeDominantLanguageDetectionJobOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
