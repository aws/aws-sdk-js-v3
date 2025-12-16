// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchUpdateFirewallRuleInput, BatchUpdateFirewallRuleOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { BatchUpdateFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchUpdateFirewallRuleCommand}.
 */
export interface BatchUpdateFirewallRuleCommandInput extends BatchUpdateFirewallRuleInput {}
/**
 * @public
 *
 * The output of {@link BatchUpdateFirewallRuleCommand}.
 */
export interface BatchUpdateFirewallRuleCommandOutput extends BatchUpdateFirewallRuleOutput, __MetadataBearer {}

/**
 * <p>Updates multiple DNS firewall rules in a single operation. This is more efficient than updating rules individually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, BatchUpdateFirewallRuleCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, BatchUpdateFirewallRuleCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // BatchUpdateFirewallRuleInput
 *   firewallRules: [ // BatchUpdateFirewallRuleInputItems // required
 *     { // BatchUpdateFirewallRuleInputItem
 *       action: "ALLOW" || "ALERT" || "BLOCK",
 *       blockOverrideDnsType: "CNAME",
 *       blockOverrideDomain: "STRING_VALUE",
 *       blockOverrideTtl: Number("int"),
 *       blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 *       confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 *       description: "STRING_VALUE",
 *       dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 *       firewallRuleId: "STRING_VALUE", // required
 *       name: "STRING_VALUE",
 *       priority: Number("long"),
 *     },
 *   ],
 * };
 * const command = new BatchUpdateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchUpdateFirewallRuleOutput
 * //   failures: [ // BatchUpdateFirewallRuleOutputItems // required
 * //     { // BatchUpdateFirewallRuleOutputItem
 * //       firewallRule: { // BatchUpdateFirewallRuleResult
 * //         action: "ALLOW" || "ALERT" || "BLOCK",
 * //         blockOverrideDnsType: "CNAME",
 * //         blockOverrideDomain: "STRING_VALUE",
 * //         blockOverrideTtl: Number("int"),
 * //         blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //         clientToken: "STRING_VALUE",
 * //         confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         description: "STRING_VALUE",
 * //         dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 * //         firewallDomainListId: "STRING_VALUE",
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //         priority: Number("long"),
 * //         dnsViewId: "STRING_VALUE",
 * //         queryType: "STRING_VALUE",
 * //         status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //       },
 * //       code: Number("int"), // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   successes: [ // required
 * //     {
 * //       firewallRule: {
 * //         action: "ALLOW" || "ALERT" || "BLOCK",
 * //         blockOverrideDnsType: "CNAME",
 * //         blockOverrideDomain: "STRING_VALUE",
 * //         blockOverrideTtl: Number("int"),
 * //         blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //         clientToken: "STRING_VALUE",
 * //         confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         description: "STRING_VALUE",
 * //         dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 * //         firewallDomainListId: "STRING_VALUE",
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //         priority: Number("long"),
 * //         dnsViewId: "STRING_VALUE",
 * //         queryType: "STRING_VALUE",
 * //         status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING",
 * //         updatedAt: new Date("TIMESTAMP"),
 * //       },
 * //       code: Number("int"), // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchUpdateFirewallRuleCommandInput - {@link BatchUpdateFirewallRuleCommandInput}
 * @returns {@link BatchUpdateFirewallRuleCommandOutput}
 * @see {@link BatchUpdateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link BatchUpdateFirewallRuleCommandOutput} for command's `response` shape.
 * @see {@link Route53GlobalResolverClientResolvedConfig | config} for Route53GlobalResolverClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have permission to perform this operation. Check your IAM permissions and try again.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
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
export class BatchUpdateFirewallRuleCommand extends $Command
  .classBuilder<
    BatchUpdateFirewallRuleCommandInput,
    BatchUpdateFirewallRuleCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "BatchUpdateFirewallRule", {})
  .n("Route53GlobalResolverClient", "BatchUpdateFirewallRuleCommand")
  .sc(BatchUpdateFirewallRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchUpdateFirewallRuleInput;
      output: BatchUpdateFirewallRuleOutput;
    };
    sdk: {
      input: BatchUpdateFirewallRuleCommandInput;
      output: BatchUpdateFirewallRuleCommandOutput;
    };
  };
}
