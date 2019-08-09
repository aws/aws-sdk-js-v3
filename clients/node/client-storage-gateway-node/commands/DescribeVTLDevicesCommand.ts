import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVTLDevices } from "../model/DescribeVTLDevices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVTLDevicesInput } from "../types/DescribeVTLDevicesInput";
import { DescribeVTLDevicesOutput } from "../types/DescribeVTLDevicesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeVTLDevicesInput";
export * from "../types/DescribeVTLDevicesOutput";
export * from "../types/DescribeVTLDevicesExceptionsUnion";

export class DescribeVTLDevicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVTLDevicesInput,
      OutputTypesUnion,
      DescribeVTLDevicesOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVTLDevices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVTLDevicesInput,
    DescribeVTLDevicesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVTLDevicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVTLDevicesInput,
    DescribeVTLDevicesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVTLDevicesInput, DescribeVTLDevicesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
