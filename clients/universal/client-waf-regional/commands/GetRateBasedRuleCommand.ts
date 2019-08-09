import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRateBasedRule } from "../model/GetRateBasedRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRateBasedRuleInput } from "../types/GetRateBasedRuleInput";
import { GetRateBasedRuleOutput } from "../types/GetRateBasedRuleOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetRateBasedRuleInput";
export * from "../types/GetRateBasedRuleOutput";
export * from "../types/GetRateBasedRuleExceptionsUnion";

export class GetRateBasedRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRateBasedRuleInput,
      OutputTypesUnion,
      GetRateBasedRuleOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetRateBasedRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRateBasedRuleInput,
    GetRateBasedRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: GetRateBasedRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRateBasedRuleInput, GetRateBasedRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRateBasedRuleInput, GetRateBasedRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
