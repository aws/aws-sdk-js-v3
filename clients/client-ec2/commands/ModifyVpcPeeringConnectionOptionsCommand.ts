import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcPeeringConnectionOptionsRequest, ModifyVpcPeeringConnectionOptionsResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand,
  serializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand,
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

export type ModifyVpcPeeringConnectionOptionsCommandInput = ModifyVpcPeeringConnectionOptionsRequest;
export type ModifyVpcPeeringConnectionOptionsCommandOutput = ModifyVpcPeeringConnectionOptionsResult & __MetadataBearer;

/**
 * <p>Modifies the VPC peering connection options on one side of a VPC peering connection. You can do the following:</p>
 *          <ul>
 *             <li>
 *                <p>Enable/disable communication over the peering connection between an EC2-Classic instance that's linked to your VPC (using ClassicLink) and instances in the peer VPC.</p>
 *             </li>
 *             <li>
 *                <p>Enable/disable communication over the peering connection between instances in your VPC and an EC2-Classic instance that's linked to the peer VPC.</p>
 *             </li>
 *             <li>
 *                <p>Enable/disable the ability to resolve public DNS hostnames to private IP
 *                     addresses when queried from instances in the peer VPC.</p>
 *             </li>
 *          </ul>
 *          <p>If the peered VPCs are in the same AWS account, you can enable DNS resolution for queries
 *             from the local VPC. This ensures that queries from the local VPC resolve to private IP
 *             addresses in the peer VPC. This option is not available if the peered VPCs are in
 *             different AWS accounts or different Regions. For peered VPCs in different AWS accounts,
 *             each AWS account owner must initiate a separate request to modify the peering connection
 *             options. For inter-region peering connections, you must use the Region for the requester
 *             VPC to modify the requester VPC peering options and the Region for the accepter VPC to
 *             modify the accepter VPC peering options. To verify which VPCs are the accepter and the
 *             requester for a VPC peering connection, use the <a>DescribeVpcPeeringConnections</a> command.</p>
 */
export class ModifyVpcPeeringConnectionOptionsCommand extends $Command<
  ModifyVpcPeeringConnectionOptionsCommandInput,
  ModifyVpcPeeringConnectionOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyVpcPeeringConnectionOptionsCommandInput) {
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
  ): Handler<ModifyVpcPeeringConnectionOptionsCommandInput, ModifyVpcPeeringConnectionOptionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcPeeringConnectionOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyVpcPeeringConnectionOptionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyVpcPeeringConnectionOptionsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ModifyVpcPeeringConnectionOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcPeeringConnectionOptionsCommandOutput> {
    return deserializeAws_ec2ModifyVpcPeeringConnectionOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
