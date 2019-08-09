import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListKeyPhrasesDetectionJobs } from "../model/ListKeyPhrasesDetectionJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListKeyPhrasesDetectionJobsInput } from "../types/ListKeyPhrasesDetectionJobsInput";
import { ListKeyPhrasesDetectionJobsOutput } from "../types/ListKeyPhrasesDetectionJobsOutput";
import { ComprehendResolvedConfiguration } from "../ComprehendConfiguration";
export * from "../types/ListKeyPhrasesDetectionJobsInput";
export * from "../types/ListKeyPhrasesDetectionJobsOutput";
export * from "../types/ListKeyPhrasesDetectionJobsExceptionsUnion";

export class ListKeyPhrasesDetectionJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListKeyPhrasesDetectionJobsInput,
      OutputTypesUnion,
      ListKeyPhrasesDetectionJobsOutput,
      ComprehendResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListKeyPhrasesDetectionJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListKeyPhrasesDetectionJobsInput,
    ListKeyPhrasesDetectionJobsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListKeyPhrasesDetectionJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ComprehendResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListKeyPhrasesDetectionJobsInput,
    ListKeyPhrasesDetectionJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListKeyPhrasesDetectionJobsInput,
        ListKeyPhrasesDetectionJobsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
