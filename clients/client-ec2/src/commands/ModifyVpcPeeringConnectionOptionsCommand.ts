// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcPeeringConnectionOptionsRequest, ModifyVpcPeeringConnectionOptionsResult } from "../models/models_6";
import {
  de_ModifyVpcPeeringConnectionOptionsCommand,
  se_ModifyVpcPeeringConnectionOptionsCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcPeeringConnectionOptionsCommand}.
 */
export interface ModifyVpcPeeringConnectionOptionsCommandInput extends ModifyVpcPeeringConnectionOptionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcPeeringConnectionOptionsCommand}.
 */
export interface ModifyVpcPeeringConnectionOptionsCommandOutput
  extends ModifyVpcPeeringConnectionOptionsResult,
    __MetadataBearer {}

/**
 * @public
 * <note>
 *             <p>We are retiring EC2-Classic. We recommend that you migrate from EC2-Classic to a VPC. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-migrate.html">Migrate from EC2-Classic to a VPC</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *          </note>
 *          <p>Modifies the VPC peering connection options on one side of a VPC peering connection. You can do the following:</p>
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
 *          <p>If the peered VPCs are in the same Amazon Web Services account, you can enable DNS
 *             resolution for queries from the local VPC. This ensures that queries from the local VPC
 *             resolve to private IP addresses in the peer VPC. This option is not available if the
 *             peered VPCs are in different Amazon Web Services accounts or different Regions. For
 *             peered VPCs in different Amazon Web Services accounts, each Amazon Web Services account
 *             owner must initiate a separate request to modify the peering connection options. For
 *             inter-region peering connections, you must use the Region for the requester VPC to
 *             modify the requester VPC peering options and the Region for the accepter VPC to modify
 *             the accepter VPC peering options. To verify which VPCs are the accepter and the
 *             requester for a VPC peering connection, use the <a>DescribeVpcPeeringConnections</a> command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcPeeringConnectionOptionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcPeeringConnectionOptionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcPeeringConnectionOptionsRequest
 *   AccepterPeeringConnectionOptions: { // PeeringConnectionOptionsRequest
 *     AllowDnsResolutionFromRemoteVpc: true || false,
 *     AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 *     AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 *   },
 *   DryRun: true || false,
 *   RequesterPeeringConnectionOptions: {
 *     AllowDnsResolutionFromRemoteVpc: true || false,
 *     AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 *     AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 *   },
 *   VpcPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new ModifyVpcPeeringConnectionOptionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcPeeringConnectionOptionsResult
 * //   AccepterPeeringConnectionOptions: { // PeeringConnectionOptions
 * //     AllowDnsResolutionFromRemoteVpc: true || false,
 * //     AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //     AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //   },
 * //   RequesterPeeringConnectionOptions: {
 * //     AllowDnsResolutionFromRemoteVpc: true || false,
 * //     AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //     AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyVpcPeeringConnectionOptionsCommandInput - {@link ModifyVpcPeeringConnectionOptionsCommandInput}
 * @returns {@link ModifyVpcPeeringConnectionOptionsCommandOutput}
 * @see {@link ModifyVpcPeeringConnectionOptionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcPeeringConnectionOptionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class ModifyVpcPeeringConnectionOptionsCommand extends $Command<
  ModifyVpcPeeringConnectionOptionsCommandInput,
  ModifyVpcPeeringConnectionOptionsCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ModifyVpcPeeringConnectionOptionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyVpcPeeringConnectionOptionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: ModifyVpcPeeringConnectionOptionsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_ModifyVpcPeeringConnectionOptionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyVpcPeeringConnectionOptionsCommandOutput> {
    return de_ModifyVpcPeeringConnectionOptionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
