import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRuleGroup } from "../model/CreateRuleGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRuleGroupInput } from "../types/CreateRuleGroupInput";
import { CreateRuleGroupOutput } from "../types/CreateRuleGroupOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/CreateRuleGroupInput";
export * from "../types/CreateRuleGroupOutput";
export * from "../types/CreateRuleGroupExceptionsUnion";

export class CreateRuleGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRuleGroupInput,
      OutputTypesUnion,
      CreateRuleGroupOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = CreateRuleGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRuleGroupInput,
    CreateRuleGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateRuleGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRuleGroupInput, CreateRuleGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRuleGroupInput, CreateRuleGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
