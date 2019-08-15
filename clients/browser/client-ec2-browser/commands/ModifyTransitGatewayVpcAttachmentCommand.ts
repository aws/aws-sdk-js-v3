import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyTransitGatewayVpcAttachment } from "../model/operations/ModifyTransitGatewayVpcAttachment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyTransitGatewayVpcAttachmentInput } from "../types/ModifyTransitGatewayVpcAttachmentInput";
import { ModifyTransitGatewayVpcAttachmentOutput } from "../types/ModifyTransitGatewayVpcAttachmentOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyTransitGatewayVpcAttachmentInput";
export * from "../types/ModifyTransitGatewayVpcAttachmentOutput";
export * from "../types/ModifyTransitGatewayVpcAttachmentExceptionsUnion";

export class ModifyTransitGatewayVpcAttachmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyTransitGatewayVpcAttachmentInput,
      OutputTypesUnion,
      ModifyTransitGatewayVpcAttachmentOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyTransitGatewayVpcAttachment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyTransitGatewayVpcAttachmentInput,
    ModifyTransitGatewayVpcAttachmentOutput,
    Blob
  >();

  constructor(readonly input: ModifyTransitGatewayVpcAttachmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyTransitGatewayVpcAttachmentInput,
    ModifyTransitGatewayVpcAttachmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyTransitGatewayVpcAttachmentInput,
        ModifyTransitGatewayVpcAttachmentOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
