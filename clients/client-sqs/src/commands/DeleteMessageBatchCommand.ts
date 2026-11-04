// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMessageBatchRequest, DeleteMessageBatchResult } from "../models/models_0";
import { DeleteMessageBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMessageBatchCommand}.
 */
export interface DeleteMessageBatchCommandInput extends DeleteMessageBatchRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessageBatchCommand}.
 */
export interface DeleteMessageBatchCommandOutput extends DeleteMessageBatchResult, __MetadataBearer {}

/**
 * Deletes up to ten messages from the specified queue. This is a batch version of `DeleteMessage.` The result of the action on each message is reported individually in the response.
 *
 * > **Important:** Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of `200`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, DeleteMessageBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, DeleteMessageBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // DeleteMessageBatchRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   Entries: [ // DeleteMessageBatchRequestEntryList // required
 *     { // DeleteMessageBatchRequestEntry
 *       Id: "STRING_VALUE", // required
 *       ReceiptHandle: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new DeleteMessageBatchCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMessageBatchResult
 * //   Successful: [ // DeleteMessageBatchResultEntryList // required
 * //     { // DeleteMessageBatchResultEntry
 * //       Id: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   Failed: [ // BatchResultErrorEntryList // required
 * //     { // BatchResultErrorEntry
 * //       Id: "STRING_VALUE", // required
 * //       SenderFault: true || false, // required
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DeleteMessageBatchCommandInput - {@link DeleteMessageBatchCommandInput}
 * @returns {@link DeleteMessageBatchCommandOutput}
 * @see {@link DeleteMessageBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteMessageBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link BatchEntryIdsNotDistinct} (client fault)
 *
 * Two or more batch entries in the request have the same `Id`.
 *
 * @throws {@link EmptyBatchRequest} (client fault)
 *
 * The batch request doesn't contain any entries.
 *
 * @throws {@link InvalidAddress} (client fault)
 *
 * The specified ID is invalid.
 *
 * @throws {@link InvalidBatchEntryId} (client fault)
 *
 * The `Id` of a batch entry in a batch request doesn't abide by the specification.
 *
 * @throws {@link InvalidSecurity} (client fault)
 *
 * The request was not made over HTTPS or did not use SigV4 for signing.
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
 * @throws {@link TooManyEntriesInBatchRequest} (client fault)
 *
 * The batch request contains more entries than permissible. For Amazon SQS, the maximum number of entries you can include in a single [SendMessageBatch](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html), [DeleteMessageBatch](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html), or [ChangeMessageVisibilityBatch](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html) request is 10.
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
export class DeleteMessageBatchCommand extends command<DeleteMessageBatchCommandInput, DeleteMessageBatchCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMessageBatch",
  DeleteMessageBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMessageBatchRequest;
      output: DeleteMessageBatchResult;
    };
    sdk: {
      input: DeleteMessageBatchCommandInput;
      output: DeleteMessageBatchCommandOutput;
    };
  };
}
