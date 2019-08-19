import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteAssessmentTarget } from "../model/operations/DeleteAssessmentTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAssessmentTargetInput } from "../types/DeleteAssessmentTargetInput";
import { DeleteAssessmentTargetOutput } from "../types/DeleteAssessmentTargetOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/DeleteAssessmentTargetInput";
export * from "../types/DeleteAssessmentTargetOutput";
export * from "../types/DeleteAssessmentTargetExceptionsUnion";

export class DeleteAssessmentTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAssessmentTargetInput,
      OutputTypesUnion,
      DeleteAssessmentTargetOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteAssessmentTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAssessmentTargetInput,
    DeleteAssessmentTargetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteAssessmentTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteAssessmentTargetInput,
    DeleteAssessmentTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAssessmentTargetInput, DeleteAssessmentTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
