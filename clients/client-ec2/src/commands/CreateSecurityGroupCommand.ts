// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSecurityGroupRequest, CreateSecurityGroupResult } from "../models/models_2";
import { de_CreateSecurityGroupCommand, se_CreateSecurityGroupCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityGroupCommand}.
 */
export interface CreateSecurityGroupCommandInput extends CreateSecurityGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecurityGroupCommand}.
 */
export interface CreateSecurityGroupCommandOutput extends CreateSecurityGroupResult, __MetadataBearer {}

/**
 * <p>Creates a security group.</p>
 *          <p>A security group acts as a virtual firewall for your instance to control inbound and outbound traffic.
 *          For more information, see
 * 				<a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 security groups</a> in
 * 				the <i>Amazon EC2 User Guide</i> and
 * 				<a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security groups for your VPC</a> in the
 * 				<i>Amazon VPC User Guide</i>.</p>
 *          <p>When you create a security group, you specify a friendly name of your choice.
 *          You can't have two security groups for the same VPC with the same name.</p>
 *          <p>You have a default security group for use in your VPC. If you don't specify a security group
 *          when you launch an instance, the instance is launched into the appropriate default security group.
 *          A default security group includes a default rule that grants instances unrestricted network access
 *          to each other.</p>
 *          <p>You can add or remove rules from your security groups using
 * 					<a>AuthorizeSecurityGroupIngress</a>,
 * 					<a>AuthorizeSecurityGroupEgress</a>,
 * 					<a>RevokeSecurityGroupIngress</a>, and
 * 					<a>RevokeSecurityGroupEgress</a>.</p>
 *          <p>For more information about VPC security group limits, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/amazon-vpc-limits.html">Amazon VPC Limits</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateSecurityGroupCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateSecurityGroupCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateSecurityGroupRequest
 *   Description: "STRING_VALUE", // required
 *   GroupName: "STRING_VALUE", // required
 *   VpcId: "STRING_VALUE",
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
 * const command = new CreateSecurityGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityGroupResult
 * //   GroupId: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SecurityGroupArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSecurityGroupCommandInput - {@link CreateSecurityGroupCommandInput}
 * @returns {@link CreateSecurityGroupCommandOutput}
 * @see {@link CreateSecurityGroupCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityGroupCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @example To create a security group for a VPC
 * ```javascript
 * // This example creates a security group for the specified VPC.
 * const input = {
 *   Description: "My security group",
 *   GroupName: "my-security-group",
 *   VpcId: "vpc-1a2b3c4d"
 * };
 * const command = new CreateSecurityGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   GroupId: "sg-903004f8"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateSecurityGroupCommand extends $Command
  .classBuilder<
    CreateSecurityGroupCommandInput,
    CreateSecurityGroupCommandOutput,
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
  .s("AmazonEC2", "CreateSecurityGroup", {})
  .n("EC2Client", "CreateSecurityGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateSecurityGroupCommand)
  .de(de_CreateSecurityGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecurityGroupRequest;
      output: CreateSecurityGroupResult;
    };
    sdk: {
      input: CreateSecurityGroupCommandInput;
      output: CreateSecurityGroupCommandOutput;
    };
  };
}
