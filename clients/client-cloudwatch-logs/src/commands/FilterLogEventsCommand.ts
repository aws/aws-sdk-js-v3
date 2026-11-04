// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { FilterLogEventsRequest, FilterLogEventsResponse } from "../models/models_0";
import { FilterLogEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists log events from the specified log group. You can list all the log events or filter the results using one or more of the following:
 *
 * - A filter pattern
 * - A time range
 * - The log stream name, or a log stream name prefix that matches multiple log streams
 *
 * You must have the `logs:FilterLogEvents` permission to perform this operation.
 *
 * You can specify the log group to search by using either `logGroupIdentifier` or `logGroupName`. You must include one of these two parameters, but you can't include both.
 *
 * `FilterLogEvents` is a paginated operation. Each page returned can contain up to 1 MB of log events or up to 10,000 log events. A returned page might only be partially full, or even empty. For example, if the result of a query would return 15,000 log events, the first page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB.
 *
 * Partially full or empty pages don't necessarily mean that pagination is finished. If the results include a `nextToken`, there might be more log events available. You can return these additional log events by providing the nextToken in a subsequent `FilterLogEvents` operation. If the results don't include a `nextToken`, then pagination is finished.
 *
 * Specifying the `limit` parameter only guarantees that a single page doesn't return more log events than the specified limit, but it might return fewer events than the limit. This is the expected API behavior.
 *
 * The returned log events are sorted by event timestamp, the timestamp when the event was ingested by CloudWatch Logs, and the ID of the `PutLogEvents` request. By default, the events are returned in ascending timestamp order (oldest first). To return events in descending timestamp order (newest first), set the `startFromHead` parameter to `false`.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html).
 *
 * > **Note:** If you are using [log transformation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html), the `FilterLogEvents` operation returns only the original versions of log events, before they were transformed. To view the transformed versions, you must use a [CloudWatch Logs query.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
 *
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
 *   startFromHead: true || false,
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
 *
 * A parameter is specified incorrectly.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource does not exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service cannot complete the request.
 *
 * @throws {@link CloudWatchLogsServiceException}
 *
 * Base exception class for all service exceptions from CloudWatchLogs service.
 *
 * @public
 */
export class FilterLogEventsCommand extends command<FilterLogEventsCommandInput, FilterLogEventsCommandOutput>(
  _ep0,
  _mw0,
  "FilterLogEvents",
  FilterLogEvents$
) {
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
