import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRule } from "../model/CreateRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRuleInput } from "../types/CreateRuleInput";
import { CreateRuleOutput } from "../types/CreateRuleOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/CreateRuleInput";
export * from "../types/CreateRuleOutput";
export * from "../types/CreateRuleExceptionsUnion";

export class CreateRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRuleInput,
      OutputTypesUnion,
      CreateRuleOutput,
      WAFRegionalResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRuleInput,
    CreateRuleOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRuleInput, CreateRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRuleInput, CreateRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
