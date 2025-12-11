// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { BatchDeleteFirewallRuleInput, BatchDeleteFirewallRuleOutput } from "../models/models_0";
import type {
  Route53GlobalResolverClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../Route53GlobalResolverClient";
import { BatchDeleteFirewallRule } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteFirewallRuleCommand}.
 */
export interface BatchDeleteFirewallRuleCommandInput extends BatchDeleteFirewallRuleInput {}
/**
 * @public
 *
 * The output of {@link BatchDeleteFirewallRuleCommand}.
 */
export interface BatchDeleteFirewallRuleCommandOutput extends BatchDeleteFirewallRuleOutput, __MetadataBearer {}

/**
 * <p>Deletes multiple DNS firewall rules in a single operation. This is more efficient than deleting rules individually.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { Route53GlobalResolverClient, BatchDeleteFirewallRuleCommand } from "@aws-sdk/client-route53globalresolver"; // ES Modules import
 * // const { Route53GlobalResolverClient, BatchDeleteFirewallRuleCommand } = require("@aws-sdk/client-route53globalresolver"); // CommonJS import
 * // import type { Route53GlobalResolverClientConfig } from "@aws-sdk/client-route53globalresolver";
 * const config = {}; // type is Route53GlobalResolverClientConfig
 * const client = new Route53GlobalResolverClient(config);
 * const input = { // BatchDeleteFirewallRuleInput
 *   firewallRules: [ // BatchDeleteFirewallRuleInputItems // required
 *     { // BatchDeleteFirewallRuleInputItem
 *       firewallRuleId: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new BatchDeleteFirewallRuleCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteFirewallRuleOutput
 * //   failures: [ // BatchDeleteFirewallRuleOutputItems // required
 * //     { // BatchDeleteFirewallRuleOutputItem
 * //       firewallRule: { // BatchDeleteFirewallRuleResult
 * //         clientToken: "STRING_VALUE",
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //         status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING",
 * //       },
 * //       code: Number("int"), // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * //   successes: [ // required
 * //     {
 * //       firewallRule: {
 * //         clientToken: "STRING_VALUE",
 * //         id: "STRING_VALUE", // required
 * //         name: "STRING_VALUE",
 * //         status: "CREATING" || "OPERATIONAL" || "UPDATING" || "DELETING",
 * //       },
 * //       code: Number("int"), // required
 * //       message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteFirewallRuleCommandInput - {@link BatchDeleteFirewallRuleCommandInput}
 * @returns {@link BatchDeleteFirewallRuleCommandOutput}
 * @see {@link BatchDeleteFirewallRuleCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteFirewallRuleCommandOutput} for command's `response` shape.
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
export class BatchDeleteFirewallRuleCommand extends $Command
  .classBuilder<
    BatchDeleteFirewallRuleCommandInput,
    BatchDeleteFirewallRuleCommandOutput,
    Route53GlobalResolverClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: Route53GlobalResolverClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("EC2DNSGlobalResolverCustomerAPI", "BatchDeleteFirewallRule", {})
  .n("Route53GlobalResolverClient", "BatchDeleteFirewallRuleCommand")
  .sc(BatchDeleteFirewallRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteFirewallRuleInput;
      output: BatchDeleteFirewallRuleOutput;
    };
    sdk: {
      input: BatchDeleteFirewallRuleCommandInput;
      output: BatchDeleteFirewallRuleCommandOutput;
    };
  };
}
