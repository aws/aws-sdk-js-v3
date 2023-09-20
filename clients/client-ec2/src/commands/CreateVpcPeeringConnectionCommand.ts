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
import { CreateVpcPeeringConnectionRequest, CreateVpcPeeringConnectionResult } from "../models/models_2";
import { de_CreateVpcPeeringConnectionCommand, se_CreateVpcPeeringConnectionCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateVpcPeeringConnectionCommand}.
 */
export interface CreateVpcPeeringConnectionCommandInput extends CreateVpcPeeringConnectionRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpcPeeringConnectionCommand}.
 */
export interface CreateVpcPeeringConnectionCommandOutput extends CreateVpcPeeringConnectionResult, __MetadataBearer {}

/**
 * @public
 * <p>Requests a VPC peering connection between two VPCs: a requester VPC that you own and
 * 		  an accepter VPC with which to create the connection. The accepter VPC can belong to
 * 		  another Amazon Web Services account and can be in a different Region to the requester VPC.
 *           The requester VPC and accepter VPC cannot have overlapping CIDR blocks.</p>
 *          <note>
 *             <p>Limitations and rules apply to a VPC peering connection. For more information, see
 *           the <a href="https://docs.aws.amazon.com/vpc/latest/peering/vpc-peering-basics.html#vpc-peering-limitations">limitations</a> section in the <i>VPC Peering Guide</i>.</p>
 *          </note>
 *          <p>The owner of the accepter VPC must accept the peering request to activate the peering
 *             connection. The VPC peering connection request expires after 7 days, after which it
 *             cannot be accepted or rejected.</p>
 *          <p>If you create a VPC peering connection request between VPCs with overlapping CIDR
 *             blocks, the VPC peering connection has a status of <code>failed</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpcPeeringConnectionCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpcPeeringConnectionCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpcPeeringConnectionRequest
 *   DryRun: true || false,
 *   PeerOwnerId: "STRING_VALUE",
 *   PeerVpcId: "STRING_VALUE",
 *   VpcId: "STRING_VALUE", // required
 *   PeerRegion: "STRING_VALUE",
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateVpcPeeringConnectionCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpcPeeringConnectionResult
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
 * @param CreateVpcPeeringConnectionCommandInput - {@link CreateVpcPeeringConnectionCommandInput}
 * @returns {@link CreateVpcPeeringConnectionCommandOutput}
 * @see {@link CreateVpcPeeringConnectionCommandInput} for command's `input` shape.
 * @see {@link CreateVpcPeeringConnectionCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 */
export class CreateVpcPeeringConnectionCommand extends $Command<
  CreateVpcPeeringConnectionCommandInput,
  CreateVpcPeeringConnectionCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateVpcPeeringConnectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "CreateVpcPeeringConnectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonEC2",
        operation: "CreateVpcPeeringConnection",
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
  private serialize(input: CreateVpcPeeringConnectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateVpcPeeringConnectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateVpcPeeringConnectionCommandOutput> {
    return de_CreateVpcPeeringConnectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
