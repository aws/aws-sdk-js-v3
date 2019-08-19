import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableRule } from "../model/operations/EnableRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableRuleInput } from "../types/EnableRuleInput";
import { EnableRuleOutput } from "../types/EnableRuleOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/EnableRuleInput";
export * from "../types/EnableRuleOutput";
export * from "../types/EnableRuleExceptionsUnion";

export class EnableRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableRuleInput,
      OutputTypesUnion,
      EnableRuleOutput,
      EventBridgeResolvedConfiguration,
      Blob
    > {
  readonly model = EnableRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableRuleInput,
    EnableRuleOutput,
    Blob
  >();

  constructor(readonly input: EnableRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableRuleInput, EnableRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableRuleInput, EnableRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
