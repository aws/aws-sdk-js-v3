import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVpcPeeringConnections } from "../model/operations/DescribeVpcPeeringConnections";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcPeeringConnectionsInput } from "../types/DescribeVpcPeeringConnectionsInput";
import { DescribeVpcPeeringConnectionsOutput } from "../types/DescribeVpcPeeringConnectionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcPeeringConnectionsInput";
export * from "../types/DescribeVpcPeeringConnectionsOutput";
export * from "../types/DescribeVpcPeeringConnectionsExceptionsUnion";

export class DescribeVpcPeeringConnectionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcPeeringConnectionsInput,
      OutputTypesUnion,
      DescribeVpcPeeringConnectionsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVpcPeeringConnections;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcPeeringConnectionsInput,
    DescribeVpcPeeringConnectionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVpcPeeringConnectionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcPeeringConnectionsInput,
    DescribeVpcPeeringConnectionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVpcPeeringConnectionsInput,
        DescribeVpcPeeringConnectionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
