// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { EnableMetricsCollectionQuery } from "../models/models_0";
import { de_EnableMetricsCollectionCommand, se_EnableMetricsCollectionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link EnableMetricsCollectionCommand}.
 */
export interface EnableMetricsCollectionCommandInput extends EnableMetricsCollectionQuery {}
/**
 * @public
 *
 * The output of {@link EnableMetricsCollectionCommand}.
 */
export interface EnableMetricsCollectionCommandOutput extends __MetadataBearer {}

/**
 * <p>Enables group metrics collection for the specified Auto Scaling group.</p>
 *          <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on
 *             threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch
 *             console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor
 *                 CloudWatch metrics for your Auto Scaling groups and instances</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, EnableMetricsCollectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, EnableMetricsCollectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // EnableMetricsCollectionQuery
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   Metrics: [ // Metrics
 *     "STRING_VALUE",
 *   ],
 *   Granularity: "STRING_VALUE", // required
 * };
 * const command = new EnableMetricsCollectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableMetricsCollectionCommandInput - {@link EnableMetricsCollectionCommandInput}
 * @returns {@link EnableMetricsCollectionCommandOutput}
 * @see {@link EnableMetricsCollectionCommandInput} for command's `input` shape.
 * @see {@link EnableMetricsCollectionCommandOutput} for command's `response` shape.
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
 * @example To enable metrics collection for an Auto Scaling group
 * ```javascript
 * // This example enables data collection for the specified Auto Scaling group.
 * const input = {
 *   AutoScalingGroupName: "my-auto-scaling-group",
 *   Granularity: "1Minute"
 * };
 * const command = new EnableMetricsCollectionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class EnableMetricsCollectionCommand extends $Command
  .classBuilder<
    EnableMetricsCollectionCommandInput,
    EnableMetricsCollectionCommandOutput,
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
  .s("AutoScaling_2011_01_01", "EnableMetricsCollection", {})
  .n("AutoScalingClient", "EnableMetricsCollectionCommand")
  .f(void 0, void 0)
  .ser(se_EnableMetricsCollectionCommand)
  .de(de_EnableMetricsCollectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: EnableMetricsCollectionQuery;
      output: {};
    };
    sdk: {
      input: EnableMetricsCollectionCommandInput;
      output: EnableMetricsCollectionCommandOutput;
    };
  };
}
