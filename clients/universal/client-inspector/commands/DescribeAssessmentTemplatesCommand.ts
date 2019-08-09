import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAssessmentTemplates } from "../model/DescribeAssessmentTemplates";
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
      Uint8Array
    > {
  readonly model = DescribeAssessmentTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAssessmentTemplatesInput,
    DescribeAssessmentTemplatesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAssessmentTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
