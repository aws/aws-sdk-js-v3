import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVirtualGateways } from "../model/operations/DescribeVirtualGateways";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVirtualGatewaysInput } from "../types/DescribeVirtualGatewaysInput";
import { DescribeVirtualGatewaysOutput } from "../types/DescribeVirtualGatewaysOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeVirtualGatewaysInput";
export * from "../types/DescribeVirtualGatewaysOutput";
export * from "../types/DescribeVirtualGatewaysExceptionsUnion";

export class DescribeVirtualGatewaysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVirtualGatewaysInput,
      OutputTypesUnion,
      DescribeVirtualGatewaysOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVirtualGateways;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVirtualGatewaysInput,
    DescribeVirtualGatewaysOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVirtualGatewaysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVirtualGatewaysInput,
    DescribeVirtualGatewaysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVirtualGatewaysInput, DescribeVirtualGatewaysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
