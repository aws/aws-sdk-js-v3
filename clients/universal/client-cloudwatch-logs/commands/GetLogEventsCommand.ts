import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = GetLogEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLogEventsInput,
    GetLogEventsOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLogEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
