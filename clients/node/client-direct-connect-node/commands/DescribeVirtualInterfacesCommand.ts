import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVirtualInterfaces } from "../model/DescribeVirtualInterfaces";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVirtualInterfacesInput } from "../types/DescribeVirtualInterfacesInput";
import { DescribeVirtualInterfacesOutput } from "../types/DescribeVirtualInterfacesOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeVirtualInterfacesInput";
export * from "../types/DescribeVirtualInterfacesOutput";
export * from "../types/DescribeVirtualInterfacesExceptionsUnion";

export class DescribeVirtualInterfacesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVirtualInterfacesInput,
      OutputTypesUnion,
      DescribeVirtualInterfacesOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVirtualInterfaces;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVirtualInterfacesInput,
    DescribeVirtualInterfacesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVirtualInterfacesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVirtualInterfacesInput,
    DescribeVirtualInterfacesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVirtualInterfacesInput, DescribeVirtualInterfacesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
