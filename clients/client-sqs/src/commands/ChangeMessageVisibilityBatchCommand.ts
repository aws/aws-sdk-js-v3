// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ChangeMessageVisibilityBatchRequest, ChangeMessageVisibilityBatchResult } from "../models/models_0";
import { ChangeMessageVisibilityBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ChangeMessageVisibilityBatchCommand}.
 */
export interface ChangeMessageVisibilityBatchCommandInput extends ChangeMessageVisibilityBatchRequest {}
/**
 * @public
 *
 * The output of {@link ChangeMessageVisibilityBatchCommand}.
 */
export interface ChangeMessageVisibilityBatchCommandOutput extends ChangeMessageVisibilityBatchResult, __MetadataBearer {}

/**
 * Changes the visibility timeout of multiple messages. This is a batch version of `ChangeMessageVisibility.` The result of the action on each message is reported individually in the response. You can send up to 10 `ChangeMessageVisibility` requests with each `ChangeMessageVisibilityBatch` action.
 *
 * > **Important:** Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of `200`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ChangeMessageVisibilityBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ChangeMessageVisibilityBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // ChangeMessageVisibilityBatchRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   Entries: [ // ChangeMessageVisibilityBatchRequestEntryList // required
 *     { // ChangeMessageVisibilityBatchRequestEntry
 *       Id: "STRING_VALUE", // required
 *       ReceiptHandle: "STRING_VALUE", // required
 *       VisibilityTimeout: Number("int"),
 *     },
 *   ],
 * };
 * const command = new ChangeMessageVisibilityBatchCommand(input);
 * const response = await client.send(command);
 * // { // ChangeMessageVisibilityBatchResult
 * //   Successful: [ // ChangeMessageVisibilityBatchResultEntryList // required
 * //     { // ChangeMessageVisibilityBatchResultEntry
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
 * @param ChangeMessageVisibilityBatchCommandInput - {@link ChangeMessageVisibilityBatchCommandInput}
 * @returns {@link ChangeMessageVisibilityBatchCommandOutput}
 * @see {@link ChangeMessageVisibilityBatchCommandInput} for command's `input` shape.
 * @see {@link ChangeMessageVisibilityBatchCommandOutput} for command's `response` shape.
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
export class ChangeMessageVisibilityBatchCommand extends command<ChangeMessageVisibilityBatchCommandInput, ChangeMessageVisibilityBatchCommandOutput>(
  _ep0,
  _mw0,
  "ChangeMessageVisibilityBatch",
  ChangeMessageVisibilityBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChangeMessageVisibilityBatchRequest;
      output: ChangeMessageVisibilityBatchResult;
    };
    sdk: {
      input: ChangeMessageVisibilityBatchCommandInput;
      output: ChangeMessageVisibilityBatchCommandOutput;
    };
  };
}
