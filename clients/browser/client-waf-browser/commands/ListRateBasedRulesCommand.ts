import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRateBasedRules } from "../model/operations/ListRateBasedRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRateBasedRulesInput } from "../types/ListRateBasedRulesInput";
import { ListRateBasedRulesOutput } from "../types/ListRateBasedRulesOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/ListRateBasedRulesInput";
export * from "../types/ListRateBasedRulesOutput";
export * from "../types/ListRateBasedRulesExceptionsUnion";

export class ListRateBasedRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRateBasedRulesInput,
      OutputTypesUnion,
      ListRateBasedRulesOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = ListRateBasedRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRateBasedRulesInput,
    ListRateBasedRulesOutput,
    Blob
  >();

  constructor(readonly input: ListRateBasedRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRateBasedRulesInput,
    ListRateBasedRulesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRateBasedRulesInput, ListRateBasedRulesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
