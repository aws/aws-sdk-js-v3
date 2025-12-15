// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateRuleGroupRequest, UpdateRuleGroupResponse } from "../models/models_0";
import type {
  NetworkFirewallClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../NetworkFirewallClient";
import { UpdateRuleGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRuleGroupCommand}.
 */
export interface UpdateRuleGroupCommandInput extends UpdateRuleGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRuleGroupCommand}.
 */
export interface UpdateRuleGroupCommandOutput extends UpdateRuleGroupResponse, __MetadataBearer {}

/**
 * <p>Updates the rule settings for the specified rule group. You use a rule group by
 *          reference in one or more firewall policies. When you modify a rule group, you modify all
 *          firewall policies that use the rule group. </p>
 *          <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the
 *          current <a>RuleGroup</a> object, update the object as needed, and then provide
 *          the updated object to this call. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateRuleGroupCommand } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateRuleGroupCommand } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateRuleGroupRequest
 *   UpdateToken: "STRING_VALUE", // required
 *   RuleGroupArn: "STRING_VALUE",
 *   RuleGroupName: "STRING_VALUE",
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
 *         GeneratedRulesType: "ALLOWLIST" || "DENYLIST" || "REJECTLIST" || "ALERTLIST", // required
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
 *   Type: "STATELESS" || "STATEFUL",
 *   Description: "STRING_VALUE",
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
 * const command = new UpdateRuleGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRuleGroupResponse
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
 * @param UpdateRuleGroupCommandInput - {@link UpdateRuleGroupCommandInput}
 * @returns {@link UpdateRuleGroupCommandOutput}
 * @see {@link UpdateRuleGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateRuleGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link InvalidTokenException} (client fault)
 *  <p>The token you provided is stale or isn't valid for the operation. </p>
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
export class UpdateRuleGroupCommand extends $Command
  .classBuilder<
    UpdateRuleGroupCommandInput,
    UpdateRuleGroupCommandOutput,
    NetworkFirewallClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NetworkFirewallClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("NetworkFirewall_20201112", "UpdateRuleGroup", {})
  .n("NetworkFirewallClient", "UpdateRuleGroupCommand")
  .sc(UpdateRuleGroup$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRuleGroupRequest;
      output: UpdateRuleGroupResponse;
    };
    sdk: {
      input: UpdateRuleGroupCommandInput;
      output: UpdateRuleGroupCommandOutput;
    };
  };
}
