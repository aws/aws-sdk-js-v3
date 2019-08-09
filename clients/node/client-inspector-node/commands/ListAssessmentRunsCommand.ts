import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListAssessmentRuns } from "../model/ListAssessmentRuns";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssessmentRunsInput } from "../types/ListAssessmentRunsInput";
import { ListAssessmentRunsOutput } from "../types/ListAssessmentRunsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/ListAssessmentRunsInput";
export * from "../types/ListAssessmentRunsOutput";
export * from "../types/ListAssessmentRunsExceptionsUnion";

export class ListAssessmentRunsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssessmentRunsInput,
      OutputTypesUnion,
      ListAssessmentRunsOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListAssessmentRuns;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssessmentRunsInput,
    ListAssessmentRunsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListAssessmentRunsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssessmentRunsInput,
    ListAssessmentRunsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssessmentRunsInput, ListAssessmentRunsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
