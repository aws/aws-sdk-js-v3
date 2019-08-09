import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLogEvents } from "../model/GetLogEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLogEventsInput } from "../types/GetLogEventsInput";
import { GetLogEventsOutput } from "../types/GetLogEventsOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/GetLogEventsInput";
export * from "../types/GetLogEventsOutput";
export * from "../types/GetLogEventsExceptionsUnion";

export class GetLogEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLogEventsInput,
      OutputTypesUnion,
      GetLogEventsOutput,
      CloudWatchLogsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLogEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLogEventsInput,
    GetLogEventsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLogEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLogEventsInput, GetLogEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLogEventsInput, GetLogEventsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
