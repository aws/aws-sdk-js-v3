// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw2, command } from "../commandBuilder";
import type { SendMessageBatchRequest, SendMessageBatchResult } from "../models/models_0";
import { SendMessageBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendMessageBatchCommand}.
 */
export interface SendMessageBatchCommandInput extends SendMessageBatchRequest {}
/**
 * @public
 *
 * The output of {@link SendMessageBatchCommand}.
 */
export interface SendMessageBatchCommandOutput extends SendMessageBatchResult, __MetadataBearer {}

/**
 * You can use `SendMessageBatch` to send up to 10 messages to the specified queue by assigning either identical or different values to each message (or by not assigning values at all). This is a batch version of `SendMessage.` For a FIFO queue, multiple messages within a single batch are enqueued in the order they are sent.
 *
 * The result of sending each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of `200`.
 *
 * The maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 1 MiB 1,048,576 bytes.
 *
 * > **Important:**
 * >
 * > A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the [W3C specification for characters](http://www.w3.org/TR/REC-xml/#charsets).
 * >
 * > `#x9` | `#xA` | `#xD` | `#x20` to `#xD7FF` | `#xE000` to `#xFFFD` | `#x10000` to `#x10FFFF`
 * >
 * > If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.
 *
 * If you don't specify the `DelaySeconds` parameter for an entry, Amazon SQS uses the default value for the queue.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, SendMessageBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, SendMessageBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // SendMessageBatchRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   Entries: [ // SendMessageBatchRequestEntryList // required
 *     { // SendMessageBatchRequestEntry
 *       Id: "STRING_VALUE", // required
 *       MessageBody: "STRING_VALUE", // required
 *       DelaySeconds: Number("int"),
 *       MessageAttributes: { // MessageBodyAttributeMap
 *         "<keys>": { // MessageAttributeValue
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           StringListValues: [ // StringList
 *             "STRING_VALUE",
 *           ],
 *           BinaryListValues: [ // BinaryList
 *             new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           ],
 *           DataType: "STRING_VALUE", // required
 *         },
 *       },
 *       MessageSystemAttributes: { // MessageBodySystemAttributeMap
 *         "<keys>": { // MessageSystemAttributeValue
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           StringListValues: [
 *             "STRING_VALUE",
 *           ],
 *           BinaryListValues: [
 *             new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *           ],
 *           DataType: "STRING_VALUE", // required
 *         },
 *       },
 *       MessageDeduplicationId: "STRING_VALUE",
 *       MessageGroupId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SendMessageBatchCommand(input);
 * const response = await client.send(command);
 * // { // SendMessageBatchResult
 * //   Successful: [ // SendMessageBatchResultEntryList // required
 * //     { // SendMessageBatchResultEntry
 * //       Id: "STRING_VALUE", // required
 * //       MessageId: "STRING_VALUE", // required
 * //       MD5OfMessageBody: "STRING_VALUE", // required
 * //       MD5OfMessageAttributes: "STRING_VALUE",
 * //       MD5OfMessageSystemAttributes: "STRING_VALUE",
 * //       SequenceNumber: "STRING_VALUE",
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
 * @param SendMessageBatchCommandInput - {@link SendMessageBatchCommandInput}
 * @returns {@link SendMessageBatchCommandOutput}
 * @see {@link SendMessageBatchCommandInput} for command's `input` shape.
 * @see {@link SendMessageBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link BatchEntryIdsNotDistinct} (client fault)
 *
 * Two or more batch entries in the request have the same `Id`.
 *
 * @throws {@link BatchRequestTooLong} (client fault)
 *
 * The length of all the messages put together is more than the limit.
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
 * @throws {@link KmsAccessDenied} (client fault)
 *
 * The caller doesn't have the required KMS access.
 *
 * @throws {@link KmsDisabled} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link KmsInvalidKeyUsage} (client fault)
 *
 * The request was rejected for one of the following reasons:
 *
 * - The KeyUsage value of the KMS key is incompatible with the API operation.
 * - The encryption algorithm or signing algorithm specified for the operation is incompatible with the type of key material in the KMS key (KeySpec).
 *
 * @throws {@link KmsInvalidState} (client fault)
 *
 * The request was rejected because the state of the specified resource is not valid for this request.
 *
 * @throws {@link KmsNotFound} (client fault)
 *
 * The request was rejected because the specified entity or resource could not be found.
 *
 * @throws {@link KmsOptInRequired} (client fault)
 *
 * The request was rejected because the specified key policy isn't syntactically or semantically correct.
 *
 * @throws {@link KmsThrottled} (client fault)
 *
 * Amazon Web Services KMS throttles requests for the following conditions.
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
export class SendMessageBatchCommand extends command<SendMessageBatchCommandInput, SendMessageBatchCommandOutput>(
  _ep0,
  _mw2,
  "SendMessageBatch",
  SendMessageBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendMessageBatchRequest;
      output: SendMessageBatchResult;
    };
    sdk: {
      input: SendMessageBatchCommandInput;
      output: SendMessageBatchCommandOutput;
    };
  };
}
