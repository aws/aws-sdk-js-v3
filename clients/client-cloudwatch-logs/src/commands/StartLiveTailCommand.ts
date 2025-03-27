// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  StartLiveTailRequest,
  StartLiveTailResponse,
  StartLiveTailResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_StartLiveTailCommand, se_StartLiveTailCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartLiveTailCommand}.
 */
export interface StartLiveTailCommandInput extends StartLiveTailRequest {}
/**
 * @public
 *
 * The output of {@link StartLiveTailCommand}.
 */
export interface StartLiveTailCommandOutput extends StartLiveTailResponse, __MetadataBearer {}

/**
 * <p>Starts a Live Tail streaming session for one or more log groups. A Live Tail session returns a stream of
 *       log events that have
 *       been recently ingested in the log groups. For more information, see
 *       <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatchLogs_LiveTail.html">Use Live Tail to view logs in near real time</a>.
 *     </p>
 *          <p>The response to this operation is a response stream, over which
 *       the server sends live log events and the client receives them.</p>
 *          <p>The following objects are sent over the stream:</p>
 *          <ul>
 *             <li>
 *                <p>A single <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LiveTailSessionStart.html">LiveTailSessionStart</a>
 *         object is sent at the start of the session.</p>
 *             </li>
 *             <li>
 *                <p>Every second, a <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_LiveTailSessionUpdate.html">LiveTailSessionUpdate</a>
 *         object is sent. Each of these objects contains an array of the actual log events.</p>
 *                <p>If no new log events were ingested in the past second, the
 *           <code>LiveTailSessionUpdate</code> object will contain an empty array.</p>
 *                <p>The array of log events contained in a <code>LiveTailSessionUpdate</code> can include
 *           as many as 500 log events. If the number of log events matching the request exceeds 500 per second, the
 *           log events are sampled down to 500 log events to be included in each <code>LiveTailSessionUpdate</code> object.</p>
 *                <p>If your client consumes the log events slower than the server produces them, CloudWatch Logs
 *           buffers up to 10 <code>LiveTailSessionUpdate</code> events or 5000 log events, after
 *           which it starts dropping the oldest events.</p>
 *             </li>
 *             <li>
 *                <p>A <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTailResponseStream.html#CWL-Type-StartLiveTailResponseStream-SessionStreamingException">SessionStreamingException</a>
 *         object is returned if an unknown error occurs on the server side.</p>
 *             </li>
 *             <li>
 *                <p>A <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_StartLiveTailResponseStream.html#CWL-Type-StartLiveTailResponseStream-SessionTimeoutException">SessionTimeoutException</a>
 *         object is returned when the session times out, after it has been kept open for three hours.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>You can end a session before it times out by closing the session stream or by closing the client that is receiving the
 *   stream. The session also ends if the established connection between the client and the server breaks.</p>
 *          </important>
 *          <p>For examples of using an SDK to start a Live Tail session, see
 *     <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/example_cloudwatch-logs_StartLiveTail_section.html">
 *       Start a Live Tail session using an Amazon Web Services SDK</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, StartLiveTailCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, StartLiveTailCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // StartLiveTailRequest
 *   logGroupIdentifiers: [ // StartLiveTailLogGroupIdentifiers // required
 *     "STRING_VALUE",
 *   ],
 *   logStreamNames: [ // InputLogStreamNames
 *     "STRING_VALUE",
 *   ],
 *   logStreamNamePrefixes: [
 *     "STRING_VALUE",
 *   ],
 *   logEventFilterPattern: "STRING_VALUE",
 * };
 * const command = new StartLiveTailCommand(input);
 * const response = await client.send(command);
 * // { // StartLiveTailResponse
 * //   responseStream: { // StartLiveTailResponseStream Union: only one key present
 * //     sessionStart: { // LiveTailSessionStart
 * //       requestId: "STRING_VALUE",
 * //       sessionId: "STRING_VALUE",
 * //       logGroupIdentifiers: [ // StartLiveTailLogGroupIdentifiers
 * //         "STRING_VALUE",
 * //       ],
 * //       logStreamNames: [ // InputLogStreamNames
 * //         "STRING_VALUE",
 * //       ],
 * //       logStreamNamePrefixes: [
 * //         "STRING_VALUE",
 * //       ],
 * //       logEventFilterPattern: "STRING_VALUE",
 * //     },
 * //     sessionUpdate: { // LiveTailSessionUpdate
 * //       sessionMetadata: { // LiveTailSessionMetadata
 * //         sampled: true || false,
 * //       },
 * //       sessionResults: [ // LiveTailSessionResults
 * //         { // LiveTailSessionLogEvent
 * //           logStreamName: "STRING_VALUE",
 * //           logGroupIdentifier: "STRING_VALUE",
 * //           message: "STRING_VALUE",
 * //           timestamp: Number("long"),
 * //           ingestionTime: Number("long"),
 * //         },
 * //       ],
 * //     },
 * //     SessionTimeoutException: { // SessionTimeoutException
 * //       message: "STRING_VALUE",
 * //     },
 * //     SessionStreamingException: { // SessionStreamingException
 * //       message: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param StartLiveTailCommandInput - {@link StartLiveTailCommandInput}
 * @returns {@link StartLiveTailCommandOutput}
 * @see {@link StartLiveTailCommandInput} for command's `input` shape.
 * @see {@link StartLiveTailCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient permissions to perform this action.</p>
 *
 * @throws {@link InvalidOperationException} (client fault)
 *  <p>The operation is not valid on the specified resource.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>You have reached the maximum number of resources that can be created.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class StartLiveTailCommand extends $Command
  .classBuilder<
    StartLiveTailCommandInput,
    StartLiveTailCommandOutput,
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
  .s("Logs_20140328", "StartLiveTail", {
    /**
     * @internal
     */
    eventStream: {
      output: true,
    },
  })
  .n("CloudWatchLogsClient", "StartLiveTailCommand")
  .f(void 0, StartLiveTailResponseFilterSensitiveLog)
  .ser(se_StartLiveTailCommand)
  .de(de_StartLiveTailCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartLiveTailRequest;
      output: StartLiveTailResponse;
    };
    sdk: {
      input: StartLiveTailCommandInput;
      output: StartLiveTailCommandOutput;
    };
  };
}
