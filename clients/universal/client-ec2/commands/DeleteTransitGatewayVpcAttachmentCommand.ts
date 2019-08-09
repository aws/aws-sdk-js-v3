import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTransitGatewayVpcAttachment } from "../model/DeleteTransitGatewayVpcAttachment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTransitGatewayVpcAttachmentInput } from "../types/DeleteTransitGatewayVpcAttachmentInput";
import { DeleteTransitGatewayVpcAttachmentOutput } from "../types/DeleteTransitGatewayVpcAttachmentOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteTransitGatewayVpcAttachmentInput";
export * from "../types/DeleteTransitGatewayVpcAttachmentOutput";
export * from "../types/DeleteTransitGatewayVpcAttachmentExceptionsUnion";

export class DeleteTransitGatewayVpcAttachmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTransitGatewayVpcAttachmentInput,
      OutputTypesUnion,
      DeleteTransitGatewayVpcAttachmentOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteTransitGatewayVpcAttachment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTransitGatewayVpcAttachmentInput,
    DeleteTransitGatewayVpcAttachmentOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteTransitGatewayVpcAttachmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTransitGatewayVpcAttachmentInput,
    DeleteTransitGatewayVpcAttachmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteTransitGatewayVpcAttachmentInput,
        DeleteTransitGatewayVpcAttachmentOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
