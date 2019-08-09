import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListRuleNamesByTarget } from "../model/ListRuleNamesByTarget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListRuleNamesByTargetInput } from "../types/ListRuleNamesByTargetInput";
import { ListRuleNamesByTargetOutput } from "../types/ListRuleNamesByTargetOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
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
      EventBridgeResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListRuleNamesByTarget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListRuleNamesByTargetInput,
    ListRuleNamesByTargetOutput,
    Uint8Array
  >();

  constructor(readonly input: ListRuleNamesByTargetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EventBridgeResolvedConfiguration
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
