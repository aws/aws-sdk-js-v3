import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAssessmentTargets } from "../model/operations/ListAssessmentTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssessmentTargetsInput } from "../types/ListAssessmentTargetsInput";
import { ListAssessmentTargetsOutput } from "../types/ListAssessmentTargetsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/ListAssessmentTargetsInput";
export * from "../types/ListAssessmentTargetsOutput";
export * from "../types/ListAssessmentTargetsExceptionsUnion";

export class ListAssessmentTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssessmentTargetsInput,
      OutputTypesUnion,
      ListAssessmentTargetsOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAssessmentTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssessmentTargetsInput,
    ListAssessmentTargetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAssessmentTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssessmentTargetsInput,
    ListAssessmentTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssessmentTargetsInput, ListAssessmentTargetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
