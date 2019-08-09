import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeEventSource } from "../model/DescribeEventSource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEventSourceInput } from "../types/DescribeEventSourceInput";
import { DescribeEventSourceOutput } from "../types/DescribeEventSourceOutput";
import { EventBridgeResolvedConfiguration } from "../EventBridgeConfiguration";
export * from "../types/DescribeEventSourceInput";
export * from "../types/DescribeEventSourceOutput";
export * from "../types/DescribeEventSourceExceptionsUnion";

export class DescribeEventSourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEventSourceInput,
      OutputTypesUnion,
      DescribeEventSourceOutput,
      EventBridgeResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeEventSource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEventSourceInput,
    DescribeEventSourceOutput,
    Blob
  >();

  constructor(readonly input: DescribeEventSourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EventBridgeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEventSourceInput,
    DescribeEventSourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEventSourceInput, DescribeEventSourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
