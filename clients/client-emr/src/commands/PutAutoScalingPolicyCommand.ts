// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutAutoScalingPolicyInput, PutAutoScalingPolicyOutput } from "../models/models_0";
import { de_PutAutoScalingPolicyCommand, se_PutAutoScalingPolicyCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutAutoScalingPolicyCommand}.
 */
export interface PutAutoScalingPolicyCommandInput extends PutAutoScalingPolicyInput {}
/**
 * @public
 *
 * The output of {@link PutAutoScalingPolicyCommand}.
 */
export interface PutAutoScalingPolicyCommandOutput extends PutAutoScalingPolicyOutput, __MetadataBearer {}

/**
 * <p>Creates or updates an automatic scaling policy for a core instance group or task
 *          instance group in an Amazon EMR cluster. The automatic scaling policy defines how
 *          an instance group dynamically adds and terminates Amazon EC2 instances in response
 *          to the value of a CloudWatch metric.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, PutAutoScalingPolicyCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, PutAutoScalingPolicyCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
 * const client = new EMRClient(config);
 * const input = { // PutAutoScalingPolicyInput
 *   ClusterId: "STRING_VALUE", // required
 *   InstanceGroupId: "STRING_VALUE", // required
 *   AutoScalingPolicy: { // AutoScalingPolicy
 *     Constraints: { // ScalingConstraints
 *       MinCapacity: Number("int"), // required
 *       MaxCapacity: Number("int"), // required
 *     },
 *     Rules: [ // ScalingRuleList // required
 *       { // ScalingRule
 *         Name: "STRING_VALUE", // required
 *         Description: "STRING_VALUE",
 *         Action: { // ScalingAction
 *           Market: "ON_DEMAND" || "SPOT",
 *           SimpleScalingPolicyConfiguration: { // SimpleScalingPolicyConfiguration
 *             AdjustmentType: "CHANGE_IN_CAPACITY" || "PERCENT_CHANGE_IN_CAPACITY" || "EXACT_CAPACITY",
 *             ScalingAdjustment: Number("int"), // required
 *             CoolDown: Number("int"),
 *           },
 *         },
 *         Trigger: { // ScalingTrigger
 *           CloudWatchAlarmDefinition: { // CloudWatchAlarmDefinition
 *             ComparisonOperator: "GREATER_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN" || "LESS_THAN_OR_EQUAL", // required
 *             EvaluationPeriods: Number("int"),
 *             MetricName: "STRING_VALUE", // required
 *             Namespace: "STRING_VALUE",
 *             Period: Number("int"), // required
 *             Statistic: "SAMPLE_COUNT" || "AVERAGE" || "SUM" || "MINIMUM" || "MAXIMUM",
 *             Threshold: Number("double"), // required
 *             Unit: "NONE" || "SECONDS" || "MICRO_SECONDS" || "MILLI_SECONDS" || "BYTES" || "KILO_BYTES" || "MEGA_BYTES" || "GIGA_BYTES" || "TERA_BYTES" || "BITS" || "KILO_BITS" || "MEGA_BITS" || "GIGA_BITS" || "TERA_BITS" || "PERCENT" || "COUNT" || "BYTES_PER_SECOND" || "KILO_BYTES_PER_SECOND" || "MEGA_BYTES_PER_SECOND" || "GIGA_BYTES_PER_SECOND" || "TERA_BYTES_PER_SECOND" || "BITS_PER_SECOND" || "KILO_BITS_PER_SECOND" || "MEGA_BITS_PER_SECOND" || "GIGA_BITS_PER_SECOND" || "TERA_BITS_PER_SECOND" || "COUNT_PER_SECOND",
 *             Dimensions: [ // MetricDimensionList
 *               { // MetricDimension
 *                 Key: "STRING_VALUE",
 *                 Value: "STRING_VALUE",
 *               },
 *             ],
 *           },
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new PutAutoScalingPolicyCommand(input);
 * const response = await client.send(command);
 * // { // PutAutoScalingPolicyOutput
 * //   ClusterId: "STRING_VALUE",
 * //   InstanceGroupId: "STRING_VALUE",
 * //   AutoScalingPolicy: { // AutoScalingPolicyDescription
 * //     Status: { // AutoScalingPolicyStatus
 * //       State: "PENDING" || "ATTACHING" || "ATTACHED" || "DETACHING" || "DETACHED" || "FAILED",
 * //       StateChangeReason: { // AutoScalingPolicyStateChangeReason
 * //         Code: "USER_REQUEST" || "PROVISION_FAILURE" || "CLEANUP_FAILURE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //     Constraints: { // ScalingConstraints
 * //       MinCapacity: Number("int"), // required
 * //       MaxCapacity: Number("int"), // required
 * //     },
 * //     Rules: [ // ScalingRuleList
 * //       { // ScalingRule
 * //         Name: "STRING_VALUE", // required
 * //         Description: "STRING_VALUE",
 * //         Action: { // ScalingAction
 * //           Market: "ON_DEMAND" || "SPOT",
 * //           SimpleScalingPolicyConfiguration: { // SimpleScalingPolicyConfiguration
 * //             AdjustmentType: "CHANGE_IN_CAPACITY" || "PERCENT_CHANGE_IN_CAPACITY" || "EXACT_CAPACITY",
 * //             ScalingAdjustment: Number("int"), // required
 * //             CoolDown: Number("int"),
 * //           },
 * //         },
 * //         Trigger: { // ScalingTrigger
 * //           CloudWatchAlarmDefinition: { // CloudWatchAlarmDefinition
 * //             ComparisonOperator: "GREATER_THAN_OR_EQUAL" || "GREATER_THAN" || "LESS_THAN" || "LESS_THAN_OR_EQUAL", // required
 * //             EvaluationPeriods: Number("int"),
 * //             MetricName: "STRING_VALUE", // required
 * //             Namespace: "STRING_VALUE",
 * //             Period: Number("int"), // required
 * //             Statistic: "SAMPLE_COUNT" || "AVERAGE" || "SUM" || "MINIMUM" || "MAXIMUM",
 * //             Threshold: Number("double"), // required
 * //             Unit: "NONE" || "SECONDS" || "MICRO_SECONDS" || "MILLI_SECONDS" || "BYTES" || "KILO_BYTES" || "MEGA_BYTES" || "GIGA_BYTES" || "TERA_BYTES" || "BITS" || "KILO_BITS" || "MEGA_BITS" || "GIGA_BITS" || "TERA_BITS" || "PERCENT" || "COUNT" || "BYTES_PER_SECOND" || "KILO_BYTES_PER_SECOND" || "MEGA_BYTES_PER_SECOND" || "GIGA_BYTES_PER_SECOND" || "TERA_BYTES_PER_SECOND" || "BITS_PER_SECOND" || "KILO_BITS_PER_SECOND" || "MEGA_BITS_PER_SECOND" || "GIGA_BITS_PER_SECOND" || "TERA_BITS_PER_SECOND" || "COUNT_PER_SECOND",
 * //             Dimensions: [ // MetricDimensionList
 * //               { // MetricDimension
 * //                 Key: "STRING_VALUE",
 * //                 Value: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   ClusterArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param PutAutoScalingPolicyCommandInput - {@link PutAutoScalingPolicyCommandInput}
 * @returns {@link PutAutoScalingPolicyCommandOutput}
 * @see {@link PutAutoScalingPolicyCommandInput} for command's `input` shape.
 * @see {@link PutAutoScalingPolicyCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 *
 * @public
 */
export class PutAutoScalingPolicyCommand extends $Command
  .classBuilder<
    PutAutoScalingPolicyCommandInput,
    PutAutoScalingPolicyCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "PutAutoScalingPolicy", {})
  .n("EMRClient", "PutAutoScalingPolicyCommand")
  .f(void 0, void 0)
  .ser(se_PutAutoScalingPolicyCommand)
  .de(de_PutAutoScalingPolicyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutAutoScalingPolicyInput;
      output: PutAutoScalingPolicyOutput;
    };
    sdk: {
      input: PutAutoScalingPolicyCommandInput;
      output: PutAutoScalingPolicyCommandOutput;
    };
  };
}
