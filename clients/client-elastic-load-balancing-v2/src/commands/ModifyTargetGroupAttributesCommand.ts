// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyTargetGroupAttributesInput, ModifyTargetGroupAttributesOutput } from "../models/models_0";
import { de_ModifyTargetGroupAttributesCommand, se_ModifyTargetGroupAttributesCommand } from "../protocols/Aws_query";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 * @example To modify the deregistration delay timeout
 * ```javascript
 * // This example sets the deregistration delay timeout to the specified value for the specified target group.
 * const input = {
 *   "Attributes": [
 *     {
 *       "Key": "deregistration_delay.timeout_seconds",
 *       "Value": "600"
 *     }
 *   ],
 *   "TargetGroupArn": "arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/73e2d6bc24d8a067"
 * };
 * const command = new ModifyTargetGroupAttributesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Attributes": [
 *     {
 *       "Key": "stickiness.enabled",
 *       "Value": "false"
 *     },
 *     {
 *       "Key": "deregistration_delay.timeout_seconds",
 *       "Value": "600"
 *     },
 *     {
 *       "Key": "stickiness.type",
 *       "Value": "lb_cookie"
 *     },
 *     {
 *       "Key": "stickiness.lb_cookie.duration_seconds",
 *       "Value": "86400"
 *     }
 *   ]
 * }
 * *\/
 * // example id: elbv2-modify-target-group-attributes-1
 * ```
 *
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "ModifyTargetGroupAttributes", {})
  .n("ElasticLoadBalancingV2Client", "ModifyTargetGroupAttributesCommand")
  .f(void 0, void 0)
  .ser(se_ModifyTargetGroupAttributesCommand)
  .de(de_ModifyTargetGroupAttributesCommand)
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
