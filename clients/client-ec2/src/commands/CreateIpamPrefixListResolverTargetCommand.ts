// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  CreateIpamPrefixListResolverTargetRequest,
  CreateIpamPrefixListResolverTargetResult,
} from "../models/models_1";
import { CreateIpamPrefixListResolverTarget$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIpamPrefixListResolverTargetCommand}.
 */
export interface CreateIpamPrefixListResolverTargetCommandInput extends CreateIpamPrefixListResolverTargetRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpamPrefixListResolverTargetCommand}.
 */
export interface CreateIpamPrefixListResolverTargetCommandOutput extends CreateIpamPrefixListResolverTargetResult, __MetadataBearer {}

/**
 * <p>Creates an IPAM prefix list resolver target.</p>
 *          <p>An IPAM prefix list resolver target is an association between a specific customer-managed prefix list and an IPAM prefix list resolver. The target enables the resolver to synchronize CIDRs selected by its rules into the specified prefix list, which can then be referenced in Amazon Web Services resources.</p>
 *          <p>For more information about IPAM prefix list resolver, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/automate-prefix-list-updates.html">Automate prefix list updates with IPAM</a> in the <i>Amazon VPC IPAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateIpamPrefixListResolverTargetCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateIpamPrefixListResolverTargetCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // CreateIpamPrefixListResolverTargetRequest
 *   DryRun: true || false,
 *   IpamPrefixListResolverId: "STRING_VALUE", // required
 *   PrefixListId: "STRING_VALUE", // required
 *   PrefixListRegion: "STRING_VALUE", // required
 *   DesiredVersion: Number("long"),
 *   TrackLatestVersion: true || false, // required
 *   TagSpecifications: [ // TagSpecificationList
 *     { // TagSpecification
 *       ResourceType: "capacity-reservation" || "client-vpn-endpoint" || "customer-gateway" || "carrier-gateway" || "coip-pool" || "declarative-policies-report" || "dedicated-host" || "dhcp-options" || "egress-only-internet-gateway" || "elastic-ip" || "elastic-gpu" || "export-image-task" || "export-instance-task" || "fleet" || "fpga-image" || "host-reservation" || "image" || "image-usage-report" || "import-image-task" || "import-snapshot-task" || "instance" || "instance-event-window" || "internet-gateway" || "ipam" || "ipam-pool" || "ipam-scope" || "ipv4pool-ec2" || "ipv6pool-ec2" || "key-pair" || "launch-template" || "local-gateway" || "local-gateway-route-table" || "local-gateway-virtual-interface" || "local-gateway-virtual-interface-group" || "local-gateway-route-table-vpc-association" || "local-gateway-route-table-virtual-interface-group-association" || "natgateway" || "network-acl" || "network-interface" || "network-insights-analysis" || "network-insights-path" || "network-insights-access-scope" || "network-insights-access-scope-analysis" || "outpost-lag" || "placement-group" || "prefix-list" || "replace-root-volume-task" || "reserved-instances" || "route-table" || "security-group" || "security-group-rule" || "service-link-virtual-interface" || "snapshot" || "spot-fleet-request" || "spot-instances-request" || "subnet" || "subnet-cidr-reservation" || "traffic-mirror-filter" || "traffic-mirror-session" || "traffic-mirror-target" || "transit-gateway" || "transit-gateway-attachment" || "transit-gateway-connect-peer" || "transit-gateway-multicast-domain" || "transit-gateway-policy-table" || "transit-gateway-metering-policy" || "transit-gateway-route-table" || "transit-gateway-route-table-announcement" || "volume" || "vpc" || "vpc-endpoint" || "vpc-endpoint-connection" || "vpc-endpoint-service" || "vpc-endpoint-service-permission" || "vpc-peering-connection" || "vpn-connection" || "vpn-gateway" || "vpc-flow-log" || "capacity-reservation-fleet" || "traffic-mirror-filter-rule" || "vpc-endpoint-connection-device-type" || "verified-access-instance" || "verified-access-group" || "verified-access-endpoint" || "verified-access-policy" || "verified-access-trust-provider" || "vpn-connection-device-type" || "vpc-block-public-access-exclusion" || "vpc-encryption-control" || "route-server" || "route-server-endpoint" || "route-server-peer" || "ipam-resource-discovery" || "ipam-resource-discovery-association" || "instance-connect-endpoint" || "verified-access-endpoint-target" || "ipam-external-resource-verification-token" || "capacity-block" || "mac-modification-task" || "ipam-prefix-list-resolver" || "ipam-policy" || "ipam-prefix-list-resolver-target" || "capacity-manager-data-export" || "vpn-concentrator",
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
 * const command = new CreateIpamPrefixListResolverTargetCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpamPrefixListResolverTargetResult
 * //   IpamPrefixListResolverTarget: { // IpamPrefixListResolverTarget
 * //     IpamPrefixListResolverTargetId: "STRING_VALUE",
 * //     IpamPrefixListResolverTargetArn: "STRING_VALUE",
 * //     IpamPrefixListResolverId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //     PrefixListId: "STRING_VALUE",
 * //     PrefixListRegion: "STRING_VALUE",
 * //     DesiredVersion: Number("long"),
 * //     LastSyncedVersion: Number("long"),
 * //     TrackLatestVersion: true || false,
 * //     StateMessage: "STRING_VALUE",
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "sync-in-progress" || "sync-complete" || "sync-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
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
 * @param CreateIpamPrefixListResolverTargetCommandInput - {@link CreateIpamPrefixListResolverTargetCommandInput}
 * @returns {@link CreateIpamPrefixListResolverTargetCommandOutput}
 * @see {@link CreateIpamPrefixListResolverTargetCommandInput} for command's `input` shape.
 * @see {@link CreateIpamPrefixListResolverTargetCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateIpamPrefixListResolverTargetCommand extends $Command
  .classBuilder<
    CreateIpamPrefixListResolverTargetCommandInput,
    CreateIpamPrefixListResolverTargetCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "CreateIpamPrefixListResolverTarget", {})
  .n("EC2Client", "CreateIpamPrefixListResolverTargetCommand")
  .sc(CreateIpamPrefixListResolverTarget$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIpamPrefixListResolverTargetRequest;
      output: CreateIpamPrefixListResolverTargetResult;
    };
    sdk: {
      input: CreateIpamPrefixListResolverTargetCommandInput;
      output: CreateIpamPrefixListResolverTargetCommandOutput;
    };
  };
}
