// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateTrafficMirrorFilterRequest, CreateTrafficMirrorFilterResult } from "../models/models_2";
import { de_CreateTrafficMirrorFilterCommand, se_CreateTrafficMirrorFilterCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateTrafficMirrorFilterCommand}.
 */
export interface CreateTrafficMirrorFilterCommandInput extends CreateTrafficMirrorFilterRequest {}
/**
 * @public
 *
 * The output of {@link CreateTrafficMirrorFilterCommand}.
 */
export interface CreateTrafficMirrorFilterCommandOutput extends CreateTrafficMirrorFilterResult, __MetadataBearer {}

/**
 * <p>Creates a Traffic Mirror filter.</p>
 *          <p>A Traffic Mirror filter is a set of rules that defines the traffic to mirror.</p>
 *          <p>By default, no traffic is mirrored. To mirror traffic, use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateTrafficMirrorFilterRule.htm">CreateTrafficMirrorFilterRule</a>
 *          to add Traffic Mirror rules to the filter. The rules you add define what traffic gets mirrored.
 *          You can also use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_ModifyTrafficMirrorFilterNetworkServices.html">ModifyTrafficMirrorFilterNetworkServices</a> to mirror supported network services.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateTrafficMirrorFilterCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateTrafficMirrorFilterCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateTrafficMirrorFilterRequest
 *   Description: "STRING_VALUE",
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
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTrafficMirrorFilterCommand(input);
 * const response = await client.send(command);
 * // { // CreateTrafficMirrorFilterResult
 * //   TrafficMirrorFilter: { // TrafficMirrorFilter
 * //     TrafficMirrorFilterId: "STRING_VALUE",
 * //     IngressFilterRules: [ // TrafficMirrorFilterRuleList
 * //       { // TrafficMirrorFilterRule
 * //         TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //         TrafficMirrorFilterId: "STRING_VALUE",
 * //         TrafficDirection: "ingress" || "egress",
 * //         RuleNumber: Number("int"),
 * //         RuleAction: "accept" || "reject",
 * //         Protocol: Number("int"),
 * //         DestinationPortRange: { // TrafficMirrorPortRange
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         SourcePortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Tags: [ // TagList
 * //           { // Tag
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     EgressFilterRules: [
 * //       {
 * //         TrafficMirrorFilterRuleId: "STRING_VALUE",
 * //         TrafficMirrorFilterId: "STRING_VALUE",
 * //         TrafficDirection: "ingress" || "egress",
 * //         RuleNumber: Number("int"),
 * //         RuleAction: "accept" || "reject",
 * //         Protocol: Number("int"),
 * //         DestinationPortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         SourcePortRange: {
 * //           FromPort: Number("int"),
 * //           ToPort: Number("int"),
 * //         },
 * //         DestinationCidrBlock: "STRING_VALUE",
 * //         SourceCidrBlock: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Tags: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Value: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     NetworkServices: [ // TrafficMirrorNetworkServiceList
 * //       "amazon-dns",
 * //     ],
 * //     Description: "STRING_VALUE",
 * //     Tags: [
 * //       {
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
 * @param CreateTrafficMirrorFilterCommandInput - {@link CreateTrafficMirrorFilterCommandInput}
 * @returns {@link CreateTrafficMirrorFilterCommandOutput}
 * @see {@link CreateTrafficMirrorFilterCommandInput} for command's `input` shape.
 * @see {@link CreateTrafficMirrorFilterCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateTrafficMirrorFilterCommand extends $Command
  .classBuilder<
    CreateTrafficMirrorFilterCommandInput,
    CreateTrafficMirrorFilterCommandOutput,
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
  .s("AmazonEC2", "CreateTrafficMirrorFilter", {})
  .n("EC2Client", "CreateTrafficMirrorFilterCommand")
  .f(void 0, void 0)
  .ser(se_CreateTrafficMirrorFilterCommand)
  .de(de_CreateTrafficMirrorFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTrafficMirrorFilterRequest;
      output: CreateTrafficMirrorFilterResult;
    };
    sdk: {
      input: CreateTrafficMirrorFilterCommandInput;
      output: CreateTrafficMirrorFilterCommandOutput;
    };
  };
}
