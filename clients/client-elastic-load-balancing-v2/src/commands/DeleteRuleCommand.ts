// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteRuleInput, DeleteRuleOutput } from "../models/models_0";
import { DeleteRule } from "../schemas/schemas_19_Rule";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRuleCommand}.
 */
export interface DeleteRuleCommandInput extends DeleteRuleInput {}
/**
 * @public
 *
 * The output of {@link DeleteRuleCommand}.
 */
export interface DeleteRuleCommandOutput extends DeleteRuleOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified rule.</p>
 *          <p>You can't delete the default rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DeleteRuleCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DeleteRuleCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DeleteRuleInput
 *   RuleArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteRuleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRuleCommandInput - {@link DeleteRuleCommandInput}
 * @returns {@link DeleteRuleCommandOutput}
 * @see {@link DeleteRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteRuleCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link OperationNotPermittedException} (client fault)
 *  <p>This operation is not allowed.</p>
 *
 * @throws {@link RuleNotFoundException} (client fault)
 *  <p>The specified rule does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To delete a rule
 * ```javascript
 * // This example deletes the specified rule.
 * const input = {
 *   RuleArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:listener-rule/app/my-load-balancer/50dc6c495c0c9188/f2f7dc8efc522ab2/1291d13826f405c3"
 * };
 * const command = new DeleteRuleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteRuleCommand extends $Command
  .classBuilder<
    DeleteRuleCommandInput,
    DeleteRuleCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "DeleteRule", {})
  .n("ElasticLoadBalancingV2Client", "DeleteRuleCommand")
  .sc(DeleteRule)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRuleInput;
      output: {};
    };
    sdk: {
      input: DeleteRuleCommandInput;
      output: DeleteRuleCommandOutput;
    };
  };
}
