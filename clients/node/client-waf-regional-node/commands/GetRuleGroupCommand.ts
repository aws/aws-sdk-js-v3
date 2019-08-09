import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRuleGroup } from "../model/GetRuleGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRuleGroupInput } from "../types/GetRuleGroupInput";
import { GetRuleGroupOutput } from "../types/GetRuleGroupOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetRuleGroupInput";
export * from "../types/GetRuleGroupOutput";
export * from "../types/GetRuleGroupExceptionsUnion";

export class GetRuleGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRuleGroupInput,
      OutputTypesUnion,
      GetRuleGroupOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRuleGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRuleGroupInput,
    GetRuleGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRuleGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRuleGroupInput, GetRuleGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRuleGroupInput, GetRuleGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
