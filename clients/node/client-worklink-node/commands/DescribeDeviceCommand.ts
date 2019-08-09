import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDevice } from "../model/DescribeDevice";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDeviceInput } from "../types/DescribeDeviceInput";
import { DescribeDeviceOutput } from "../types/DescribeDeviceOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DescribeDeviceInput";
export * from "../types/DescribeDeviceOutput";
export * from "../types/DescribeDeviceExceptionsUnion";

export class DescribeDeviceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDeviceInput,
      OutputTypesUnion,
      DescribeDeviceOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDevice;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDeviceInput,
    DescribeDeviceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDeviceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeDeviceInput, DescribeDeviceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDeviceInput, DescribeDeviceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
