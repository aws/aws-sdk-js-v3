// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIpamResourceDiscoveryRequest, CreateIpamResourceDiscoveryResult } from "../models/models_1";
import { de_CreateIpamResourceDiscoveryCommand, se_CreateIpamResourceDiscoveryCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIpamResourceDiscoveryCommand}.
 */
export interface CreateIpamResourceDiscoveryCommandInput extends CreateIpamResourceDiscoveryRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpamResourceDiscoveryCommand}.
 */
export interface CreateIpamResourceDiscoveryCommandOutput extends CreateIpamResourceDiscoveryResult, __MetadataBearer {}

/**
 * <p>Creates an IPAM resource discovery. A resource discovery is an IPAM component that enables IPAM to manage and monitor resources that belong to the owning account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateIpamResourceDiscoveryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateIpamResourceDiscoveryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateIpamResourceDiscoveryRequest
 *   DryRun: true || false,
 *   Description: "STRING_VALUE",
 *   OperatingRegions: [ // AddIpamOperatingRegionSet
 *     { // AddIpamOperatingRegion
 *       RegionName: "STRING_VALUE",
 *     },
 *   ],
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
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateIpamResourceDiscoveryCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpamResourceDiscoveryResult
 * //   IpamResourceDiscovery: { // IpamResourceDiscovery
 * //     OwnerId: "STRING_VALUE",
 * //     IpamResourceDiscoveryId: "STRING_VALUE",
 * //     IpamResourceDiscoveryArn: "STRING_VALUE",
 * //     IpamResourceDiscoveryRegion: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     OperatingRegions: [ // IpamOperatingRegionSet
 * //       { // IpamOperatingRegion
 * //         RegionName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IsDefault: true || false,
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     OrganizationalUnitExclusions: [ // IpamOrganizationalUnitExclusionSet
 * //       { // IpamOrganizationalUnitExclusion
 * //         OrganizationsEntityPath: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIpamResourceDiscoveryCommandInput - {@link CreateIpamResourceDiscoveryCommandInput}
 * @returns {@link CreateIpamResourceDiscoveryCommandOutput}
 * @see {@link CreateIpamResourceDiscoveryCommandInput} for command's `input` shape.
 * @see {@link CreateIpamResourceDiscoveryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateIpamResourceDiscoveryCommand extends $Command
  .classBuilder<
    CreateIpamResourceDiscoveryCommandInput,
    CreateIpamResourceDiscoveryCommandOutput,
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
  .s("AmazonEC2", "CreateIpamResourceDiscovery", {})
  .n("EC2Client", "CreateIpamResourceDiscoveryCommand")
  .f(void 0, void 0)
  .ser(se_CreateIpamResourceDiscoveryCommand)
  .de(de_CreateIpamResourceDiscoveryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIpamResourceDiscoveryRequest;
      output: CreateIpamResourceDiscoveryResult;
    };
    sdk: {
      input: CreateIpamResourceDiscoveryCommandInput;
      output: CreateIpamResourceDiscoveryCommandOutput;
    };
  };
}
