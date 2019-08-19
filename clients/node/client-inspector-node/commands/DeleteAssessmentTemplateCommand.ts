import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAssessmentTemplate } from "../model/operations/DeleteAssessmentTemplate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAssessmentTemplateInput } from "../types/DeleteAssessmentTemplateInput";
import { DeleteAssessmentTemplateOutput } from "../types/DeleteAssessmentTemplateOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DeleteAssessmentTemplateInput";
export * from "../types/DeleteAssessmentTemplateOutput";
export * from "../types/DeleteAssessmentTemplateExceptionsUnion";

export class DeleteAssessmentTemplateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAssessmentTemplateInput,
      OutputTypesUnion,
      DeleteAssessmentTemplateOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAssessmentTemplate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAssessmentTemplateInput,
    DeleteAssessmentTemplateOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAssessmentTemplateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAssessmentTemplateInput,
    DeleteAssessmentTemplateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAssessmentTemplateInput, DeleteAssessmentTemplateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
