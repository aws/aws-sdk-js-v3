// smithy-typescript generated code
import { getSendMessageBatchPlugin } from "@aws-sdk/middleware-sdk-sqs";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SendMessageBatchRequest, SendMessageBatchResult } from "../models/models_0";
import { SendMessageBatch$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>You can use <code>SendMessageBatch</code> to send up to 10 messages to the specified
 *             queue by assigning either identical or different values to each message (or by not
 *             assigning values at all). This is a batch version of <code>
 *                <a>SendMessage</a>.</code> For a FIFO queue, multiple messages within a single batch are enqueued
 *             in the order they are sent.</p>
 *          <p>The result of sending each message is reported individually in the response.
 *             Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
 *          <p>The maximum allowed individual message size and the maximum total payload size (the
 *             sum of the individual lengths of all of the batched messages) are both 1 MiB
 *             1,048,576 bytes.</p>
 *          <important>
 *             <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
 *             <p>
 *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
 *             </p>
 *             <p>If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.</p>
 *          </important>
 *          <p>If you don't specify the <code>DelaySeconds</code> parameter for an entry, Amazon SQS uses
 *             the default value for the queue.</p>
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
 *  <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 *
 * @throws {@link BatchRequestTooLong} (client fault)
 *  <p>The length of all the messages put together is more than the limit.</p>
 *
 * @throws {@link EmptyBatchRequest} (client fault)
 *  <p>The batch request doesn't contain any entries.</p>
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The specified ID is invalid.</p>
 *
 * @throws {@link InvalidBatchEntryId} (client fault)
 *  <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the
 *             specification.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
 *
 * @throws {@link KmsAccessDenied} (client fault)
 *  <p>The caller doesn't have the required KMS access.</p>
 *
 * @throws {@link KmsDisabled} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link KmsInvalidKeyUsage} (client fault)
 *  <p>The request was rejected for one of the following reasons:</p>
 *          <ul>
 *             <li>
 *                <p>The KeyUsage value of the KMS key is incompatible with the API
 *                     operation.</p>
 *             </li>
 *             <li>
 *                <p>The encryption algorithm or signing algorithm specified for the operation is
 *                     incompatible with the type of key material in the KMS key (KeySpec).</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link KmsInvalidState} (client fault)
 *  <p>The request was rejected because the state of the specified resource is not valid for
 *             this request.</p>
 *
 * @throws {@link KmsNotFound} (client fault)
 *  <p>The request was rejected because the specified entity or resource could not be found.
 *         </p>
 *
 * @throws {@link KmsOptInRequired} (client fault)
 *  <p>The request was rejected because the specified key policy isn't syntactically or
 *             semantically correct.</p>
 *
 * @throws {@link KmsThrottled} (client fault)
 *  <p>Amazon Web Services KMS throttles requests for the following conditions.</p>
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
 * @throws {@link TooManyEntriesInBatchRequest} (client fault)
 *  <p>The batch request contains more entries than permissible. For Amazon SQS, the
 *             maximum number of entries you can include in a single <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessageBatch.html">SendMessageBatch</a>, <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_DeleteMessageBatch.html">DeleteMessageBatch</a>, or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_ChangeMessageVisibilityBatch.html">ChangeMessageVisibilityBatch</a> request is 10.</p>
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
export class SendMessageBatchCommand extends $Command
  .classBuilder<
    SendMessageBatchCommandInput,
    SendMessageBatchCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions()), getSendMessageBatchPlugin(config)];
  })
  .s("AmazonSQS", "SendMessageBatch", {})
  .n("SQSClient", "SendMessageBatchCommand")
  .sc(SendMessageBatch$)
  .build() {
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
