// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeMetricCollectionTypesAnswer } from "../models/models_0";
import { DescribeMetricCollectionTypes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetricCollectionTypesCommand}.
 */
export interface DescribeMetricCollectionTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeMetricCollectionTypesCommand}.
 */
export interface DescribeMetricCollectionTypesCommandOutput
  extends DescribeMetricCollectionTypesAnswer,
    __MetadataBearer {}

/**
 * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeMetricCollectionTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeMetricCollectionTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeMetricCollectionTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricCollectionTypesAnswer
 * //   Metrics: [ // MetricCollectionTypes
 * //     { // MetricCollectionType
 * //       Metric: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Granularities: [ // MetricGranularityTypes
 * //     { // MetricGranularityType
 * //       Granularity: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMetricCollectionTypesCommandInput - {@link DescribeMetricCollectionTypesCommandInput}
 * @returns {@link DescribeMetricCollectionTypesCommandOutput}
 * @see {@link DescribeMetricCollectionTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricCollectionTypesCommandOutput} for command's `response` shape.
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
 * @example To describe the Auto Scaling metric collection types
 * ```javascript
 * // This example describes the available metric collection types.
 * const input = { /* empty *\/ };
 * const command = new DescribeMetricCollectionTypesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Granularities: [
 *     {
 *       Granularity: "1Minute"
 *     }
 *   ],
 *   Metrics: [
 *     {
 *       Metric: "GroupMinSize"
 *     },
 *     {
 *       Metric: "GroupMaxSize"
 *     },
 *     {
 *       Metric: "GroupDesiredCapacity"
 *     },
 *     {
 *       Metric: "GroupInServiceInstances"
 *     },
 *     {
 *       Metric: "GroupPendingInstances"
 *     },
 *     {
 *       Metric: "GroupTerminatingInstances"
 *     },
 *     {
 *       Metric: "GroupStandbyInstances"
 *     },
 *     {
 *       Metric: "GroupTotalInstances"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeMetricCollectionTypesCommand extends $Command
  .classBuilder<
    DescribeMetricCollectionTypesCommandInput,
    DescribeMetricCollectionTypesCommandOutput,
    AutoScalingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: AutoScalingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AutoScaling_2011_01_01", "DescribeMetricCollectionTypes", {})
  .n("AutoScalingClient", "DescribeMetricCollectionTypesCommand")
  .sc(DescribeMetricCollectionTypes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeMetricCollectionTypesAnswer;
    };
    sdk: {
      input: DescribeMetricCollectionTypesCommandInput;
      output: DescribeMetricCollectionTypesCommandOutput;
    };
  };
}
