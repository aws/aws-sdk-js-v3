import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteBudget } from "../model/DeleteBudget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteBudgetInput } from "../types/DeleteBudgetInput";
import { DeleteBudgetOutput } from "../types/DeleteBudgetOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/DeleteBudgetInput";
export * from "../types/DeleteBudgetOutput";
export * from "../types/DeleteBudgetExceptionsUnion";

export class DeleteBudgetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteBudgetInput,
      OutputTypesUnion,
      DeleteBudgetOutput,
      BudgetsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteBudget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteBudgetInput,
    DeleteBudgetOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteBudgetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteBudgetInput, DeleteBudgetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteBudgetInput, DeleteBudgetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
