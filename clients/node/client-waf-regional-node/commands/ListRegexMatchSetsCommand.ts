import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRegexMatchSets } from "../model/operations/ListRegexMatchSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRegexMatchSetsInput } from "../types/ListRegexMatchSetsInput";
import { ListRegexMatchSetsOutput } from "../types/ListRegexMatchSetsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
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
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRegexMatchSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRegexMatchSetsInput,
    ListRegexMatchSetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRegexMatchSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
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
