// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchCreateFirewallRuleInput, BatchCreateFirewallRuleOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { BatchCreateFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchCreateFirewallRuleCommand}.
 */
export interface BatchCreateFirewallRuleCommandInput extends BatchCreateFirewallRuleInput {}
/**
 * @public
 *
 * The output of {@link BatchCreateFirewallRuleCommand}.
 */
export interface BatchCreateFirewallRuleCommandOutput extends BatchCreateFirewallRuleOutput, __MetadataBearer {}

/**
 * <p>Creates multiple DNS firewall rules in a single operation. This is more efficient than creating rules individually when you need to set up multiple rules at once.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, BatchCreateFirewallRuleCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, BatchCreateFirewallRuleCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // BatchCreateFirewallRuleInput
 *   firewallRules: [ // BatchCreateFirewallRuleInputItems // required
 *     { // BatchCreateFirewallRuleInputItem
 *       action: "ALLOW" || "ALERT" || "BLOCK", // required
 *       blockOverrideDnsType: "CNAME",
 *       blockOverrideDomain: "STRING_VALUE",
 *       blockOverrideTtl: Number("int"),
 *       blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 *       clientToken: "STRING_VALUE", // required
 *       confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 *       description: "STRING_VALUE",
 *       dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 *       firewallDomainListId: "STRING_VALUE",
 *       name: "STRING_VALUE", // required
 *       priority: Number("long"),
 *       dnsViewId: "STRING_VALUE", // required
 *       qType: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new BatchCreateFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateFirewallRuleOutput
 * //   failures: [ // BatchCreateFirewallRuleOutputItems // required
 * //     { // BatchCreateFirewallRuleOutputItem
 * //       firewallRule: { // BatchCreateFirewallRuleResult
 * //         action: "ALLOW" || "ALERT" || "BLOCK", // required
 * //         blockOverrideDnsType: "CNAME",
 * //         blockOverrideDomain: "STRING_VALUE",
 * //         blockOverrideTtl: Number("int"),
 * //         blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //         clientToken: "STRING_VALUE", // required
 * //         confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         description: "STRING_VALUE",
 * //         dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 * //         firewallDomainListId: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         managedDomainListName: "STRING_VALUE",
 * //         name: "STRING_VALUE", // required
 * //         priority: Number("long"),
 * //         dnsViewId: "STRING_VALUE", // required
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
 * //         action: "ALLOW" || "ALERT" || "BLOCK", // required
 * //         blockOverrideDnsType: "CNAME",
 * //         blockOverrideDomain: "STRING_VALUE",
 * //         blockOverrideTtl: Number("int"),
 * //         blockResponse: "NODATA" || "NXDOMAIN" || "OVERRIDE",
 * //         clientToken: "STRING_VALUE", // required
 * //         confidenceThreshold: "LOW" || "MEDIUM" || "HIGH",
 * //         createdAt: new Date("TIMESTAMP"),
 * //         description: "STRING_VALUE",
 * //         dnsAdvancedProtection: "DGA" || "DNS_TUNNELING",
 * //         firewallDomainListId: "STRING_VALUE",
 * //         id: "STRING_VALUE",
 * //         managedDomainListName: "STRING_VALUE",
 * //         name: "STRING_VALUE", // required
 * //         priority: Number("long"),
 * //         dnsViewId: "STRING_VALUE", // required
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
 * @param BatchCreateFirewallRuleCommandInput - {@link BatchCreateFirewallRuleCommandInput}
 * @returns {@link BatchCreateFirewallRuleCommandOutput}
 * @see {@link BatchCreateFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link BatchCreateFirewallRuleCommandOutput} for command's `response` shape.
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
export class BatchCreateFirewallRuleCommand extends $Command
  .classBuilder<
    BatchCreateFirewallRuleCommandInput,
    BatchCreateFirewallRuleCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "BatchCreateFirewallRule", {})
  .n("Route53GlobalResolverClient", "BatchCreateFirewallRuleCommand")
  .sc(BatchCreateFirewallRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateFirewallRuleInput;
      output: BatchCreateFirewallRuleOutput;
    };
    sdk: {
      input: BatchCreateFirewallRuleCommandInput;
      output: BatchCreateFirewallRuleCommandOutput;
    };
  };
}
