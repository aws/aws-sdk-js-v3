import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListReceiptFilters } from "../model/operations/ListReceiptFilters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListReceiptFiltersInput } from "../types/ListReceiptFiltersInput";
import { ListReceiptFiltersOutput } from "../types/ListReceiptFiltersOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/ListReceiptFiltersInput";
export * from "../types/ListReceiptFiltersOutput";
export * from "../types/ListReceiptFiltersExceptionsUnion";

export class ListReceiptFiltersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListReceiptFiltersInput,
      OutputTypesUnion,
      ListReceiptFiltersOutput,
      SESResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListReceiptFilters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListReceiptFiltersInput,
    ListReceiptFiltersOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListReceiptFiltersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListReceiptFiltersInput,
    ListReceiptFiltersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListReceiptFiltersInput, ListReceiptFiltersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
