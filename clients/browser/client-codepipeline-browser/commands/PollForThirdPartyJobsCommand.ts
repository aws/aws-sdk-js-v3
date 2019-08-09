import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PollForThirdPartyJobs } from "../model/PollForThirdPartyJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PollForThirdPartyJobsInput } from "../types/PollForThirdPartyJobsInput";
import { PollForThirdPartyJobsOutput } from "../types/PollForThirdPartyJobsOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/PollForThirdPartyJobsInput";
export * from "../types/PollForThirdPartyJobsOutput";
export * from "../types/PollForThirdPartyJobsExceptionsUnion";

export class PollForThirdPartyJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PollForThirdPartyJobsInput,
      OutputTypesUnion,
      PollForThirdPartyJobsOutput,
      CodePipelineResolvedConfiguration,
      Blob
    > {
  readonly model = PollForThirdPartyJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PollForThirdPartyJobsInput,
    PollForThirdPartyJobsOutput,
    Blob
  >();

  constructor(readonly input: PollForThirdPartyJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PollForThirdPartyJobsInput,
    PollForThirdPartyJobsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PollForThirdPartyJobsInput, PollForThirdPartyJobsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
