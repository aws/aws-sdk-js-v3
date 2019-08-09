import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSubscriptionsByTopic } from "../model/ListSubscriptionsByTopic";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSubscriptionsByTopicInput } from "../types/ListSubscriptionsByTopicInput";
import { ListSubscriptionsByTopicOutput } from "../types/ListSubscriptionsByTopicOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/ListSubscriptionsByTopicInput";
export * from "../types/ListSubscriptionsByTopicOutput";
export * from "../types/ListSubscriptionsByTopicExceptionsUnion";

export class ListSubscriptionsByTopicCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSubscriptionsByTopicInput,
      OutputTypesUnion,
      ListSubscriptionsByTopicOutput,
      SNSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListSubscriptionsByTopic;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSubscriptionsByTopicInput,
    ListSubscriptionsByTopicOutput,
    Uint8Array
  >();

  constructor(readonly input: ListSubscriptionsByTopicInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSubscriptionsByTopicInput,
    ListSubscriptionsByTopicOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSubscriptionsByTopicInput, ListSubscriptionsByTopicOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
