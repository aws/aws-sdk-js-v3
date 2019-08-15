import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateBudget } from "../model/operations/CreateBudget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateBudgetInput } from "../types/CreateBudgetInput";
import { CreateBudgetOutput } from "../types/CreateBudgetOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/CreateBudgetInput";
export * from "../types/CreateBudgetOutput";
export * from "../types/CreateBudgetExceptionsUnion";

export class CreateBudgetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateBudgetInput,
      OutputTypesUnion,
      CreateBudgetOutput,
      BudgetsResolvedConfiguration,
      Blob
    > {
  readonly model = CreateBudget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateBudgetInput,
    CreateBudgetOutput,
    Blob
  >();

  constructor(readonly input: CreateBudgetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateBudgetInput, CreateBudgetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateBudgetInput, CreateBudgetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
