import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRateBasedRules } from "../model/ListRateBasedRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRateBasedRulesInput } from "../types/ListRateBasedRulesInput";
import { ListRateBasedRulesOutput } from "../types/ListRateBasedRulesOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
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
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRateBasedRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRateBasedRulesInput,
    ListRateBasedRulesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRateBasedRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
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
