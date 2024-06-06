// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { StartMessageMoveTaskRequest, StartMessageMoveTaskResult } from "../models/models_0";
import { de_StartMessageMoveTaskCommand, se_StartMessageMoveTaskCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMessageMoveTaskCommand}.
 */
export interface StartMessageMoveTaskCommandInput extends StartMessageMoveTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartMessageMoveTaskCommand}.
 */
export interface StartMessageMoveTaskCommandOutput extends StartMessageMoveTaskResult, __MetadataBearer {}

/**
 * <p>Starts an asynchronous task to move messages from a specified source queue to a
 *             specified destination queue.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This action is currently limited to supporting message redrive from queues
 *                         that are configured as <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> of other Amazon SQS queues only. Non-SQS
 *                         queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are
 *                         currently not supported.</p>
 *                </li>
 *                <li>
 *                   <p>In dead-letter queues redrive context, the
 *                             <code>StartMessageMoveTask</code> the source queue is the DLQ, while the
 *                         destination queue can be the original source queue (from which the messages
 *                         were driven to the dead-letter-queue), or a custom destination queue.</p>
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
 * import { SQSClient, StartMessageMoveTaskCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, StartMessageMoveTaskCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // StartMessageMoveTaskRequest
 *   SourceArn: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   MaxNumberOfMessagesPerSecond: Number("int"),
 * };
 * const command = new StartMessageMoveTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartMessageMoveTaskResult
 * //   TaskHandle: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMessageMoveTaskCommandInput - {@link StartMessageMoveTaskCommandInput}
 * @returns {@link StartMessageMoveTaskCommandOutput}
 * @see {@link StartMessageMoveTaskCommandInput} for command's `input` shape.
 * @see {@link StartMessageMoveTaskCommandOutput} for command's `response` shape.
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
export class StartMessageMoveTaskCommand extends $Command
  .classBuilder<
    StartMessageMoveTaskCommandInput,
    StartMessageMoveTaskCommandOutput,
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
  .s("AmazonSQS", "StartMessageMoveTask", {})
  .n("SQSClient", "StartMessageMoveTaskCommand")
  .f(void 0, void 0)
  .ser(se_StartMessageMoveTaskCommand)
  .de(de_StartMessageMoveTaskCommand)
  .build() {}
