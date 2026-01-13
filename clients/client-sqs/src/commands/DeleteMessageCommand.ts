// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMessageRequest } from "../models/models_0";
import { DeleteMessage$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMessageCommand}.
 */
export interface DeleteMessageCommandInput extends DeleteMessageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessageCommand}.
 */
export interface DeleteMessageCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified message from the specified queue. To select the message to
 *             delete, use the <code>ReceiptHandle</code> of the message (<i>not</i> the
 *                 <code>MessageId</code> which you receive when you send the message). Amazon SQS can
 *             delete a message from a queue even if a visibility timeout setting causes the message to
 *             be locked by another consumer. Amazon SQS automatically deletes messages left in a queue
 *             longer than the retention period configured for the queue. </p>
 *          <note>
 *             <p>Each time you receive a message, meaning when a consumer retrieves a message from
 *                 the queue, it comes with a unique <code>ReceiptHandle</code>. If you receive the
 *                 same message more than once, you will get a different <code>ReceiptHandle</code>
 *                 each time. When you want to delete a message using the <code>DeleteMessage</code>
 *                 action, you must use the <code>ReceiptHandle</code> from the most recent time you
 *                 received the message. If you use an old <code>ReceiptHandle</code>, the request will
 *                 succeed, but the message might not be deleted. </p>
 *             <p>For standard queues, it is possible to receive a message even after you
 *                 delete it. This might happen on rare occasions if one of the servers which stores a
 *                 copy of the message is unavailable when you send the request to delete the message.
 *                 The copy remains on the server and might be returned to you during a subsequent
 *                 receive request. You should ensure that your application is idempotent, so that
 *                 receiving a message more than once does not cause issues.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // DeleteMessageRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   ReceiptHandle: "STRING_VALUE", // required
 * };
 * const command = new DeleteMessageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMessageCommandInput - {@link DeleteMessageCommandInput}
 * @returns {@link DeleteMessageCommandOutput}
 * @see {@link DeleteMessageCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The specified ID is invalid.</p>
 *
 * @throws {@link InvalidIdFormat} (client fault)
 *  <p>The specified receipt handle isn't valid for the current version.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *  <p>Ensure that the <code>QueueUrl</code> is correct and that the queue has not been
 *             deleted.</p>
 *
 * @throws {@link ReceiptHandleIsInvalid} (client fault)
 *  <p>The specified receipt handle isn't valid.</p>
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
export class DeleteMessageCommand extends $Command
  .classBuilder<
    DeleteMessageCommandInput,
    DeleteMessageCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSQS", "DeleteMessage", {})
  .n("SQSClient", "DeleteMessageCommand")
  .sc(DeleteMessage$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMessageRequest;
      output: {};
    };
    sdk: {
      input: DeleteMessageCommandInput;
      output: DeleteMessageCommandOutput;
    };
  };
}
