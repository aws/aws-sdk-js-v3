import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTransitGatewayVpcAttachments } from "../model/operations/DescribeTransitGatewayVpcAttachments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTransitGatewayVpcAttachmentsInput } from "../types/DescribeTransitGatewayVpcAttachmentsInput";
import { DescribeTransitGatewayVpcAttachmentsOutput } from "../types/DescribeTransitGatewayVpcAttachmentsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeTransitGatewayVpcAttachmentsInput";
export * from "../types/DescribeTransitGatewayVpcAttachmentsOutput";
export * from "../types/DescribeTransitGatewayVpcAttachmentsExceptionsUnion";

export class DescribeTransitGatewayVpcAttachmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTransitGatewayVpcAttachmentsInput,
      OutputTypesUnion,
      DescribeTransitGatewayVpcAttachmentsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTransitGatewayVpcAttachments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTransitGatewayVpcAttachmentsInput,
    DescribeTransitGatewayVpcAttachmentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTransitGatewayVpcAttachmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTransitGatewayVpcAttachmentsInput,
    DescribeTransitGatewayVpcAttachmentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTransitGatewayVpcAttachmentsInput,
        DescribeTransitGatewayVpcAttachmentsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
