import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeBudgets } from "../model/DescribeBudgets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeBudgetsInput } from "../types/DescribeBudgetsInput";
import { DescribeBudgetsOutput } from "../types/DescribeBudgetsOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/DescribeBudgetsInput";
export * from "../types/DescribeBudgetsOutput";
export * from "../types/DescribeBudgetsExceptionsUnion";

export class DescribeBudgetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeBudgetsInput,
      OutputTypesUnion,
      DescribeBudgetsOutput,
      BudgetsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeBudgets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeBudgetsInput,
    DescribeBudgetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeBudgetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeBudgetsInput, DescribeBudgetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeBudgetsInput, DescribeBudgetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
