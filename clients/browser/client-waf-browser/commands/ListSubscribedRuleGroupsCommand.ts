import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSubscribedRuleGroups } from "../model/operations/ListSubscribedRuleGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSubscribedRuleGroupsInput } from "../types/ListSubscribedRuleGroupsInput";
import { ListSubscribedRuleGroupsOutput } from "../types/ListSubscribedRuleGroupsOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/ListSubscribedRuleGroupsInput";
export * from "../types/ListSubscribedRuleGroupsOutput";
export * from "../types/ListSubscribedRuleGroupsExceptionsUnion";

export class ListSubscribedRuleGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSubscribedRuleGroupsInput,
      OutputTypesUnion,
      ListSubscribedRuleGroupsOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = ListSubscribedRuleGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSubscribedRuleGroupsInput,
    ListSubscribedRuleGroupsOutput,
    Blob
  >();

  constructor(readonly input: ListSubscribedRuleGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListSubscribedRuleGroupsInput,
    ListSubscribedRuleGroupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSubscribedRuleGroupsInput, ListSubscribedRuleGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
