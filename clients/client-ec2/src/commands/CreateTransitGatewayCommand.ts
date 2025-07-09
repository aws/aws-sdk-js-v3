// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTransitGatewayRequest, CreateTransitGatewayResult } from "../models/models_2";
import { de_CreateTransitGatewayCommand, se_CreateTransitGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTransitGatewayCommand}.
 */
export interface CreateTransitGatewayCommandInput extends CreateTransitGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransitGatewayCommand}.
 */
export interface CreateTransitGatewayCommandOutput extends CreateTransitGatewayResult, __MetadataBearer {}

/**
 * <p>Creates a transit gateway.</p>
 *          <p>You can use a transit gateway to interconnect your virtual private clouds (VPC) and on-premises networks.
 *           After the transit gateway enters the <code>available</code> state, you can attach your VPCs and VPN
 *           connections to the transit gateway.</p>
 *          <p>To attach your VPCs, use <a>CreateTransitGatewayVpcAttachment</a>.</p>
 *          <p>To attach a VPN connection, use <a>CreateCustomerGateway</a> to create a customer
 *          gateway and specify the ID of the customer gateway and the ID of the transit gateway in a call to
 *          <a>CreateVpnConnection</a>.</p>
 *          <p>When you create a transit gateway, we create a default transit gateway route table and use it as the default association route table
 *          and the default propagation route table. You can use <a>CreateTransitGatewayRouteTable</a> to create
 *          additional transit gateway route tables. If you disable automatic route propagation, we do not create a default transit gateway route table.
 *          You can use <a>EnableTransitGatewayRouteTablePropagation</a> to propagate routes from a resource
 *          attachment to a transit gateway route table. If you disable automatic associations, you can use <a>AssociateTransitGatewayRouteTable</a> to associate a resource attachment with a transit gateway route table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTransitGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTransitGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateTransitGatewayRequest
 *   Description: "STRING_VALUE",
 *   Options: { // TransitGatewayRequestOptions
 *     AmazonSideAsn: Number("long"),
 *     AutoAcceptSharedAttachments: "enable" || "disable",
 *     DefaultRouteTableAssociation: "enable" || "disable",
 *     DefaultRouteTablePropagation: "enable" || "disable",
 *     VpnEcmpSupport: "enable" || "disable",
 *     DnsSupport: "enable" || "disable",
 *     SecurityGroupReferencingSupport: "enable" || "disable",
 *     MulticastSupport: "enable" || "disable",
 *     TransitGatewayCidrBlocks: [ // TransitGatewayCidrBlockStringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task",
 *       Tags: [ // TagList
 *         { // Tag
 *           Key: "STRING_VALUE",
 *           Value: "STRING_VALUE",
 *         },
 *       ],
 *     },
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new CreateTransitGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransitGatewayResult
 * //   TransitGateway: { // TransitGateway
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayArn: "STRING_VALUE",
 * //     State: "pending" || "available" || "modifying" || "deleting" || "deleted",
 * //     OwnerId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Options: { // TransitGatewayOptions
 * //       AmazonSideAsn: Number("long"),
 * //       TransitGatewayCidrBlocks: [ // ValueStringList
 * //         "STRING_VALUE",
 * //       ],
 * //       AutoAcceptSharedAttachments: "enable" || "disable",
 * //       DefaultRouteTableAssociation: "enable" || "disable",
 * //       AssociationDefaultRouteTableId: "STRING_VALUE",
 * //       DefaultRouteTablePropagation: "enable" || "disable",
 * //       PropagationDefaultRouteTableId: "STRING_VALUE",
 * //       VpnEcmpSupport: "enable" || "disable",
 * //       DnsSupport: "enable" || "disable",
 * //       SecurityGroupReferencingSupport: "enable" || "disable",
 * //       MulticastSupport: "enable" || "disable",
 * //     },
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateTransitGatewayCommandInput - {@link CreateTransitGatewayCommandInput}
 * @returns {@link CreateTransitGatewayCommandOutput}
 * @see {@link CreateTransitGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateTransitGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTransitGatewayCommand extends $Command
  .classBuilder<
    CreateTransitGatewayCommandInput,
    CreateTransitGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateTransitGateway", {})
  .n("EC2Client", "CreateTransitGatewayCommand")
  .f(void 0, void 0)
  .ser(se_CreateTransitGatewayCommand)
  .de(de_CreateTransitGatewayCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTransitGatewayRequest;
      output: CreateTransitGatewayResult;
    };
    sdk: {
      input: CreateTransitGatewayCommandInput;
      output: CreateTransitGatewayCommandOutput;
    };
  };
}
