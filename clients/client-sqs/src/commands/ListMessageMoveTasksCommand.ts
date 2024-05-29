// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListMessageMoveTasksRequest, ListMessageMoveTasksResult } from "../models/models_0";
import { de_ListMessageMoveTasksCommand, se_ListMessageMoveTasksCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListMessageMoveTasksCommand}.
 */
export interface ListMessageMoveTasksCommandInput extends ListMessageMoveTasksRequest {}
/**
 * @public
 *
 * The output of {@link ListMessageMoveTasksCommand}.
 */
export interface ListMessageMoveTasksCommandOutput extends ListMessageMoveTasksResult, __MetadataBearer {}

/**
 * <p>Gets the most recent message movement tasks (up to 10) under a specific source
 *             queue.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source
 *                         queue is the dead-letter queue (DLQ), while the destination queue can be the
 *                         original source queue (from which the messages were driven to the
 *                         dead-letter-queue), or a custom destination queue. </p>
 *                </li>
 *                <li>
 *                   <p>Only one active message movement task is supported per queue at any given
 *                         time.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListMessageMoveTasksCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListMessageMoveTasksCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // ListMessageMoveTasksRequest
 *   SourceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 * };
 * const command = new ListMessageMoveTasksCommand(input);
 * const response = await client.send(command);
 * // { // ListMessageMoveTasksResult
 * //   Results: [ // ListMessageMoveTasksResultEntryList
 * //     { // ListMessageMoveTasksResultEntry
 * //       TaskHandle: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       SourceArn: "STRING_VALUE",
 * //       DestinationArn: "STRING_VALUE",
 * //       MaxNumberOfMessagesPerSecond: Number("int"),
 * //       ApproximateNumberOfMessagesMoved: Number("long"),
 * //       ApproximateNumberOfMessagesToMove: Number("long"),
 * //       FailureReason: "STRING_VALUE",
 * //       StartedTimestamp: Number("long"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListMessageMoveTasksCommandInput - {@link ListMessageMoveTasksCommandInput}
 * @returns {@link ListMessageMoveTasksCommandOutput}
 * @see {@link ListMessageMoveTasksCommandInput} for command's `input` shape.
 * @see {@link ListMessageMoveTasksCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>When the request to a queue is not HTTPS and SigV4.</p>
 *
 * @throws {@link RequestThrottled} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *          <ul>
 *             <li>
 *                <p>The rate of requests per second exceeds the Amazon Web Services KMS request quota for an
 *                     account and Region. </p>
 *             </li>
 *             <li>
 *                <p>A burst or sustained high rate of requests to change the state of the same KMS
 *                     key. This condition is often known as a "hot key."</p>
 *             </li>
 *             <li>
 *                <p>Requests for operations on KMS keys in a Amazon Web Services CloudHSM key store
 *                     might be throttled at a lower-than-expected rate when the Amazon Web Services
 *                     CloudHSM cluster associated with the Amazon Web Services CloudHSM key store is
 *                     processing numerous commands, including those unrelated to the Amazon Web Services CloudHSM key store.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more specified resources don't exist.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 * @public
 */
export class ListMessageMoveTasksCommand extends $Command
  .classBuilder<
    ListMessageMoveTasksCommandInput,
    ListMessageMoveTasksCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSQS", "ListMessageMoveTasks", {})
  .n("SQSClient", "ListMessageMoveTasksCommand")
  .f(void 0, void 0)
  .ser(se_ListMessageMoveTasksCommand)
  .de(de_ListMessageMoveTasksCommand)
  .build() {}
