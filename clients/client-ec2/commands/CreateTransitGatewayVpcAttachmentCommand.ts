import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateTransitGatewayVpcAttachmentRequest, CreateTransitGatewayVpcAttachmentResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateTransitGatewayVpcAttachmentCommand,
  serializeAws_ec2CreateTransitGatewayVpcAttachmentCommand,
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

export type CreateTransitGatewayVpcAttachmentCommandInput = CreateTransitGatewayVpcAttachmentRequest;
export type CreateTransitGatewayVpcAttachmentCommandOutput = CreateTransitGatewayVpcAttachmentResult & __MetadataBearer;

/**
 * <p>Attaches the specified VPC to the specified transit gateway.</p>
 *          <p>If you attach a VPC with a CIDR range that overlaps the CIDR range of a VPC that is already attached,
 *          the new VPC CIDR range is not propagated to the default propagation route table.</p>
 *          <p>To send VPC traffic to an attached transit gateway, add a route to the VPC route table using <a>CreateRoute</a>.</p>
 */
export class CreateTransitGatewayVpcAttachmentCommand extends $Command<
  CreateTransitGatewayVpcAttachmentCommandInput,
  CreateTransitGatewayVpcAttachmentCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTransitGatewayVpcAttachmentCommandInput) {
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
  ): Handler<CreateTransitGatewayVpcAttachmentCommandInput, CreateTransitGatewayVpcAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateTransitGatewayVpcAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTransitGatewayVpcAttachmentResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateTransitGatewayVpcAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2CreateTransitGatewayVpcAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateTransitGatewayVpcAttachmentCommandOutput> {
    return deserializeAws_ec2CreateTransitGatewayVpcAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
