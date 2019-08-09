import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSqlInjectionMatchSets } from "../model/ListSqlInjectionMatchSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSqlInjectionMatchSetsInput } from "../types/ListSqlInjectionMatchSetsInput";
import { ListSqlInjectionMatchSetsOutput } from "../types/ListSqlInjectionMatchSetsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListSqlInjectionMatchSetsInput";
export * from "../types/ListSqlInjectionMatchSetsOutput";
export * from "../types/ListSqlInjectionMatchSetsExceptionsUnion";

export class ListSqlInjectionMatchSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSqlInjectionMatchSetsInput,
      OutputTypesUnion,
      ListSqlInjectionMatchSetsOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = ListSqlInjectionMatchSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSqlInjectionMatchSetsInput,
    ListSqlInjectionMatchSetsOutput,
    Blob
  >();

  constructor(readonly input: ListSqlInjectionMatchSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSqlInjectionMatchSetsInput,
    ListSqlInjectionMatchSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSqlInjectionMatchSetsInput, ListSqlInjectionMatchSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
