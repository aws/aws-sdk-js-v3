import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRateBasedRule } from "../model/operations/DeleteRateBasedRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRateBasedRuleInput } from "../types/DeleteRateBasedRuleInput";
import { DeleteRateBasedRuleOutput } from "../types/DeleteRateBasedRuleOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
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
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRateBasedRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRateBasedRuleInput,
    DeleteRateBasedRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRateBasedRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
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
