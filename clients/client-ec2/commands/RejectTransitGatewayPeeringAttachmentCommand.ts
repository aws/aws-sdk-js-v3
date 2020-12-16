import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  RejectTransitGatewayPeeringAttachmentRequest,
  RejectTransitGatewayPeeringAttachmentResult,
} from "../models/models_4";
import {
  deserializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand,
  serializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand,
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

export type RejectTransitGatewayPeeringAttachmentCommandInput = RejectTransitGatewayPeeringAttachmentRequest;
export type RejectTransitGatewayPeeringAttachmentCommandOutput = RejectTransitGatewayPeeringAttachmentResult &
  __MetadataBearer;

/**
 * <p>Rejects a transit gateway peering attachment request.</p>
 */
export class RejectTransitGatewayPeeringAttachmentCommand extends $Command<
  RejectTransitGatewayPeeringAttachmentCommandInput,
  RejectTransitGatewayPeeringAttachmentCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RejectTransitGatewayPeeringAttachmentCommandInput) {
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
  ): Handler<RejectTransitGatewayPeeringAttachmentCommandInput, RejectTransitGatewayPeeringAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "RejectTransitGatewayPeeringAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RejectTransitGatewayPeeringAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RejectTransitGatewayPeeringAttachmentResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RejectTransitGatewayPeeringAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RejectTransitGatewayPeeringAttachmentCommandOutput> {
    return deserializeAws_ec2RejectTransitGatewayPeeringAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
