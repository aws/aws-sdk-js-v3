// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateFirewallDomainsRequest, UpdateFirewallDomainsResponse } from "../models/models_0";
import { UpdateFirewallDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateFirewallDomainsCommand}.
 */
export interface UpdateFirewallDomainsCommandInput extends UpdateFirewallDomainsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateFirewallDomainsCommand}.
 */
export interface UpdateFirewallDomainsCommandOutput extends UpdateFirewallDomainsResponse, __MetadataBearer {}

/**
 * <p>Updates the firewall domain list from an array of domain specifications. </p>
 *          <p>For an AutoAllowlist rule's managed domain list, use <code>ADD</code> to approve observed domains, <code>REMOVE</code> to stop allowing domains, unless a wildcard entry that's still on the list matches them, and <code>DENY</code> to dismiss observed domains. <code>REPLACE</code> and <a>ImportFirewallDomains</a> aren't supported for these lists.</p>
 *          <p>DNS Firewall throttles <code>UpdateFirewallDomains</code> requests based on both the request rate and the total number of domains across your requests.</p>
 *          <p>
 *             <b>Best Practice for Updating Domain Lists</b>
 *          </p>
 *          <p>If you only need to modify a subset of domains, use the <code>ADD</code> or <code>REMOVE</code> operations instead of <code>REPLACE</code>. With <code>REPLACE</code>, you send the complete list you want to end up with, and throttling counts every domain in that request, including domains that aren't changing, which can use up your available throttling capacity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, UpdateFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, UpdateFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // UpdateFirewallDomainsRequest
 *   FirewallDomainListId: "STRING_VALUE", // required
 *   Operation: "ADD" || "REMOVE" || "REPLACE" || "DENY", // required
 *   Domains: [ // FirewallDomains // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new UpdateFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * // { // UpdateFirewallDomainsResponse
 * //   Id: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Status: "COMPLETE" || "COMPLETE_IMPORT_FAILED" || "IMPORTING" || "DELETING" || "UPDATING",
 * //   StatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateFirewallDomainsCommandInput - {@link UpdateFirewallDomainsCommandInput}
 * @returns {@link UpdateFirewallDomainsCommandOutput}
 * @see {@link UpdateFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link UpdateFirewallDomainsCommandOutput} for command's `response` shape.
 * @see {@link Route53ResolverClientResolvedConfig | config} for Route53ResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The current account doesn't have the IAM permissions required to perform the specified Resolver operation.</p>
 *          <p>This error can also be thrown when a customer has reached the 5120 character limit for a
 * 			resource policy for CloudWatch Logs.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The requested state transition isn't valid. For example, you can't delete a firewall
 * 			domain list if it is in the process of being deleted, or you can't import domains into a
 * 			domain list that is in the process of being deleted.</p>
 *
 * @throws {@link InternalServiceErrorException} (client fault)
 *  <p>We encountered an unknown error. Try again in a few minutes.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request caused one or more limits to be exceeded.</p>
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
export class UpdateFirewallDomainsCommand extends command<UpdateFirewallDomainsCommandInput, UpdateFirewallDomainsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateFirewallDomains",
  UpdateFirewallDomains$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateFirewallDomainsRequest;
      output: UpdateFirewallDomainsResponse;
    };
    sdk: {
      input: UpdateFirewallDomainsCommandInput;
      output: UpdateFirewallDomainsCommandOutput;
    };
  };
}
