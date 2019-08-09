import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRegexPatternSets } from "../model/ListRegexPatternSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRegexPatternSetsInput } from "../types/ListRegexPatternSetsInput";
import { ListRegexPatternSetsOutput } from "../types/ListRegexPatternSetsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListRegexPatternSetsInput";
export * from "../types/ListRegexPatternSetsOutput";
export * from "../types/ListRegexPatternSetsExceptionsUnion";

export class ListRegexPatternSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRegexPatternSetsInput,
      OutputTypesUnion,
      ListRegexPatternSetsOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = ListRegexPatternSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRegexPatternSetsInput,
    ListRegexPatternSetsOutput,
    Blob
  >();

  constructor(readonly input: ListRegexPatternSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRegexPatternSetsInput,
    ListRegexPatternSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRegexPatternSetsInput, ListRegexPatternSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
