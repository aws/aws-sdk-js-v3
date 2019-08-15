import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVpnConnections } from "../model/operations/DescribeVpnConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpnConnectionsInput } from "../types/DescribeVpnConnectionsInput";
import { DescribeVpnConnectionsOutput } from "../types/DescribeVpnConnectionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpnConnectionsInput";
export * from "../types/DescribeVpnConnectionsOutput";
export * from "../types/DescribeVpnConnectionsExceptionsUnion";

export class DescribeVpnConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpnConnectionsInput,
      OutputTypesUnion,
      DescribeVpnConnectionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVpnConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpnConnectionsInput,
    DescribeVpnConnectionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVpnConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpnConnectionsInput,
    DescribeVpnConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVpnConnectionsInput, DescribeVpnConnectionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
