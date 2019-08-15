import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRules } from "../model/operations/ListRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRulesInput } from "../types/ListRulesInput";
import { ListRulesOutput } from "../types/ListRulesOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListRulesInput";
export * from "../types/ListRulesOutput";
export * from "../types/ListRulesExceptionsUnion";

export class ListRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRulesInput,
      OutputTypesUnion,
      ListRulesOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = ListRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRulesInput,
    ListRulesOutput,
    Blob
  >();

  constructor(readonly input: ListRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRulesInput, ListRulesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRulesInput, ListRulesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
