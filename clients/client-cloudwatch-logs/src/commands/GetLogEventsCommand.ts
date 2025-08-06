// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetLogEventsRequest, GetLogEventsResponse } from "../models/models_0";
import { de_GetLogEventsCommand, se_GetLogEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists log events from the specified log stream. You can list all of the log events or
 *       filter using a time range.</p>
 *          <p>
 *             <code>GetLogEvents</code> is a paginated operation. Each page returned can contain up to 1
 *       MB of log events or up to 10,000 log events. A returned page might only be partially full, or
 *       even empty. For example, if the result of a query would return 15,000 log events, the first
 *       page isn't guaranteed to have 10,000 log events even if they all fit into 1 MB.</p>
 *          <p>Partially full or empty pages don't necessarily mean that pagination is finished. As long
 *       as the <code>nextBackwardToken</code> or <code>nextForwardToken</code> returned is NOT equal
 *       to the <code>nextToken</code> that you passed into the API call, there might be more log
 *       events available. The token that you use depends on the direction you want to move in along
 *       the log stream. The returned tokens are never null.</p>
 *          <note>
 *             <p>If you set <code>startFromHead</code> to <code>true</code> and you don’t include
 *           <code>endTime</code> in your request, you can end up in a situation where the pagination
 *         doesn't terminate. This can happen when the new log events are being added to the target log
 *         streams faster than they are being read. This situation is a good use case for the CloudWatch Logs
 *         <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_LiveTail.html">Live Tail</a> feature.</p>
 *          </note>
 *          <p>If you are using CloudWatch cross-account observability, you can use this operation
 *       in a monitoring account and view data from the linked source accounts. For more information,
 *       see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch-Unified-Cross-Account.html">CloudWatch cross-account observability</a>.</p>
 *          <p>You can specify the log group to search by using either <code>logGroupIdentifier</code> or
 *         <code>logGroupName</code>. You must include one of these two parameters, but you can't
 *       include both. </p>
 *          <note>
 *             <p>If you are using <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html">log
 *           transformation</a>, the <code>GetLogEvents</code> operation returns only the original
 *         versions of log events, before they were transformed. To view the transformed versions, you
 *         must use a <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/AnalyzingLogData.html">CloudWatch Logs
 *         query.</a>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, GetLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, GetLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
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
export class GetLogEventsCommand extends $Command
  .classBuilder<
    GetLogEventsCommandInput,
    GetLogEventsCommandOutput,
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
  .s("Logs_20140328", "GetLogEvents", {})
  .n("CloudWatchLogsClient", "GetLogEventsCommand")
  .f(void 0, void 0)
  .ser(se_GetLogEventsCommand)
  .de(de_GetLogEventsCommand)
  .build() {
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
