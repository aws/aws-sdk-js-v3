// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PurgeQueueRequest } from "../models/models_0";
import { de_PurgeQueueCommand, se_PurgeQueueCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurgeQueueCommand}.
 */
export interface PurgeQueueCommandInput extends PurgeQueueRequest {}
/**
 * @public
 *
 * The output of {@link PurgeQueueCommand}.
 */
export interface PurgeQueueCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes available messages in a queue (including in-flight messages) specified by the
 *                 <code>QueueURL</code> parameter.</p>
 *          <important>
 *             <p>When you use the <code>PurgeQueue</code> action, you can't retrieve any messages
 *                 deleted from a queue.</p>
 *             <p>The message deletion process takes up to 60 seconds. We recommend waiting for 60
 *                 seconds regardless of your queue's size. </p>
 *          </important>
 *          <p>Messages sent to the queue <i>before</i> you call
 *                 <code>PurgeQueue</code> might be received but are deleted within the next
 *             minute.</p>
 *          <p>Messages sent to the queue <i>after</i> you call <code>PurgeQueue</code>
 *             might be deleted while the queue is being purged.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, PurgeQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, PurgeQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // PurgeQueueRequest
 *   QueueUrl: "STRING_VALUE", // required
 * };
 * const command = new PurgeQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PurgeQueueCommandInput - {@link PurgeQueueCommandInput}
 * @returns {@link PurgeQueueCommandOutput}
 * @see {@link PurgeQueueCommandInput} for command's `input` shape.
 * @see {@link PurgeQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>When the request to a queue is not HTTPS and SigV4.</p>
 *
 * @throws {@link PurgeQueueInProgress} (client fault)
 *  <p>Indicates that the specified queue previously received a <code>PurgeQueue</code>
 *             request within the last 60 seconds (the time it can take to delete the messages in the
 *             queue).</p>
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *  <p>The specified queue doesn't exist.</p>
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
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 * @public
 */
export class PurgeQueueCommand extends $Command
  .classBuilder<
    PurgeQueueCommandInput,
    PurgeQueueCommandOutput,
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
  .s("AmazonSQS", "PurgeQueue", {})
  .n("SQSClient", "PurgeQueueCommand")
  .f(void 0, void 0)
  .ser(se_PurgeQueueCommand)
  .de(de_PurgeQueueCommand)
  .build() {}
