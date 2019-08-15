import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRecords } from "../model/operations/ListRecords";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRecordsInput } from "../types/ListRecordsInput";
import { ListRecordsOutput } from "../types/ListRecordsOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/ListRecordsInput";
export * from "../types/ListRecordsOutput";
export * from "../types/ListRecordsExceptionsUnion";

export class ListRecordsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRecordsInput,
      OutputTypesUnion,
      ListRecordsOutput,
      CognitoSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRecords;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRecordsInput,
    ListRecordsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRecordsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRecordsInput, ListRecordsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRecordsInput, ListRecordsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
