import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeBudget } from "../model/operations/DescribeBudget";
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
      _stream.Readable
    > {
  readonly model = DescribeBudget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBudgetInput,
    DescribeBudgetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBudgetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
