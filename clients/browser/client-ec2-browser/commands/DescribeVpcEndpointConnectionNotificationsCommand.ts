import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVpcEndpointConnectionNotifications } from "../model/DescribeVpcEndpointConnectionNotifications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVpcEndpointConnectionNotificationsInput } from "../types/DescribeVpcEndpointConnectionNotificationsInput";
import { DescribeVpcEndpointConnectionNotificationsOutput } from "../types/DescribeVpcEndpointConnectionNotificationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeVpcEndpointConnectionNotificationsInput";
export * from "../types/DescribeVpcEndpointConnectionNotificationsOutput";
export * from "../types/DescribeVpcEndpointConnectionNotificationsExceptionsUnion";

export class DescribeVpcEndpointConnectionNotificationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVpcEndpointConnectionNotificationsInput,
      OutputTypesUnion,
      DescribeVpcEndpointConnectionNotificationsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVpcEndpointConnectionNotifications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVpcEndpointConnectionNotificationsInput,
    DescribeVpcEndpointConnectionNotificationsOutput,
    Blob
  >();

  constructor(
    readonly input: DescribeVpcEndpointConnectionNotificationsInput
  ) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeVpcEndpointConnectionNotificationsInput,
    DescribeVpcEndpointConnectionNotificationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeVpcEndpointConnectionNotificationsInput,
        DescribeVpcEndpointConnectionNotificationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
