import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLogEvents } from "../model/operations/GetLogEvents";
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
      Blob
    > {
  readonly model = GetLogEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLogEventsInput,
    GetLogEventsOutput,
    Blob
  >();

  constructor(readonly input: GetLogEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
