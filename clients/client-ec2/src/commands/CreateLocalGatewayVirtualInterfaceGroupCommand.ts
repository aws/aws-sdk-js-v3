// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateLocalGatewayVirtualInterfaceGroupRequest,
  CreateLocalGatewayVirtualInterfaceGroupResult,
} from "../models/models_2";
import {
  de_CreateLocalGatewayVirtualInterfaceGroupCommand,
  se_CreateLocalGatewayVirtualInterfaceGroupCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLocalGatewayVirtualInterfaceGroupCommand}.
 */
export interface CreateLocalGatewayVirtualInterfaceGroupCommandInput
  extends CreateLocalGatewayVirtualInterfaceGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateLocalGatewayVirtualInterfaceGroupCommand}.
 */
export interface CreateLocalGatewayVirtualInterfaceGroupCommandOutput
  extends CreateLocalGatewayVirtualInterfaceGroupResult,
    __MetadataBearer {}

/**
 * <p>Create a local gateway virtual interface group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateLocalGatewayVirtualInterfaceGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateLocalGatewayVirtualInterfaceGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateLocalGatewayVirtualInterfaceGroupRequest
 *   LocalGatewayId: "STRING_VALUE", // required
 *   LocalBgpAsn: Number("int"),
 *   LocalBgpAsnExtended: Number("long"),
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
 * const command = new CreateLocalGatewayVirtualInterfaceGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateLocalGatewayVirtualInterfaceGroupResult
 * //   LocalGatewayVirtualInterfaceGroup: { // LocalGatewayVirtualInterfaceGroup
 * //     LocalGatewayVirtualInterfaceGroupId: "STRING_VALUE",
 * //     LocalGatewayVirtualInterfaceIds: [ // LocalGatewayVirtualInterfaceIdSet
 * //       "STRING_VALUE",
 * //     ],
 * //     LocalGatewayId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     LocalBgpAsn: Number("int"),
 * //     LocalBgpAsnExtended: Number("long"),
 * //     LocalGatewayVirtualInterfaceGroupArn: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ConfigurationState: "pending" || "incomplete" || "available" || "deleting" || "deleted",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateLocalGatewayVirtualInterfaceGroupCommandInput - {@link CreateLocalGatewayVirtualInterfaceGroupCommandInput}
 * @returns {@link CreateLocalGatewayVirtualInterfaceGroupCommandOutput}
 * @see {@link CreateLocalGatewayVirtualInterfaceGroupCommandInput} for command's `input` shape.
 * @see {@link CreateLocalGatewayVirtualInterfaceGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateLocalGatewayVirtualInterfaceGroupCommand extends $Command
  .classBuilder<
    CreateLocalGatewayVirtualInterfaceGroupCommandInput,
    CreateLocalGatewayVirtualInterfaceGroupCommandOutput,
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
  .s("AmazonEC2", "CreateLocalGatewayVirtualInterfaceGroup", {})
  .n("EC2Client", "CreateLocalGatewayVirtualInterfaceGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateLocalGatewayVirtualInterfaceGroupCommand)
  .de(de_CreateLocalGatewayVirtualInterfaceGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLocalGatewayVirtualInterfaceGroupRequest;
      output: CreateLocalGatewayVirtualInterfaceGroupResult;
    };
    sdk: {
      input: CreateLocalGatewayVirtualInterfaceGroupCommandInput;
      output: CreateLocalGatewayVirtualInterfaceGroupCommandOutput;
    };
  };
}
