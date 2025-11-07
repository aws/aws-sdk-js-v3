// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRuleGroupRequest, DescribeRuleGroupResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { DescribeRuleGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRuleGroupCommand}.
 */
export interface DescribeRuleGroupCommandInput extends DescribeRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRuleGroupCommand}.
 */
export interface DescribeRuleGroupCommandOutput extends DescribeRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Returns the data objects for the specified rule group. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, DescribeRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, DescribeRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // DescribeRuleGroupRequest
 *   RuleGroupName: "STRING_VALUE",
 *   RuleGroupArn: "STRING_VALUE",
 *   Type: "STATELESS" || "STATEFUL",
 *   AnalyzeRuleGroup: true || false,
 * };
 * const command = new DescribeRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRuleGroupResponse
 * //   UpdateToken: "STRING_VALUE", // required
 * //   RuleGroup: { // RuleGroup
 * //     RuleVariables: { // RuleVariables
 * //       IPSets: { // IPSets
 * //         "<keys>": { // IPSet
 * //           Definition: [ // VariableDefinitionList // required
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       PortSets: { // PortSets
 * //         "<keys>": { // PortSet
 * //           Definition: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     },
 * //     ReferenceSets: { // ReferenceSets
 * //       IPSetReferences: { // IPSetReferenceMap
 * //         "<keys>": { // IPSetReference
 * //           ReferenceArn: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //     RulesSource: { // RulesSource
 * //       RulesString: "STRING_VALUE",
 * //       RulesSourceList: { // RulesSourceList
 * //         Targets: [ // RuleTargets // required
 * //           "STRING_VALUE",
 * //         ],
 * //         TargetTypes: [ // TargetTypes // required
 * //           "TLS_SNI" || "HTTP_HOST",
 * //         ],
 * //         GeneratedRulesType: "ALLOWLIST" || "DENYLIST" || "REJECTLIST" || "ALERTLIST", // required
 * //       },
 * //       StatefulRules: [ // StatefulRules
 * //         { // StatefulRule
 * //           Action: "PASS" || "DROP" || "ALERT" || "REJECT", // required
 * //           Header: { // Header
 * //             Protocol: "IP" || "TCP" || "UDP" || "ICMP" || "HTTP" || "FTP" || "TLS" || "SMB" || "DNS" || "DCERPC" || "SSH" || "SMTP" || "IMAP" || "MSN" || "KRB5" || "IKEV2" || "TFTP" || "NTP" || "DHCP" || "HTTP2" || "QUIC", // required
 * //             Source: "STRING_VALUE", // required
 * //             SourcePort: "STRING_VALUE", // required
 * //             Direction: "FORWARD" || "ANY", // required
 * //             Destination: "STRING_VALUE", // required
 * //             DestinationPort: "STRING_VALUE", // required
 * //           },
 * //           RuleOptions: [ // RuleOptions // required
 * //             { // RuleOption
 * //               Keyword: "STRING_VALUE", // required
 * //               Settings: [ // Settings
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       StatelessRulesAndCustomActions: { // StatelessRulesAndCustomActions
 * //         StatelessRules: [ // StatelessRules // required
 * //           { // StatelessRule
 * //             RuleDefinition: { // RuleDefinition
 * //               MatchAttributes: { // MatchAttributes
 * //                 Sources: [ // Addresses
 * //                   { // Address
 * //                     AddressDefinition: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 Destinations: [
 * //                   {
 * //                     AddressDefinition: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //                 SourcePorts: [ // PortRanges
 * //                   { // PortRange
 * //                     FromPort: Number("int"), // required
 * //                     ToPort: Number("int"), // required
 * //                   },
 * //                 ],
 * //                 DestinationPorts: [
 * //                   {
 * //                     FromPort: Number("int"), // required
 * //                     ToPort: Number("int"), // required
 * //                   },
 * //                 ],
 * //                 Protocols: [ // ProtocolNumbers
 * //                   Number("int"),
 * //                 ],
 * //                 TCPFlags: [ // TCPFlags
 * //                   { // TCPFlagField
 * //                     Flags: [ // Flags // required
 * //                       "FIN" || "SYN" || "RST" || "PSH" || "ACK" || "URG" || "ECE" || "CWR",
 * //                     ],
 * //                     Masks: [
 * //                       "FIN" || "SYN" || "RST" || "PSH" || "ACK" || "URG" || "ECE" || "CWR",
 * //                     ],
 * //                   },
 * //                 ],
 * //               },
 * //               Actions: [ // StatelessActions // required
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             Priority: Number("int"), // required
 * //           },
 * //         ],
 * //         CustomActions: [ // CustomActions
 * //           { // CustomAction
 * //             ActionName: "STRING_VALUE", // required
 * //             ActionDefinition: { // ActionDefinition
 * //               PublishMetricAction: { // PublishMetricAction
 * //                 Dimensions: [ // Dimensions // required
 * //                   { // Dimension
 * //                     Value: "STRING_VALUE", // required
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     StatefulRuleOptions: { // StatefulRuleOptions
 * //       RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 * //     },
 * //   },
 * //   RuleGroupResponse: { // RuleGroupResponse
 * //     RuleGroupArn: "STRING_VALUE", // required
 * //     RuleGroupName: "STRING_VALUE", // required
 * //     RuleGroupId: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     Type: "STATELESS" || "STATEFUL",
 * //     Capacity: Number("int"),
 * //     RuleGroupStatus: "ACTIVE" || "DELETING" || "ERROR",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ConsumedCapacity: Number("int"),
 * //     NumberOfAssociations: Number("int"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //     SourceMetadata: { // SourceMetadata
 * //       SourceArn: "STRING_VALUE",
 * //       SourceUpdateToken: "STRING_VALUE",
 * //     },
 * //     SnsTopic: "STRING_VALUE",
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //     AnalysisResults: [ // AnalysisResultList
 * //       { // AnalysisResult
 * //         IdentifiedRuleIds: [ // RuleIdList
 * //           "STRING_VALUE",
 * //         ],
 * //         IdentifiedType: "STATELESS_RULE_FORWARDING_ASYMMETRICALLY" || "STATELESS_RULE_CONTAINS_TCP_FLAGS",
 * //         AnalysisDetail: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SummaryConfiguration: { // SummaryConfiguration
 * //       RuleOptions: [ // SummaryRuleOptions
 * //         "SID" || "MSG" || "METADATA",
 * //       ],
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRuleGroupCommandInput - {@link DescribeRuleGroupCommandInput}
 * @returns {@link DescribeRuleGroupCommandOutput}
 * @see {@link DescribeRuleGroupCommandInput} for command's `input` shape.
 * @see {@link DescribeRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The operation failed because of a problem with your request. Examples include: </p>
 *          <ul>
 *             <li>
 *                <p>You specified an unsupported parameter name or value.</p>
 *             </li>
 *             <li>
 *                <p>You tried to update a property with a value that isn't among the available
 *                types.</p>
 *             </li>
 *             <li>
 *                <p>Your request references an ARN that is malformed, or corresponds to a resource
 *                that isn't valid in the context of the request.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Unable to locate a resource using the parameters that you provided.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Unable to process the request due to throttling limitations.</p>
 *
 * @throws {@link NetworkFirewallServiceException}
 * <p>Base exception class for all service exceptions from NetworkFirewall service.</p>
 *
 *
 * @public
 */
export class DescribeRuleGroupCommand extends $Command
  .classBuilder<
    DescribeRuleGroupCommandInput,
    DescribeRuleGroupCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "DescribeRuleGroup", {})
  .n("NetworkFirewallClient", "DescribeRuleGroupCommand")
  .sc(DescribeRuleGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRuleGroupRequest;
      output: DescribeRuleGroupResponse;
    };
    sdk: {
      input: DescribeRuleGroupCommandInput;
      output: DescribeRuleGroupCommandOutput;
    };
  };
}
