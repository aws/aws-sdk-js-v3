// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpnGatewayRequest, CreateVpnGatewayResult } from "../models/models_2";
import { de_CreateVpnGatewayCommand, se_CreateVpnGatewayCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpnGatewayCommand}.
 */
export interface CreateVpnGatewayCommandInput extends CreateVpnGatewayRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpnGatewayCommand}.
 */
export interface CreateVpnGatewayCommandOutput extends CreateVpnGatewayResult, __MetadataBearer {}

/**
 * <p>Creates a virtual private gateway. A virtual private gateway is the endpoint on the
 *             VPC side of your VPN connection. You can create a virtual private gateway before
 *             creating the VPC itself.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html">Amazon Web Services Site-to-Site VPN</a> in the <i>Amazon Web Services Site-to-Site VPN
 *                 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnGatewayCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnGatewayCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateVpnGatewayRequest
 *   AvailabilityZone: "STRING_VALUE",
 *   Type: "ipsec.1", // required
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
 *   AmazonSideAsn: Number("long"),
 *   DryRun: true || false,
 * };
 * const command = new CreateVpnGatewayCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpnGatewayResult
 * //   VpnGateway: { // VpnGateway
 * //     AvailabilityZone: "STRING_VALUE",
 * //     State: "pending" || "available" || "deleting" || "deleted",
 * //     Type: "ipsec.1",
 * //     VpcAttachments: [ // VpcAttachmentList
 * //       { // VpcAttachment
 * //         State: "attaching" || "attached" || "detaching" || "detached",
 * //         VpcId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpnGatewayId: "STRING_VALUE",
 * //     AmazonSideAsn: Number("long"),
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
 * @param CreateVpnGatewayCommandInput - {@link CreateVpnGatewayCommandInput}
 * @returns {@link CreateVpnGatewayCommandOutput}
 * @see {@link CreateVpnGatewayCommandInput} for command's `input` shape.
 * @see {@link CreateVpnGatewayCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 * @public
 */
export class CreateVpnGatewayCommand extends $Command
  .classBuilder<
    CreateVpnGatewayCommandInput,
    CreateVpnGatewayCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "CreateVpnGateway", {})
  .n("EC2Client", "CreateVpnGatewayCommand")
  .f(void 0, void 0)
  .ser(se_CreateVpnGatewayCommand)
  .de(de_CreateVpnGatewayCommand)
  .build() {}
