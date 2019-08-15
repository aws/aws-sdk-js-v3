import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClientVpnEndpoints } from "../model/operations/DescribeClientVpnEndpoints";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClientVpnEndpointsInput } from "../types/DescribeClientVpnEndpointsInput";
import { DescribeClientVpnEndpointsOutput } from "../types/DescribeClientVpnEndpointsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeClientVpnEndpointsInput";
export * from "../types/DescribeClientVpnEndpointsOutput";
export * from "../types/DescribeClientVpnEndpointsExceptionsUnion";

export class DescribeClientVpnEndpointsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClientVpnEndpointsInput,
      OutputTypesUnion,
      DescribeClientVpnEndpointsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeClientVpnEndpoints;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClientVpnEndpointsInput,
    DescribeClientVpnEndpointsOutput,
    Blob
  >();

  constructor(readonly input: DescribeClientVpnEndpointsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClientVpnEndpointsInput,
    DescribeClientVpnEndpointsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClientVpnEndpointsInput,
        DescribeClientVpnEndpointsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
