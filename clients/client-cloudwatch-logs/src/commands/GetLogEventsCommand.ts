// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetLogEventsRequest, GetLogEventsResponse } from "../models/models_0";
import { GetLogEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetLogEventsCommand}.
 */
export interface GetLogEventsCommandInput extends GetLogEventsRequest {}
/**
 * @public
 *
 * The output of {@link GetLogEventsCommand}.
 */
export interface GetLogEventsCommandOutput extends GetLogEventsResponse, __MetadataBearer {}

/**
 * Lists log events from the specified log stream. You can list all of the log events or filter using a time range.
 *
 * `GetLogEvents` is a paginated operation. Each page returned can contain up to 1 MB of log events or up to 10,000 log events. A returned page might only be partially full, or even empty. For example, if the result of a query would return 15,000 log events, the first page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB.
 *
 * Partially full or empty pages don't necessarily mean that pagination is finished. As long as the `nextBackwardToken` or `nextForwardToken` returned is NOT equal to the `nextToken` that you passed into the API call, there might be more log events available. The token that you use depends on the direction you want to move in along the log stream. The returned tokens are never null.
 *
 * > **Note:** If you set `startFromHead` to `true` and you don’t include `endTime` in your request, you can end up in a situation where the pagination doesn't terminate. This can happen when the new log events are being added to the target log streams faster than they are being read. This situation is a good use case for the CloudWatch Logs [Live Tail](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_LiveTail.html) feature.
 *
 * If you are using CloudWatch cross-account observability, you can use this operation in a monitoring account and view data from the linked source accounts. For more information, see [CloudWatch cross-account observability](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html).
 *
 * You can specify the log group to search by using either `logGroupIdentifier` or `logGroupName`. You must include one of these two parameters, but you can't include both.
 *
 * > **Note:** If you are using [log transformation](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html), the `GetLogEvents` operation returns only the original versions of log events, before they were transformed. To view the transformed versions, you must use a [CloudWatch Logs query.](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // GetLogEventsRequest
 *   logGroupName: "STRING_VALUE",
 *   logGroupIdentifier: "STRING_VALUE",
 *   logStreamName: "STRING_VALUE", // required
 *   startTime: Number("long"),
 *   endTime: Number("long"),
 *   nextToken: "STRING_VALUE",
 *   limit: Number("int"),
 *   startFromHead: true || false,
 *   unmask: true || false,
 * };
 * const command = new GetLogEventsCommand(input);
 * const response = await client.send(command);
 * // { // GetLogEventsResponse
 * //   events: [ // OutputLogEvents
 * //     { // OutputLogEvent
 * //       timestamp: Number("long"),
 * //       message: "STRING_VALUE",
 * //       ingestionTime: Number("long"),
 * //     },
 * //   ],
 * //   nextForwardToken: "STRING_VALUE",
 * //   nextBackwardToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetLogEventsCommandInput - {@link GetLogEventsCommandInput}
 * @returns {@link GetLogEventsCommandOutput}
 * @see {@link GetLogEventsCommandInput} for command's `input` shape.
 * @see {@link GetLogEventsCommandOutput} for command's `response` shape.
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
export class GetLogEventsCommand extends command<GetLogEventsCommandInput, GetLogEventsCommandOutput>(
  _ep0,
  _mw0,
  "GetLogEvents",
  GetLogEvents$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLogEventsRequest;
      output: GetLogEventsResponse;
    };
    sdk: {
      input: GetLogEventsCommandInput;
      output: GetLogEventsCommandOutput;
    };
  };
}
