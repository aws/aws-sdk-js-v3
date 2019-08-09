import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVpcEndpointServiceConfigurations } from "../model/DescribeVpcEndpointServiceConfigurations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcEndpointServiceConfigurationsInput } from "../types/DescribeVpcEndpointServiceConfigurationsInput";
import { DescribeVpcEndpointServiceConfigurationsOutput } from "../types/DescribeVpcEndpointServiceConfigurationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcEndpointServiceConfigurationsInput";
export * from "../types/DescribeVpcEndpointServiceConfigurationsOutput";
export * from "../types/DescribeVpcEndpointServiceConfigurationsExceptionsUnion";

export class DescribeVpcEndpointServiceConfigurationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcEndpointServiceConfigurationsInput,
      OutputTypesUnion,
      DescribeVpcEndpointServiceConfigurationsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVpcEndpointServiceConfigurations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcEndpointServiceConfigurationsInput,
    DescribeVpcEndpointServiceConfigurationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVpcEndpointServiceConfigurationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcEndpointServiceConfigurationsInput,
    DescribeVpcEndpointServiceConfigurationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVpcEndpointServiceConfigurationsInput,
        DescribeVpcEndpointServiceConfigurationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
