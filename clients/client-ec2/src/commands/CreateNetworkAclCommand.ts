// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkAclRequest, CreateNetworkAclResult } from "../models/models_2";
import { de_CreateNetworkAclCommand, se_CreateNetworkAclCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkAclCommand}.
 */
export interface CreateNetworkAclCommandInput extends CreateNetworkAclRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkAclCommand}.
 */
export interface CreateNetworkAclCommandOutput extends CreateNetworkAclResult, __MetadataBearer {}

/**
 * <p>Creates a network ACL in a VPC. Network ACLs provide an optional layer of security (in addition to security groups) for the instances in your VPC.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-network-acls.html">Network ACLs</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkAclCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkAclCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkAclRequest
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
 *   DryRun: true || false,
 *   VpcId: "STRING_VALUE", // required
 * };
 * const command = new CreateNetworkAclCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkAclResult
 * //   NetworkAcl: { // NetworkAcl
 * //     Associations: [ // NetworkAclAssociationList
 * //       { // NetworkAclAssociation
 * //         NetworkAclAssociationId: "STRING_VALUE",
 * //         NetworkAclId: "STRING_VALUE",
 * //         SubnetId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     Entries: [ // NetworkAclEntryList
 * //       { // NetworkAclEntry
 * //         CidrBlock: "STRING_VALUE",
 * //         Egress: true || false,
 * //         IcmpTypeCode: { // IcmpTypeCode
 * //           Code: Number("int"),
 * //           Type: Number("int"),
 * //         },
 * //         Ipv6CidrBlock: "STRING_VALUE",
 * //         PortRange: { // PortRange
 * //           From: Number("int"),
 * //           To: Number("int"),
 * //         },
 * //         Protocol: "STRING_VALUE",
 * //         RuleAction: "allow" || "deny",
 * //         RuleNumber: Number("int"),
 * //       },
 * //     ],
 * //     IsDefault: true || false,
 * //     NetworkAclId: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcId: "STRING_VALUE",
 * //     OwnerId: "STRING_VALUE",
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateNetworkAclCommandInput - {@link CreateNetworkAclCommandInput}
 * @returns {@link CreateNetworkAclCommandOutput}
 * @see {@link CreateNetworkAclCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkAclCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a network ACL
 * ```javascript
 * // This example creates a network ACL for the specified VPC.
 * const input = {
 *   VpcId: "vpc-a01106c2"
 * };
 * const command = new CreateNetworkAclCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   NetworkAcl: {
 *     Associations:     [],
 *     Entries: [
 *       {
 *         CidrBlock: "0.0.0.0/0",
 *         Egress: true,
 *         Protocol: "-1",
 *         RuleAction: "deny",
 *         RuleNumber: 32767
 *       },
 *       {
 *         CidrBlock: "0.0.0.0/0",
 *         Egress: false,
 *         Protocol: "-1",
 *         RuleAction: "deny",
 *         RuleNumber: 32767
 *       }
 *     ],
 *     IsDefault: false,
 *     NetworkAclId: "acl-5fb85d36",
 *     Tags:     [],
 *     VpcId: "vpc-a01106c2"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateNetworkAclCommand extends $Command
  .classBuilder<
    CreateNetworkAclCommandInput,
    CreateNetworkAclCommandOutput,
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
  .s("AmazonEC2", "CreateNetworkAcl", {})
  .n("EC2Client", "CreateNetworkAclCommand")
  .f(void 0, void 0)
  .ser(se_CreateNetworkAclCommand)
  .de(de_CreateNetworkAclCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkAclRequest;
      output: CreateNetworkAclResult;
    };
    sdk: {
      input: CreateNetworkAclCommandInput;
      output: CreateNetworkAclCommandOutput;
    };
  };
}
