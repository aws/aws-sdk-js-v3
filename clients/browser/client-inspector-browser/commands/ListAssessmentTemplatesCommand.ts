import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAssessmentTemplates } from "../model/operations/ListAssessmentTemplates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssessmentTemplatesInput } from "../types/ListAssessmentTemplatesInput";
import { ListAssessmentTemplatesOutput } from "../types/ListAssessmentTemplatesOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/ListAssessmentTemplatesInput";
export * from "../types/ListAssessmentTemplatesOutput";
export * from "../types/ListAssessmentTemplatesExceptionsUnion";

export class ListAssessmentTemplatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssessmentTemplatesInput,
      OutputTypesUnion,
      ListAssessmentTemplatesOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = ListAssessmentTemplates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssessmentTemplatesInput,
    ListAssessmentTemplatesOutput,
    Blob
  >();

  constructor(readonly input: ListAssessmentTemplatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssessmentTemplatesInput,
    ListAssessmentTemplatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssessmentTemplatesInput, ListAssessmentTemplatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
