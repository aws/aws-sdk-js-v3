import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableTopicRule } from "../model/operations/EnableTopicRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableTopicRuleInput } from "../types/EnableTopicRuleInput";
import { EnableTopicRuleOutput } from "../types/EnableTopicRuleOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/EnableTopicRuleInput";
export * from "../types/EnableTopicRuleOutput";
export * from "../types/EnableTopicRuleExceptionsUnion";

export class EnableTopicRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableTopicRuleInput,
      OutputTypesUnion,
      EnableTopicRuleOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableTopicRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableTopicRuleInput,
    EnableTopicRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableTopicRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableTopicRuleInput, EnableTopicRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableTopicRuleInput, EnableTopicRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
