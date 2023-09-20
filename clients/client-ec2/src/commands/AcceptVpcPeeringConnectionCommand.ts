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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AcceptVpcPeeringConnectionRequest, AcceptVpcPeeringConnectionResult } from "../models/models_0";
import { de_AcceptVpcPeeringConnectionCommand, se_AcceptVpcPeeringConnectionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AcceptVpcPeeringConnectionCommand}.
 */
export interface AcceptVpcPeeringConnectionCommandInput extends AcceptVpcPeeringConnectionRequest {}
/**
 * @public
 *
 * The output of {@link AcceptVpcPeeringConnectionCommand}.
 */
export interface AcceptVpcPeeringConnectionCommandOutput extends AcceptVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * @public
 * <p>Accept a VPC peering connection request. To accept a request, the VPC peering connection must
 *       be in the <code>pending-acceptance</code> state, and you must be the owner of the peer VPC.
 *       Use <a>DescribeVpcPeeringConnections</a> to view your outstanding VPC
 *       peering connection requests.</p>
 *          <p>For an inter-Region VPC peering connection request, you must accept the VPC peering
 *       connection in the Region of the accepter VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, AcceptVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, AcceptVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // AcceptVpcPeeringConnectionRequest
 *   DryRun: true || false,
 *   VpcPeeringConnectionId: "STRING_VALUE", // required
 * };
 * const command = new AcceptVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // AcceptVpcPeeringConnectionResult
 * //   VpcPeeringConnection: { // VpcPeeringConnection
 * //     AccepterVpcInfo: { // VpcPeeringConnectionVpcInfo
 * //       CidrBlock: "STRING_VALUE",
 * //       Ipv6CidrBlockSet: [ // Ipv6CidrBlockSet
 * //         { // Ipv6CidrBlock
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CidrBlockSet: [ // CidrBlockSet
 * //         { // CidrBlock
 * //           CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       PeeringOptions: { // VpcPeeringConnectionOptionsDescription
 * //         AllowDnsResolutionFromRemoteVpc: true || false,
 * //         AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //         AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //       },
 * //       VpcId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     ExpirationTime: new Date("TIMESTAMP"),
 * //     RequesterVpcInfo: {
 * //       CidrBlock: "STRING_VALUE",
 * //       Ipv6CidrBlockSet: [
 * //         {
 * //           Ipv6CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CidrBlockSet: [
 * //         {
 * //           CidrBlock: "STRING_VALUE",
 * //         },
 * //       ],
 * //       OwnerId: "STRING_VALUE",
 * //       PeeringOptions: {
 * //         AllowDnsResolutionFromRemoteVpc: true || false,
 * //         AllowEgressFromLocalClassicLinkToRemoteVpc: true || false,
 * //         AllowEgressFromLocalVpcToRemoteClassicLink: true || false,
 * //       },
 * //       VpcId: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //     },
 * //     Status: { // VpcPeeringConnectionStateReason
 * //       Code: "initiating-request" || "pending-acceptance" || "active" || "deleted" || "rejected" || "failed" || "expired" || "provisioning" || "deleting",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcPeeringConnectionId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param AcceptVpcPeeringConnectionCommandInput - {@link AcceptVpcPeeringConnectionCommandInput}
 * @returns {@link AcceptVpcPeeringConnectionCommandOutput}
 * @see {@link AcceptVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link AcceptVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class AcceptVpcPeeringConnectionCommand extends $Command<
  AcceptVpcPeeringConnectionCommandInput,
  AcceptVpcPeeringConnectionCommandOutput,
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
  constructor(readonly input: AcceptVpcPeeringConnectionCommandInput) {
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
  ): Handler<AcceptVpcPeeringConnectionCommandInput, AcceptVpcPeeringConnectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AcceptVpcPeeringConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "AcceptVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "AcceptVpcPeeringConnection",
      },
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
  private serialize(input: AcceptVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AcceptVpcPeeringConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptVpcPeeringConnectionCommandOutput> {
    return de_AcceptVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
