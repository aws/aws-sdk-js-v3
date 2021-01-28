import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateVpcCidrBlockRequest, AssociateVpcCidrBlockResult } from "../models/models_0";
import {
  deserializeAws_ec2AssociateVpcCidrBlockCommand,
  serializeAws_ec2AssociateVpcCidrBlockCommand,
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

export type AssociateVpcCidrBlockCommandInput = AssociateVpcCidrBlockRequest;
export type AssociateVpcCidrBlockCommandOutput = AssociateVpcCidrBlockResult & __MetadataBearer;

/**
 * <p>Associates a CIDR block with your VPC. You can associate a secondary IPv4 CIDR block,
 *             an Amazon-provided IPv6 CIDR block, or an IPv6 CIDR block from an IPv6 address pool that
 *             you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>). The IPv6 CIDR block size is fixed
 *             at /56.</p>
 *         <p>You must specify one of the following in the request: an IPv4 CIDR block, an IPv6
 *             pool, or an Amazon-provided IPv6 CIDR block.</p>
 *         <p>For more information about associating CIDR blocks with your VPC and applicable
 *             restrictions, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html#VPC_Sizing">VPC and Subnet Sizing</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class AssociateVpcCidrBlockCommand extends $Command<
  AssociateVpcCidrBlockCommandInput,
  AssociateVpcCidrBlockCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateVpcCidrBlockCommandInput) {
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
  ): Handler<AssociateVpcCidrBlockCommandInput, AssociateVpcCidrBlockCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AssociateVpcCidrBlockCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateVpcCidrBlockRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateVpcCidrBlockResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateVpcCidrBlockCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2AssociateVpcCidrBlockCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateVpcCidrBlockCommandOutput> {
    return deserializeAws_ec2AssociateVpcCidrBlockCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
