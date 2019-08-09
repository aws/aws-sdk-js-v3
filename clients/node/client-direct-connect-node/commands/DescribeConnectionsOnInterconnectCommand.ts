import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeConnectionsOnInterconnect } from "../model/DescribeConnectionsOnInterconnect";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConnectionsOnInterconnectInput } from "../types/DescribeConnectionsOnInterconnectInput";
import { DescribeConnectionsOnInterconnectOutput } from "../types/DescribeConnectionsOnInterconnectOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeConnectionsOnInterconnectInput";
export * from "../types/DescribeConnectionsOnInterconnectOutput";
export * from "../types/DescribeConnectionsOnInterconnectExceptionsUnion";

export class DescribeConnectionsOnInterconnectCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConnectionsOnInterconnectInput,
      OutputTypesUnion,
      DescribeConnectionsOnInterconnectOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeConnectionsOnInterconnect;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConnectionsOnInterconnectInput,
    DescribeConnectionsOnInterconnectOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeConnectionsOnInterconnectInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConnectionsOnInterconnectInput,
    DescribeConnectionsOnInterconnectOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeConnectionsOnInterconnectInput,
        DescribeConnectionsOnInterconnectOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
