// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteFirewallRuleInput, BatchDeleteFirewallRuleOutput } from "../models/models_0";
import { BatchDeleteFirewallRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes multiple DNS firewall rules in a single operation. This is more efficient than deleting rules individually.
 *
 * > **Important:** Route 53 Global Resolver is a global service that supports resolvers in multiple Amazon Web Services Regions but you must specify the US East (Ohio) Region to create, update, or otherwise work with Route 53 Global Resolver resources. That is, for example, specify `--region us-east-2` on Amazon Web Services CLI commands.
 *
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
 *
 * You don't have permission to perform this operation. Check your IAM permissions and try again.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal server error occurred. Try again later.
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
export class BatchDeleteFirewallRuleCommand extends command<BatchDeleteFirewallRuleCommandInput, BatchDeleteFirewallRuleCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteFirewallRule",
  BatchDeleteFirewallRule$
) {
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
