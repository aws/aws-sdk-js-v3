// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PurgeQueueRequest } from "../models/models_0";
import { PurgeQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes available messages in a queue (including in-flight messages) specified by the `QueueURL` parameter.
 *
 * > **Important:**
 * >
 * > When you use the `PurgeQueue` action, you can't retrieve any messages deleted from a queue.
 * >
 * > The message deletion process takes up to 60 seconds. We recommend waiting for 60 seconds regardless of your queue's size.
 *
 * Messages sent to the queue *before* you call `PurgeQueue` might be received but are deleted within the next minute.
 *
 * Messages sent to the queue *after* you call `PurgeQueue` might be deleted while the queue is being purged.
 *
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
 *
 * The specified ID is invalid.
 *
 * @throws {@link InvalidSecurity} (client fault)
 *
 * The request was not made over HTTPS or did not use SigV4 for signing.
 *
 * @throws {@link PurgeQueueInProgress} (client fault)
 *
 * Indicates that the specified queue previously received a `PurgeQueue` request within the last 60 seconds (the time it can take to delete the messages in the queue).
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *
 * Ensure that the `QueueUrl` is correct and that the queue has not been deleted.
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
export class PurgeQueueCommand extends command<PurgeQueueCommandInput, PurgeQueueCommandOutput>(
  _ep0,
  _mw0,
  "PurgeQueue",
  PurgeQueue$
) {
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
