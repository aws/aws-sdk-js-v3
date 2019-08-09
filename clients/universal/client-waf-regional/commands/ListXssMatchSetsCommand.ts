import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListXssMatchSets } from "../model/ListXssMatchSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListXssMatchSetsInput } from "../types/ListXssMatchSetsInput";
import { ListXssMatchSetsOutput } from "../types/ListXssMatchSetsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListXssMatchSetsInput";
export * from "../types/ListXssMatchSetsOutput";
export * from "../types/ListXssMatchSetsExceptionsUnion";

export class ListXssMatchSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListXssMatchSetsInput,
      OutputTypesUnion,
      ListXssMatchSetsOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListXssMatchSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListXssMatchSetsInput,
    ListXssMatchSetsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListXssMatchSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<ListXssMatchSetsInput, ListXssMatchSetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListXssMatchSetsInput, ListXssMatchSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
