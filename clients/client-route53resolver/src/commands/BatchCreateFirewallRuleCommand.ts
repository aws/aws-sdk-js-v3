// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreateFirewallRuleRequest, BatchCreateFirewallRuleResponse } from "../models/models_0";
import { BatchCreateFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchCreateFirewallRuleCommand}.
 */
export interface BatchCreateFirewallRuleCommandInput extends BatchCreateFirewallRuleRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateFirewallRuleCommand}.
 */
export interface BatchCreateFirewallRuleCommandOutput extends BatchCreateFirewallRuleResponse, __MetadataBearer {}

/**
 * <p>Creates multiple DNS Firewall rules in the specified rule group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, BatchCreateFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, BatchCreateFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // BatchCreateFirewallRuleRequest
 *   CreateFirewallRuleEntries: [ // CreateFirewallRuleEntries // required
 *     { // CreateFirewallRuleEntry
 *       CreatorRequestId: "STRING_VALUE", // required
 *       FirewallRuleGroupId: "STRING_VALUE", // required
 *       FirewallDomainListId: "STRING_VALUE",
 *       Priority: Number("int"), // required
 *       Action: "ALLOW" || "BLOCK" || "ALERT", // required
 *       BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 *       BlockOverrideDomain: "STRING_VALUE",
 *       BlockOverrideDnsType: "CNAME",
 *       BlockOverrideTtl: Number("int"),
 *       Name: "STRING_VALUE", // required
 *       FirewallDomainRedirectionAction: "INSPECT_REDIRECTION_DOMAIN" || "TRUST_REDIRECTION_DOMAIN",
 *       Qtype: "STRING_VALUE",
 *       DnsThreatProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 *       ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 *       FirewallRuleType: { // FirewallRuleType
 *         PartnerThreatProtection: { // PartnerThreatProtectionConfig
 *           Partner: "STRING_VALUE", // required
 *         },
 *         FirewallAdvancedContentCategory: { // FirewallAdvancedContentCategoryConfig
 *           Category: "STRING_VALUE", // required
 *         },
 *         FirewallAdvancedThreatCategory: { // FirewallAdvancedThreatCategoryConfig
 *           Category: "STRING_VALUE", // required
 *         },
 *         DnsThreatProtection: { // DnsThreatProtectionRuleTypeConfig
 *           Value: "STRING_VALUE", // required
 *           ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH", // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchCreateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateFirewallRuleResponse
 * //   CreatedFirewallRules: [ // FirewallRules
 * //     { // FirewallRule
 * //       FirewallRuleGroupId: "STRING_VALUE",
 * //       FirewallDomainListId: "STRING_VALUE",
 * //       FirewallThreatProtectionId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Priority: Number("int"),
 * //       Action: "ALLOW" || "BLOCK" || "ALERT",
 * //       BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //       BlockOverrideDomain: "STRING_VALUE",
 * //       BlockOverrideDnsType: "CNAME",
 * //       BlockOverrideTtl: Number("int"),
 * //       CreatorRequestId: "STRING_VALUE",
 * //       CreationTime: "STRING_VALUE",
 * //       ModificationTime: "STRING_VALUE",
 * //       FirewallDomainRedirectionAction: "INSPECT_REDIRECTION_DOMAIN" || "TRUST_REDIRECTION_DOMAIN",
 * //       Qtype: "STRING_VALUE",
 * //       DnsThreatProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 * //       ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //       FirewallRuleType: { // FirewallRuleType
 * //         PartnerThreatProtection: { // PartnerThreatProtectionConfig
 * //           Partner: "STRING_VALUE", // required
 * //         },
 * //         FirewallAdvancedContentCategory: { // FirewallAdvancedContentCategoryConfig
 * //           Category: "STRING_VALUE", // required
 * //         },
 * //         FirewallAdvancedThreatCategory: { // FirewallAdvancedThreatCategoryConfig
 * //           Category: "STRING_VALUE", // required
 * //         },
 * //         DnsThreatProtection: { // DnsThreatProtectionRuleTypeConfig
 * //           Value: "STRING_VALUE", // required
 * //           ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH", // required
 * //         },
 * //       },
 * //       Status: "STRING_VALUE",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   CreateErrors: [ // BatchCreateFirewallRuleErrors
 * //     { // BatchCreateFirewallRuleError
 * //       FirewallRule: { // CreateFirewallRuleEntry
 * //         CreatorRequestId: "STRING_VALUE", // required
 * //         FirewallRuleGroupId: "STRING_VALUE", // required
 * //         FirewallDomainListId: "STRING_VALUE",
 * //         Priority: Number("int"), // required
 * //         Action: "ALLOW" || "BLOCK" || "ALERT", // required
 * //         BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //         BlockOverrideDomain: "STRING_VALUE",
 * //         BlockOverrideDnsType: "CNAME",
 * //         BlockOverrideTtl: Number("int"),
 * //         Name: "STRING_VALUE", // required
 * //         FirewallDomainRedirectionAction: "INSPECT_REDIRECTION_DOMAIN" || "TRUST_REDIRECTION_DOMAIN",
 * //         Qtype: "STRING_VALUE",
 * //         DnsThreatProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 * //         ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //         FirewallRuleType: {
 * //           PartnerThreatProtection: {
 * //             Partner: "STRING_VALUE", // required
 * //           },
 * //           FirewallAdvancedContentCategory: {
 * //             Category: "STRING_VALUE", // required
 * //           },
 * //           FirewallAdvancedThreatCategory: {
 * //             Category: "STRING_VALUE", // required
 * //           },
 * //           DnsThreatProtection: {
 * //             Value: "STRING_VALUE", // required
 * //             ConfidenceThreshold: "LOW" || "MEDIUM" || "HIGH", // required
 * //           },
 * //         },
 * //       },
 * //       Code: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateFirewallRuleCommandInput - {@link BatchCreateFirewallRuleCommandInput}
 * @returns {@link BatchCreateFirewallRuleCommandOutput}
 * @see {@link BatchCreateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link BatchCreateFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Try again in a few minutes.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>You have provided an invalid command. If you ran the <code>UpdateFirewallDomains</code> request. supported values are <code>ADD</code>,
 * 			<code>REMOVE</code>, or <code>REPLACE</code> a domain.</p>
 *
 * @throws {@link Route53ResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53Resolver service.</p>
 *
 *
 * @public
 */
export class BatchCreateFirewallRuleCommand extends command<BatchCreateFirewallRuleCommandInput, BatchCreateFirewallRuleCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateFirewallRule",
  BatchCreateFirewallRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateFirewallRuleRequest;
      output: BatchCreateFirewallRuleResponse;
    };
    sdk: {
      input: BatchCreateFirewallRuleCommandInput;
      output: BatchCreateFirewallRuleCommandOutput;
    };
  };
}
