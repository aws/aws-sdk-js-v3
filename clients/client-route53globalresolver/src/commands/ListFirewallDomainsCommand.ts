// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFirewallDomainsInput, ListFirewallDomainsOutput } from "../models/models_0";
import { ListFirewallDomains$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFirewallDomainsCommand}.
 */
export interface ListFirewallDomainsCommandInput extends ListFirewallDomainsInput {}
/**
 * @public
 *
 * The output of {@link ListFirewallDomainsCommand}.
 */
export interface ListFirewallDomainsCommandOutput extends ListFirewallDomainsOutput, __MetadataBearer {}

/**
 * Lists all the domains in DNS Firewall domain list you have created.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ListFirewallDomainsCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ListFirewallDomainsCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ListFirewallDomainsInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   firewallDomainListId: "STRING_VALUE", // required
 * };
 * const command = new ListFirewallDomainsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallDomainsOutput
 * //   nextToken: "STRING_VALUE",
 * //   domains: [ // Domains // required
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
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have permission to perform this operation. Check your IAM permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Try again later.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found. Verify the resource ID and try again.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was throttled due to too many requests. Wait a moment and try again.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input parameters are invalid. Check the parameter values and try again.
 *
 * @throws {@link Route53GlobalResolverServiceException}
 *
 * Base exception class for all service exceptions from Route53GlobalResolver service.
 *
 * @public
 */
export class ListFirewallDomainsCommand extends command<ListFirewallDomainsCommandInput, ListFirewallDomainsCommandOutput>(
  _ep0,
  _mw0,
  "ListFirewallDomains",
  ListFirewallDomains$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallDomainsInput;
      output: ListFirewallDomainsOutput;
    };
    sdk: {
      input: ListFirewallDomainsCommandInput;
      output: ListFirewallDomainsCommandOutput;
    };
  };
}
