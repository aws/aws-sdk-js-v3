// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFirewallRulesInput, ListFirewallRulesOutput } from "../models/models_0";
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
export interface ListFirewallRulesCommandInput extends ListFirewallRulesInput {}
/**
 * @public
 *
 * The output of {@link ListFirewallRulesCommand}.
 */
export interface ListFirewallRulesCommandOutput extends ListFirewallRulesOutput, __MetadataBearer {}

/**
 * Lists all DNS firewall rules for a DNS view with pagination support.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, ListFirewallRulesCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, ListFirewallRulesCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // ListFirewallRulesInput
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   dnsViewId: "STRING_VALUE", // required
 *   filters: { // Filters
 *     "<keys>": [ // Strings
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListFirewallRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallRulesOutput
 * //   nextToken: "STRING_VALUE",
 * //   firewallRules: [ // FirewallRules // required
 * //     { // FirewallRulesItem
 * //       action: "ALLOW" || "ALERT" || "BLOCK", // required
 * //       blockOverrideDnsType: "CNAME",
 * //       blockOverrideDomain: "STRING_VALUE",
 * //       blockOverrideTtl: Number("int"),
 * //       blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //       confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       description: "STRING_VALUE",
 * //       dnsAdvancedProtection: "DGA" || "DNS_TUNNELING" || "DICTIONARY_DGA",
 * //       firewallDomainListId: "STRING_VALUE",
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       priority: Number("long"), // required
 * //       dnsViewId: "STRING_VALUE", // required
 * //       queryType: "STRING_VALUE",
 * //       status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
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
export class ListFirewallRulesCommand extends command<ListFirewallRulesCommandInput, ListFirewallRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListFirewallRules",
  ListFirewallRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallRulesInput;
      output: ListFirewallRulesOutput;
    };
    sdk: {
      input: ListFirewallRulesCommandInput;
      output: ListFirewallRulesCommandOutput;
    };
  };
}
