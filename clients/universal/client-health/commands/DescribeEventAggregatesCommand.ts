import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventAggregates } from "../model/DescribeEventAggregates";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventAggregatesInput } from "../types/DescribeEventAggregatesInput";
import { DescribeEventAggregatesOutput } from "../types/DescribeEventAggregatesOutput";
import { HealthResolvedConfiguration } from "../HealthConfiguration";
export * from "../types/DescribeEventAggregatesInput";
export * from "../types/DescribeEventAggregatesOutput";
export * from "../types/DescribeEventAggregatesExceptionsUnion";

export class DescribeEventAggregatesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventAggregatesInput,
      OutputTypesUnion,
      DescribeEventAggregatesOutput,
      HealthResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeEventAggregates;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventAggregatesInput,
    DescribeEventAggregatesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeEventAggregatesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: HealthResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventAggregatesInput,
    DescribeEventAggregatesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventAggregatesInput, DescribeEventAggregatesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
