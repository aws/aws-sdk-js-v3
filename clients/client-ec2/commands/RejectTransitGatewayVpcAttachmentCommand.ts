import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RejectTransitGatewayVpcAttachmentRequest, RejectTransitGatewayVpcAttachmentResult } from "../models/models_4";
import {
  deserializeAws_ec2RejectTransitGatewayVpcAttachmentCommand,
  serializeAws_ec2RejectTransitGatewayVpcAttachmentCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type RejectTransitGatewayVpcAttachmentCommandInput = RejectTransitGatewayVpcAttachmentRequest;
export type RejectTransitGatewayVpcAttachmentCommandOutput = RejectTransitGatewayVpcAttachmentResult & __MetadataBearer;

/**
 * <p>Rejects a request to attach a VPC to a transit gateway.</p>
 *          <p>The VPC attachment must be in the <code>pendingAcceptance</code> state.
 *          Use <a>DescribeTransitGatewayVpcAttachments</a> to view your pending VPC attachment requests.
 *          Use <a>AcceptTransitGatewayVpcAttachment</a> to accept a VPC attachment request.</p>
 */
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

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RejectTransitGatewayVpcAttachmentCommandInput, RejectTransitGatewayVpcAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectTransitGatewayVpcAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectTransitGatewayVpcAttachmentResult.filterSensitiveLog,
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
    return serializeAws_ec2RejectTransitGatewayVpcAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectTransitGatewayVpcAttachmentCommandOutput> {
    return deserializeAws_ec2RejectTransitGatewayVpcAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
