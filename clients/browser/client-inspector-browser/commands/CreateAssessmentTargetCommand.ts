import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAssessmentTarget } from "../model/CreateAssessmentTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAssessmentTargetInput } from "../types/CreateAssessmentTargetInput";
import { CreateAssessmentTargetOutput } from "../types/CreateAssessmentTargetOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/CreateAssessmentTargetInput";
export * from "../types/CreateAssessmentTargetOutput";
export * from "../types/CreateAssessmentTargetExceptionsUnion";

export class CreateAssessmentTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAssessmentTargetInput,
      OutputTypesUnion,
      CreateAssessmentTargetOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = CreateAssessmentTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAssessmentTargetInput,
    CreateAssessmentTargetOutput,
    Blob
  >();

  constructor(readonly input: CreateAssessmentTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateAssessmentTargetInput,
    CreateAssessmentTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAssessmentTargetInput, CreateAssessmentTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
