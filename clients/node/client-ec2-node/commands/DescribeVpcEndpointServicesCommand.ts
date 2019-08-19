import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeVpcEndpointServices } from "../model/operations/DescribeVpcEndpointServices";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcEndpointServicesInput } from "../types/DescribeVpcEndpointServicesInput";
import { DescribeVpcEndpointServicesOutput } from "../types/DescribeVpcEndpointServicesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcEndpointServicesInput";
export * from "../types/DescribeVpcEndpointServicesOutput";
export * from "../types/DescribeVpcEndpointServicesExceptionsUnion";

export class DescribeVpcEndpointServicesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcEndpointServicesInput,
      OutputTypesUnion,
      DescribeVpcEndpointServicesOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeVpcEndpointServices;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcEndpointServicesInput,
    DescribeVpcEndpointServicesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeVpcEndpointServicesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcEndpointServicesInput,
    DescribeVpcEndpointServicesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVpcEndpointServicesInput,
        DescribeVpcEndpointServicesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
