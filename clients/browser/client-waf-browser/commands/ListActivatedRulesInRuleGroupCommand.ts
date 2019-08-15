import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListActivatedRulesInRuleGroup } from "../model/operations/ListActivatedRulesInRuleGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListActivatedRulesInRuleGroupInput } from "../types/ListActivatedRulesInRuleGroupInput";
import { ListActivatedRulesInRuleGroupOutput } from "../types/ListActivatedRulesInRuleGroupOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/ListActivatedRulesInRuleGroupInput";
export * from "../types/ListActivatedRulesInRuleGroupOutput";
export * from "../types/ListActivatedRulesInRuleGroupExceptionsUnion";

export class ListActivatedRulesInRuleGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListActivatedRulesInRuleGroupInput,
      OutputTypesUnion,
      ListActivatedRulesInRuleGroupOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = ListActivatedRulesInRuleGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListActivatedRulesInRuleGroupInput,
    ListActivatedRulesInRuleGroupOutput,
    Blob
  >();

  constructor(readonly input: ListActivatedRulesInRuleGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListActivatedRulesInRuleGroupInput,
    ListActivatedRulesInRuleGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListActivatedRulesInRuleGroupInput,
        ListActivatedRulesInRuleGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
