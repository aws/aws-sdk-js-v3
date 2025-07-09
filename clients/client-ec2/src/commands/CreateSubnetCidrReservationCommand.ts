// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSubnetCidrReservationRequest, CreateSubnetCidrReservationResult } from "../models/models_2";
import { de_CreateSubnetCidrReservationCommand, se_CreateSubnetCidrReservationCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubnetCidrReservationCommand}.
 */
export interface CreateSubnetCidrReservationCommandInput extends CreateSubnetCidrReservationRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubnetCidrReservationCommand}.
 */
export interface CreateSubnetCidrReservationCommandOutput extends CreateSubnetCidrReservationResult, __MetadataBearer {}

/**
 * <p>Creates a subnet CIDR reservation. For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/subnet-cidr-reservation.html">Subnet CIDR reservations</a>
 *             in the <i>Amazon VPC User Guide</i> and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/work-with-prefixes.html">Manage prefixes
 *                 for your network interfaces</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSubnetCidrReservationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSubnetCidrReservationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateSubnetCidrReservationRequest
 *   SubnetId: "STRING_VALUE", // required
 *   Cidr: "STRING_VALUE", // required
 *   ReservationType: "prefix" || "explicit", // required
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
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
 * };
 * const command = new CreateSubnetCidrReservationCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubnetCidrReservationResult
 * //   SubnetCidrReservation: { // SubnetCidrReservation
 * //     SubnetCidrReservationId: "STRING_VALUE",
 * //     SubnetId: "STRING_VALUE",
 * //     Cidr: "STRING_VALUE",
 * //     ReservationType: "prefix" || "explicit",
 * //     OwnerId: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
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
 * @param CreateSubnetCidrReservationCommandInput - {@link CreateSubnetCidrReservationCommandInput}
 * @returns {@link CreateSubnetCidrReservationCommandOutput}
 * @see {@link CreateSubnetCidrReservationCommandInput} for command's `input` shape.
 * @see {@link CreateSubnetCidrReservationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateSubnetCidrReservationCommand extends $Command
  .classBuilder<
    CreateSubnetCidrReservationCommandInput,
    CreateSubnetCidrReservationCommandOutput,
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
  .s("AmazonEC2", "CreateSubnetCidrReservation", {})
  .n("EC2Client", "CreateSubnetCidrReservationCommand")
  .f(void 0, void 0)
  .ser(se_CreateSubnetCidrReservationCommand)
  .de(de_CreateSubnetCidrReservationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubnetCidrReservationRequest;
      output: CreateSubnetCidrReservationResult;
    };
    sdk: {
      input: CreateSubnetCidrReservationCommandInput;
      output: CreateSubnetCidrReservationCommandOutput;
    };
  };
}
