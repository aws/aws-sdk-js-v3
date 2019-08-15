import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeHostedConnections } from "../model/operations/DescribeHostedConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHostedConnectionsInput } from "../types/DescribeHostedConnectionsInput";
import { DescribeHostedConnectionsOutput } from "../types/DescribeHostedConnectionsOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeHostedConnectionsInput";
export * from "../types/DescribeHostedConnectionsOutput";
export * from "../types/DescribeHostedConnectionsExceptionsUnion";

export class DescribeHostedConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHostedConnectionsInput,
      OutputTypesUnion,
      DescribeHostedConnectionsOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeHostedConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHostedConnectionsInput,
    DescribeHostedConnectionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeHostedConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeHostedConnectionsInput,
    DescribeHostedConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeHostedConnectionsInput, DescribeHostedConnectionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
