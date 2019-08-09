import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRateBasedRule } from "../model/DeleteRateBasedRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRateBasedRuleInput } from "../types/DeleteRateBasedRuleInput";
import { DeleteRateBasedRuleOutput } from "../types/DeleteRateBasedRuleOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/DeleteRateBasedRuleInput";
export * from "../types/DeleteRateBasedRuleOutput";
export * from "../types/DeleteRateBasedRuleExceptionsUnion";

export class DeleteRateBasedRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRateBasedRuleInput,
      OutputTypesUnion,
      DeleteRateBasedRuleOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteRateBasedRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRateBasedRuleInput,
    DeleteRateBasedRuleOutput,
    Blob
  >();

  constructor(readonly input: DeleteRateBasedRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRateBasedRuleInput,
    DeleteRateBasedRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRateBasedRuleInput, DeleteRateBasedRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
