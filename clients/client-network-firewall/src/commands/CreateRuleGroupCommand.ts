// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRuleGroupRequest, CreateRuleGroupResponse } from "../models/models_0";
import { NetworkFirewallClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NetworkFirewallClient";
import { de_CreateRuleGroupCommand, se_CreateRuleGroupCommand } from "../protocols/Aws_json1_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateRuleGroupCommand}.
 */
export interface CreateRuleGroupCommandInput extends CreateRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateRuleGroupCommand}.
 */
export interface CreateRuleGroupCommandOutput extends CreateRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Creates the specified stateless or stateful rule group, which includes the rules for
 *          network traffic inspection, a capacity setting, and tags. </p>
 *          <p>You provide your rule group specification in your request using either
 *             <code>RuleGroup</code> or <code>Rules</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, CreateRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, CreateRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // CreateRuleGroupRequest
 *   RuleGroupName: "STRING_VALUE", // required
 *   RuleGroup: { // RuleGroup
 *     RuleVariables: { // RuleVariables
 *       IPSets: { // IPSets
 *         "<keys>": { // IPSet
 *           Definition: [ // VariableDefinitionList // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *       PortSets: { // PortSets
 *         "<keys>": { // PortSet
 *           Definition: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *     ReferenceSets: { // ReferenceSets
 *       IPSetReferences: { // IPSetReferenceMap
 *         "<keys>": { // IPSetReference
 *           ReferenceArn: "STRING_VALUE",
 *         },
 *       },
 *     },
 *     RulesSource: { // RulesSource
 *       RulesString: "STRING_VALUE",
 *       RulesSourceList: { // RulesSourceList
 *         Targets: [ // RuleTargets // required
 *           "STRING_VALUE",
 *         ],
 *         TargetTypes: [ // TargetTypes // required
 *           "TLS_SNI" || "HTTP_HOST",
 *         ],
 *         GeneratedRulesType: "ALLOWLIST" || "DENYLIST", // required
 *       },
 *       StatefulRules: [ // StatefulRules
 *         { // StatefulRule
 *           Action: "PASS" || "DROP" || "ALERT" || "REJECT", // required
 *           Header: { // Header
 *             Protocol: "IP" || "TCP" || "UDP" || "ICMP" || "HTTP" || "FTP" || "TLS" || "SMB" || "DNS" || "DCERPC" || "SSH" || "SMTP" || "IMAP" || "MSN" || "KRB5" || "IKEV2" || "TFTP" || "NTP" || "DHCP" || "HTTP2" || "QUIC", // required
 *             Source: "STRING_VALUE", // required
 *             SourcePort: "STRING_VALUE", // required
 *             Direction: "FORWARD" || "ANY", // required
 *             Destination: "STRING_VALUE", // required
 *             DestinationPort: "STRING_VALUE", // required
 *           },
 *           RuleOptions: [ // RuleOptions // required
 *             { // RuleOption
 *               Keyword: "STRING_VALUE", // required
 *               Settings: [ // Settings
 *                 "STRING_VALUE",
 *               ],
 *             },
 *           ],
 *         },
 *       ],
 *       StatelessRulesAndCustomActions: { // StatelessRulesAndCustomActions
 *         StatelessRules: [ // StatelessRules // required
 *           { // StatelessRule
 *             RuleDefinition: { // RuleDefinition
 *               MatchAttributes: { // MatchAttributes
 *                 Sources: [ // Addresses
 *                   { // Address
 *                     AddressDefinition: "STRING_VALUE", // required
 *                   },
 *                 ],
 *                 Destinations: [
 *                   {
 *                     AddressDefinition: "STRING_VALUE", // required
 *                   },
 *                 ],
 *                 SourcePorts: [ // PortRanges
 *                   { // PortRange
 *                     FromPort: Number("int"), // required
 *                     ToPort: Number("int"), // required
 *                   },
 *                 ],
 *                 DestinationPorts: [
 *                   {
 *                     FromPort: Number("int"), // required
 *                     ToPort: Number("int"), // required
 *                   },
 *                 ],
 *                 Protocols: [ // ProtocolNumbers
 *                   Number("int"),
 *                 ],
 *                 TCPFlags: [ // TCPFlags
 *                   { // TCPFlagField
 *                     Flags: [ // Flags // required
 *                       "FIN" || "SYN" || "RST" || "PSH" || "ACK" || "URG" || "ECE" || "CWR",
 *                     ],
 *                     Masks: [
 *                       "FIN" || "SYN" || "RST" || "PSH" || "ACK" || "URG" || "ECE" || "CWR",
 *                     ],
 *                   },
 *                 ],
 *               },
 *               Actions: [ // StatelessActions // required
 *                 "STRING_VALUE",
 *               ],
 *             },
 *             Priority: Number("int"), // required
 *           },
 *         ],
 *         CustomActions: [ // CustomActions
 *           { // CustomAction
 *             ActionName: "STRING_VALUE", // required
 *             ActionDefinition: { // ActionDefinition
 *               PublishMetricAction: { // PublishMetricAction
 *                 Dimensions: [ // Dimensions // required
 *                   { // Dimension
 *                     Value: "STRING_VALUE", // required
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *         ],
 *       },
 *     },
 *     StatefulRuleOptions: { // StatefulRuleOptions
 *       RuleOrder: "DEFAULT_ACTION_ORDER" || "STRICT_ORDER",
 *     },
 *   },
 *   Rules: "STRING_VALUE",
 *   Type: "STATELESS" || "STATEFUL", // required
 *   Description: "STRING_VALUE",
 *   Capacity: Number("int"), // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   DryRun: true || false,
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 *   SourceMetadata: { // SourceMetadata
 *     SourceArn: "STRING_VALUE",
 *     SourceUpdateToken: "STRING_VALUE",
 *   },
 *   AnalyzeRuleGroup: true || false,
 *   SummaryConfiguration: { // SummaryConfiguration
 *     RuleOptions: [ // SummaryRuleOptions
 *       "SID" || "MSG" || "METADATA",
 *     ],
 *   },
 * };
 * const command = new CreateRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateRuleGroupResponse
 * //   UpdateToken: "STRING_VALUE", // required
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
 * @param CreateRuleGroupCommandInput - {@link CreateRuleGroupCommandInput}
 * @returns {@link CreateRuleGroupCommandOutput}
 * @see {@link CreateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link CreateRuleGroupCommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InsufficientCapacityException} (server fault)
 *  <p>Amazon Web Services doesn't currently have enough available capacity to fulfill your request. Try your
 *          request later. </p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>Unable to perform the operation because doing so would violate a limit setting. </p>
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
export class CreateRuleGroupCommand extends $Command
  .classBuilder<
    CreateRuleGroupCommandInput,
    CreateRuleGroupCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("NetworkFirewall_20201112", "CreateRuleGroup", {})
  .n("NetworkFirewallClient", "CreateRuleGroupCommand")
  .f(void 0, void 0)
  .ser(se_CreateRuleGroupCommand)
  .de(de_CreateRuleGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRuleGroupRequest;
      output: CreateRuleGroupResponse;
    };
    sdk: {
      input: CreateRuleGroupCommandInput;
      output: CreateRuleGroupCommandOutput;
    };
  };
}
