// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateResourceMetricsConfigurationInput,
  UpdateResourceMetricsConfigurationOutput,
} from "../models/models_0";
import { UpdateResourceMetricsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateResourceMetricsConfigurationCommand}.
 */
export interface UpdateResourceMetricsConfigurationCommandInput extends UpdateResourceMetricsConfigurationInput {}
/**
 * @public
 *
 * The output of {@link UpdateResourceMetricsConfigurationCommand}.
 */
export interface UpdateResourceMetricsConfigurationCommandOutput extends UpdateResourceMetricsConfigurationOutput, __MetadataBearer {}

/**
 * <p>Updates the resource metrics configuration for an Amazon Web Services resource. The
 *             <code>MetricSelections</code> value that you provide replaces any existing metric
 *             selections for the resource; it is not merged with them.</p>
 *          <p>If you omit <code>MetricSelections</code>, Amazon CloudWatch removes any existing
 *             metric selection filter and collects all available detailed metrics for the
 *             resource.</p>
 *          <p>This operation returns a <code>ResourceNotFoundException</code> if no resource metrics
 *             configuration exists for the specified resource ARN. To create a configuration, use
 *             <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_CreateResourceMetricsConfiguration.html">CreateResourceMetricsConfiguration</a>.</p>
 *          <p>To update a resource metrics configuration, you must have the
 *                 <code>cloudwatch:UpdateResourceMetricsConfiguration</code> permission. For information about scoping
 *             this permission to specific resources, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-resource-arn.html">Condition keys for resource metrics configuration access</a> in the
 *                 <i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, UpdateResourceMetricsConfigurationCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, UpdateResourceMetricsConfigurationCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // UpdateResourceMetricsConfigurationInput
 *   ResourceArn: "STRING_VALUE", // required
 *   MetricSelections: [ // ResourceMetricSelectionList
 *     { // ResourceMetricSelection
 *       IncludeMetrics: [ // MetricNameList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new UpdateResourceMetricsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // UpdateResourceMetricsConfigurationOutput
 * //   ResourceMetricsConfiguration: { // ResourceMetricsConfiguration
 * //     ResourceArn: "STRING_VALUE", // required
 * //     CreatedAt: new Date("TIMESTAMP"), // required
 * //     UpdatedAt: new Date("TIMESTAMP"), // required
 * //     MetricSelections: [ // ResourceMetricSelectionList
 * //       { // ResourceMetricSelection
 * //         IncludeMetrics: [ // MetricNameList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateResourceMetricsConfigurationCommandInput - {@link UpdateResourceMetricsConfigurationCommandInput}
 * @returns {@link UpdateResourceMetricsConfigurationCommandOutput}
 * @see {@link UpdateResourceMetricsConfigurationCommandInput} for command's `input` shape.
 * @see {@link UpdateResourceMetricsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class UpdateResourceMetricsConfigurationCommand extends command<UpdateResourceMetricsConfigurationCommandInput, UpdateResourceMetricsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "UpdateResourceMetricsConfiguration",
  UpdateResourceMetricsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateResourceMetricsConfigurationInput;
      output: UpdateResourceMetricsConfigurationOutput;
    };
    sdk: {
      input: UpdateResourceMetricsConfigurationCommandInput;
      output: UpdateResourceMetricsConfigurationCommandOutput;
    };
  };
}
