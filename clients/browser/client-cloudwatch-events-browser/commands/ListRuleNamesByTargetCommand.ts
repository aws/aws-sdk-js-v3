import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRuleNamesByTarget } from "../model/operations/ListRuleNamesByTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRuleNamesByTargetInput } from "../types/ListRuleNamesByTargetInput";
import { ListRuleNamesByTargetOutput } from "../types/ListRuleNamesByTargetOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/ListRuleNamesByTargetInput";
export * from "../types/ListRuleNamesByTargetOutput";
export * from "../types/ListRuleNamesByTargetExceptionsUnion";

export class ListRuleNamesByTargetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListRuleNamesByTargetInput,
      OutputTypesUnion,
      ListRuleNamesByTargetOutput,
      CloudWatchEventsResolvedConfiguration,
      Blob
    > {
  readonly model = ListRuleNamesByTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRuleNamesByTargetInput,
    ListRuleNamesByTargetOutput,
    Blob
  >();

  constructor(readonly input: ListRuleNamesByTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListRuleNamesByTargetInput,
    ListRuleNamesByTargetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListRuleNamesByTargetInput, ListRuleNamesByTargetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
