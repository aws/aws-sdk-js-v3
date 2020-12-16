import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateSubnetRequest, CreateSubnetResult } from "../models/models_1";
import { deserializeAws_ec2CreateSubnetCommand, serializeAws_ec2CreateSubnetCommand } from "../protocols/Aws_ec2";
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

export type CreateSubnetCommandInput = CreateSubnetRequest;
export type CreateSubnetCommandOutput = CreateSubnetResult & __MetadataBearer;

/**
 * <p>Creates a subnet in a specified VPC.</p>
 *         <p>You must specify an IPv4 CIDR block for the subnet. After you create a subnet, you
 *             can't change its CIDR block. The allowed block size is between a /16 netmask (65,536 IP
 *             addresses) and /28 netmask (16 IP addresses). The CIDR block must not overlap with the
 *             CIDR block of an existing subnet in the VPC.</p>
 *         <p>If you've associated an IPv6 CIDR block with your VPC, you can create a subnet with an
 *             IPv6 CIDR block that uses a /64 prefix length. </p>
 *         <important>
 *             <p>AWS reserves both the first four and the last IPv4 address in each subnet's CIDR
 *                 block. They're not available for use.</p>
 *         </important>
 *         <p>If you add more than one subnet to a VPC, they're set up in a star topology with a
 *             logical router in the middle.</p>
 *         <p>When you stop an instance in a subnet, it retains its private IPv4 address. It's
 *             therefore possible to have a subnet with no running instances (they're all stopped), but
 *             no remaining IP addresses available.</p>
 *         <p>For more information about subnets, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">Your VPC and Subnets</a> in the
 *                 <i>Amazon Virtual Private Cloud User Guide</i>.</p>
 */
export class CreateSubnetCommand extends $Command<
  CreateSubnetCommandInput,
  CreateSubnetCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSubnetCommandInput) {
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
  ): Handler<CreateSubnetCommandInput, CreateSubnetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateSubnetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSubnetRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSubnetResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSubnetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateSubnetCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSubnetCommandOutput> {
    return deserializeAws_ec2CreateSubnetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
