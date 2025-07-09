// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrafficMirrorFilterRuleRequest, CreateTrafficMirrorFilterRuleResult } from "../models/models_2";
import { de_CreateTrafficMirrorFilterRuleCommand, se_CreateTrafficMirrorFilterRuleCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficMirrorFilterRuleCommand}.
 */
export interface CreateTrafficMirrorFilterRuleCommandInput extends CreateTrafficMirrorFilterRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficMirrorFilterRuleCommand}.
 */
export interface CreateTrafficMirrorFilterRuleCommandOutput
  extends CreateTrafficMirrorFilterRuleResult,
    __MetadataBearer {}

/**
 * <p>Creates a Traffic Mirror filter rule.</p>
 *          <p>A Traffic Mirror rule defines the Traffic Mirror source traffic to mirror.</p>
 *          <p>You need the Traffic Mirror filter ID when you create the rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorFilterRuleCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorFilterRuleCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateTrafficMirrorFilterRuleRequest
 *   TrafficMirrorFilterId: "STRING_VALUE", // required
 *   TrafficDirection: "ingress" || "egress", // required
 *   RuleNumber: Number("int"), // required
 *   RuleAction: "accept" || "reject", // required
 *   DestinationPortRange: { // TrafficMirrorPortRangeRequest
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   SourcePortRange: {
 *     FromPort: Number("int"),
 *     ToPort: Number("int"),
 *   },
 *   Protocol: Number("int"),
 *   DestinationCidrBlock: "STRING_VALUE", // required
 *   SourceCidrBlock: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
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
 * const command = new CreateTrafficMirrorFilterRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficMirrorFilterRuleResult
 * //   TrafficMirrorFilterRule: { // TrafficMirrorFilterRule
 * //     TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //     TrafficMirrorFilterId: "STRING_VALUE",
 * //     TrafficDirection: "ingress" || "egress",
 * //     RuleNumber: Number("int"),
 * //     RuleAction: "accept" || "reject",
 * //     Protocol: Number("int"),
 * //     DestinationPortRange: { // TrafficMirrorPortRange
 * //       FromPort: Number("int"),
 * //       ToPort: Number("int"),
 * //     },
 * //     SourcePortRange: {
 * //       FromPort: Number("int"),
 * //       ToPort: Number("int"),
 * //     },
 * //     DestinationCidrBlock: "STRING_VALUE",
 * //     SourceCidrBlock: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   ClientToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateTrafficMirrorFilterRuleCommandInput - {@link CreateTrafficMirrorFilterRuleCommandInput}
 * @returns {@link CreateTrafficMirrorFilterRuleCommandOutput}
 * @see {@link CreateTrafficMirrorFilterRuleCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorFilterRuleCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTrafficMirrorFilterRuleCommand extends $Command
  .classBuilder<
    CreateTrafficMirrorFilterRuleCommandInput,
    CreateTrafficMirrorFilterRuleCommandOutput,
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
  .s("AmazonEC2", "CreateTrafficMirrorFilterRule", {})
  .n("EC2Client", "CreateTrafficMirrorFilterRuleCommand")
  .f(void 0, void 0)
  .ser(se_CreateTrafficMirrorFilterRuleCommand)
  .de(de_CreateTrafficMirrorFilterRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficMirrorFilterRuleRequest;
      output: CreateTrafficMirrorFilterRuleResult;
    };
    sdk: {
      input: CreateTrafficMirrorFilterRuleCommandInput;
      output: CreateTrafficMirrorFilterRuleCommandOutput;
    };
  };
}
