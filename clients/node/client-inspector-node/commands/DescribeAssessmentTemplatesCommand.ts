import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAssessmentTemplates } from "../model/operations/DescribeAssessmentTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAssessmentTemplatesInput } from "../types/DescribeAssessmentTemplatesInput";
import { DescribeAssessmentTemplatesOutput } from "../types/DescribeAssessmentTemplatesOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DescribeAssessmentTemplatesInput";
export * from "../types/DescribeAssessmentTemplatesOutput";
export * from "../types/DescribeAssessmentTemplatesExceptionsUnion";

export class DescribeAssessmentTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAssessmentTemplatesInput,
      OutputTypesUnion,
      DescribeAssessmentTemplatesOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAssessmentTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAssessmentTemplatesInput,
    DescribeAssessmentTemplatesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAssessmentTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAssessmentTemplatesInput,
    DescribeAssessmentTemplatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAssessmentTemplatesInput,
        DescribeAssessmentTemplatesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
