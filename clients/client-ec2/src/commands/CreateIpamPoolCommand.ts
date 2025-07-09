// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateIpamPoolRequest, CreateIpamPoolResult } from "../models/models_1";
import { de_CreateIpamPoolCommand, se_CreateIpamPoolCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateIpamPoolCommand}.
 */
export interface CreateIpamPoolCommandInput extends CreateIpamPoolRequest {}
/**
 * @public
 *
 * The output of {@link CreateIpamPoolCommand}.
 */
export interface CreateIpamPoolCommandOutput extends CreateIpamPoolResult, __MetadataBearer {}

/**
 * <p>Create an IP address pool for Amazon VPC IP Address Manager (IPAM). In IPAM, a pool is a collection of contiguous IP addresses CIDRs. Pools enable you to organize your IP addresses according to your routing and security needs. For example, if you have separate routing and security needs for development and production applications, you can create a pool for each.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/ipam/create-top-ipam.html">Create a top-level pool</a> in the <i>Amazon VPC IPAM User Guide</i>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateIpamPoolCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateIpamPoolCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateIpamPoolRequest
 *   DryRun: true || false,
 *   IpamScopeId: "STRING_VALUE", // required
 *   Locale: "STRING_VALUE",
 *   SourceIpamPoolId: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   AddressFamily: "ipv4" || "ipv6", // required
 *   AutoImport: true || false,
 *   PubliclyAdvertisable: true || false,
 *   AllocationMinNetmaskLength: Number("int"),
 *   AllocationMaxNetmaskLength: Number("int"),
 *   AllocationDefaultNetmaskLength: Number("int"),
 *   AllocationResourceTags: [ // RequestIpamResourceTagList
 *     { // RequestIpamResourceTag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
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
 *   AwsService: "ec2",
 *   PublicIpSource: "amazon" || "byoip",
 *   SourceResource: { // IpamPoolSourceResourceRequest
 *     ResourceId: "STRING_VALUE",
 *     ResourceType: "vpc",
 *     ResourceRegion: "STRING_VALUE",
 *     ResourceOwner: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateIpamPoolCommand(input);
 * const response = await client.send(command);
 * // { // CreateIpamPoolResult
 * //   IpamPool: { // IpamPool
 * //     OwnerId: "STRING_VALUE",
 * //     IpamPoolId: "STRING_VALUE",
 * //     SourceIpamPoolId: "STRING_VALUE",
 * //     IpamPoolArn: "STRING_VALUE",
 * //     IpamScopeArn: "STRING_VALUE",
 * //     IpamScopeType: "public" || "private",
 * //     IpamArn: "STRING_VALUE",
 * //     IpamRegion: "STRING_VALUE",
 * //     Locale: "STRING_VALUE",
 * //     PoolDepth: Number("int"),
 * //     State: "create-in-progress" || "create-complete" || "create-failed" || "modify-in-progress" || "modify-complete" || "modify-failed" || "delete-in-progress" || "delete-complete" || "delete-failed" || "isolate-in-progress" || "isolate-complete" || "restore-in-progress",
 * //     StateMessage: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     AutoImport: true || false,
 * //     PubliclyAdvertisable: true || false,
 * //     AddressFamily: "ipv4" || "ipv6",
 * //     AllocationMinNetmaskLength: Number("int"),
 * //     AllocationMaxNetmaskLength: Number("int"),
 * //     AllocationDefaultNetmaskLength: Number("int"),
 * //     AllocationResourceTags: [ // IpamResourceTagList
 * //       { // IpamResourceTag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AwsService: "ec2",
 * //     PublicIpSource: "amazon" || "byoip",
 * //     SourceResource: { // IpamPoolSourceResource
 * //       ResourceId: "STRING_VALUE",
 * //       ResourceType: "vpc",
 * //       ResourceRegion: "STRING_VALUE",
 * //       ResourceOwner: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateIpamPoolCommandInput - {@link CreateIpamPoolCommandInput}
 * @returns {@link CreateIpamPoolCommandOutput}
 * @see {@link CreateIpamPoolCommandInput} for command's `input` shape.
 * @see {@link CreateIpamPoolCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateIpamPoolCommand extends $Command
  .classBuilder<
    CreateIpamPoolCommandInput,
    CreateIpamPoolCommandOutput,
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
  .s("AmazonEC2", "CreateIpamPool", {})
  .n("EC2Client", "CreateIpamPoolCommand")
  .f(void 0, void 0)
  .ser(se_CreateIpamPoolCommand)
  .de(de_CreateIpamPoolCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateIpamPoolRequest;
      output: CreateIpamPoolResult;
    };
    sdk: {
      input: CreateIpamPoolCommandInput;
      output: CreateIpamPoolCommandOutput;
    };
  };
}
