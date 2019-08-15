import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTopicRule } from "../model/operations/DeleteTopicRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTopicRuleInput } from "../types/DeleteTopicRuleInput";
import { DeleteTopicRuleOutput } from "../types/DeleteTopicRuleOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteTopicRuleInput";
export * from "../types/DeleteTopicRuleOutput";
export * from "../types/DeleteTopicRuleExceptionsUnion";

export class DeleteTopicRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTopicRuleInput,
      OutputTypesUnion,
      DeleteTopicRuleOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTopicRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTopicRuleInput,
    DeleteTopicRuleOutput,
    Blob
  >();

  constructor(readonly input: DeleteTopicRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTopicRuleInput, DeleteTopicRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTopicRuleInput, DeleteTopicRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
