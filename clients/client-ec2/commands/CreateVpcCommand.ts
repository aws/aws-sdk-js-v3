import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcRequest, CreateVpcResult } from "../models/models_1";
import { deserializeAws_ec2CreateVpcCommand, serializeAws_ec2CreateVpcCommand } from "../protocols/Aws_ec2";
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

export type CreateVpcCommandInput = CreateVpcRequest;
export type CreateVpcCommandOutput = CreateVpcResult & __MetadataBearer;

/**
 * <p>Creates a VPC with the specified IPv4 CIDR block. The smallest VPC you can create
 * 			uses a /28 netmask (16 IPv4 addresses), and the largest uses a /16 netmask (65,536 IPv4
 * 			addresses). For more information about how large to make your VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and
 * 				Subnets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>You can optionally request an IPv6 CIDR block for the VPC. You can request an Amazon-provided IPv6 CIDR block from Amazon's pool of IPv6 addresses, or an IPv6 CIDR block from an IPv6 address pool that you provisioned through bring your own IP addresses (<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-byoip.html">BYOIP</a>).</p>
 * 		       <p>By default, each instance you launch in the VPC has the default DHCP options, which
 * 			include only a default DNS server that we provide (AmazonProvidedDNS). For more
 * 			information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_DHCP_Options.html">DHCP Options Sets</a> in the <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 *          <p>You can specify the instance tenancy value for the VPC when you create it. You can't change
 *       this value for the VPC after you create it. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
 *           <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class CreateVpcCommand extends $Command<CreateVpcCommandInput, CreateVpcCommandOutput, EC2ClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpcCommandInput) {
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
  ): Handler<CreateVpcCommandInput, CreateVpcCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpcCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateVpcCommandOutput> {
    return deserializeAws_ec2CreateVpcCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
