import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PollForJobs } from "../model/operations/PollForJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PollForJobsInput } from "../types/PollForJobsInput";
import { PollForJobsOutput } from "../types/PollForJobsOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PollForJobsInput";
export * from "../types/PollForJobsOutput";
export * from "../types/PollForJobsExceptionsUnion";

export class PollForJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PollForJobsInput,
      OutputTypesUnion,
      PollForJobsOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = PollForJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PollForJobsInput,
    PollForJobsOutput,
    Blob
  >();

  constructor(readonly input: PollForJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<PollForJobsInput, PollForJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PollForJobsInput, PollForJobsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
