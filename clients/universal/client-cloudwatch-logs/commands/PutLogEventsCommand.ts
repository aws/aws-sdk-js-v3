import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutLogEvents } from "../model/PutLogEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutLogEventsInput } from "../types/PutLogEventsInput";
import { PutLogEventsOutput } from "../types/PutLogEventsOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/PutLogEventsInput";
export * from "../types/PutLogEventsOutput";
export * from "../types/PutLogEventsExceptionsUnion";

export class PutLogEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutLogEventsInput,
      OutputTypesUnion,
      PutLogEventsOutput,
      CloudWatchLogsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutLogEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutLogEventsInput,
    PutLogEventsOutput,
    Uint8Array
  >();

  constructor(readonly input: PutLogEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<PutLogEventsInput, PutLogEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutLogEventsInput, PutLogEventsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
