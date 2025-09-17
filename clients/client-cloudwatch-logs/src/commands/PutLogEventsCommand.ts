// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutLogEventsRequest, PutLogEventsResponse } from "../models/models_0";
import { de_PutLogEventsCommand, se_PutLogEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutLogEventsCommand}.
 */
export interface PutLogEventsCommandInput extends PutLogEventsRequest {}
/**
 * @public
 *
 * The output of {@link PutLogEventsCommand}.
 */
export interface PutLogEventsCommandOutput extends PutLogEventsResponse, __MetadataBearer {}

/**
 * <p>Uploads a batch of log events to the specified log stream.</p>
 *          <important>
 *             <p>The sequence token is now ignored in <code>PutLogEvents</code> actions.
 *           <code>PutLogEvents</code> actions are always accepted and never return
 *           <code>InvalidSequenceTokenException</code> or <code>DataAlreadyAcceptedException</code>
 *         even if the sequence token is not valid. You can use parallel <code>PutLogEvents</code>
 *         actions on the same log stream. </p>
 *          </important>
 *          <p>The batch of events must satisfy the following constraints:</p>
 *          <ul>
 *             <li>
 *                <p>The maximum batch size is 1,048,576 bytes. This size is calculated as the sum of
 *           all event messages in UTF-8, plus 26 bytes for each log event.</p>
 *             </li>
 *             <li>
 *                <p>Events more than 2 hours in the future are rejected while processing remaining
 *           valid events.</p>
 *             </li>
 *             <li>
 *                <p>Events older than 14 days or preceding the log group's retention period are
 *           rejected while processing remaining valid events.</p>
 *             </li>
 *             <li>
 *                <p>The log events in the batch must be in chronological order by their timestamp. The
 *           timestamp is the time that the event occurred, expressed as the number of milliseconds
 *           after <code>Jan 1, 1970 00:00:00 UTC</code>. (In Amazon Web Services Tools for PowerShell
 *           and the Amazon Web Services SDK for .NET, the timestamp is specified in .NET format:
 *             <code>yyyy-mm-ddThh:mm:ss</code>. For example, <code>2017-09-15T13:45:30</code>.)
 *         </p>
 *             </li>
 *             <li>
 *                <p> A batch of log events in a single request must be in a chronological order.
 *           Otherwise, the operation fails.</p>
 *             </li>
 *             <li>
 *                <p>Each log event can be no larger than 1 MB.</p>
 *             </li>
 *             <li>
 *                <p>The maximum number of log events in a batch is 10,000.</p>
 *             </li>
 *             <li>
 *                <p>For valid events (within 14 days in the past to 2 hours in future), the time span
 *           in a single batch cannot exceed 24 hours. Otherwise, the operation fails.</p>
 *             </li>
 *          </ul>
 *          <important>
 *             <p>The quota of five requests per second per log stream has been removed. Instead,
 *           <code>PutLogEvents</code> actions are throttled based on a per-second per-account quota.
 *         You can request an increase to the per-second throttling quota by using the Service Quotas service.</p>
 *          </important>
 *          <p>If a call to <code>PutLogEvents</code> returns "UnrecognizedClientException" the most
 *       likely cause is a non-valid Amazon Web Services access key ID or secret key. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutLogEventsCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutLogEventsCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * // import type { CloudWatchLogsClientConfig } from "@aws-sdk/client-cloudwatch-logs";
 * const config = {}; // type is CloudWatchLogsClientConfig
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutLogEventsRequest
 *   logGroupName: "STRING_VALUE", // required
 *   logStreamName: "STRING_VALUE", // required
 *   logEvents: [ // InputLogEvents // required
 *     { // InputLogEvent
 *       timestamp: Number("long"), // required
 *       message: "STRING_VALUE", // required
 *     },
 *   ],
 *   sequenceToken: "STRING_VALUE",
 *   entity: { // Entity
 *     keyAttributes: { // EntityKeyAttributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *     attributes: { // EntityAttributes
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new PutLogEventsCommand(input);
 * const response = await client.send(command);
 * // { // PutLogEventsResponse
 * //   nextSequenceToken: "STRING_VALUE",
 * //   rejectedLogEventsInfo: { // RejectedLogEventsInfo
 * //     tooNewLogEventStartIndex: Number("int"),
 * //     tooOldLogEventEndIndex: Number("int"),
 * //     expiredLogEventEndIndex: Number("int"),
 * //   },
 * //   rejectedEntityInfo: { // RejectedEntityInfo
 * //     errorType: "InvalidEntity" || "InvalidTypeValue" || "InvalidKeyAttributes" || "InvalidAttributes" || "EntitySizeTooLarge" || "UnsupportedLogGroupType" || "MissingRequiredFields", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PutLogEventsCommandInput - {@link PutLogEventsCommandInput}
 * @returns {@link PutLogEventsCommandOutput}
 * @see {@link PutLogEventsCommandInput} for command's `input` shape.
 * @see {@link PutLogEventsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
 *
 * @throws {@link DataAlreadyAcceptedException} (client fault)
 *  <p>The event was already logged.</p>
 *          <important>
 *             <p>
 *                <code>PutLogEvents</code> actions are now always accepted and never return
 *           <code>DataAlreadyAcceptedException</code> regardless of whether a given batch of log
 *         events has already been accepted. </p>
 *          </important>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>A parameter is specified incorrectly.</p>
 *
 * @throws {@link InvalidSequenceTokenException} (client fault)
 *  <p>The sequence token is not valid. You can get the correct sequence token in the
 *         <code>expectedSequenceToken</code> field in the <code>InvalidSequenceTokenException</code>
 *       message. </p>
 *          <important>
 *             <p>
 *                <code>PutLogEvents</code> actions are now always accepted and never return
 *           <code>InvalidSequenceTokenException</code> regardless of receiving an invalid sequence
 *         token. </p>
 *          </important>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service cannot complete the request.</p>
 *
 * @throws {@link UnrecognizedClientException} (client fault)
 *  <p>The most likely cause is an Amazon Web Services access key ID or secret key that's not
 *       valid.</p>
 *
 * @throws {@link CloudWatchLogsServiceException}
 * <p>Base exception class for all service exceptions from CloudWatchLogs service.</p>
 *
 *
 * @public
 */
export class PutLogEventsCommand extends $Command
  .classBuilder<
    PutLogEventsCommandInput,
    PutLogEventsCommandOutput,
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
  .s("Logs_20140328", "PutLogEvents", {})
  .n("CloudWatchLogsClient", "PutLogEventsCommand")
  .f(void 0, void 0)
  .ser(se_PutLogEventsCommand)
  .de(de_PutLogEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutLogEventsRequest;
      output: PutLogEventsResponse;
    };
    sdk: {
      input: PutLogEventsCommandInput;
      output: PutLogEventsCommandOutput;
    };
  };
}
