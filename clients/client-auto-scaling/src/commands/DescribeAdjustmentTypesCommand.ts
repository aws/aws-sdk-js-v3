// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAdjustmentTypesAnswer } from "../models/models_0";
import { de_DescribeAdjustmentTypesCommand, se_DescribeAdjustmentTypesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAdjustmentTypesCommand}.
 */
export interface DescribeAdjustmentTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeAdjustmentTypesCommand}.
 */
export interface DescribeAdjustmentTypesCommandOutput extends DescribeAdjustmentTypesAnswer, __MetadataBearer {}

/**
 * <p>Describes the available adjustment types for step scaling and simple scaling
 *             policies.</p>
 *          <p>The following adjustment types are supported:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ChangeInCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExactCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PercentChangeInCapacity</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAdjustmentTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAdjustmentTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * // import type { AutoScalingClientConfig } from "@aws-sdk/client-auto-scaling";
 * const config = {}; // type is AutoScalingClientConfig
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeAdjustmentTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAdjustmentTypesAnswer
 * //   AdjustmentTypes: [ // AdjustmentTypes
 * //     { // AdjustmentType
 * //       AdjustmentType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAdjustmentTypesCommandInput - {@link DescribeAdjustmentTypesCommandInput}
 * @returns {@link DescribeAdjustmentTypesCommandOutput}
 * @see {@link DescribeAdjustmentTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAdjustmentTypesCommandOutput} for command's `response` shape.
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
 * @example To describe the Amazon EC2 Auto Scaling adjustment types
 * ```javascript
 * // This example describes the available adjustment types.
 * const input = { /* empty *\/ };
 * const command = new DescribeAdjustmentTypesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   AdjustmentTypes: [
 *     {
 *       AdjustmentType: "ChangeInCapacity"
 *     },
 *     {
 *       AdjustmentType: "ExactCapcity"
 *     },
 *     {
 *       AdjustmentType: "PercentChangeInCapacity"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeAdjustmentTypesCommand extends $Command
  .classBuilder<
    DescribeAdjustmentTypesCommandInput,
    DescribeAdjustmentTypesCommandOutput,
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
  .s("AutoScaling_2011_01_01", "DescribeAdjustmentTypes", {})
  .n("AutoScalingClient", "DescribeAdjustmentTypesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAdjustmentTypesCommand)
  .de(de_DescribeAdjustmentTypesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeAdjustmentTypesAnswer;
    };
    sdk: {
      input: DescribeAdjustmentTypesCommandInput;
      output: DescribeAdjustmentTypesCommandOutput;
    };
  };
}
