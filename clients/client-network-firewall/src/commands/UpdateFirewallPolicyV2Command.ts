// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFirewallPolicyV2Request, UpdateFirewallPolicyV2Response } from "../models/models_0";
import { UpdateFirewallPolicyV2$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFirewallPolicyV2Command}.
 */
export interface UpdateFirewallPolicyV2CommandInput extends UpdateFirewallPolicyV2Request {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallPolicyV2Command}.
 */
export interface UpdateFirewallPolicyV2CommandOutput extends UpdateFirewallPolicyV2Response, __MetadataBearer {}

/**
 * <p>Updates the properties of the specified Next Generation policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NetworkFirewallClient, UpdateFirewallPolicyV2Command } from "@aws-sdk/client-network-firewall"; // ES Modules import
 * // const { NetworkFirewallClient, UpdateFirewallPolicyV2Command } = require("@aws-sdk/client-network-firewall"); // CommonJS import
 * // import type { NetworkFirewallClientConfig } from "@aws-sdk/client-network-firewall";
 * const config = {}; // type is NetworkFirewallClientConfig
 * const client = new NetworkFirewallClient(config);
 * const input = { // UpdateFirewallPolicyV2Request
 *   UpdateToken: "STRING_VALUE", // required
 *   FirewallPolicyV2Arn: "STRING_VALUE",
 *   FirewallPolicyV2Name: "STRING_VALUE",
 *   FirewallPolicyV2: { // FirewallPolicyV2
 *     FirewallRuleGroupEntries: [ // FirewallRuleGroupEntries
 *       { // FirewallRuleGroupEntry
 *         Priority: Number("int"),
 *         ResourceArn: "STRING_VALUE",
 *         InlineRuleGroup: { // FirewallRuleGroup
 *           RulesSource: { // FirewallRulesSource
 *             RulesString: "STRING_VALUE",
 *             FirewallRules: [ // FirewallRules
 *               { // FirewallRule
 *                 Action: "ACCEPT" || "DROP" || "REJECT" || "REJECT_DST" || "REJECT_BOTH", // required
 *                 ActionScope: "FLOW" || "TX" || "HOOK" || "PACKET", // required
 *                 Hook: "TCP_ALL" || "TCP_FLOW_START" || "TCP_PRE_FLOW" || "TCP_PRE_STREAM" || "SCTP_ALL" || "SCTP_FLOW_START" || "SCTP_PRE_FLOW" || "SCTP_PRE_STREAM" || "IPV6_ALL" || "IPV6_FLOW_START" || "IPV6_PRE_FLOW" || "IPV6_PRE_STREAM" || "ICMPV6_ALL" || "ICMPV6_FLOW_START" || "ICMPV6_PRE_FLOW" || "ICMPV6_PRE_STREAM" || "UDP_ALL" || "UDP_FLOW_START" || "UDP_PRE_FLOW" || "UDP_PRE_STREAM" || "ICMP_ALL" || "ICMP_FLOW_START" || "ICMP_PRE_FLOW" || "ICMP_PRE_STREAM" || "ICMPV4_ALL" || "ICMPV4_FLOW_START" || "ICMPV4_PRE_FLOW" || "ICMPV4_PRE_STREAM" || "IP_ALL" || "IP_FLOW_START" || "IP_PRE_FLOW" || "IP_PRE_STREAM" || "IPV4_ALL" || "IPV4_FLOW_START" || "IPV4_PRE_FLOW" || "IPV4_PRE_STREAM" || "TLS_CLIENT_STARTED" || "TLS_CLIENT_HELLO" || "TLS_CLIENT_CERT" || "TLS_CLIENT_DATA" || "TLS_CLIENT_FINISHED" || "TLS_SERVER_STARTED" || "TLS_SERVER_HELLO" || "TLS_SERVER_CERT" || "TLS_SERVER_DATA" || "TLS_SERVER_FINISHED" || "HTTP1_REQUEST_STARTED" || "HTTP1_REQUEST_LINE" || "HTTP1_REQUEST_HEADERS" || "HTTP1_REQUEST_BODY" || "HTTP1_REQUEST_TRAILER" || "HTTP1_REQUEST_COMPLETE" || "HTTP1_RESPONSE_STARTED" || "HTTP1_RESPONSE_LINE" || "HTTP1_RESPONSE_HEADERS" || "HTTP1_RESPONSE_BODY" || "HTTP1_RESPONSE_TRAILER" || "HTTP1_RESPONSE_COMPLETE" || "HTTP2_STREAM_REQUEST_STARTED" || "HTTP2_STREAM_REQUEST_HEADERS" || "HTTP2_STREAM_REQUEST_DATA" || "HTTP2_STREAM_REQUEST_CLOSED" || "HTTP2_STREAM_REQUEST_COMPLETE" || "HTTP2_STREAM_RESPONSE_STARTED" || "HTTP2_STREAM_RESPONSE_HEADERS" || "HTTP2_STREAM_RESPONSE_DATA" || "HTTP2_STREAM_RESPONSE_CLOSED" || "HTTP2_STREAM_RESPONSE_COMPLETE" || "HTTP2_GLOBAL_REQUEST_STARTED" || "HTTP2_GLOBAL_REQUEST_COMPLETE" || "HTTP2_GLOBAL_RESPONSE_STARTED" || "HTTP2_GLOBAL_RESPONSE_COMPLETE" || "DOH2_STREAM_REQUEST_STARTED" || "DOH2_STREAM_REQUEST_HEADERS" || "DOH2_STREAM_REQUEST_DATA" || "DOH2_STREAM_REQUEST_CLOSED" || "DOH2_STREAM_REQUEST_COMPLETE" || "DOH2_STREAM_RESPONSE_STARTED" || "DOH2_STREAM_RESPONSE_HEADERS" || "DOH2_STREAM_RESPONSE_DATA" || "DOH2_STREAM_RESPONSE_CLOSED" || "DOH2_STREAM_RESPONSE_COMPLETE" || "DOH2_GLOBAL_REQUEST_STARTED" || "DOH2_GLOBAL_REQUEST_COMPLETE" || "DOH2_GLOBAL_RESPONSE_STARTED" || "DOH2_GLOBAL_RESPONSE_COMPLETE" || "DNS_REQUEST_STARTED" || "DNS_REQUEST_COMPLETE" || "DNS_RESPONSE_STARTED" || "DNS_RESPONSE_COMPLETE" || "SMTP_REQUEST_STARTED" || "SMTP_REQUEST_DATA" || "SMTP_REQUEST_COMPLETE" || "SMTP_RESPONSE_STARTED" || "SMTP_RESPONSE_DATA" || "SMTP_RESPONSE_COMPLETE" || "FTP_REQUEST_STARTED" || "FTP_REQUEST_COMPLETE" || "FTP_RESPONSE_STARTED" || "FTP_RESPONSE_COMPLETE" || "FTP_DATA_REQUEST_STARTED" || "FTP_DATA_REQUEST_COMPLETE" || "FTP_DATA_RESPONSE_STARTED" || "FTP_DATA_RESPONSE_COMPLETE" || "SMB_REQUEST_STARTED" || "SMB_REQUEST_COMPLETE" || "SMB_RESPONSE_STARTED" || "SMB_RESPONSE_COMPLETE" || "DCERPC_REQUEST_STARTED" || "DCERPC_REQUEST_COMPLETE" || "DCERPC_RESPONSE_STARTED" || "DCERPC_RESPONSE_COMPLETE" || "NFS_REQUEST_STARTED" || "NFS_REQUEST_COMPLETE" || "NFS_RESPONSE_STARTED" || "NFS_RESPONSE_COMPLETE" || "KRB5_REQUEST_STARTED" || "KRB5_REQUEST_COMPLETE" || "KRB5_RESPONSE_STARTED" || "KRB5_RESPONSE_COMPLETE" || "IKE_REQUEST_STARTED" || "IKE_REQUEST_COMPLETE" || "IKE_RESPONSE_STARTED" || "IKE_RESPONSE_COMPLETE" || "TFTP_REQUEST_STARTED" || "TFTP_REQUEST_COMPLETE" || "TFTP_RESPONSE_STARTED" || "TFTP_RESPONSE_COMPLETE" || "DHCP_REQUEST_STARTED" || "DHCP_REQUEST_COMPLETE" || "DHCP_RESPONSE_STARTED" || "DHCP_RESPONSE_COMPLETE" || "QUIC_REQUEST_STARTED" || "QUIC_REQUEST_COMPLETE" || "QUIC_RESPONSE_STARTED" || "QUIC_RESPONSE_COMPLETE" || "RDP_REQUEST_STARTED" || "RDP_REQUEST_COMPLETE" || "RDP_RESPONSE_STARTED" || "RDP_RESPONSE_COMPLETE" || "RFB_REQUEST_STARTED" || "RFB_REQUEST_COMPLETE" || "RFB_RESPONSE_STARTED" || "RFB_RESPONSE_COMPLETE" || "MQTT_REQUEST_STARTED" || "MQTT_REQUEST_COMPLETE" || "MQTT_RESPONSE_STARTED" || "MQTT_RESPONSE_COMPLETE" || "PGSQL_REQUEST_STARTED" || "PGSQL_REQUEST_COMPLETE" || "PGSQL_RESPONSE_STARTED" || "PGSQL_RESPONSE_COMPLETE" || "SNMP_REQUEST_STARTED" || "SNMP_REQUEST_COMPLETE" || "SNMP_RESPONSE_STARTED" || "SNMP_RESPONSE_COMPLETE" || "NTP_REQUEST_STARTED" || "NTP_REQUEST_COMPLETE" || "NTP_RESPONSE_STARTED" || "NTP_RESPONSE_COMPLETE" || "TELNET_REQUEST_STARTED" || "TELNET_REQUEST_COMPLETE" || "TELNET_RESPONSE_STARTED" || "TELNET_RESPONSE_COMPLETE" || "WEBSOCKET_REQUEST_STARTED" || "WEBSOCKET_REQUEST_COMPLETE" || "WEBSOCKET_RESPONSE_STARTED" || "WEBSOCKET_RESPONSE_COMPLETE" || "LDAP_REQUEST_STARTED" || "LDAP_REQUEST_COMPLETE" || "LDAP_RESPONSE_STARTED" || "LDAP_RESPONSE_COMPLETE" || "POP3_REQUEST_STARTED" || "POP3_REQUEST_COMPLETE" || "POP3_RESPONSE_STARTED" || "POP3_RESPONSE_COMPLETE" || "MDNS_REQUEST_STARTED" || "MDNS_REQUEST_COMPLETE" || "MDNS_RESPONSE_STARTED" || "MDNS_RESPONSE_COMPLETE" || "BITTORRENT_DHT_REQUEST_STARTED" || "BITTORRENT_DHT_REQUEST_COMPLETE" || "BITTORRENT_DHT_RESPONSE_STARTED" || "BITTORRENT_DHT_RESPONSE_COMPLETE" || "DNP3_REQUEST_STARTED" || "DNP3_REQUEST_COMPLETE" || "DNP3_RESPONSE_STARTED" || "DNP3_RESPONSE_COMPLETE" || "SSH_REQUEST_IN_PROGRESS" || "SSH_REQUEST_BANNER_WAIT_EOL" || "SSH_REQUEST_BANNER_DONE" || "SSH_REQUEST_FINISHED" || "SSH_RESPONSE_IN_PROGRESS" || "SSH_RESPONSE_BANNER_WAIT_EOL" || "SSH_RESPONSE_BANNER_DONE" || "SSH_RESPONSE_FINISHED", // required
 *                 Protocol: "IP" || "TCP" || "UDP" || "ICMP" || "HTTP" || "FTP" || "TLS" || "SMB" || "DNS" || "DCERPC" || "SSH" || "SMTP" || "MSN" || "KRB5" || "IKEV2" || "TFTP" || "NTP" || "DHCP" || "HTTP2" || "QUIC" || "ICMPV4" || "ICMPV6" || "SCTP" || "IPV4" || "IPV6" || "DOH2" || "FTP_DATA" || "NFS" || "RDP" || "RFB" || "MQTT" || "PGSQL" || "SNMP" || "TELNET" || "WEBSOCKET" || "LDAP" || "POP3" || "MDNS" || "BITTORRENT_DHT" || "DNP3", // required
 *                 SourceIPs: "STRING_VALUE",
 *                 DestIPs: "STRING_VALUE",
 *                 SourcePorts: "STRING_VALUE",
 *                 DestPorts: "STRING_VALUE",
 *                 RuleOptions: [ // RuleOptions
 *                   { // RuleOption
 *                     Keyword: "STRING_VALUE", // required
 *                     Settings: [ // Settings
 *                       "STRING_VALUE",
 *                     ],
 *                   },
 *                 ],
 *                 AcceptPriorHooks: true || false,
 *                 AlertEnabled: true || false,
 *                 BypassIPSEnabled: true || false,
 *                 RuleMetadata: { // RuleMetadata
 *                   RuleEnabled: true || false,
 *                   RuleDescription: "STRING_VALUE",
 *                 },
 *               },
 *             ],
 *             RulesSourceList: { // RulesSourceList
 *               Targets: [ // RuleTargets // required
 *                 "STRING_VALUE",
 *               ],
 *               TargetTypes: [ // TargetTypes // required
 *                 "TLS_SNI" || "HTTP_HOST" || "AWS_ROUTE_53_RESOLVED_DOMAIN",
 *               ],
 *               GeneratedRulesType: "ALLOWLIST" || "DENYLIST" || "REJECTLIST" || "ALERTLIST", // required
 *             },
 *           },
 *           RuleVariables: { // RuleVariables
 *             IPSets: { // IPSets
 *               "<keys>": { // IPSet
 *                 Definition: [ // VariableDefinitionList // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *             PortSets: { // PortSets
 *               "<keys>": { // PortSet
 *                 Definition: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           },
 *           ReferenceSets: { // ReferenceSets
 *             IPSetReferences: { // IPSetReferenceMap
 *               "<keys>": { // IPSetReference
 *                 ReferenceArn: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         },
 *       },
 *     ],
 *     IpsRuleGroupEntries: [ // IpsRuleGroupEntries
 *       { // IpsRuleGroupEntry
 *         ResourceArn: "STRING_VALUE",
 *         InlineRuleGroup: { // IpsRuleGroup
 *           RulesSource: { // IpsRulesSource
 *             RulesString: "STRING_VALUE",
 *           },
 *           RuleVariables: {
 *             IPSets: {
 *               "<keys>": {
 *                 Definition: [ // required
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *             PortSets: {
 *               "<keys>": {
 *                 Definition: [
 *                   "STRING_VALUE",
 *                 ],
 *               },
 *             },
 *           },
 *           ReferenceSets: {
 *             IPSetReferences: {
 *               "<keys>": {
 *                 ReferenceArn: "STRING_VALUE",
 *               },
 *             },
 *           },
 *         },
 *         Override: { // IpsRuleGroupOverride
 *           Action: "DROP_TO_ALERT",
 *         },
 *       },
 *     ],
 *     PolicyMode: "ENFORCE" || "MONITOR",
 *     FirewallDefaultAction: "DROP" || "ACCEPT" || "REJECT" || "ALERT",
 *     StatefulEngineOptions: { // StatefulEngineOptionsV2
 *       StreamExceptionPolicy: "DROP" || "REJECT",
 *       FlowTimeouts: { // FlowTimeouts
 *         TcpIdleTimeoutSeconds: Number("int"),
 *       },
 *     },
 *     TLSInspectionConfigurationArn: "STRING_VALUE",
 *     PolicyVariables: { // PolicyVariables
 *       RuleVariables: {
 *         "<keys>": {
 *           Definition: [ // required
 *             "STRING_VALUE",
 *           ],
 *         },
 *       },
 *     },
 *     Route53ResolvedIPValidation: { // Route53ResolvedIPValidation
 *       Action: "REJECT" || "DROP" || "ALERT", // required
 *       DNSFirewallRuleGroupId: "STRING_VALUE", // required
 *       DNSExpiryExceptionPolicy: "REJECT" || "DROP" || "CONTINUE", // required
 *       BypassDestinationValidationIPRanges: [ // Route53ResolvedIPValidationAddresses
 *         { // Address
 *           AddressDefinition: "STRING_VALUE", // required
 *         },
 *       ],
 *       SourceIPRanges: [
 *         {
 *           AddressDefinition: "STRING_VALUE", // required
 *         },
 *       ],
 *     },
 *   },
 *   Description: "STRING_VALUE",
 *   DryRun: true || false,
 *   EncryptionConfiguration: { // EncryptionConfiguration
 *     KeyId: "STRING_VALUE",
 *     Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 *   },
 * };
 * const command = new UpdateFirewallPolicyV2Command(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallPolicyV2Response
 * //   UpdateToken: "STRING_VALUE", // required
 * //   FirewallPolicyV2Response: { // FirewallPolicyV2Response
 * //     FirewallPolicyV2Name: "STRING_VALUE", // required
 * //     FirewallPolicyV2Arn: "STRING_VALUE", // required
 * //     FirewallPolicyV2Id: "STRING_VALUE", // required
 * //     Description: "STRING_VALUE",
 * //     FirewallPolicyV2Status: "ACTIVE" || "DELETING" || "ERROR" || "UPDATING",
 * //     StatusMessage: "STRING_VALUE",
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     ConsumedFirewallRuleCapacity: Number("int"),
 * //     ConsumedIpsRuleCapacity: Number("int"),
 * //     ConsumedIpsDomainCapacity: Number("int"),
 * //     NumberOfAssociations: Number("int"),
 * //     EncryptionConfiguration: { // EncryptionConfiguration
 * //       KeyId: "STRING_VALUE",
 * //       Type: "CUSTOMER_KMS" || "AWS_OWNED_KMS_KEY", // required
 * //     },
 * //     Errors: [ // FirewallPolicyErrors
 * //       { // FirewallPolicyError
 * //         Code: "DNS_FIREWALL_RULE_GROUP_UNAVAILABLE" || "ROUTE53_RESOLVED_IP_VALIDATION_MISSING", // required
 * //         Message: "STRING_VALUE", // required
 * //         ResourceId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     LastModifiedTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateFirewallPolicyV2CommandInput - {@link UpdateFirewallPolicyV2CommandInput}
 * @returns {@link UpdateFirewallPolicyV2CommandOutput}
 * @see {@link UpdateFirewallPolicyV2CommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallPolicyV2CommandOutput} for command's `response` shape.
 * @see {@link NetworkFirewallClientResolvedConfig | config} for NetworkFirewallClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>Your request is valid, but Network Firewall couldn't perform the operation because of a
 *          system problem. Retry your request. </p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation failed because it's not valid. For example, you might have tried to delete
 *          a rule group or firewall policy that's in use.</p>
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
export class UpdateFirewallPolicyV2Command extends command<UpdateFirewallPolicyV2CommandInput, UpdateFirewallPolicyV2CommandOutput>(
  _ep0,
  _mw0,
  "UpdateFirewallPolicyV2",
  UpdateFirewallPolicyV2$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallPolicyV2Request;
      output: UpdateFirewallPolicyV2Response;
    };
    sdk: {
      input: UpdateFirewallPolicyV2CommandInput;
      output: UpdateFirewallPolicyV2CommandOutput;
    };
  };
}
