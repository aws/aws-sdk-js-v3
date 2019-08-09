import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSizeConstraintSets } from "../model/ListSizeConstraintSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSizeConstraintSetsInput } from "../types/ListSizeConstraintSetsInput";
import { ListSizeConstraintSetsOutput } from "../types/ListSizeConstraintSetsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListSizeConstraintSetsInput";
export * from "../types/ListSizeConstraintSetsOutput";
export * from "../types/ListSizeConstraintSetsExceptionsUnion";

export class ListSizeConstraintSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSizeConstraintSetsInput,
      OutputTypesUnion,
      ListSizeConstraintSetsOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListSizeConstraintSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSizeConstraintSetsInput,
    ListSizeConstraintSetsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListSizeConstraintSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSizeConstraintSetsInput,
    ListSizeConstraintSetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSizeConstraintSetsInput, ListSizeConstraintSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
