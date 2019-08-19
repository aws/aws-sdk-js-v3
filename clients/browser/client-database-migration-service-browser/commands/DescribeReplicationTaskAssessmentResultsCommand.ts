import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeReplicationTaskAssessmentResults } from "../model/operations/DescribeReplicationTaskAssessmentResults";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeReplicationTaskAssessmentResultsInput } from "../types/DescribeReplicationTaskAssessmentResultsInput";
import { DescribeReplicationTaskAssessmentResultsOutput } from "../types/DescribeReplicationTaskAssessmentResultsOutput";
import { DatabaseMigrationServiceResolvedConfiguration } from "../DatabaseMigrationServiceConfiguration";
export * from "../types/DescribeReplicationTaskAssessmentResultsInput";
export * from "../types/DescribeReplicationTaskAssessmentResultsOutput";
export * from "../types/DescribeReplicationTaskAssessmentResultsExceptionsUnion";

export class DescribeReplicationTaskAssessmentResultsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeReplicationTaskAssessmentResultsInput,
      OutputTypesUnion,
      DescribeReplicationTaskAssessmentResultsOutput,
      DatabaseMigrationServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeReplicationTaskAssessmentResults;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeReplicationTaskAssessmentResultsInput,
    DescribeReplicationTaskAssessmentResultsOutput,
    Blob
  >();

  constructor(readonly input: DescribeReplicationTaskAssessmentResultsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DatabaseMigrationServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeReplicationTaskAssessmentResultsInput,
    DescribeReplicationTaskAssessmentResultsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeReplicationTaskAssessmentResultsInput,
        DescribeReplicationTaskAssessmentResultsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
