// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DeleteResourceMetricsConfigurationInput,
  DeleteResourceMetricsConfigurationOutput,
} from "../models/models_0";
import { DeleteResourceMetricsConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResourceMetricsConfigurationCommand}.
 */
export interface DeleteResourceMetricsConfigurationCommandInput extends DeleteResourceMetricsConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteResourceMetricsConfigurationCommand}.
 */
export interface DeleteResourceMetricsConfigurationCommandOutput extends DeleteResourceMetricsConfigurationOutput, __MetadataBearer {}

/**
 * <p>Deletes the resource metrics configuration for an Amazon Web Services resource. After
 *             you delete the configuration, Amazon CloudWatch stops collecting detailed metrics
 *             for the resource. Metric data that Amazon CloudWatch already collected for the
 *             resource is not deleted.</p>
 *          <p>This operation returns a <code>ResourceNotFoundException</code> if no resource metrics
 *             configuration exists for the specified resource ARN. Verify that the resource ARN is
 *             correct.</p>
 *          <p>To delete a resource metrics configuration, you must have the
 *                 <code>cloudwatch:DeleteResourceMetricsConfiguration</code> permission. For information about scoping
 *             this permission to specific resources, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/iam-cw-condition-keys-resource-arn.html">Condition keys for resource metrics configuration access</a> in the
 *                 <i>Amazon CloudWatch User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteResourceMetricsConfigurationCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteResourceMetricsConfigurationCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteResourceMetricsConfigurationInput
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourceMetricsConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourceMetricsConfigurationCommandInput - {@link DeleteResourceMetricsConfigurationCommandInput}
 * @returns {@link DeleteResourceMetricsConfigurationCommandOutput}
 * @see {@link DeleteResourceMetricsConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteResourceMetricsConfigurationCommandOutput} for command's `response` shape.
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
export class DeleteResourceMetricsConfigurationCommand extends command<DeleteResourceMetricsConfigurationCommandInput, DeleteResourceMetricsConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResourceMetricsConfiguration",
  DeleteResourceMetricsConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourceMetricsConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteResourceMetricsConfigurationCommandInput;
      output: DeleteResourceMetricsConfigurationCommandOutput;
    };
  };
}
