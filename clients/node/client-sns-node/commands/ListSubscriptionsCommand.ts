import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListSubscriptions } from "../model/ListSubscriptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSubscriptionsInput } from "../types/ListSubscriptionsInput";
import { ListSubscriptionsOutput } from "../types/ListSubscriptionsOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/ListSubscriptionsInput";
export * from "../types/ListSubscriptionsOutput";
export * from "../types/ListSubscriptionsExceptionsUnion";

export class ListSubscriptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSubscriptionsInput,
      OutputTypesUnion,
      ListSubscriptionsOutput,
      SNSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListSubscriptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSubscriptionsInput,
    ListSubscriptionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSubscriptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSubscriptionsInput, ListSubscriptionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSubscriptionsInput, ListSubscriptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
