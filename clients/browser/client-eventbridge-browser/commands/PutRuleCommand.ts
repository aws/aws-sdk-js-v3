import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRule } from "../model/operations/PutRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRuleInput } from "../types/PutRuleInput";
import { PutRuleOutput } from "../types/PutRuleOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/PutRuleInput";
export * from "../types/PutRuleOutput";
export * from "../types/PutRuleExceptionsUnion";

export class PutRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRuleInput,
      OutputTypesUnion,
      PutRuleOutput,
      EventBridgeResolvedConfiguration,
      Blob
    > {
  readonly model = PutRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRuleInput,
    PutRuleOutput,
    Blob
  >();

  constructor(readonly input: PutRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<PutRuleInput, PutRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRuleInput, PutRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
