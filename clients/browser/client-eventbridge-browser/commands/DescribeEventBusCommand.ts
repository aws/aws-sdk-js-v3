import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventBus } from "../model/DescribeEventBus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventBusInput } from "../types/DescribeEventBusInput";
import { DescribeEventBusOutput } from "../types/DescribeEventBusOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/DescribeEventBusInput";
export * from "../types/DescribeEventBusOutput";
export * from "../types/DescribeEventBusExceptionsUnion";

export class DescribeEventBusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventBusInput,
      OutputTypesUnion,
      DescribeEventBusOutput,
      EventBridgeResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEventBus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventBusInput,
    DescribeEventBusOutput,
    Blob
  >();

  constructor(readonly input: DescribeEventBusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeEventBusInput, DescribeEventBusOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventBusInput, DescribeEventBusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
