// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFirewallDomainListsInput, ListFirewallDomainListsOutput } from "../models/models_0";
import {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { ListFirewallDomainLists } from "../schemas/schemas_0";

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
export interface ListFirewallDomainListsCommandInput extends ListFirewallDomainListsInput {}
/**
 * @public
 *
 * The output of {@link ListFirewallDomainListsCommand}.
 */
export interface ListFirewallDomainListsCommandOutput extends ListFirewallDomainListsOutput, __MetadataBearer {}

/**
 * <p>Lists all firewall domain lists for a Route 53 Global Resolver with pagination support.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ListFirewallDomainListsCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ListFirewallDomainListsCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ListFirewallDomainListsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   globalResolverId: "STRING_VALUE",
 * };
 * const command = new ListFirewallDomainListsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallDomainListsOutput
 * //   nextToken: "STRING_VALUE",
 * //   firewallDomainLists: [ // FirewallDomainLists // required
 * //     { // FirewallDomainListsItem
 * //       arn: "STRING_VALUE", // required
 * //       globalResolverId: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
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
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource ID and try again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests. Wait a moment and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input parameters are invalid. Check the parameter values and try again.</p>
 *
 * @throws {@link Route53GlobalResolverServiceException}
 * <p>Base exception class for all service exceptions from Route53GlobalResolver service.</p>
 *
 *
 * @public
 */
export class ListFirewallDomainListsCommand extends $Command
  .classBuilder<
    ListFirewallDomainListsCommandInput,
    ListFirewallDomainListsCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "ListFirewallDomainLists", {})
  .n("Route53GlobalResolverClient", "ListFirewallDomainListsCommand")
  .sc(ListFirewallDomainLists)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallDomainListsInput;
      output: ListFirewallDomainListsOutput;
    };
    sdk: {
      input: ListFirewallDomainListsCommandInput;
      output: ListFirewallDomainListsCommandOutput;
    };
  };
}
