import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { EnableRule } from "../model/operations/EnableRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableRuleInput } from "../types/EnableRuleInput";
import { EnableRuleOutput } from "../types/EnableRuleOutput";
import { CloudWatchEventsResolvedConfiguration } from "../CloudWatchEventsConfiguration";
export * from "../types/EnableRuleInput";
export * from "../types/EnableRuleOutput";
export * from "../types/EnableRuleExceptionsUnion";

export class EnableRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableRuleInput,
      OutputTypesUnion,
      EnableRuleOutput,
      CloudWatchEventsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = EnableRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableRuleInput,
    EnableRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: EnableRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudWatchEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableRuleInput, EnableRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableRuleInput, EnableRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
