import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListGeoMatchSets } from "../model/ListGeoMatchSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListGeoMatchSetsInput } from "../types/ListGeoMatchSetsInput";
import { ListGeoMatchSetsOutput } from "../types/ListGeoMatchSetsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListGeoMatchSetsInput";
export * from "../types/ListGeoMatchSetsOutput";
export * from "../types/ListGeoMatchSetsExceptionsUnion";

export class ListGeoMatchSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListGeoMatchSetsInput,
      OutputTypesUnion,
      ListGeoMatchSetsOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListGeoMatchSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListGeoMatchSetsInput,
    ListGeoMatchSetsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListGeoMatchSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<ListGeoMatchSetsInput, ListGeoMatchSetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListGeoMatchSetsInput, ListGeoMatchSetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
