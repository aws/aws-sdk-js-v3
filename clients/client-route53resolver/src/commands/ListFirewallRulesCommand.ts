// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFirewallRulesRequest, ListFirewallRulesResponse } from "../models/models_0";
import { ListFirewallRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFirewallRulesCommand}.
 */
export interface ListFirewallRulesCommandInput extends ListFirewallRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallRulesCommand}.
 */
export interface ListFirewallRulesCommandOutput extends ListFirewallRulesResponse, __MetadataBearer {}

/**
 * Retrieves the firewall rules that you have defined for the specified firewall rule group. DNS Firewall uses the rules in a rule group to filter DNS network traffic for a VPC.
 *
 * A single call might return only a partial list of the rules. For information, see `MaxResults`.
 *
 * For rules that require asynchronous provisioning, the response includes `Status` (see FirewallRuleStatus) and, on failure, `StatusMessage` with the reason.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRulesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRulesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallRulesRequest
 *   FirewallRuleGroupId: "STRING_VALUE", // required
 *   Priority: Number("int"),
 *   Action: "ALLOW" || "BLOCK" || "ALERT",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallRulesResponse
 * //   NextToken: "STRING_VALUE",
 * //   FirewallRules: [ // FirewallRules
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
 * // };
 *
 * ```
 *
 * @param ListFirewallRulesCommandInput - {@link ListFirewallRulesCommandInput}
 * @returns {@link ListFirewallRulesCommandOutput}
 * @see {@link ListFirewallRulesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRulesCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The current account doesn't have the IAM permissions required to perform the specified Resolver operation.
 *
 * This error can also be thrown when a customer has reached the 5120 character limit for a resource policy for CloudWatch Logs.
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *
 * We encountered an unknown error. Try again in a few minutes.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled. Try again in a few minutes.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * You have provided an invalid command. If you ran the `UpdateFirewallDomains` request. supported values are `ADD`, `REMOVE`, or `REPLACE` a domain.
 *
 * @throws {@link Route53ResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53Resolver service.
 *
 * @public
 */
export class ListFirewallRulesCommand extends command<ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListFirewallRules",
  ListFirewallRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallRulesRequest;
      output: ListFirewallRulesResponse;
    };
    sdk: {
      input: ListFirewallRulesCommandInput;
      output: ListFirewallRulesCommandOutput;
    };
  };
}
