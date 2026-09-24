// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetResourceMetricsConfigurationInput, GetResourceMetricsConfigurationOutput } from "../models/models_0";
import { GetResourceMetricsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetResourceMetricsConfigurationCommand}.
 */
export interface GetResourceMetricsConfigurationCommandInput extends GetResourceMetricsConfigurationInput {}
/**
 * @public
 *
 * The output of {@link GetResourceMetricsConfigurationCommand}.
 */
export interface GetResourceMetricsConfigurationCommandOutput extends GetResourceMetricsConfigurationOutput, __MetadataBearer {}

/**
 * <p>Retrieves the current resource metrics configuration for an Amazon Web Services
 *             resource. The response includes the resource ARN, any metric selections, and the times
 *             at which the configuration was created and last updated.</p>
 *          <p>This operation returns a <code>ResourceNotFoundException</code> if no resource metrics
 *             configuration exists for the specified resource ARN. To create a configuration, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_CreateResourceMetricsConfiguration.html">CreateResourceMetricsConfiguration</a>.</p>
 *          <p>To retrieve a resource metrics configuration, you must have the
 *                 <code>cloudwatch:GetResourceMetricsConfiguration</code> permission. For information
 *             about scoping this permission to specific resources, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-resource-arn.html">Condition keys for resource metrics configuration access</a> in the
 *                 <i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, GetResourceMetricsConfigurationCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, GetResourceMetricsConfigurationCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // GetResourceMetricsConfigurationInput
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new GetResourceMetricsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceMetricsConfigurationOutput
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
 * @param GetResourceMetricsConfigurationCommandInput - {@link GetResourceMetricsConfigurationCommandInput}
 * @returns {@link GetResourceMetricsConfigurationCommandOutput}
 * @see {@link GetResourceMetricsConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetResourceMetricsConfigurationCommandOutput} for command's `response` shape.
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
export class GetResourceMetricsConfigurationCommand extends command<GetResourceMetricsConfigurationCommandInput, GetResourceMetricsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "GetResourceMetricsConfiguration",
  GetResourceMetricsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceMetricsConfigurationInput;
      output: GetResourceMetricsConfigurationOutput;
    };
    sdk: {
      input: GetResourceMetricsConfigurationCommandInput;
      output: GetResourceMetricsConfigurationCommandOutput;
    };
  };
}
