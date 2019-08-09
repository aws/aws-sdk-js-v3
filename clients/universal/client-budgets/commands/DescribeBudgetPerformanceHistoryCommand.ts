import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeBudgetPerformanceHistory } from "../model/DescribeBudgetPerformanceHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBudgetPerformanceHistoryInput } from "../types/DescribeBudgetPerformanceHistoryInput";
import { DescribeBudgetPerformanceHistoryOutput } from "../types/DescribeBudgetPerformanceHistoryOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/DescribeBudgetPerformanceHistoryInput";
export * from "../types/DescribeBudgetPerformanceHistoryOutput";
export * from "../types/DescribeBudgetPerformanceHistoryExceptionsUnion";

export class DescribeBudgetPerformanceHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBudgetPerformanceHistoryInput,
      OutputTypesUnion,
      DescribeBudgetPerformanceHistoryOutput,
      BudgetsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeBudgetPerformanceHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBudgetPerformanceHistoryInput,
    DescribeBudgetPerformanceHistoryOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeBudgetPerformanceHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeBudgetPerformanceHistoryInput,
    DescribeBudgetPerformanceHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeBudgetPerformanceHistoryInput,
        DescribeBudgetPerformanceHistoryOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
