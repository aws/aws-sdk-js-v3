// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ModifyTargetGroupAttributesInput, ModifyTargetGroupAttributesOutput } from "../models/models_0";
import { ModifyTargetGroupAttributes } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyTargetGroupAttributesCommand}.
 */
export interface ModifyTargetGroupAttributesCommandInput extends ModifyTargetGroupAttributesInput {}
/**
 * @public
 *
 * The output of {@link ModifyTargetGroupAttributesCommand}.
 */
export interface ModifyTargetGroupAttributesCommandOutput extends ModifyTargetGroupAttributesOutput, __MetadataBearer {}

/**
 * <p>Modifies the specified attributes of the specified target group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, ModifyTargetGroupAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, ModifyTargetGroupAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // import type { ElasticLoadBalancingV2ClientConfig } from "@aws-sdk/client-elastic-load-balancing-v2";
 * const config = {}; // type is ElasticLoadBalancingV2ClientConfig
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // ModifyTargetGroupAttributesInput
 *   TargetGroupArn: "STRING_VALUE", // required
 *   Attributes: [ // TargetGroupAttributes // required
 *     { // TargetGroupAttribute
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * // { // ModifyTargetGroupAttributesOutput
 * //   Attributes: [ // TargetGroupAttributes
 * //     { // TargetGroupAttribute
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ModifyTargetGroupAttributesCommandInput - {@link ModifyTargetGroupAttributesCommandInput}
 * @returns {@link ModifyTargetGroupAttributesCommandOutput}
 * @see {@link ModifyTargetGroupAttributesCommandInput} for command's `input` shape.
 * @see {@link ModifyTargetGroupAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link InvalidConfigurationRequestException} (client fault)
 *  <p>The requested configuration is not valid.</p>
 *
 * @throws {@link TargetGroupNotFoundException} (client fault)
 *  <p>The specified target group does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 *
 * @example To modify the deregistration delay timeout
 * ```javascript
 * // This example sets the deregistration delay timeout to the specified value for the specified target group.
 * const input = {
 *   Attributes: [
 *     {
 *       Key: "deregistration_delay.timeout_seconds",
 *       Value: "600"
 *     }
 *   ],
 *   TargetGroupArn: "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 * };
 * const command = new ModifyTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Attributes: [
 *     {
 *       Key: "stickiness.enabled",
 *       Value: "false"
 *     },
 *     {
 *       Key: "deregistration_delay.timeout_seconds",
 *       Value: "600"
 *     },
 *     {
 *       Key: "stickiness.type",
 *       Value: "lb_cookie"
 *     },
 *     {
 *       Key: "stickiness.lb_cookie.duration_seconds",
 *       Value: "86400"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyTargetGroupAttributesCommand extends $Command
  .classBuilder<
    ModifyTargetGroupAttributesCommandInput,
    ModifyTargetGroupAttributesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticLoadBalancing_v10", "ModifyTargetGroupAttributes", {})
  .n("ElasticLoadBalancingV2Client", "ModifyTargetGroupAttributesCommand")
  .sc(ModifyTargetGroupAttributes)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyTargetGroupAttributesInput;
      output: ModifyTargetGroupAttributesOutput;
    };
    sdk: {
      input: ModifyTargetGroupAttributesCommandInput;
      output: ModifyTargetGroupAttributesCommandOutput;
    };
  };
}
