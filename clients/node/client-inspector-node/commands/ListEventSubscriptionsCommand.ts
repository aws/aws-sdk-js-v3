import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListEventSubscriptions } from "../model/operations/ListEventSubscriptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListEventSubscriptionsInput } from "../types/ListEventSubscriptionsInput";
import { ListEventSubscriptionsOutput } from "../types/ListEventSubscriptionsOutput";
import { InspectorResolvedConfiguration } from "../InspectorConfiguration";
export * from "../types/ListEventSubscriptionsInput";
export * from "../types/ListEventSubscriptionsOutput";
export * from "../types/ListEventSubscriptionsExceptionsUnion";

export class ListEventSubscriptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListEventSubscriptionsInput,
      OutputTypesUnion,
      ListEventSubscriptionsOutput,
      InspectorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListEventSubscriptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListEventSubscriptionsInput,
    ListEventSubscriptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListEventSubscriptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: InspectorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListEventSubscriptionsInput,
    ListEventSubscriptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListEventSubscriptionsInput, ListEventSubscriptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
