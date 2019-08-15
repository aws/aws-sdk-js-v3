import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSpotPriceHistory } from "../model/operations/DescribeSpotPriceHistory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSpotPriceHistoryInput } from "../types/DescribeSpotPriceHistoryInput";
import { DescribeSpotPriceHistoryOutput } from "../types/DescribeSpotPriceHistoryOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSpotPriceHistoryInput";
export * from "../types/DescribeSpotPriceHistoryOutput";
export * from "../types/DescribeSpotPriceHistoryExceptionsUnion";

export class DescribeSpotPriceHistoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSpotPriceHistoryInput,
      OutputTypesUnion,
      DescribeSpotPriceHistoryOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSpotPriceHistory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSpotPriceHistoryInput,
    DescribeSpotPriceHistoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSpotPriceHistoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSpotPriceHistoryInput,
    DescribeSpotPriceHistoryOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSpotPriceHistoryInput, DescribeSpotPriceHistoryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
