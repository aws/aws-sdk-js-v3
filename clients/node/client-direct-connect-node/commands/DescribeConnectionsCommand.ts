import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeConnections } from "../model/DescribeConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConnectionsInput } from "../types/DescribeConnectionsInput";
import { DescribeConnectionsOutput } from "../types/DescribeConnectionsOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeConnectionsInput";
export * from "../types/DescribeConnectionsOutput";
export * from "../types/DescribeConnectionsExceptionsUnion";

export class DescribeConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConnectionsInput,
      OutputTypesUnion,
      DescribeConnectionsOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConnectionsInput,
    DescribeConnectionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConnectionsInput,
    DescribeConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeConnectionsInput, DescribeConnectionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
