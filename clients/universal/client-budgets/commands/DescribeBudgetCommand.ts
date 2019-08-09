import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBudget } from "../model/DescribeBudget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBudgetInput } from "../types/DescribeBudgetInput";
import { DescribeBudgetOutput } from "../types/DescribeBudgetOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/DescribeBudgetInput";
export * from "../types/DescribeBudgetOutput";
export * from "../types/DescribeBudgetExceptionsUnion";

export class DescribeBudgetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBudgetInput,
      OutputTypesUnion,
      DescribeBudgetOutput,
      BudgetsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeBudget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBudgetInput,
    DescribeBudgetOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeBudgetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeBudgetInput, DescribeBudgetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBudgetInput, DescribeBudgetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
