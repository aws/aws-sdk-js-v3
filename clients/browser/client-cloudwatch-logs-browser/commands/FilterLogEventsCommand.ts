import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { FilterLogEvents } from "../model/FilterLogEvents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { FilterLogEventsInput } from "../types/FilterLogEventsInput";
import { FilterLogEventsOutput } from "../types/FilterLogEventsOutput";
import { CloudWatchLogsResolvedConfiguration } from "../CloudWatchLogsConfiguration";
export * from "../types/FilterLogEventsInput";
export * from "../types/FilterLogEventsOutput";
export * from "../types/FilterLogEventsExceptionsUnion";

export class FilterLogEventsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      FilterLogEventsInput,
      OutputTypesUnion,
      FilterLogEventsOutput,
      CloudWatchLogsResolvedConfiguration,
      Blob
    > {
  readonly model = FilterLogEvents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    FilterLogEventsInput,
    FilterLogEventsOutput,
    Blob
  >();

  constructor(readonly input: FilterLogEventsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchLogsResolvedConfiguration
  ): __aws_sdk_types.Handler<FilterLogEventsInput, FilterLogEventsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<FilterLogEventsInput, FilterLogEventsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
