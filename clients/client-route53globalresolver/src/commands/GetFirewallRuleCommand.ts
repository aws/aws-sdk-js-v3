// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetFirewallRuleInput, GetFirewallRuleOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { GetFirewallRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFirewallRuleCommand}.
 */
export interface GetFirewallRuleCommandInput extends GetFirewallRuleInput {}
/**
 * @public
 *
 * The output of {@link GetFirewallRuleCommand}.
 */
export interface GetFirewallRuleCommandOutput extends GetFirewallRuleOutput, __MetadataBearer {}

/**
 * <p>Retrieves information about a DNS firewall rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, GetFirewallRuleCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, GetFirewallRuleCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // GetFirewallRuleInput
 *   firewallRuleId: "STRING_VALUE", // required
 * };
 * const command = new GetFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetFirewallRuleOutput
 * //   action: "ALLOW" || "ALERT" || "BLOCK", // required
 * //   blockOverrideDnsType: "CNAME",
 * //   blockOverrideDomain: "STRING_VALUE",
 * //   blockOverrideTtl: Number("int"),
 * //   blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //   confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   description: "STRING_VALUE",
 * //   dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 * //   firewallDomainListId: "STRING_VALUE",
 * //   id: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   priority: Number("long"), // required
 * //   dnsViewId: "STRING_VALUE", // required
 * //   queryType: "STRING_VALUE",
 * //   status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetFirewallRuleCommandInput - {@link GetFirewallRuleCommandInput}
 * @returns {@link GetFirewallRuleCommandOutput}
 * @see {@link GetFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link GetFirewallRuleCommandOutput} for command's `response` shape.
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
export class GetFirewallRuleCommand extends $Command
  .classBuilder<
    GetFirewallRuleCommandInput,
    GetFirewallRuleCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "GetFirewallRule", {})
  .n("Route53GlobalResolverClient", "GetFirewallRuleCommand")
  .sc(GetFirewallRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFirewallRuleInput;
      output: GetFirewallRuleOutput;
    };
    sdk: {
      input: GetFirewallRuleCommandInput;
      output: GetFirewallRuleCommandOutput;
    };
  };
}
