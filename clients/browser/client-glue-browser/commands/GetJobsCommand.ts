import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetJobs } from "../model/operations/GetJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobsInput } from "../types/GetJobsInput";
import { GetJobsOutput } from "../types/GetJobsOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetJobsInput";
export * from "../types/GetJobsOutput";
export * from "../types/GetJobsExceptionsUnion";

export class GetJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobsInput,
      OutputTypesUnion,
      GetJobsOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobsInput,
    GetJobsOutput,
    Blob
  >();

  constructor(readonly input: GetJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobsInput, GetJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobsInput, GetJobsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
