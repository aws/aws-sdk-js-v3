import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListIPSets } from "../model/ListIPSets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListIPSetsInput } from "../types/ListIPSetsInput";
import { ListIPSetsOutput } from "../types/ListIPSetsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListIPSetsInput";
export * from "../types/ListIPSetsOutput";
export * from "../types/ListIPSetsExceptionsUnion";

export class ListIPSetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListIPSetsInput,
      OutputTypesUnion,
      ListIPSetsOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListIPSets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListIPSetsInput,
    ListIPSetsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListIPSetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<ListIPSetsInput, ListIPSetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListIPSetsInput, ListIPSetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
