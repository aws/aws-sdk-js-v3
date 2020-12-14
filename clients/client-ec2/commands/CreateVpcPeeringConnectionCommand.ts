import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateVpcPeeringConnectionRequest, CreateVpcPeeringConnectionResult } from "../models/models_1";
import {
  deserializeAws_ec2CreateVpcPeeringConnectionCommand,
  serializeAws_ec2CreateVpcPeeringConnectionCommand,
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

export type CreateVpcPeeringConnectionCommandInput = CreateVpcPeeringConnectionRequest;
export type CreateVpcPeeringConnectionCommandOutput = CreateVpcPeeringConnectionResult & __MetadataBearer;

/**
 * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and
 * 			an accepter VPC with which to create the connection. The accepter VPC can belong to
 * 			another AWS account and can be in a different Region to the requester VPC. The requester
 * 			VPC and accepter VPC cannot have overlapping CIDR blocks.</p>
 *          <note>
 *             <p>Limitations and rules apply to a VPC peering connection. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">limitations</a> section in the <i>VPC Peering Guide</i>.</p>
 *          </note>
 *          <p>The owner of the accepter VPC must accept the peering request to activate the peering
 *             connection. The VPC peering connection request expires after 7 days, after which it
 *             cannot be accepted or rejected.</p>
 *          <p>If you create a VPC peering connection request between VPCs with overlapping CIDR
 *             blocks, the VPC peering connection has a status of <code>failed</code>.</p>
 */
export class CreateVpcPeeringConnectionCommand extends $Command<
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateVpcPeeringConnectionCommandInput) {
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
  ): Handler<CreateVpcPeeringConnectionCommandInput, CreateVpcPeeringConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateVpcPeeringConnectionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateVpcPeeringConnectionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2CreateVpcPeeringConnectionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcPeeringConnectionCommandOutput> {
    return deserializeAws_ec2CreateVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
