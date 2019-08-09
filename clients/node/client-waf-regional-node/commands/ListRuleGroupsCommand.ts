import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListRuleGroups } from "../model/ListRuleGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRuleGroupsInput } from "../types/ListRuleGroupsInput";
import { ListRuleGroupsOutput } from "../types/ListRuleGroupsOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/ListRuleGroupsInput";
export * from "../types/ListRuleGroupsOutput";
export * from "../types/ListRuleGroupsExceptionsUnion";

export class ListRuleGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRuleGroupsInput,
      OutputTypesUnion,
      ListRuleGroupsOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListRuleGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRuleGroupsInput,
    ListRuleGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListRuleGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<ListRuleGroupsInput, ListRuleGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRuleGroupsInput, ListRuleGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
