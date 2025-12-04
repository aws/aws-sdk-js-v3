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
import type { ListScheduledQueriesRequest, ListScheduledQueriesResponse } from "../models/models_0";
import { ListScheduledQueries } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScheduledQueriesCommand}.
 */
export interface ListScheduledQueriesCommandInput extends ListScheduledQueriesRequest {}
/**
 * @public
 *
 * The output of {@link ListScheduledQueriesCommand}.
 */
export interface ListScheduledQueriesCommandOutput extends ListScheduledQueriesResponse, __MetadataBearer {}

/**
 * <p>Lists all scheduled queries in your account and region. You can filter results by state to show only enabled or disabled queries.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, ListScheduledQueriesCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, ListScheduledQueriesCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // ListScheduledQueriesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   state: "ENABLED" || "DISABLED",
 * };
 * const command = new ListScheduledQueriesCommand(input);
 * const response = await client.send(command);
 * // { // ListScheduledQueriesResponse
 * //   nextToken: "STRING_VALUE",
 * //   scheduledQueries: [ // ScheduledQuerySummaryList
 * //     { // ScheduledQuerySummary
 * //       scheduledQueryArn: "STRING_VALUE",
 * //       name: "STRING_VALUE",
 * //       state: "ENABLED" || "DISABLED",
 * //       lastTriggeredTime: Number("long"),
 * //       lastExecutionStatus: "Running" || "InvalidQuery" || "Complete" || "Failed" || "Timeout",
 * //       scheduleExpression: "STRING_VALUE",
 * //       timezone: "STRING_VALUE",
 * //       destinationConfiguration: { // DestinationConfiguration
 * //         s3Configuration: { // S3Configuration
 * //           destinationIdentifier: "STRING_VALUE", // required
 * //           roleArn: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       creationTime: Number("long"),
 * //       lastUpdatedTime: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListScheduledQueriesCommandInput - {@link ListScheduledQueriesCommandInput}
 * @returns {@link ListScheduledQueriesCommandOutput}
 * @see {@link ListScheduledQueriesCommandInput} for command's `input` shape.
 * @see {@link ListScheduledQueriesCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This exception is returned
 *       when the service encounters an unexpected condition that prevents it from fulfilling the
 *       request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled because of quota limits.</p>
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
export class ListScheduledQueriesCommand extends $Command
  .classBuilder<
    ListScheduledQueriesCommandInput,
    ListScheduledQueriesCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Logs_20140328", "ListScheduledQueries", {})
  .n("CloudWatchLogsClient", "ListScheduledQueriesCommand")
  .sc(ListScheduledQueries)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScheduledQueriesRequest;
      output: ListScheduledQueriesResponse;
    };
    sdk: {
      input: ListScheduledQueriesCommandInput;
      output: ListScheduledQueriesCommandOutput;
    };
  };
}
