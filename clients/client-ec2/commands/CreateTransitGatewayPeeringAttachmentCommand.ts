import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  CreateTransitGatewayPeeringAttachmentRequest,
  CreateTransitGatewayPeeringAttachmentResult,
} from "../models/models_1";
import {
  deserializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand,
  serializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand,
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

export type CreateTransitGatewayPeeringAttachmentCommandInput = CreateTransitGatewayPeeringAttachmentRequest;
export type CreateTransitGatewayPeeringAttachmentCommandOutput = CreateTransitGatewayPeeringAttachmentResult &
  __MetadataBearer;

/**
 * <p>Requests a transit gateway peering attachment between the specified transit gateway
 *             (requester) and a peer transit gateway (accepter). The transit gateways must be in
 *             different Regions. The peer transit gateway can be in your account or a different AWS
 *             account. </p>
 *          <p>After you create the peering attachment, the owner of the accepter
 *             transit gateway must accept the attachment request.</p>
 */
export class CreateTransitGatewayPeeringAttachmentCommand extends $Command<
  CreateTransitGatewayPeeringAttachmentCommandInput,
  CreateTransitGatewayPeeringAttachmentCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitGatewayPeeringAttachmentCommandInput) {
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
  ): Handler<CreateTransitGatewayPeeringAttachmentCommandInput, CreateTransitGatewayPeeringAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayPeeringAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayPeeringAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayPeeringAttachmentResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayPeeringAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayPeeringAttachmentCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayPeeringAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
