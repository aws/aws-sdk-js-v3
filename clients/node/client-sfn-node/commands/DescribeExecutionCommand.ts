import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeExecution } from "../model/DescribeExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeExecutionInput } from "../types/DescribeExecutionInput";
import { DescribeExecutionOutput } from "../types/DescribeExecutionOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/DescribeExecutionInput";
export * from "../types/DescribeExecutionOutput";
export * from "../types/DescribeExecutionExceptionsUnion";

export class DescribeExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeExecutionInput,
      OutputTypesUnion,
      DescribeExecutionOutput,
      SFNResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeExecutionInput,
    DescribeExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeExecutionInput, DescribeExecutionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeExecutionInput, DescribeExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
