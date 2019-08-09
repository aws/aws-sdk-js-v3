import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAssessmentRunAgents } from "../model/ListAssessmentRunAgents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssessmentRunAgentsInput } from "../types/ListAssessmentRunAgentsInput";
import { ListAssessmentRunAgentsOutput } from "../types/ListAssessmentRunAgentsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/ListAssessmentRunAgentsInput";
export * from "../types/ListAssessmentRunAgentsOutput";
export * from "../types/ListAssessmentRunAgentsExceptionsUnion";

export class ListAssessmentRunAgentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssessmentRunAgentsInput,
      OutputTypesUnion,
      ListAssessmentRunAgentsOutput,
      InspectorResolvedConfiguration,
      Blob
    > {
  readonly model = ListAssessmentRunAgents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssessmentRunAgentsInput,
    ListAssessmentRunAgentsOutput,
    Blob
  >();

  constructor(readonly input: ListAssessmentRunAgentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAssessmentRunAgentsInput,
    ListAssessmentRunAgentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssessmentRunAgentsInput, ListAssessmentRunAgentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
