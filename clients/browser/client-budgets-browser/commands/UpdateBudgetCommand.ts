import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateBudget } from "../model/UpdateBudget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateBudgetInput } from "../types/UpdateBudgetInput";
import { UpdateBudgetOutput } from "../types/UpdateBudgetOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/UpdateBudgetInput";
export * from "../types/UpdateBudgetOutput";
export * from "../types/UpdateBudgetExceptionsUnion";

export class UpdateBudgetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateBudgetInput,
      OutputTypesUnion,
      UpdateBudgetOutput,
      BudgetsResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateBudget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateBudgetInput,
    UpdateBudgetOutput,
    Blob
  >();

  constructor(readonly input: UpdateBudgetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateBudgetInput, UpdateBudgetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateBudgetInput, UpdateBudgetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
