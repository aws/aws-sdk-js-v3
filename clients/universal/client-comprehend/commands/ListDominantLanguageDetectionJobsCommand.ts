import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDominantLanguageDetectionJobs } from "../model/ListDominantLanguageDetectionJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDominantLanguageDetectionJobsInput } from "../types/ListDominantLanguageDetectionJobsInput";
import { ListDominantLanguageDetectionJobsOutput } from "../types/ListDominantLanguageDetectionJobsOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/ListDominantLanguageDetectionJobsInput";
export * from "../types/ListDominantLanguageDetectionJobsOutput";
export * from "../types/ListDominantLanguageDetectionJobsExceptionsUnion";

export class ListDominantLanguageDetectionJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDominantLanguageDetectionJobsInput,
      OutputTypesUnion,
      ListDominantLanguageDetectionJobsOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListDominantLanguageDetectionJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDominantLanguageDetectionJobsInput,
    ListDominantLanguageDetectionJobsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListDominantLanguageDetectionJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDominantLanguageDetectionJobsInput,
    ListDominantLanguageDetectionJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListDominantLanguageDetectionJobsInput,
        ListDominantLanguageDetectionJobsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
