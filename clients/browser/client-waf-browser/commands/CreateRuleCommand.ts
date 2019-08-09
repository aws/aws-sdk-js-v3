import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRule } from "../model/CreateRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRuleInput } from "../types/CreateRuleInput";
import { CreateRuleOutput } from "../types/CreateRuleOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
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
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = CreateRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRuleInput,
    CreateRuleOutput,
    Blob
  >();

  constructor(readonly input: CreateRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
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
