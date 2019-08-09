import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListTargetsByRule } from "../model/ListTargetsByRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTargetsByRuleInput } from "../types/ListTargetsByRuleInput";
import { ListTargetsByRuleOutput } from "../types/ListTargetsByRuleOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/ListTargetsByRuleInput";
export * from "../types/ListTargetsByRuleOutput";
export * from "../types/ListTargetsByRuleExceptionsUnion";

export class ListTargetsByRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTargetsByRuleInput,
      OutputTypesUnion,
      ListTargetsByRuleOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListTargetsByRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTargetsByRuleInput,
    ListTargetsByRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListTargetsByRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<ListTargetsByRuleInput, ListTargetsByRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTargetsByRuleInput, ListTargetsByRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
