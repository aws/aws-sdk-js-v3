import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTopicRules } from "../model/ListTopicRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTopicRulesInput } from "../types/ListTopicRulesInput";
import { ListTopicRulesOutput } from "../types/ListTopicRulesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListTopicRulesInput";
export * from "../types/ListTopicRulesOutput";
export * from "../types/ListTopicRulesExceptionsUnion";

export class ListTopicRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTopicRulesInput,
      OutputTypesUnion,
      ListTopicRulesOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListTopicRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTopicRulesInput,
    ListTopicRulesOutput,
    Blob
  >();

  constructor(readonly input: ListTopicRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTopicRulesInput, ListTopicRulesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTopicRulesInput, ListTopicRulesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
