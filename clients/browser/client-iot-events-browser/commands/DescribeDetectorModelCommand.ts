import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDetectorModel } from "../model/operations/DescribeDetectorModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDetectorModelInput } from "../types/DescribeDetectorModelInput";
import { DescribeDetectorModelOutput } from "../types/DescribeDetectorModelOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/DescribeDetectorModelInput";
export * from "../types/DescribeDetectorModelOutput";
export * from "../types/DescribeDetectorModelExceptionsUnion";

export class DescribeDetectorModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDetectorModelInput,
      OutputTypesUnion,
      DescribeDetectorModelOutput,
      IoTEventsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDetectorModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDetectorModelInput,
    DescribeDetectorModelOutput,
    Blob
  >();

  constructor(readonly input: DescribeDetectorModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDetectorModelInput,
    DescribeDetectorModelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDetectorModelInput, DescribeDetectorModelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
