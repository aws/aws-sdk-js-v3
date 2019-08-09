import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVpcEndpoints } from "../model/DescribeVpcEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcEndpointsInput } from "../types/DescribeVpcEndpointsInput";
import { DescribeVpcEndpointsOutput } from "../types/DescribeVpcEndpointsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcEndpointsInput";
export * from "../types/DescribeVpcEndpointsOutput";
export * from "../types/DescribeVpcEndpointsExceptionsUnion";

export class DescribeVpcEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcEndpointsInput,
      OutputTypesUnion,
      DescribeVpcEndpointsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVpcEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcEndpointsInput,
    DescribeVpcEndpointsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVpcEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcEndpointsInput,
    DescribeVpcEndpointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVpcEndpointsInput, DescribeVpcEndpointsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
