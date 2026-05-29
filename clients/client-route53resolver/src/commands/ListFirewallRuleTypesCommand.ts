// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListFirewallRuleTypesRequest, ListFirewallRuleTypesResponse } from "../models/models_0";
import type {
  Route53ResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53ResolverClient";
import { ListFirewallRuleTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFirewallRuleTypesCommand}.
 */
export interface ListFirewallRuleTypesCommandInput extends ListFirewallRuleTypesRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallRuleTypesCommand}.
 */
export interface ListFirewallRuleTypesCommandOutput extends ListFirewallRuleTypesResponse, __MetadataBearer {}

/**
 * <p>Retrieves the available rule types that can be used in DNS Firewall rules.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallRuleTypesCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallRuleTypesCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallRuleTypesRequest
 *   RuleType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallRuleTypesCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallRuleTypesResponse
 * //   FirewallRuleTypes: [ // FirewallRuleTypeDefinitions
 * //     { // FirewallRuleTypeDefinition
 * //       RuleType: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFirewallRuleTypesCommandInput - {@link ListFirewallRuleTypesCommandInput}
 * @returns {@link ListFirewallRuleTypesCommandOutput}
 * @see {@link ListFirewallRuleTypesCommandInput} for command's `input` shape.
 * @see {@link ListFirewallRuleTypesCommandOutput} for command's `response` shape.
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
export class ListFirewallRuleTypesCommand extends $Command
  .classBuilder<
    ListFirewallRuleTypesCommandInput,
    ListFirewallRuleTypesCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "ListFirewallRuleTypes", {})
  .n("Route53ResolverClient", "ListFirewallRuleTypesCommand")
  .sc(ListFirewallRuleTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallRuleTypesRequest;
      output: ListFirewallRuleTypesResponse;
    };
    sdk: {
      input: ListFirewallRuleTypesCommandInput;
      output: ListFirewallRuleTypesCommandOutput;
    };
  };
}
