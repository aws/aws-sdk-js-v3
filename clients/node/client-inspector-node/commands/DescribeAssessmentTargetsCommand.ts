import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAssessmentTargets } from "../model/operations/DescribeAssessmentTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAssessmentTargetsInput } from "../types/DescribeAssessmentTargetsInput";
import { DescribeAssessmentTargetsOutput } from "../types/DescribeAssessmentTargetsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DescribeAssessmentTargetsInput";
export * from "../types/DescribeAssessmentTargetsOutput";
export * from "../types/DescribeAssessmentTargetsExceptionsUnion";

export class DescribeAssessmentTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAssessmentTargetsInput,
      OutputTypesUnion,
      DescribeAssessmentTargetsOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAssessmentTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAssessmentTargetsInput,
    DescribeAssessmentTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAssessmentTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAssessmentTargetsInput,
    DescribeAssessmentTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAssessmentTargetsInput, DescribeAssessmentTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
