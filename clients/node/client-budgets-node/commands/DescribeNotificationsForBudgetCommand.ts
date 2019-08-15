import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeNotificationsForBudget } from "../model/operations/DescribeNotificationsForBudget";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNotificationsForBudgetInput } from "../types/DescribeNotificationsForBudgetInput";
import { DescribeNotificationsForBudgetOutput } from "../types/DescribeNotificationsForBudgetOutput";
import { BudgetsResolvedConfiguration } from "../BudgetsConfiguration";
export * from "../types/DescribeNotificationsForBudgetInput";
export * from "../types/DescribeNotificationsForBudgetOutput";
export * from "../types/DescribeNotificationsForBudgetExceptionsUnion";

export class DescribeNotificationsForBudgetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNotificationsForBudgetInput,
      OutputTypesUnion,
      DescribeNotificationsForBudgetOutput,
      BudgetsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeNotificationsForBudget;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNotificationsForBudgetInput,
    DescribeNotificationsForBudgetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeNotificationsForBudgetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BudgetsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNotificationsForBudgetInput,
    DescribeNotificationsForBudgetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeNotificationsForBudgetInput,
        DescribeNotificationsForBudgetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
