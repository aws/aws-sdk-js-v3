import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDeliveryStream } from "../model/operations/DescribeDeliveryStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDeliveryStreamInput } from "../types/DescribeDeliveryStreamInput";
import { DescribeDeliveryStreamOutput } from "../types/DescribeDeliveryStreamOutput";
import { FirehoseResolvedConfiguration } from "../FirehoseConfiguration";
export * from "../types/DescribeDeliveryStreamInput";
export * from "../types/DescribeDeliveryStreamOutput";
export * from "../types/DescribeDeliveryStreamExceptionsUnion";

export class DescribeDeliveryStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDeliveryStreamInput,
      OutputTypesUnion,
      DescribeDeliveryStreamOutput,
      FirehoseResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDeliveryStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDeliveryStreamInput,
    DescribeDeliveryStreamOutput,
    Blob
  >();

  constructor(readonly input: DescribeDeliveryStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: FirehoseResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDeliveryStreamInput,
    DescribeDeliveryStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDeliveryStreamInput, DescribeDeliveryStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
