import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartAssessmentRun } from "../model/StartAssessmentRun";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartAssessmentRunInput } from "../types/StartAssessmentRunInput";
import { StartAssessmentRunOutput } from "../types/StartAssessmentRunOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/StartAssessmentRunInput";
export * from "../types/StartAssessmentRunOutput";
export * from "../types/StartAssessmentRunExceptionsUnion";

export class StartAssessmentRunCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartAssessmentRunInput,
      OutputTypesUnion,
      StartAssessmentRunOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = StartAssessmentRun;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartAssessmentRunInput,
    StartAssessmentRunOutput,
    Blob
  >();

  constructor(readonly input: StartAssessmentRunInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartAssessmentRunInput,
    StartAssessmentRunOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartAssessmentRunInput, StartAssessmentRunOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
