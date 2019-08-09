import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTopicRule } from "../model/CreateTopicRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTopicRuleInput } from "../types/CreateTopicRuleInput";
import { CreateTopicRuleOutput } from "../types/CreateTopicRuleOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateTopicRuleInput";
export * from "../types/CreateTopicRuleOutput";
export * from "../types/CreateTopicRuleExceptionsUnion";

export class CreateTopicRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTopicRuleInput,
      OutputTypesUnion,
      CreateTopicRuleOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = CreateTopicRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTopicRuleInput,
    CreateTopicRuleOutput,
    Blob
  >();

  constructor(readonly input: CreateTopicRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTopicRuleInput, CreateTopicRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTopicRuleInput, CreateTopicRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
