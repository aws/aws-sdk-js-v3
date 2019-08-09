import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVpcEndpointServicePermissions } from "../model/DescribeVpcEndpointServicePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcEndpointServicePermissionsInput } from "../types/DescribeVpcEndpointServicePermissionsInput";
import { DescribeVpcEndpointServicePermissionsOutput } from "../types/DescribeVpcEndpointServicePermissionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcEndpointServicePermissionsInput";
export * from "../types/DescribeVpcEndpointServicePermissionsOutput";
export * from "../types/DescribeVpcEndpointServicePermissionsExceptionsUnion";

export class DescribeVpcEndpointServicePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcEndpointServicePermissionsInput,
      OutputTypesUnion,
      DescribeVpcEndpointServicePermissionsOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeVpcEndpointServicePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcEndpointServicePermissionsInput,
    DescribeVpcEndpointServicePermissionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeVpcEndpointServicePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcEndpointServicePermissionsInput,
    DescribeVpcEndpointServicePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVpcEndpointServicePermissionsInput,
        DescribeVpcEndpointServicePermissionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
