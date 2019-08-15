import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeResize } from "../model/operations/DescribeResize";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeResizeInput } from "../types/DescribeResizeInput";
import { DescribeResizeOutput } from "../types/DescribeResizeOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeResizeInput";
export * from "../types/DescribeResizeOutput";
export * from "../types/DescribeResizeExceptionsUnion";

export class DescribeResizeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeResizeInput,
      OutputTypesUnion,
      DescribeResizeOutput,
      RedshiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeResize;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeResizeInput,
    DescribeResizeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeResizeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeResizeInput, DescribeResizeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeResizeInput, DescribeResizeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
