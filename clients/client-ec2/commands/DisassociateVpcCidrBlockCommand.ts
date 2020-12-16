import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateVpcCidrBlockRequest, DisassociateVpcCidrBlockResult } from "../models/models_4";
import {
  deserializeAws_ec2DisassociateVpcCidrBlockCommand,
  serializeAws_ec2DisassociateVpcCidrBlockCommand,
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

export type DisassociateVpcCidrBlockCommandInput = DisassociateVpcCidrBlockRequest;
export type DisassociateVpcCidrBlockCommandOutput = DisassociateVpcCidrBlockResult & __MetadataBearer;

/**
 * <p>Disassociates a CIDR block from a VPC. To disassociate the CIDR block, you must
 *             specify its association ID. You can get the association ID by using
 *                 <a>DescribeVpcs</a>. You must detach or delete all gateways and resources that
 *             are associated with the CIDR block before you can disassociate it. </p>
 * 		       <p>You cannot disassociate the CIDR block with which you originally created the VPC (the
 * 			primary CIDR block).</p>
 */
export class DisassociateVpcCidrBlockCommand extends $Command<
  DisassociateVpcCidrBlockCommandInput,
  DisassociateVpcCidrBlockCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateVpcCidrBlockCommandInput) {
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
  ): Handler<DisassociateVpcCidrBlockCommandInput, DisassociateVpcCidrBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DisassociateVpcCidrBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateVpcCidrBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DisassociateVpcCidrBlockResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DisassociateVpcCidrBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DisassociateVpcCidrBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DisassociateVpcCidrBlockCommandOutput> {
    return deserializeAws_ec2DisassociateVpcCidrBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
