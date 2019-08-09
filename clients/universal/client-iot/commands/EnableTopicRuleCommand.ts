import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableTopicRule } from "../model/EnableTopicRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableTopicRuleInput } from "../types/EnableTopicRuleInput";
import { EnableTopicRuleOutput } from "../types/EnableTopicRuleOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/EnableTopicRuleInput";
export * from "../types/EnableTopicRuleOutput";
export * from "../types/EnableTopicRuleExceptionsUnion";

export class EnableTopicRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableTopicRuleInput,
      OutputTypesUnion,
      EnableTopicRuleOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = EnableTopicRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableTopicRuleInput,
    EnableTopicRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: EnableTopicRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableTopicRuleInput, EnableTopicRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableTopicRuleInput, EnableTopicRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
