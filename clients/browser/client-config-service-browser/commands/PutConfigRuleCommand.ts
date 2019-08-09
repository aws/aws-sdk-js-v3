import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutConfigRule } from "../model/PutConfigRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutConfigRuleInput } from "../types/PutConfigRuleInput";
import { PutConfigRuleOutput } from "../types/PutConfigRuleOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/PutConfigRuleInput";
export * from "../types/PutConfigRuleOutput";
export * from "../types/PutConfigRuleExceptionsUnion";

export class PutConfigRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutConfigRuleInput,
      OutputTypesUnion,
      PutConfigRuleOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = PutConfigRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutConfigRuleInput,
    PutConfigRuleOutput,
    Blob
  >();

  constructor(readonly input: PutConfigRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<PutConfigRuleInput, PutConfigRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutConfigRuleInput, PutConfigRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
