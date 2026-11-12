// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListMetricDataQueryDefinitionsInput, ListMetricDataQueryDefinitionsOutput } from "../models/models_0";
import { ListMetricDataQueryDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListMetricDataQueryDefinitionsCommand}.
 */
export interface ListMetricDataQueryDefinitionsCommandInput extends ListMetricDataQueryDefinitionsInput {}
/**
 * @public
 *
 * The output of {@link ListMetricDataQueryDefinitionsCommand}.
 */
export interface ListMetricDataQueryDefinitionsCommandOutput extends ListMetricDataQueryDefinitionsOutput, __MetadataBearer {}

/**
 * <p>Lists the metric data query definitions in your account and Region.</p>
 *          <p>The results are summaries that don't include the expression. To get the full
 *             definition, call <code>GetMetricDataQueryDefinition</code> with its ID.</p>
 *          <p>This operation supports pagination. Use the <code>MaxResults</code> and
 *                 <code>NextToken</code> parameters to retrieve results in multiple calls.</p>
 *          <p>
 *             <b>Permissions</b>
 *          </p>
 *          <p>To list definitions, you need the
 *                 <code>cloudwatch:ListMetricDataQueryDefinitions</code> permission. This permission
 *             applies to all definitions in the account and Region. The results aren't filtered by
 *             tags.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, ListMetricDataQueryDefinitionsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, ListMetricDataQueryDefinitionsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * // import type { CloudWatchClientConfig } from "@aws-sdk/client-cloudwatch";
 * const config = {}; // type is CloudWatchClientConfig
 * const client = new CloudWatchClient(config);
 * const input = { // ListMetricDataQueryDefinitionsInput
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListMetricDataQueryDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListMetricDataQueryDefinitionsOutput
 * //   Items: [ // MetricDataQueryDefinitionSummaries // required
 * //     { // MetricDataQueryDefinitionSummary
 * //       Id: "STRING_VALUE", // required
 * //       Path: "STRING_VALUE", // required
 * //       Type: "PROMQL" || "SQL" || "METRIC_MATH", // required
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListMetricDataQueryDefinitionsCommandInput - {@link ListMetricDataQueryDefinitionsCommandInput}
 * @returns {@link ListMetricDataQueryDefinitionsCommandOutput}
 * @see {@link ListMetricDataQueryDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListMetricDataQueryDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 *
 * @public
 */
export class ListMetricDataQueryDefinitionsCommand extends command<ListMetricDataQueryDefinitionsCommandInput, ListMetricDataQueryDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListMetricDataQueryDefinitions",
  ListMetricDataQueryDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListMetricDataQueryDefinitionsInput;
      output: ListMetricDataQueryDefinitionsOutput;
    };
    sdk: {
      input: ListMetricDataQueryDefinitionsCommandInput;
      output: ListMetricDataQueryDefinitionsCommandOutput;
    };
  };
}
