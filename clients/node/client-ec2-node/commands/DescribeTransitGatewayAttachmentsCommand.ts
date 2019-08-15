import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTransitGatewayAttachments } from "../model/operations/DescribeTransitGatewayAttachments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTransitGatewayAttachmentsInput } from "../types/DescribeTransitGatewayAttachmentsInput";
import { DescribeTransitGatewayAttachmentsOutput } from "../types/DescribeTransitGatewayAttachmentsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeTransitGatewayAttachmentsInput";
export * from "../types/DescribeTransitGatewayAttachmentsOutput";
export * from "../types/DescribeTransitGatewayAttachmentsExceptionsUnion";

export class DescribeTransitGatewayAttachmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTransitGatewayAttachmentsInput,
      OutputTypesUnion,
      DescribeTransitGatewayAttachmentsOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTransitGatewayAttachments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTransitGatewayAttachmentsInput,
    DescribeTransitGatewayAttachmentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTransitGatewayAttachmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTransitGatewayAttachmentsInput,
    DescribeTransitGatewayAttachmentsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTransitGatewayAttachmentsInput,
        DescribeTransitGatewayAttachmentsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
