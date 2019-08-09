import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLoggingStatus } from "../model/DescribeLoggingStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLoggingStatusInput } from "../types/DescribeLoggingStatusInput";
import { DescribeLoggingStatusOutput } from "../types/DescribeLoggingStatusOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeLoggingStatusInput";
export * from "../types/DescribeLoggingStatusOutput";
export * from "../types/DescribeLoggingStatusExceptionsUnion";

export class DescribeLoggingStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLoggingStatusInput,
      OutputTypesUnion,
      DescribeLoggingStatusOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeLoggingStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLoggingStatusInput,
    DescribeLoggingStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeLoggingStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLoggingStatusInput,
    DescribeLoggingStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLoggingStatusInput, DescribeLoggingStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
