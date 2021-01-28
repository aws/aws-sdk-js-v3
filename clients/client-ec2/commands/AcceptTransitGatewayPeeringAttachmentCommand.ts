import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  AcceptTransitGatewayPeeringAttachmentRequest,
  AcceptTransitGatewayPeeringAttachmentResult,
} from "../models/models_0";
import {
  deserializeAws_ec2AcceptTransitGatewayPeeringAttachmentCommand,
  serializeAws_ec2AcceptTransitGatewayPeeringAttachmentCommand,
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

export type AcceptTransitGatewayPeeringAttachmentCommandInput = AcceptTransitGatewayPeeringAttachmentRequest;
export type AcceptTransitGatewayPeeringAttachmentCommandOutput = AcceptTransitGatewayPeeringAttachmentResult &
  __MetadataBearer;

/**
 * <p>Accepts a transit gateway peering attachment request. The peering attachment must be
 *             in the <code>pendingAcceptance</code> state.</p>
 */
export class AcceptTransitGatewayPeeringAttachmentCommand extends $Command<
  AcceptTransitGatewayPeeringAttachmentCommandInput,
  AcceptTransitGatewayPeeringAttachmentCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptTransitGatewayPeeringAttachmentCommandInput) {
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
  ): Handler<AcceptTransitGatewayPeeringAttachmentCommandInput, AcceptTransitGatewayPeeringAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AcceptTransitGatewayPeeringAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptTransitGatewayPeeringAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AcceptTransitGatewayPeeringAttachmentResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AcceptTransitGatewayPeeringAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2AcceptTransitGatewayPeeringAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptTransitGatewayPeeringAttachmentCommandOutput> {
    return deserializeAws_ec2AcceptTransitGatewayPeeringAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
