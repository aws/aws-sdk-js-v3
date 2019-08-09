import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLoggingOptions } from "../model/DescribeLoggingOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoggingOptionsInput } from "../types/DescribeLoggingOptionsInput";
import { DescribeLoggingOptionsOutput } from "../types/DescribeLoggingOptionsOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/DescribeLoggingOptionsInput";
export * from "../types/DescribeLoggingOptionsOutput";
export * from "../types/DescribeLoggingOptionsExceptionsUnion";

export class DescribeLoggingOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoggingOptionsInput,
      OutputTypesUnion,
      DescribeLoggingOptionsOutput,
      IoTAnalyticsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeLoggingOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoggingOptionsInput,
    DescribeLoggingOptionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeLoggingOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLoggingOptionsInput,
    DescribeLoggingOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLoggingOptionsInput, DescribeLoggingOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
