// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateResourceMetricsConfigurationInput,
  CreateResourceMetricsConfigurationOutput,
} from "../models/models_0";
import { CreateResourceMetricsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateResourceMetricsConfigurationCommand}.
 */
export interface CreateResourceMetricsConfigurationCommandInput extends CreateResourceMetricsConfigurationInput {}
/**
 * @public
 *
 * The output of {@link CreateResourceMetricsConfigurationCommand}.
 */
export interface CreateResourceMetricsConfigurationCommandOutput extends CreateResourceMetricsConfigurationOutput, __MetadataBearer {}

/**
 * <p>Creates a resource metrics configuration for an Amazon Web Services resource. After you
 *             create a configuration, Amazon CloudWatch collects detailed metrics for that
 *             resource.</p>
 *          <p>Each Amazon Web Services resource can have only one resource metrics configuration. If a
 *             configuration already exists for the specified resource ARN, this operation returns a
 *             <code>ConflictException</code>. To modify an existing configuration, use <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UpdateResourceMetricsConfiguration.html">UpdateResourceMetricsConfiguration</a>.</p>
 *          <p>If the Amazon Web Services resource that you specify in <code>ResourceArn</code> does
 *             not exist, this operation returns a <code>ResourceNotFoundException</code>. Verify that
 *             the resource ARN is correct and that the resource exists before you retry the
 *             request.</p>
 *          <p>To create a resource metrics configuration, you must have the
 *                 <code>cloudwatch:CreateResourceMetricsConfiguration</code> permission. For information about scoping
 *             this permission to specific resources, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-resource-arn.html">Condition keys for resource metrics configuration access</a> in the
 *                 <i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, CreateResourceMetricsConfigurationCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, CreateResourceMetricsConfigurationCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // CreateResourceMetricsConfigurationInput
 *   ResourceArn: "STRING_VALUE", // required
 *   MetricSelections: [ // ResourceMetricSelectionList
 *     { // ResourceMetricSelection
 *       IncludeMetrics: [ // MetricNameList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new CreateResourceMetricsConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // CreateResourceMetricsConfigurationOutput
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
 * @param CreateResourceMetricsConfigurationCommandInput - {@link CreateResourceMetricsConfigurationCommandInput}
 * @returns {@link CreateResourceMetricsConfigurationCommandOutput}
 * @see {@link CreateResourceMetricsConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateResourceMetricsConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This operation attempted to create a resource that already exists.</p>
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
export class CreateResourceMetricsConfigurationCommand extends command<CreateResourceMetricsConfigurationCommandInput, CreateResourceMetricsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "CreateResourceMetricsConfiguration",
  CreateResourceMetricsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateResourceMetricsConfigurationInput;
      output: CreateResourceMetricsConfigurationOutput;
    };
    sdk: {
      input: CreateResourceMetricsConfigurationCommandInput;
      output: CreateResourceMetricsConfigurationCommandOutput;
    };
  };
}
