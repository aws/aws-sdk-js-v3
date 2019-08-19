import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeJobs } from "../model/operations/DescribeJobs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeJobsInput } from "../types/DescribeJobsInput";
import { DescribeJobsOutput } from "../types/DescribeJobsOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/DescribeJobsInput";
export * from "../types/DescribeJobsOutput";
export * from "../types/DescribeJobsExceptionsUnion";

export class DescribeJobsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeJobsInput,
      OutputTypesUnion,
      DescribeJobsOutput,
      BatchResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeJobs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeJobsInput,
    DescribeJobsOutput,
    Blob
  >();

  constructor(readonly input: DescribeJobsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeJobsInput, DescribeJobsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeJobsInput, DescribeJobsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
