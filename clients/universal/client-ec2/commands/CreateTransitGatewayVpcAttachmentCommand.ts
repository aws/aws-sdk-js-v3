import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateTransitGatewayVpcAttachment } from "../model/CreateTransitGatewayVpcAttachment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTransitGatewayVpcAttachmentInput } from "../types/CreateTransitGatewayVpcAttachmentInput";
import { CreateTransitGatewayVpcAttachmentOutput } from "../types/CreateTransitGatewayVpcAttachmentOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateTransitGatewayVpcAttachmentInput";
export * from "../types/CreateTransitGatewayVpcAttachmentOutput";
export * from "../types/CreateTransitGatewayVpcAttachmentExceptionsUnion";

export class CreateTransitGatewayVpcAttachmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTransitGatewayVpcAttachmentInput,
      OutputTypesUnion,
      CreateTransitGatewayVpcAttachmentOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateTransitGatewayVpcAttachment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTransitGatewayVpcAttachmentInput,
    CreateTransitGatewayVpcAttachmentOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateTransitGatewayVpcAttachmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTransitGatewayVpcAttachmentInput,
    CreateTransitGatewayVpcAttachmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateTransitGatewayVpcAttachmentInput,
        CreateTransitGatewayVpcAttachmentOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
