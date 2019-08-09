import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLogRecord } from "../model/GetLogRecord";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLogRecordInput } from "../types/GetLogRecordInput";
import { GetLogRecordOutput } from "../types/GetLogRecordOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/GetLogRecordInput";
export * from "../types/GetLogRecordOutput";
export * from "../types/GetLogRecordExceptionsUnion";

export class GetLogRecordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLogRecordInput,
      OutputTypesUnion,
      GetLogRecordOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLogRecord;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLogRecordInput,
    GetLogRecordOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLogRecordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLogRecordInput, GetLogRecordOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLogRecordInput, GetLogRecordOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
