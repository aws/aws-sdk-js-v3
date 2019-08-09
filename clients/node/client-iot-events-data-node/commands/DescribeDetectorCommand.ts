import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDetector } from "../model/DescribeDetector";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDetectorInput } from "../types/DescribeDetectorInput";
import { DescribeDetectorOutput } from "../types/DescribeDetectorOutput";
import { IoTEventsDataResolvedConfiguration } from "../IoTEventsDataConfiguration";
export * from "../types/DescribeDetectorInput";
export * from "../types/DescribeDetectorOutput";
export * from "../types/DescribeDetectorExceptionsUnion";

export class DescribeDetectorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDetectorInput,
      OutputTypesUnion,
      DescribeDetectorOutput,
      IoTEventsDataResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDetector;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDetectorInput,
    DescribeDetectorOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDetectorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTEventsDataResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeDetectorInput, DescribeDetectorOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDetectorInput, DescribeDetectorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
