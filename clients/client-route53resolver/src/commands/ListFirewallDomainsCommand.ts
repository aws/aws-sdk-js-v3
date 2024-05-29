// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFirewallDomainsRequest, ListFirewallDomainsResponse } from "../models/models_0";
import { de_ListFirewallDomainsCommand, se_ListFirewallDomainsCommand } from "../protocols/Aws_json1_1";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListFirewallDomainsCommand}.
 */
export interface ListFirewallDomainsCommandInput extends ListFirewallDomainsRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallDomainsCommand}.
 */
export interface ListFirewallDomainsCommandOutput extends ListFirewallDomainsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the domains that you have defined for the specified firewall domain list.  </p>
 *          <p>A single call might return only a partial list of the domains. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallDomainsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallDomainsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallDomainsRequest
 *   FirewallDomainListId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallDomainsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Domains: [ // FirewallDomains
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFirewallDomainsCommandInput - {@link ListFirewallDomainsCommandInput}
 * @returns {@link ListFirewallDomainsCommandOutput}
 * @see {@link ListFirewallDomainsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallDomainsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListFirewallDomainsCommand extends $Command
  .classBuilder<
    ListFirewallDomainsCommandInput,
    ListFirewallDomainsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Route53Resolver", "ListFirewallDomains", {})
  .n("Route53ResolverClient", "ListFirewallDomainsCommand")
  .f(void 0, void 0)
  .ser(se_ListFirewallDomainsCommand)
  .de(de_ListFirewallDomainsCommand)
  .build() {}
