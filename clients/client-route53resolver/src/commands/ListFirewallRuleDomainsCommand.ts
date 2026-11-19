// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFirewallRuleDomainsRequest, ListFirewallRuleDomainsResponse } from "../models/models_0";
import { ListFirewallRuleDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFirewallRuleDomainsCommand}.
 */
export interface ListFirewallRuleDomainsCommandInput extends ListFirewallRuleDomainsRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallRuleDomainsCommand}.
 */
export interface ListFirewallRuleDomainsCommandOutput extends ListFirewallRuleDomainsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the domains of an AutoAllowlist firewall rule. Only the owner of the rule group can call this operation. Results are paginated. Use <code>MaxResults</code> and <code>NextToken</code> to retrieve additional domains.</p>
 *          <p>Identify the rule by <code>FirewallThreatProtectionId</code> to get the domains that DNS Firewall observed in the VPCs that use the rule group, through a rule group association or through a Route 53 Profile that includes the rule group, including VPCs in other accounts. Each domain is returned with its <code>DomainStatus</code> and request counts. Use <code>QueryOptions</code> to filter and sort the results.</p>
 *          <p>Identify the rule's managed domain list by <code>FirewallDomainListId</code> to get the domains that the rule currently allows. For any other domain list, use <a>ListFirewallDomains</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRuleDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRuleDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallRuleDomainsRequest
 *   FirewallRuleGroupId: "STRING_VALUE", // required
 *   FirewallThreatProtectionId: "STRING_VALUE",
 *   FirewallDomainListId: "STRING_VALUE",
 *   QueryOptions: { // ListFirewallRuleDomainsQueryOptions
 *     DomainStatus: "OBSERVED" || "ALLOWED" || "DENIED",
 *     SortBy: "TIME_ADDED" || "DAILY_TOTAL" || "TOTAL_REQUESTS",
 *     SortOrder: "ASC" || "DESC",
 *     DomainNameFilter: "STRING_VALUE",
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallRuleDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallRuleDomainsResponse
 * //   Domains: [ // FirewallRuleDomains
 * //     { // FirewallRuleDomain
 * //       DomainName: "STRING_VALUE",
 * //       DomainStatus: "OBSERVED" || "ALLOWED" || "DENIED" || "UNKNOWN",
 * //       Last24HourRequests: Number("long"),
 * //       TotalRequests: Number("long"),
 * //       AddedTime: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFirewallRuleDomainsCommandInput - {@link ListFirewallRuleDomainsCommandInput}
 * @returns {@link ListFirewallRuleDomainsCommandOutput}
 * @see {@link ListFirewallRuleDomainsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRuleDomainsCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource doesn't exist.</p>
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
export class ListFirewallRuleDomainsCommand extends command<ListFirewallRuleDomainsCommandInput, ListFirewallRuleDomainsCommandOutput>(
  _ep0,
  _mw0,
  "ListFirewallRuleDomains",
  ListFirewallRuleDomains$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallRuleDomainsRequest;
      output: ListFirewallRuleDomainsResponse;
    };
    sdk: {
      input: ListFirewallRuleDomainsCommandInput;
      output: ListFirewallRuleDomainsCommandOutput;
    };
  };
}
