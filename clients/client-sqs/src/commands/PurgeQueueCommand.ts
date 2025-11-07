// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PurgeQueueRequest } from "../models/models_0";
import { PurgeQueue } from "../schemas/schemas_0";
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
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
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
 *  <p>The specified ID is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
 *
 * @throws {@link PurgeQueueInProgress} (client fault)
 *  <p>Indicates that the specified queue previously received a <code>PurgeQueue</code>
 *             request within the last 60 seconds (the time it can take to delete the messages in the
 *             queue).</p>
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *  <p>Ensure that the <code>QueueUrl</code> is correct and that the queue has not been
 *             deleted.</p>
 *
 * @throws {@link RequestThrottled} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *          <ul>
 *             <li>
 *                <p>Exceeds the permitted request rate for the queue or for the recipient of the
 *                     request.</p>
 *             </li>
 *             <li>
 *                <p>Ensure that the request rate is within the Amazon SQS limits for
 *                     sending messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html#quotas-requests">Amazon SQS quotas</a> in the <i>Amazon SQS
 *                         Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
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
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSQS", "PurgeQueue", {})
  .n("SQSClient", "PurgeQueueCommand")
  .sc(PurgeQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurgeQueueRequest;
      output: {};
    };
    sdk: {
      input: PurgeQueueCommandInput;
      output: PurgeQueueCommandOutput;
    };
  };
}
