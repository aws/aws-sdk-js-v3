import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListReviewPolicyResultsForHIT } from "../model/ListReviewPolicyResultsForHIT";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListReviewPolicyResultsForHITInput } from "../types/ListReviewPolicyResultsForHITInput";
import { ListReviewPolicyResultsForHITOutput } from "../types/ListReviewPolicyResultsForHITOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/ListReviewPolicyResultsForHITInput";
export * from "../types/ListReviewPolicyResultsForHITOutput";
export * from "../types/ListReviewPolicyResultsForHITExceptionsUnion";

export class ListReviewPolicyResultsForHITCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListReviewPolicyResultsForHITInput,
      OutputTypesUnion,
      ListReviewPolicyResultsForHITOutput,
      MTurkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListReviewPolicyResultsForHIT;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListReviewPolicyResultsForHITInput,
    ListReviewPolicyResultsForHITOutput,
    Uint8Array
  >();

  constructor(readonly input: ListReviewPolicyResultsForHITInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListReviewPolicyResultsForHITInput,
    ListReviewPolicyResultsForHITOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListReviewPolicyResultsForHITInput,
        ListReviewPolicyResultsForHITOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
