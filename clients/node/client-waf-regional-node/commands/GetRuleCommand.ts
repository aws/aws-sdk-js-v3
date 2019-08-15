import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRule } from "../model/operations/GetRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRuleInput } from "../types/GetRuleInput";
import { GetRuleOutput } from "../types/GetRuleOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetRuleInput";
export * from "../types/GetRuleOutput";
export * from "../types/GetRuleExceptionsUnion";

export class GetRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRuleInput,
      OutputTypesUnion,
      GetRuleOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRuleInput,
    GetRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRuleInput, GetRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRuleInput, GetRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
