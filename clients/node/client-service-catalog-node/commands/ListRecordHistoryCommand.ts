import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRecordHistory } from "../model/operations/ListRecordHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRecordHistoryInput } from "../types/ListRecordHistoryInput";
import { ListRecordHistoryOutput } from "../types/ListRecordHistoryOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/ListRecordHistoryInput";
export * from "../types/ListRecordHistoryOutput";
export * from "../types/ListRecordHistoryExceptionsUnion";

export class ListRecordHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRecordHistoryInput,
      OutputTypesUnion,
      ListRecordHistoryOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRecordHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRecordHistoryInput,
    ListRecordHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRecordHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRecordHistoryInput, ListRecordHistoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRecordHistoryInput, ListRecordHistoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
