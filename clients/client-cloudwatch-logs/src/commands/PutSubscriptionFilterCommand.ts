// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutSubscriptionFilterRequest } from "../models/models_0";
import { de_PutSubscriptionFilterCommand, se_PutSubscriptionFilterCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutSubscriptionFilterCommand}.
 */
export interface PutSubscriptionFilterCommandInput extends PutSubscriptionFilterRequest {}
/**
 * @public
 *
 * The output of {@link PutSubscriptionFilterCommand}.
 */
export interface PutSubscriptionFilterCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates or updates a subscription filter and associates it with the specified log
 *       group. With subscription filters, you can subscribe to a real-time stream of log events
 *       ingested through <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutLogEvents.html">PutLogEvents</a>
 *       and have them delivered to a specific destination. When log events are sent to the receiving
 *       service, they are Base64 encoded and compressed with the GZIP format.</p>
 *          <p>The following destinations are supported for subscription filters:</p>
 *          <ul>
 *             <li>
 *                <p>An Amazon Kinesis data stream belonging to the same account as the subscription
 *           filter, for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>A logical destination created with <a href="https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutDestination.html">PutDestination</a> that belongs to a different account, for cross-account delivery.
 *           We currently support Kinesis Data Streams and Firehose as logical
 *           destinations.</p>
 *             </li>
 *             <li>
 *                <p>An Amazon Kinesis Data Firehose delivery stream that belongs to the same account as
 *           the subscription filter, for same-account delivery.</p>
 *             </li>
 *             <li>
 *                <p>An Lambda function that belongs to the same account as the
 *           subscription filter, for same-account delivery.</p>
 *             </li>
 *          </ul>
 *          <p>Each log group can have up to two subscription filters associated with it. If you are
 *       updating an existing filter, you must specify the correct name in <code>filterName</code>. </p>
 *          <p>Using regular expressions in filter patterns is supported. For these filters, there is a
 *       quotas of quota of two regular expression patterns within a single filter pattern. There is
 *       also a quota of five regular expression patterns per log group. For more information about
 *       using regular expressions in filter patterns, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/FilterAndPatternSyntax.html"> Filter pattern syntax for
 *         metric filters, subscription filters, filter log events, and Live Tail</a>.</p>
 *          <p>To perform a <code>PutSubscriptionFilter</code> operation for any destination except a
 *         Lambda function, you must also have the <code>iam:PassRole</code>
 *       permission.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutSubscriptionFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutSubscriptionFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const input = { // PutSubscriptionFilterRequest
 *   logGroupName: "STRING_VALUE", // required
 *   filterName: "STRING_VALUE", // required
 *   filterPattern: "STRING_VALUE", // required
 *   destinationArn: "STRING_VALUE", // required
 *   roleArn: "STRING_VALUE",
 *   distribution: "Random" || "ByLogStream",
 *   applyOnTransformedLogs: true || false,
 *   fieldSelectionCriteria: "STRING_VALUE",
 *   emitSystemFields: [ // EmitSystemFields
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new PutSubscriptionFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutSubscriptionFilterCommandInput - {@link PutSubscriptionFilterCommandInput}
 * @returns {@link PutSubscriptionFilterCommandOutput}
 * @see {@link PutSubscriptionFilterCommandInput} for command's `input` shape.
 * @see {@link PutSubscriptionFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for CloudWatchLogsClient's `config` shape.
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
 * @throws {@link OperationAbortedException} (client fault)
 *  <p>Multiple concurrent requests to update the same resource were in conflict.</p>
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
export class PutSubscriptionFilterCommand extends $Command
  .classBuilder<
    PutSubscriptionFilterCommandInput,
    PutSubscriptionFilterCommandOutput,
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
  .s("Logs_20140328", "PutSubscriptionFilter", {})
  .n("CloudWatchLogsClient", "PutSubscriptionFilterCommand")
  .f(void 0, void 0)
  .ser(se_PutSubscriptionFilterCommand)
  .de(de_PutSubscriptionFilterCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutSubscriptionFilterRequest;
      output: {};
    };
    sdk: {
      input: PutSubscriptionFilterCommandInput;
      output: PutSubscriptionFilterCommandOutput;
    };
  };
}
