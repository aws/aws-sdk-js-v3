// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListFirewallConfigsRequest, ListFirewallConfigsResponse } from "../models/models_0";
import { Route53ResolverClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53ResolverClient";
import { ListFirewallConfigs } from "../schemas/schemas_10_Firewall";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFirewallConfigsCommand}.
 */
export interface ListFirewallConfigsCommandInput extends ListFirewallConfigsRequest {}
/**
 * @public
 *
 * The output of {@link ListFirewallConfigsCommand}.
 */
export interface ListFirewallConfigsCommandOutput extends ListFirewallConfigsResponse, __MetadataBearer {}

/**
 * <p>Retrieves the firewall configurations that you have defined. DNS Firewall uses the configurations to manage firewall behavior for your VPCs. </p>
 *          <p>A single call might return only a partial list of the configurations. For information, see <code>MaxResults</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53ResolverClient, ListFirewallConfigsCommand } from "@aws-sdk/client-route53resolver"; // ES Modules import
 * // const { Route53ResolverClient, ListFirewallConfigsCommand } = require("@aws-sdk/client-route53resolver"); // CommonJS import
 * // import type { Route53ResolverClientConfig } from "@aws-sdk/client-route53resolver";
 * const config = {}; // type is Route53ResolverClientConfig
 * const client = new Route53ResolverClient(config);
 * const input = { // ListFirewallConfigsRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFirewallConfigsCommand(input);
 * const response = await client.send(command);
 * // { // ListFirewallConfigsResponse
 * //   NextToken: "STRING_VALUE",
 * //   FirewallConfigs: [ // FirewallConfigList
 * //     { // FirewallConfig
 * //       Id: "STRING_VALUE",
 * //       ResourceId: "STRING_VALUE",
 * //       OwnerId: "STRING_VALUE",
 * //       FirewallFailOpen: "ENABLED" || "DISABLED" || "USE_LOCAL_RESOURCE_SETTING",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFirewallConfigsCommandInput - {@link ListFirewallConfigsCommandInput}
 * @returns {@link ListFirewallConfigsCommandOutput}
 * @see {@link ListFirewallConfigsCommandInput} for command's `input` shape.
 * @see {@link ListFirewallConfigsCommandOutput} for command's `response` shape.
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
export class ListFirewallConfigsCommand extends $Command
  .classBuilder<
    ListFirewallConfigsCommandInput,
    ListFirewallConfigsCommandOutput,
    Route53ResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53ResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Route53Resolver", "ListFirewallConfigs", {})
  .n("Route53ResolverClient", "ListFirewallConfigsCommand")
  .sc(ListFirewallConfigs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFirewallConfigsRequest;
      output: ListFirewallConfigsResponse;
    };
    sdk: {
      input: ListFirewallConfigsCommandInput;
      output: ListFirewallConfigsCommandOutput;
    };
  };
}
