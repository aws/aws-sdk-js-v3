import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteRule } from "../model/DeleteRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRuleInput } from "../types/DeleteRuleInput";
import { DeleteRuleOutput } from "../types/DeleteRuleOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/DeleteRuleInput";
export * from "../types/DeleteRuleOutput";
export * from "../types/DeleteRuleExceptionsUnion";

export class DeleteRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRuleInput,
      OutputTypesUnion,
      DeleteRuleOutput,
      CloudWatchEventsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRuleInput,
    DeleteRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteRuleInput, DeleteRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRuleInput, DeleteRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
