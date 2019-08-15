import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTopicRule } from "../model/operations/GetTopicRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTopicRuleInput } from "../types/GetTopicRuleInput";
import { GetTopicRuleOutput } from "../types/GetTopicRuleOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetTopicRuleInput";
export * from "../types/GetTopicRuleOutput";
export * from "../types/GetTopicRuleExceptionsUnion";

export class GetTopicRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTopicRuleInput,
      OutputTypesUnion,
      GetTopicRuleOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTopicRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTopicRuleInput,
    GetTopicRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTopicRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTopicRuleInput, GetTopicRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTopicRuleInput, GetTopicRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
