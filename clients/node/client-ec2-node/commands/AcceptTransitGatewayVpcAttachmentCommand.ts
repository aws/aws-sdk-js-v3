import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AcceptTransitGatewayVpcAttachment } from "../model/operations/AcceptTransitGatewayVpcAttachment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptTransitGatewayVpcAttachmentInput } from "../types/AcceptTransitGatewayVpcAttachmentInput";
import { AcceptTransitGatewayVpcAttachmentOutput } from "../types/AcceptTransitGatewayVpcAttachmentOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AcceptTransitGatewayVpcAttachmentInput";
export * from "../types/AcceptTransitGatewayVpcAttachmentOutput";
export * from "../types/AcceptTransitGatewayVpcAttachmentExceptionsUnion";

export class AcceptTransitGatewayVpcAttachmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptTransitGatewayVpcAttachmentInput,
      OutputTypesUnion,
      AcceptTransitGatewayVpcAttachmentOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AcceptTransitGatewayVpcAttachment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptTransitGatewayVpcAttachmentInput,
    AcceptTransitGatewayVpcAttachmentOutput,
    _stream.Readable
  >();

  constructor(readonly input: AcceptTransitGatewayVpcAttachmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AcceptTransitGatewayVpcAttachmentInput,
    AcceptTransitGatewayVpcAttachmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AcceptTransitGatewayVpcAttachmentInput,
        AcceptTransitGatewayVpcAttachmentOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
