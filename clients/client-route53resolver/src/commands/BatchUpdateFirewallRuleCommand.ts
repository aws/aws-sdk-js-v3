// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchUpdateFirewallRuleRequest, BatchUpdateFirewallRuleResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { BatchUpdateFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateFirewallRuleCommand}.
 */
export interface BatchUpdateFirewallRuleCommandInput extends BatchUpdateFirewallRuleRequest {}
/**
 * @public
 *
 * The output of {@link BatchUpdateFirewallRuleCommand}.
 */
export interface BatchUpdateFirewallRuleCommandOutput extends BatchUpdateFirewallRuleResponse, __MetadataBearer {}

/**
 * <p>Updates multiple DNS Firewall rules in the specified rule group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, BatchUpdateFirewallRuleCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, BatchUpdateFirewallRuleCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // BatchUpdateFirewallRuleRequest
 *   UpdateFirewallRuleEntries: [ // UpdateFirewallRuleEntries // required
 *     { // UpdateFirewallRuleEntry
 *       FirewallRuleGroupId: "STRING_VALUE", // required
 *       FirewallDomainListId: "STRING_VALUE",
 *       FirewallThreatProtectionId: "STRING_VALUE",
 *       Priority: Number("int"),
 *       Action: "ALLOW" || "BLOCK" || "ALERT",
 *       BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 *       BlockOverrideDomain: "STRING_VALUE",
 *       BlockOverrideDnsType: "CNAME",
 *       BlockOverrideTtl: Number("int"),
 *       Name: "STRING_VALUE",
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
 * const command = new BatchUpdateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateFirewallRuleResponse
 * //   UpdatedFirewallRules: [ // FirewallRules
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
 * //   UpdateErrors: [ // BatchUpdateFirewallRuleErrors
 * //     { // BatchUpdateFirewallRuleError
 * //       FirewallRule: { // UpdateFirewallRuleEntry
 * //         FirewallRuleGroupId: "STRING_VALUE", // required
 * //         FirewallDomainListId: "STRING_VALUE",
 * //         FirewallThreatProtectionId: "STRING_VALUE",
 * //         Priority: Number("int"),
 * //         Action: "ALLOW" || "BLOCK" || "ALERT",
 * //         BlockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //         BlockOverrideDomain: "STRING_VALUE",
 * //         BlockOverrideDnsType: "CNAME",
 * //         BlockOverrideTtl: Number("int"),
 * //         Name: "STRING_VALUE",
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
 * @param BatchUpdateFirewallRuleCommandInput - {@link BatchUpdateFirewallRuleCommandInput}
 * @returns {@link BatchUpdateFirewallRuleCommandOutput}
 * @see {@link BatchUpdateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateFirewallRuleCommandOutput} for command's `response` shape.
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
export class BatchUpdateFirewallRuleCommand extends $Command
  .classBuilder<
    BatchUpdateFirewallRuleCommandInput,
    BatchUpdateFirewallRuleCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "BatchUpdateFirewallRule", {})
  .n("Route53ResolverClient", "BatchUpdateFirewallRuleCommand")
  .sc(BatchUpdateFirewallRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateFirewallRuleRequest;
      output: BatchUpdateFirewallRuleResponse;
    };
    sdk: {
      input: BatchUpdateFirewallRuleCommandInput;
      output: BatchUpdateFirewallRuleCommandOutput;
    };
  };
}
