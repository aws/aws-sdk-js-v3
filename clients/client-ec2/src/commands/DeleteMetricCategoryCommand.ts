// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMetricCategoryRequest, DeleteMetricCategoryResult } from "../models/models_3";
import { DeleteMetricCategory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMetricCategoryCommand}.
 */
export interface DeleteMetricCategoryCommandInput extends DeleteMetricCategoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMetricCategoryCommand}.
 */
export interface DeleteMetricCategoryCommandOutput extends DeleteMetricCategoryResult, __MetadataBearer {}

/**
 * <p>Deletes the specified metric category. Associations between the metric category and
 *             your instances are removed asynchronously.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-detailed-monitoring.html#detailed-monitoring-metric-categories">Use metric categories for additional metrics</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteMetricCategoryCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteMetricCategoryCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DeleteMetricCategoryRequest
 *   MetricCategoryId: "STRING_VALUE", // required
 *   DryRun: true || false,
 * };
 * const command = new DeleteMetricCategoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMetricCategoryResult
 * //   MetricCategoryId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteMetricCategoryCommandInput - {@link DeleteMetricCategoryCommandInput}
 * @returns {@link DeleteMetricCategoryCommandOutput}
 * @see {@link DeleteMetricCategoryCommandInput} for command's `input` shape.
 * @see {@link DeleteMetricCategoryCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DeleteMetricCategoryCommand extends command<DeleteMetricCategoryCommandInput, DeleteMetricCategoryCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMetricCategory",
  DeleteMetricCategory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMetricCategoryRequest;
      output: DeleteMetricCategoryResult;
    };
    sdk: {
      input: DeleteMetricCategoryCommandInput;
      output: DeleteMetricCategoryCommandOutput;
    };
  };
}
