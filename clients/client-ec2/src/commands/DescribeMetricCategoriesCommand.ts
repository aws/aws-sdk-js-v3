// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeMetricCategoriesRequest, DescribeMetricCategoriesResult } from "../models/models_4";
import { DescribeMetricCategories$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeMetricCategoriesCommand}.
 */
export interface DescribeMetricCategoriesCommandInput extends DescribeMetricCategoriesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeMetricCategoriesCommand}.
 */
export interface DescribeMetricCategoriesCommandOutput extends DescribeMetricCategoriesResult, __MetadataBearer {}

/**
 * <p>Describes the specified metric categories, or all of your metric categories.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/manage-detailed-monitoring.html#detailed-monitoring-metric-categories">Use metric categories for additional metrics</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeMetricCategoriesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeMetricCategoriesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // DescribeMetricCategoriesRequest
 *   MetricCategoryIds: [ // MetricCategoryIdList
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   DryRun: true || false,
 * };
 * const command = new DescribeMetricCategoriesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricCategoriesResult
 * //   MetricCategories: [ // MetricCategoryList
 * //     { // MetricCategory
 * //       MetricCategoryId: "STRING_VALUE",
 * //       Metrics: [ // MetricCategoryMetricNameList
 * //         "STRING_VALUE",
 * //       ],
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeMetricCategoriesCommandInput - {@link DescribeMetricCategoriesCommandInput}
 * @returns {@link DescribeMetricCategoriesCommandOutput}
 * @see {@link DescribeMetricCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricCategoriesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeMetricCategoriesCommand extends command<DescribeMetricCategoriesCommandInput, DescribeMetricCategoriesCommandOutput>(
  _ep0,
  _mw0,
  "DescribeMetricCategories",
  DescribeMetricCategories$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeMetricCategoriesRequest;
      output: DescribeMetricCategoriesResult;
    };
    sdk: {
      input: DescribeMetricCategoriesCommandInput;
      output: DescribeMetricCategoriesCommandOutput;
    };
  };
}
