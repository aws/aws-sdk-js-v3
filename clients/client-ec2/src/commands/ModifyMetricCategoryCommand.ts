// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ModifyMetricCategoryRequest, ModifyMetricCategoryResult } from "../models/models_7";
import { ModifyMetricCategory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ModifyMetricCategoryCommand}.
 */
export interface ModifyMetricCategoryCommandInput extends ModifyMetricCategoryRequest {}
/**
 * @public
 *
 * The output of {@link ModifyMetricCategoryCommand}.
 */
export interface ModifyMetricCategoryCommandOutput extends ModifyMetricCategoryResult, __MetadataBearer {}

/**
 * <p>Modifies the metrics in the specified metric category. The metrics that you specify
 *             replace the existing metrics.</p>
 *          <p>Instances that are associated with the metric category are updated
 *             asynchronously.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-detailed-monitoring.html#detailed-monitoring-metric-categories">Use metric categories for additional metrics</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyMetricCategoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyMetricCategoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyMetricCategoryRequest
 *   MetricCategoryId: "STRING_VALUE", // required
 *   Metrics: [ // MetricCategoryMetricNameList // required
 *     "STRING_VALUE",
 *   ],
 *   DryRun: true || false,
 * };
 * const command = new ModifyMetricCategoryCommand(input);
 * const response = await client.send(command);
 * // { // ModifyMetricCategoryResult
 * //   MetricCategory: { // MetricCategory
 * //     MetricCategoryId: "STRING_VALUE",
 * //     Metrics: [ // MetricCategoryMetricNameList
 * //       "STRING_VALUE",
 * //     ],
 * //     Tags: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyMetricCategoryCommandInput - {@link ModifyMetricCategoryCommandInput}
 * @returns {@link ModifyMetricCategoryCommandOutput}
 * @see {@link ModifyMetricCategoryCommandInput} for command's `input` shape.
 * @see {@link ModifyMetricCategoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyMetricCategoryCommand extends command<ModifyMetricCategoryCommandInput, ModifyMetricCategoryCommandOutput>(
  _ep0,
  _mw0,
  "ModifyMetricCategory",
  ModifyMetricCategory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyMetricCategoryRequest;
      output: ModifyMetricCategoryResult;
    };
    sdk: {
      input: ModifyMetricCategoryCommandInput;
      output: ModifyMetricCategoryCommandOutput;
    };
  };
}
