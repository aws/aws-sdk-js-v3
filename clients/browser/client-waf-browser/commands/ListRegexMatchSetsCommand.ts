import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRegexMatchSets } from "../model/ListRegexMatchSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRegexMatchSetsInput } from "../types/ListRegexMatchSetsInput";
import { ListRegexMatchSetsOutput } from "../types/ListRegexMatchSetsOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/ListRegexMatchSetsInput";
export * from "../types/ListRegexMatchSetsOutput";
export * from "../types/ListRegexMatchSetsExceptionsUnion";

export class ListRegexMatchSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRegexMatchSetsInput,
      OutputTypesUnion,
      ListRegexMatchSetsOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = ListRegexMatchSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRegexMatchSetsInput,
    ListRegexMatchSetsOutput,
    Blob
  >();

  constructor(readonly input: ListRegexMatchSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRegexMatchSetsInput,
    ListRegexMatchSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRegexMatchSetsInput, ListRegexMatchSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
