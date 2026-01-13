// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CloudWatchLogsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAggregateLogGroupSummariesRequest, ListAggregateLogGroupSummariesResponse } from "../models/models_0";
import { ListAggregateLogGroupSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAggregateLogGroupSummariesCommand}.
 */
export interface ListAggregateLogGroupSummariesCommandInput extends ListAggregateLogGroupSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListAggregateLogGroupSummariesCommand}.
 */
export interface ListAggregateLogGroupSummariesCommandOutput extends ListAggregateLogGroupSummariesResponse, __MetadataBearer {}

/**
 * <p>Returns an aggregate summary of all log groups in the Region grouped by specified data
 *       source characteristics. Supports optional filtering by log group class, name patterns, and
 *       data sources. If you perform this action in a monitoring account, you can also return
 *       aggregated summaries of log groups from source accounts that are linked to the monitoring
 *       account. For more information about using cross-account observability to set up monitoring
 *       accounts and source accounts, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch
 *         cross-account observability</a>.</p>
 *          <p>The operation aggregates log groups by data source name and type and optionally format,
 *       providing counts of log groups that share these characteristics. The operation paginates
 *       results. By default, it returns up to 50 results and includes a token to retrieve more
 *       results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListAggregateLogGroupSummariesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListAggregateLogGroupSummariesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListAggregateLogGroupSummariesRequest
 *   accountIdentifiers: [ // AccountIds
 *     "STRING_VALUE",
 *   ],
 *   includeLinkedAccounts: true || false,
 *   logGroupClass: "STANDARD" || "INFREQUENT_ACCESS" || "DELIVERY",
 *   logGroupNamePattern: "STRING_VALUE",
 *   dataSources: [ // DataSourceFilters
 *     { // DataSourceFilter
 *       name: "STRING_VALUE", // required
 *       type: "STRING_VALUE",
 *     },
 *   ],
 *   groupBy: "DATA_SOURCE_NAME_TYPE_AND_FORMAT" || "DATA_SOURCE_NAME_AND_TYPE", // required
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 * };
 * const command = new ListAggregateLogGroupSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListAggregateLogGroupSummariesResponse
 * //   aggregateLogGroupSummaries: [ // AggregateLogGroupSummaries
 * //     { // AggregateLogGroupSummary
 * //       logGroupCount: Number("int"),
 * //       groupingIdentifiers: [ // GroupingIdentifiers
 * //         { // GroupingIdentifier
 * //           key: "STRING_VALUE",
 * //           value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAggregateLogGroupSummariesCommandInput - {@link ListAggregateLogGroupSummariesCommandInput}
 * @returns {@link ListAggregateLogGroupSummariesCommandOutput}
 * @see {@link ListAggregateLogGroupSummariesCommandInput} for command's `input` shape.
 * @see {@link ListAggregateLogGroupSummariesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the parameters for the request is not valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class ListAggregateLogGroupSummariesCommand extends $Command
  .classBuilder<
    ListAggregateLogGroupSummariesCommandInput,
    ListAggregateLogGroupSummariesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListAggregateLogGroupSummaries", {})
  .n("CloudWatchLogsClient", "ListAggregateLogGroupSummariesCommand")
  .sc(ListAggregateLogGroupSummaries$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAggregateLogGroupSummariesRequest;
      output: ListAggregateLogGroupSummariesResponse;
    };
    sdk: {
      input: ListAggregateLogGroupSummariesCommandInput;
      output: ListAggregateLogGroupSummariesCommandOutput;
    };
  };
}
