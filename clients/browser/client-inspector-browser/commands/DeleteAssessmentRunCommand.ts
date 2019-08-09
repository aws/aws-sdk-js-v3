import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAssessmentRun } from "../model/DeleteAssessmentRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAssessmentRunInput } from "../types/DeleteAssessmentRunInput";
import { DeleteAssessmentRunOutput } from "../types/DeleteAssessmentRunOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DeleteAssessmentRunInput";
export * from "../types/DeleteAssessmentRunOutput";
export * from "../types/DeleteAssessmentRunExceptionsUnion";

export class DeleteAssessmentRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAssessmentRunInput,
      OutputTypesUnion,
      DeleteAssessmentRunOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAssessmentRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAssessmentRunInput,
    DeleteAssessmentRunOutput,
    Blob
  >();

  constructor(readonly input: DeleteAssessmentRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAssessmentRunInput,
    DeleteAssessmentRunOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAssessmentRunInput, DeleteAssessmentRunOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
