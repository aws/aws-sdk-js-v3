import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListFilters } from "../model/operations/ListFilters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListFiltersInput } from "../types/ListFiltersInput";
import { ListFiltersOutput } from "../types/ListFiltersOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/ListFiltersInput";
export * from "../types/ListFiltersOutput";
export * from "../types/ListFiltersExceptionsUnion";

export class ListFiltersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListFiltersInput,
      OutputTypesUnion,
      ListFiltersOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListFilters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListFiltersInput,
    ListFiltersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListFiltersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<ListFiltersInput, ListFiltersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListFiltersInput, ListFiltersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
