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
 * Creates a resource metrics configuration for an Amazon Web Services resource. After you create a configuration, Amazon CloudWatch collects detailed metrics for that resource.
 *
 * Each Amazon Web Services resource can have only one resource metrics configuration. If a configuration already exists for the specified resource ARN, this operation returns a `ConflictException`. To modify an existing configuration, use [UpdateResourceMetricsConfiguration](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UpdateResourceMetricsConfiguration.html).
 *
 * If the Amazon Web Services resource that you specify in `ResourceArn` does not exist, this operation returns a `ResourceNotFoundException`. Verify that the resource ARN is correct and that the resource exists before you retry the request.
 *
 * To create a resource metrics configuration, you must have the `cloudwatch:CreateResourceMetricsConfiguration` permission. For information about scoping this permission to specific resources, see [Condition keys for resource metrics configuration access](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-resource-arn.html) in the *Amazon CloudWatch User Guide*.
 *
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
 *
 * This operation attempted to create a resource that already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The named resource does not exist.
 *
 * @throws {@link CloudWatchServiceException}
 *
 * Base exception class for all service exceptions from CloudWatch service.
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
