import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAssessmentRuns } from "../model/operations/DescribeAssessmentRuns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAssessmentRunsInput } from "../types/DescribeAssessmentRunsInput";
import { DescribeAssessmentRunsOutput } from "../types/DescribeAssessmentRunsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DescribeAssessmentRunsInput";
export * from "../types/DescribeAssessmentRunsOutput";
export * from "../types/DescribeAssessmentRunsExceptionsUnion";

export class DescribeAssessmentRunsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAssessmentRunsInput,
      OutputTypesUnion,
      DescribeAssessmentRunsOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAssessmentRuns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAssessmentRunsInput,
    DescribeAssessmentRunsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAssessmentRunsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAssessmentRunsInput,
    DescribeAssessmentRunsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAssessmentRunsInput, DescribeAssessmentRunsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
