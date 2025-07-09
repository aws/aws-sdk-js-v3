// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateNetworkInsightsAccessScopeRequest, CreateNetworkInsightsAccessScopeResult } from "../models/models_2";
import {
  de_CreateNetworkInsightsAccessScopeCommand,
  se_CreateNetworkInsightsAccessScopeCommand,
} from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateNetworkInsightsAccessScopeCommand}.
 */
export interface CreateNetworkInsightsAccessScopeCommandInput extends CreateNetworkInsightsAccessScopeRequest {}
/**
 * @public
 *
 * The output of {@link CreateNetworkInsightsAccessScopeCommand}.
 */
export interface CreateNetworkInsightsAccessScopeCommandOutput
  extends CreateNetworkInsightsAccessScopeResult,
    __MetadataBearer {}

/**
 * <p>Creates a Network Access Scope.</p>
 *          <p>Amazon Web Services Network Access Analyzer enables cloud networking and cloud operations teams
 *          to verify that their networks on Amazon Web Services conform to their network security and governance
 *          objectives. For more information, see the <a href="https://docs.aws.amazon.com/vpc/latest/network-access-analyzer/">Amazon Web Services Network Access Analyzer Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateNetworkInsightsAccessScopeCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateNetworkInsightsAccessScopeCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // CreateNetworkInsightsAccessScopeRequest
 *   MatchPaths: [ // AccessScopePathListRequest
 *     { // AccessScopePathRequest
 *       Source: { // PathStatementRequest
 *         PacketHeaderStatement: { // PacketHeaderStatementRequest
 *           SourceAddresses: [ // ValueStringList
 *             "STRING_VALUE",
 *           ],
 *           DestinationAddresses: [
 *             "STRING_VALUE",
 *           ],
 *           SourcePorts: [
 *             "STRING_VALUE",
 *           ],
 *           DestinationPorts: [
 *             "STRING_VALUE",
 *           ],
 *           SourcePrefixLists: [
 *             "STRING_VALUE",
 *           ],
 *           DestinationPrefixLists: "<ValueStringList>",
 *           Protocols: [ // ProtocolList
 *             "tcp" || "udp",
 *           ],
 *         },
 *         ResourceStatement: { // ResourceStatementRequest
 *           Resources: "<ValueStringList>",
 *           ResourceTypes: "<ValueStringList>",
 *         },
 *       },
 *       Destination: {
 *         PacketHeaderStatement: {
 *           SourceAddresses: "<ValueStringList>",
 *           DestinationAddresses: "<ValueStringList>",
 *           SourcePorts: "<ValueStringList>",
 *           DestinationPorts: "<ValueStringList>",
 *           SourcePrefixLists: "<ValueStringList>",
 *           DestinationPrefixLists: "<ValueStringList>",
 *           Protocols: [
 *             "tcp" || "udp",
 *           ],
 *         },
 *         ResourceStatement: {
 *           Resources: "<ValueStringList>",
 *           ResourceTypes: "<ValueStringList>",
 *         },
 *       },
 *       ThroughResources: [ // ThroughResourcesStatementRequestList
 *         { // ThroughResourcesStatementRequest
 *           ResourceStatement: {
 *             Resources: "<ValueStringList>",
 *             ResourceTypes: "<ValueStringList>",
 *           },
 *         },
 *       ],
 *     },
 *   ],
 *   ExcludePaths: [
 *     {
 *       Source: {
 *         PacketHeaderStatement: {
 *           SourceAddresses: "<ValueStringList>",
 *           DestinationAddresses: "<ValueStringList>",
 *           SourcePorts: "<ValueStringList>",
 *           DestinationPorts: "<ValueStringList>",
 *           SourcePrefixLists: "<ValueStringList>",
 *           DestinationPrefixLists: "<ValueStringList>",
 *           Protocols: [
 *             "tcp" || "udp",
 *           ],
 *         },
 *         ResourceStatement: {
 *           Resources: "<ValueStringList>",
 *           ResourceTypes: "<ValueStringList>",
 *         },
 *       },
 *       Destination: {
 *         PacketHeaderStatement: {
 *           SourceAddresses: "<ValueStringList>",
 *           DestinationAddresses: "<ValueStringList>",
 *           SourcePorts: "<ValueStringList>",
 *           DestinationPorts: "<ValueStringList>",
 *           SourcePrefixLists: "<ValueStringList>",
 *           DestinationPrefixLists: "<ValueStringList>",
 *           Protocols: [
 *             "tcp" || "udp",
 *           ],
 *         },
 *         ResourceStatement: {
 *           Resources: "<ValueStringList>",
 *           ResourceTypes: "<ValueStringList>",
 *         },
 *       },
 *       ThroughResources: [
 *         {
 *           ResourceStatement: "<ResourceStatementRequest>",
 *         },
 *       ],
 *     },
 *   ],
 *   ClientToken: "STRING_VALUE", // required
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
 * const command = new CreateNetworkInsightsAccessScopeCommand(input);
 * const response = await client.send(command);
 * // { // CreateNetworkInsightsAccessScopeResult
 * //   NetworkInsightsAccessScope: { // NetworkInsightsAccessScope
 * //     NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //     NetworkInsightsAccessScopeArn: "STRING_VALUE",
 * //     CreatedDate: new Date("TIMESTAMP"),
 * //     UpdatedDate: new Date("TIMESTAMP"),
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NetworkInsightsAccessScopeContent: { // NetworkInsightsAccessScopeContent
 * //     NetworkInsightsAccessScopeId: "STRING_VALUE",
 * //     MatchPaths: [ // AccessScopePathList
 * //       { // AccessScopePath
 * //         Source: { // PathStatement
 * //           PacketHeaderStatement: { // PacketHeaderStatement
 * //             SourceAddresses: [ // ValueStringList
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationAddresses: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePorts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPorts: [
 * //               "STRING_VALUE",
 * //             ],
 * //             SourcePrefixLists: [
 * //               "STRING_VALUE",
 * //             ],
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [ // ProtocolList
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: { // ResourceStatement
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         Destination: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         ThroughResources: [ // ThroughResourcesStatementList
 * //           { // ThroughResourcesStatement
 * //             ResourceStatement: {
 * //               Resources: "<ValueStringList>",
 * //               ResourceTypes: "<ValueStringList>",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     ExcludePaths: [
 * //       {
 * //         Source: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         Destination: {
 * //           PacketHeaderStatement: {
 * //             SourceAddresses: "<ValueStringList>",
 * //             DestinationAddresses: "<ValueStringList>",
 * //             SourcePorts: "<ValueStringList>",
 * //             DestinationPorts: "<ValueStringList>",
 * //             SourcePrefixLists: "<ValueStringList>",
 * //             DestinationPrefixLists: "<ValueStringList>",
 * //             Protocols: [
 * //               "tcp" || "udp",
 * //             ],
 * //           },
 * //           ResourceStatement: {
 * //             Resources: "<ValueStringList>",
 * //             ResourceTypes: "<ValueStringList>",
 * //           },
 * //         },
 * //         ThroughResources: [
 * //           {
 * //             ResourceStatement: "<ResourceStatement>",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateNetworkInsightsAccessScopeCommandInput - {@link CreateNetworkInsightsAccessScopeCommandInput}
 * @returns {@link CreateNetworkInsightsAccessScopeCommandOutput}
 * @see {@link CreateNetworkInsightsAccessScopeCommandInput} for command's `input` shape.
 * @see {@link CreateNetworkInsightsAccessScopeCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class CreateNetworkInsightsAccessScopeCommand extends $Command
  .classBuilder<
    CreateNetworkInsightsAccessScopeCommandInput,
    CreateNetworkInsightsAccessScopeCommandOutput,
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
  .s("AmazonEC2", "CreateNetworkInsightsAccessScope", {})
  .n("EC2Client", "CreateNetworkInsightsAccessScopeCommand")
  .f(void 0, void 0)
  .ser(se_CreateNetworkInsightsAccessScopeCommand)
  .de(de_CreateNetworkInsightsAccessScopeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateNetworkInsightsAccessScopeRequest;
      output: CreateNetworkInsightsAccessScopeResult;
    };
    sdk: {
      input: CreateNetworkInsightsAccessScopeCommandInput;
      output: CreateNetworkInsightsAccessScopeCommandOutput;
    };
  };
}
