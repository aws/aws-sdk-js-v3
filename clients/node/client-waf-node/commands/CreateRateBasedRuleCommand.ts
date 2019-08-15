import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRateBasedRule } from "../model/operations/CreateRateBasedRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRateBasedRuleInput } from "../types/CreateRateBasedRuleInput";
import { CreateRateBasedRuleOutput } from "../types/CreateRateBasedRuleOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateRateBasedRuleInput";
export * from "../types/CreateRateBasedRuleOutput";
export * from "../types/CreateRateBasedRuleExceptionsUnion";

export class CreateRateBasedRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRateBasedRuleInput,
      OutputTypesUnion,
      CreateRateBasedRuleOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRateBasedRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRateBasedRuleInput,
    CreateRateBasedRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRateBasedRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRateBasedRuleInput,
    CreateRateBasedRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRateBasedRuleInput, CreateRateBasedRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
