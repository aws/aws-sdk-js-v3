import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyTransitGatewayVpcAttachmentRequest, ModifyTransitGatewayVpcAttachmentResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand,
  serializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand,
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

export type ModifyTransitGatewayVpcAttachmentCommandInput = ModifyTransitGatewayVpcAttachmentRequest;
export type ModifyTransitGatewayVpcAttachmentCommandOutput = ModifyTransitGatewayVpcAttachmentResult & __MetadataBearer;

/**
 * <p>Modifies the specified VPC attachment.</p>
 */
export class ModifyTransitGatewayVpcAttachmentCommand extends $Command<
  ModifyTransitGatewayVpcAttachmentCommandInput,
  ModifyTransitGatewayVpcAttachmentCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyTransitGatewayVpcAttachmentCommandInput) {
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
  ): Handler<ModifyTransitGatewayVpcAttachmentCommandInput, ModifyTransitGatewayVpcAttachmentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyTransitGatewayVpcAttachmentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyTransitGatewayVpcAttachmentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyTransitGatewayVpcAttachmentResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyTransitGatewayVpcAttachmentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyTransitGatewayVpcAttachmentCommandOutput> {
    return deserializeAws_ec2ModifyTransitGatewayVpcAttachmentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
