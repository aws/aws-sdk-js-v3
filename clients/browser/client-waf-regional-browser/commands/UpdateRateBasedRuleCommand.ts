import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRateBasedRule } from "../model/UpdateRateBasedRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRateBasedRuleInput } from "../types/UpdateRateBasedRuleInput";
import { UpdateRateBasedRuleOutput } from "../types/UpdateRateBasedRuleOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/UpdateRateBasedRuleInput";
export * from "../types/UpdateRateBasedRuleOutput";
export * from "../types/UpdateRateBasedRuleExceptionsUnion";

export class UpdateRateBasedRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRateBasedRuleInput,
      OutputTypesUnion,
      UpdateRateBasedRuleOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRateBasedRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRateBasedRuleInput,
    UpdateRateBasedRuleOutput,
    Blob
  >();

  constructor(readonly input: UpdateRateBasedRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRateBasedRuleInput,
    UpdateRateBasedRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRateBasedRuleInput, UpdateRateBasedRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
