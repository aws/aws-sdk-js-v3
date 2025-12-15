// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFirewallDomainListsRequest, ListFirewallDomainListsResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { ListFirewallDomainLists$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFirewallDomainListsCommand}.
 */
export interface ListFirewallDomainListsCommandInput extends ListFirewallDomainListsRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallDomainListsCommand}.
 */
export interface ListFirewallDomainListsCommandOutput extends ListFirewallDomainListsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the firewall domain lists that you have defined. For each firewall domain list, you can retrieve the domains that are defined for a list by calling <a>ListFirewallDomains</a>. </p>
 *          <p>A single call to this list operation might return only a partial list of the domain lists. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallDomainListsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallDomainListsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallDomainListsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallDomainListsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallDomainListsResponse
 * //   NextToken: "STRING_VALUE",
 * //   FirewallDomainLists: [ // FirewallDomainListMetadataList
 * //     { // FirewallDomainListMetadata
 * //       Id: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       ManagedOwnerName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFirewallDomainListsCommandInput - {@link ListFirewallDomainListsCommandInput}
 * @returns {@link ListFirewallDomainListsCommandOutput}
 * @see {@link ListFirewallDomainListsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallDomainListsCommandOutput} for command's `response` shape.
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
export class ListFirewallDomainListsCommand extends $Command
  .classBuilder<
    ListFirewallDomainListsCommandInput,
    ListFirewallDomainListsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "ListFirewallDomainLists", {})
  .n("Route53ResolverClient", "ListFirewallDomainListsCommand")
  .sc(ListFirewallDomainLists$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallDomainListsRequest;
      output: ListFirewallDomainListsResponse;
    };
    sdk: {
      input: ListFirewallDomainListsCommandInput;
      output: ListFirewallDomainListsCommandOutput;
    };
  };
}
