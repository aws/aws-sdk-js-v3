import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDataset } from "../model/DescribeDataset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDatasetInput } from "../types/DescribeDatasetInput";
import { DescribeDatasetOutput } from "../types/DescribeDatasetOutput";
import { IoTAnalyticsResolvedConfiguration } from "../IoTAnalyticsConfiguration";
export * from "../types/DescribeDatasetInput";
export * from "../types/DescribeDatasetOutput";
export * from "../types/DescribeDatasetExceptionsUnion";

export class DescribeDatasetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDatasetInput,
      OutputTypesUnion,
      DescribeDatasetOutput,
      IoTAnalyticsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDataset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDatasetInput,
    DescribeDatasetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDatasetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeDatasetInput, DescribeDatasetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDatasetInput, DescribeDatasetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
