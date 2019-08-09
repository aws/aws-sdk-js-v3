import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisableTopicRule } from "../model/DisableTopicRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableTopicRuleInput } from "../types/DisableTopicRuleInput";
import { DisableTopicRuleOutput } from "../types/DisableTopicRuleOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DisableTopicRuleInput";
export * from "../types/DisableTopicRuleOutput";
export * from "../types/DisableTopicRuleExceptionsUnion";

export class DisableTopicRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableTopicRuleInput,
      OutputTypesUnion,
      DisableTopicRuleOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisableTopicRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableTopicRuleInput,
    DisableTopicRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisableTopicRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DisableTopicRuleInput, DisableTopicRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableTopicRuleInput, DisableTopicRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
