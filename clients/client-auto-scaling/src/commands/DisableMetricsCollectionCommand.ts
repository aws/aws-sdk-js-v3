// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DisableMetricsCollectionQuery } from "../models/models_0";
import { de_DisableMetricsCollectionCommand, se_DisableMetricsCollectionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisableMetricsCollectionCommand}.
 */
export interface DisableMetricsCollectionCommandInput extends DisableMetricsCollectionQuery {}
/**
 * @public
 *
 * The output of {@link DisableMetricsCollectionCommand}.
 */
export interface DisableMetricsCollectionCommandOutput extends __MetadataBearer {}

/**
 * <p>Disables group metrics collection for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DisableMetricsCollectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DisableMetricsCollectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DisableMetricsCollectionQuery
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   Metrics: [ // Metrics
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisableMetricsCollectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisableMetricsCollectionCommandInput - {@link DisableMetricsCollectionCommandInput}
 * @returns {@link DisableMetricsCollectionCommandOutput}
 * @see {@link DisableMetricsCollectionCommandInput} for command's `input` shape.
 * @see {@link DisableMetricsCollectionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 *
 * @example To disable metrics collection for an Auto Scaling group
 * ```javascript
 * // This example disables collecting data for the GroupDesiredCapacity metric for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   Metrics: [
 *     "GroupDesiredCapacity"
 *   ]
 * };
 * const command = new DisableMetricsCollectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DisableMetricsCollectionCommand extends $Command
  .classBuilder<
    DisableMetricsCollectionCommandInput,
    DisableMetricsCollectionCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AutoScaling_2011_01_01", "DisableMetricsCollection", {})
  .n("AutoScalingClient", "DisableMetricsCollectionCommand")
  .f(void 0, void 0)
  .ser(se_DisableMetricsCollectionCommand)
  .de(de_DisableMetricsCollectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisableMetricsCollectionQuery;
      output: {};
    };
    sdk: {
      input: DisableMetricsCollectionCommandInput;
      output: DisableMetricsCollectionCommandOutput;
    };
  };
}
