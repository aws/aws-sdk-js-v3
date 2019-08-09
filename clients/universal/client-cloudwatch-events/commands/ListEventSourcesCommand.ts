import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListEventSources } from "../model/ListEventSources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEventSourcesInput } from "../types/ListEventSourcesInput";
import { ListEventSourcesOutput } from "../types/ListEventSourcesOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/ListEventSourcesInput";
export * from "../types/ListEventSourcesOutput";
export * from "../types/ListEventSourcesExceptionsUnion";

export class ListEventSourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEventSourcesInput,
      OutputTypesUnion,
      ListEventSourcesOutput,
      CloudWatchEventsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListEventSources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEventSourcesInput,
    ListEventSourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListEventSourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListEventSourcesInput, ListEventSourcesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEventSourcesInput, ListEventSourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
