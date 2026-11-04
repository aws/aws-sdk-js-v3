// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMessageRequest } from "../models/models_0";
import { DeleteMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the specified message from the specified queue. To select the message to delete, use the `ReceiptHandle` of the message (*not* the `MessageId` which you receive when you send the message). Amazon SQS can delete a message from a queue even if a visibility timeout setting causes the message to be locked by another consumer. Amazon SQS automatically deletes messages left in a queue longer than the retention period configured for the queue.
 *
 * > **Note:**
 * >
 * > Each time you receive a message, meaning when a consumer retrieves a message from the queue, it comes with a unique `ReceiptHandle`. If you receive the same message more than once, you will get a different `ReceiptHandle` each time. When you want to delete a message using the `DeleteMessage` action, you must use the `ReceiptHandle` from the most recent time you received the message. If you use an old `ReceiptHandle`, the request will succeed, but the message might not be deleted.
 * >
 * > For standard queues, it is possible to receive a message even after you delete it. This might happen on rare occasions if one of the servers which stores a copy of the message is unavailable when you send the request to delete the message. The copy remains on the server and might be returned to you during a subsequent receive request. You should ensure that your application is idempotent, so that receiving a message more than once does not cause issues.
 *
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
 *
 * The specified ID is invalid.
 *
 * @throws {@link InvalidIdFormat} (client fault)
 *
 * The specified receipt handle isn't valid for the current version.
 *
 * @throws {@link InvalidSecurity} (client fault)
 *
 * The request was not made over HTTPS or did not use SigV4 for signing.
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *
 * Ensure that the `QueueUrl` is correct and that the queue has not been deleted.
 *
 * @throws {@link ReceiptHandleIsInvalid} (client fault)
 *
 * The specified receipt handle isn't valid.
 *
 * @throws {@link RequestThrottled} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * - Exceeds the permitted request rate for the queue or for the recipient of the request.
 * - Ensure that the request rate is within the Amazon SQS limits for sending messages. For more information, see [Amazon SQS quotas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html#quotas-requests) in the *Amazon SQS Developer Guide*.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * Error code 400. Unsupported operation.
 *
 * @throws {@link SQSServiceException}
 *
 * Base exception class for all service exceptions from SQS service.
 *
 * @public
 */
export class DeleteMessageCommand extends command<DeleteMessageCommandInput, DeleteMessageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMessage",
  DeleteMessage$
) {
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
