import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAggregateIdFormat } from "../model/DescribeAggregateIdFormat";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAggregateIdFormatInput } from "../types/DescribeAggregateIdFormatInput";
import { DescribeAggregateIdFormatOutput } from "../types/DescribeAggregateIdFormatOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeAggregateIdFormatInput";
export * from "../types/DescribeAggregateIdFormatOutput";
export * from "../types/DescribeAggregateIdFormatExceptionsUnion";

export class DescribeAggregateIdFormatCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAggregateIdFormatInput,
      OutputTypesUnion,
      DescribeAggregateIdFormatOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAggregateIdFormat;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAggregateIdFormatInput,
    DescribeAggregateIdFormatOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAggregateIdFormatInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAggregateIdFormatInput,
    DescribeAggregateIdFormatOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAggregateIdFormatInput, DescribeAggregateIdFormatOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
