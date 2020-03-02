import {
  EC2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../EC2Client";
import {
  RejectTransitGatewayVpcAttachmentRequest,
  RejectTransitGatewayVpcAttachmentResult
} from "../models/index";
import {
  deserializeAws_ec2RejectTransitGatewayVpcAttachmentCommand,
  serializeAws_ec2RejectTransitGatewayVpcAttachmentCommand
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export type RejectTransitGatewayVpcAttachmentCommandInput = RejectTransitGatewayVpcAttachmentRequest;
export type RejectTransitGatewayVpcAttachmentCommandOutput = RejectTransitGatewayVpcAttachmentResult &
  __MetadataBearer;

export class RejectTransitGatewayVpcAttachmentCommand extends $Command<
  RejectTransitGatewayVpcAttachmentCommandInput,
  RejectTransitGatewayVpcAttachmentCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectTransitGatewayVpcAttachmentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    RejectTransitGatewayVpcAttachmentCommandInput,
    RejectTransitGatewayVpcAttachmentCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RejectTransitGatewayVpcAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RejectTransitGatewayVpcAttachmentCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectTransitGatewayVpcAttachmentCommandOutput> {
    return deserializeAws_ec2RejectTransitGatewayVpcAttachmentCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
