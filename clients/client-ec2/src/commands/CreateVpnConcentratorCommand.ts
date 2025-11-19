// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVpnConcentratorRequest, CreateVpnConcentratorResult } from "../models/models_2";
import { CreateVpnConcentrator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVpnConcentratorCommand}.
 */
export interface CreateVpnConcentratorCommandInput extends CreateVpnConcentratorRequest {}
/**
 * @public
 *
 * The output of {@link CreateVpnConcentratorCommand}.
 */
export interface CreateVpnConcentratorCommandOutput extends CreateVpnConcentratorResult, __MetadataBearer {}

/**
 * <p>Creates a VPN concentrator that aggregates multiple VPN connections to a transit gateway.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateVpnConcentratorCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateVpnConcentratorCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateVpnConcentratorRequest
 *   Type: "ipsec.1", // required
 *   TransitGatewayId: "STRING_VALUE",
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-prefix-list-resolver-target" || "capacity-manager-data-export" || "vpn-concentrator",
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
 * const command = new CreateVpnConcentratorCommand(input);
 * const response = await client.send(command);
 * // { // CreateVpnConcentratorResult
 * //   VpnConcentrator: { // VpnConcentrator
 * //     VpnConcentratorId: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     TransitGatewayId: "STRING_VALUE",
 * //     TransitGatewayAttachmentId: "STRING_VALUE",
 * //     Type: "STRING_VALUE",
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
 * @param CreateVpnConcentratorCommandInput - {@link CreateVpnConcentratorCommandInput}
 * @returns {@link CreateVpnConcentratorCommandOutput}
 * @see {@link CreateVpnConcentratorCommandInput} for command's `input` shape.
 * @see {@link CreateVpnConcentratorCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateVpnConcentratorCommand extends $Command
  .classBuilder<
    CreateVpnConcentratorCommandInput,
    CreateVpnConcentratorCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateVpnConcentrator", {})
  .n("EC2Client", "CreateVpnConcentratorCommand")
  .sc(CreateVpnConcentrator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVpnConcentratorRequest;
      output: CreateVpnConcentratorResult;
    };
    sdk: {
      input: CreateVpnConcentratorCommandInput;
      output: CreateVpnConcentratorCommandOutput;
    };
  };
}
