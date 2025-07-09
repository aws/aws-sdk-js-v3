// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkInsightsPathRequest, CreateNetworkInsightsPathResult } from "../models/models_2";
import { de_CreateNetworkInsightsPathCommand, se_CreateNetworkInsightsPathCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkInsightsPathCommand}.
 */
export interface CreateNetworkInsightsPathCommandInput extends CreateNetworkInsightsPathRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkInsightsPathCommand}.
 */
export interface CreateNetworkInsightsPathCommandOutput extends CreateNetworkInsightsPathResult, __MetadataBearer {}

/**
 * <p>Creates a path to analyze for reachability.</p>
 *          <p>Reachability Analyzer enables you to analyze and debug network reachability between
 *           two resources in your virtual private cloud (VPC). For more information, see the
 *           <a href="https://docs.aws.amazon.com/vpc/latest/reachability/">Reachability Analyzer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInsightsPathCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInsightsPathCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkInsightsPathRequest
 *   SourceIp: "STRING_VALUE",
 *   DestinationIp: "STRING_VALUE",
 *   Source: "STRING_VALUE", // required
 *   Destination: "STRING_VALUE",
 *   Protocol: "tcp" || "udp", // required
 *   DestinationPort: Number("int"),
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
 *   ClientToken: "STRING_VALUE", // required
 *   FilterAtSource: { // PathRequestFilter
 *     SourceAddress: "STRING_VALUE",
 *     SourcePortRange: { // RequestFilterPortRange
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *     },
 *     DestinationAddress: "STRING_VALUE",
 *     DestinationPortRange: {
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *     },
 *   },
 *   FilterAtDestination: {
 *     SourceAddress: "STRING_VALUE",
 *     SourcePortRange: {
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *     },
 *     DestinationAddress: "STRING_VALUE",
 *     DestinationPortRange: {
 *       FromPort: Number("int"),
 *       ToPort: Number("int"),
 *     },
 *   },
 * };
 * const command = new CreateNetworkInsightsPathCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkInsightsPathResult
 * //   NetworkInsightsPath: { // NetworkInsightsPath
 * //     NetworkInsightsPathId: "STRING_VALUE",
 * //     NetworkInsightsPathArn: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     Source: "STRING_VALUE",
 * //     Destination: "STRING_VALUE",
 * //     SourceArn: "STRING_VALUE",
 * //     DestinationArn: "STRING_VALUE",
 * //     SourceIp: "STRING_VALUE",
 * //     DestinationIp: "STRING_VALUE",
 * //     Protocol: "tcp" || "udp",
 * //     DestinationPort: Number("int"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     FilterAtSource: { // PathFilter
 * //       SourceAddress: "STRING_VALUE",
 * //       SourcePortRange: { // FilterPortRange
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //       },
 * //       DestinationAddress: "STRING_VALUE",
 * //       DestinationPortRange: {
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //       },
 * //     },
 * //     FilterAtDestination: {
 * //       SourceAddress: "STRING_VALUE",
 * //       SourcePortRange: {
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //       },
 * //       DestinationAddress: "STRING_VALUE",
 * //       DestinationPortRange: {
 * //         FromPort: Number("int"),
 * //         ToPort: Number("int"),
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkInsightsPathCommandInput - {@link CreateNetworkInsightsPathCommandInput}
 * @returns {@link CreateNetworkInsightsPathCommandOutput}
 * @see {@link CreateNetworkInsightsPathCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInsightsPathCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateNetworkInsightsPathCommand extends $Command
  .classBuilder<
    CreateNetworkInsightsPathCommandInput,
    CreateNetworkInsightsPathCommandOutput,
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
  .s("AmazonEC2", "CreateNetworkInsightsPath", {})
  .n("EC2Client", "CreateNetworkInsightsPathCommand")
  .f(void 0, void 0)
  .ser(se_CreateNetworkInsightsPathCommand)
  .de(de_CreateNetworkInsightsPathCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkInsightsPathRequest;
      output: CreateNetworkInsightsPathResult;
    };
    sdk: {
      input: CreateNetworkInsightsPathCommandInput;
      output: CreateNetworkInsightsPathCommandOutput;
    };
  };
}
