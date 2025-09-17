// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { FilterLogEventsRequest, FilterLogEventsResponse } from "../models/models_0";
import { de_FilterLogEventsCommand, se_FilterLogEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link FilterLogEventsCommand}.
 */
export interface FilterLogEventsCommandInput extends FilterLogEventsRequest {}
/**
 * @public
 *
 * The output of {@link FilterLogEventsCommand}.
 */
export interface FilterLogEventsCommandOutput extends FilterLogEventsResponse, __MetadataBearer {}

/**
 * <p>Lists log events from the specified log group. You can list all the log events or
 *       filter the results using one or more of the following:</p>
 *          <ul>
 *             <li>
 *                <p>A filter pattern</p>
 *             </li>
 *             <li>
 *                <p>A time range</p>
 *             </li>
 *             <li>
 *                <p>The log stream name, or a log stream name prefix that matches multiple log
 *           streams</p>
 *             </li>
 *          </ul>
 *          <p>You must have the <code>logs:FilterLogEvents</code> permission to perform this
 *       operation.</p>
 *          <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or
 *         <code>logGroupName</code>. You must include one of these two parameters, but you can't
 *       include both. </p>
 *          <p>
 *             <code>FilterLogEvents</code> is a paginated operation. Each page returned can contain up
 *       to 1 MB of log events or up to 10,000 log events. A returned page might only be partially
 *       full, or even empty. For example, if the result of a query would return 15,000 log events, the
 *       first page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB.</p>
 *          <p>Partially full or empty pages don't necessarily mean that pagination is finished. If the
 *       results include a <code>nextToken</code>, there might be more log events available. You can
 *       return these additional log events by providing the nextToken in a subsequent
 *         <code>FilterLogEvents</code> operation. If the results don't include a
 *         <code>nextToken</code>, then pagination is finished. </p>
 *          <p>Specifying the <code>limit</code> parameter only guarantees that a single page doesn't
 *       return more log events than the specified limit, but it might return fewer events than the
 *       limit. This is the expected API behavior.</p>
 *          <p>The returned log events are sorted by event timestamp, the timestamp when the event was
 *       ingested by CloudWatch Logs, and the ID of the <code>PutLogEvents</code> request.</p>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation
 *       in a monitoring account and view data from the linked source accounts. For more information,
 *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 *          <note>
 *             <p>If you are using <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html">log
 *           transformation</a>, the <code>FilterLogEvents</code> operation returns only the
 *         original versions of log events, before they were transformed. To view the transformed
 *         versions, you must use a <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">CloudWatch Logs
 *         query.</a>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, FilterLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, FilterLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // FilterLogEventsRequest
 *   logGroupName: "STRING_VALUE",
 *   logGroupIdentifier: "STRING_VALUE",
 *   logStreamNames: [ // InputLogStreamNames
 *     "STRING_VALUE",
 *   ],
 *   logStreamNamePrefix: "STRING_VALUE",
 *   startTime: Number("long"),
 *   endTime: Number("long"),
 *   filterPattern: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   interleaved: true || false,
 *   unmask: true || false,
 * };
 * const command = new FilterLogEventsCommand(input);
 * const response = await client.send(command);
 * // { // FilterLogEventsResponse
 * //   events: [ // FilteredLogEvents
 * //     { // FilteredLogEvent
 * //       logStreamName: "STRING_VALUE",
 * //       timestamp: Number("long"),
 * //       message: "STRING_VALUE",
 * //       ingestionTime: Number("long"),
 * //       eventId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   searchedLogStreams: [ // SearchedLogStreams
 * //     { // SearchedLogStream
 * //       logStreamName: "STRING_VALUE",
 * //       searchedCompletely: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param FilterLogEventsCommandInput - {@link FilterLogEventsCommandInput}
 * @returns {@link FilterLogEventsCommandOutput}
 * @see {@link FilterLogEventsCommandInput} for command's `input` shape.
 * @see {@link FilterLogEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class FilterLogEventsCommand extends $Command
  .classBuilder<
    FilterLogEventsCommandInput,
    FilterLogEventsCommandOutput,
    CloudWatchLogsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CloudWatchLogsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Logs_20140328", "FilterLogEvents", {})
  .n("CloudWatchLogsClient", "FilterLogEventsCommand")
  .f(void 0, void 0)
  .ser(se_FilterLogEventsCommand)
  .de(de_FilterLogEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: FilterLogEventsRequest;
      output: FilterLogEventsResponse;
    };
    sdk: {
      input: FilterLogEventsCommandInput;
      output: FilterLogEventsCommandOutput;
    };
  };
}
