import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeBudgetPerformanceHistory } from "../model/operations/DescribeBudgetPerformanceHistory";
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
      _stream.Readable
    > {
  readonly model = DescribeBudgetPerformanceHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBudgetPerformanceHistoryInput,
    DescribeBudgetPerformanceHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBudgetPerformanceHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
