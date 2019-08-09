import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateAssessmentTarget } from "../model/UpdateAssessmentTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAssessmentTargetInput } from "../types/UpdateAssessmentTargetInput";
import { UpdateAssessmentTargetOutput } from "../types/UpdateAssessmentTargetOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/UpdateAssessmentTargetInput";
export * from "../types/UpdateAssessmentTargetOutput";
export * from "../types/UpdateAssessmentTargetExceptionsUnion";

export class UpdateAssessmentTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAssessmentTargetInput,
      OutputTypesUnion,
      UpdateAssessmentTargetOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateAssessmentTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAssessmentTargetInput,
    UpdateAssessmentTargetOutput,
    Blob
  >();

  constructor(readonly input: UpdateAssessmentTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAssessmentTargetInput,
    UpdateAssessmentTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAssessmentTargetInput, UpdateAssessmentTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
