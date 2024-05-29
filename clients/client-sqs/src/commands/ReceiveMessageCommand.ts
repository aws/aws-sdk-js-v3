// smithy-typescript generated code
import { getReceiveMessagePlugin } from "@aws-sdk/middleware-sdk-sqs";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ReceiveMessageRequest, ReceiveMessageResult } from "../models/models_0";
import { de_ReceiveMessageCommand, se_ReceiveMessageCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ReceiveMessageCommand}.
 */
export interface ReceiveMessageCommandInput extends ReceiveMessageRequest {}
/**
 * @public
 *
 * The output of {@link ReceiveMessageCommand}.
 */
export interface ReceiveMessageCommandOutput extends ReceiveMessageResult, __MetadataBearer {}

/**
 * <p>Retrieves one or more messages (up to 10), from the specified queue. Using the
 *                 <code>WaitTimeSeconds</code> parameter enables long-poll support. For more
 *             information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html">Amazon SQS
 *                 Long Polling</a> in the <i>Amazon SQS Developer Guide</i>. </p>
 *          <p>Short poll is the default behavior where a weighted random set of machines is sampled
 *             on a <code>ReceiveMessage</code> call. Thus, only the messages on the sampled machines
 *             are returned. If the number of messages in the queue is small (fewer than 1,000), you
 *             most likely get fewer messages than you requested per <code>ReceiveMessage</code> call.
 *             If the number of messages in the queue is extremely small, you might not receive any
 *             messages in a particular <code>ReceiveMessage</code> response. If this happens, repeat
 *             the request. </p>
 *          <p>For each message returned, the response includes the following:</p>
 *          <ul>
 *             <li>
 *                <p>The message body.</p>
 *             </li>
 *             <li>
 *                <p>An MD5 digest of the message body. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
 *             </li>
 *             <li>
 *                <p>The <code>MessageId</code> you received when you sent the message to the
 *                     queue.</p>
 *             </li>
 *             <li>
 *                <p>The receipt handle.</p>
 *             </li>
 *             <li>
 *                <p>The message attributes.</p>
 *             </li>
 *             <li>
 *                <p>An MD5 digest of the message attributes.</p>
 *             </li>
 *          </ul>
 *          <p>The receipt handle is the identifier you must provide when deleting the message. For
 *             more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html">Queue and Message Identifiers</a> in the <i>Amazon SQS Developer
 *                 Guide</i>.</p>
 *          <p>You can provide the <code>VisibilityTimeout</code> parameter in your request. The
 *             parameter is applied to the messages that Amazon SQS returns in the response. If you don't
 *             include the parameter, the overall visibility timeout for the queue is used for the
 *             returned messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer
 *             Guide</i>.</p>
 *          <p>A message that isn't deleted or a message whose visibility isn't extended before the
 *             visibility timeout expires counts as a failed receive. Depending on the configuration of
 *             the queue, the message might be sent to the dead-letter queue.</p>
 *          <note>
 *             <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ReceiveMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // ReceiveMessageRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   AttributeNames: [ // AttributeNameList
 *     "All" || "Policy" || "VisibilityTimeout" || "MaximumMessageSize" || "MessageRetentionPeriod" || "ApproximateNumberOfMessages" || "ApproximateNumberOfMessagesNotVisible" || "CreatedTimestamp" || "LastModifiedTimestamp" || "QueueArn" || "ApproximateNumberOfMessagesDelayed" || "DelaySeconds" || "ReceiveMessageWaitTimeSeconds" || "RedrivePolicy" || "FifoQueue" || "ContentBasedDeduplication" || "KmsMasterKeyId" || "KmsDataKeyReusePeriodSeconds" || "DeduplicationScope" || "FifoThroughputLimit" || "RedriveAllowPolicy" || "SqsManagedSseEnabled",
 *   ],
 *   MessageSystemAttributeNames: [ // MessageSystemAttributeList
 *     "All" || "SenderId" || "SentTimestamp" || "ApproximateReceiveCount" || "ApproximateFirstReceiveTimestamp" || "SequenceNumber" || "MessageDeduplicationId" || "MessageGroupId" || "AWSTraceHeader" || "DeadLetterQueueSourceArn",
 *   ],
 *   MessageAttributeNames: [ // MessageAttributeNameList
 *     "STRING_VALUE",
 *   ],
 *   MaxNumberOfMessages: Number("int"),
 *   VisibilityTimeout: Number("int"),
 *   WaitTimeSeconds: Number("int"),
 *   ReceiveRequestAttemptId: "STRING_VALUE",
 * };
 * const command = new ReceiveMessageCommand(input);
 * const response = await client.send(command);
 * // { // ReceiveMessageResult
 * //   Messages: [ // MessageList
 * //     { // Message
 * //       MessageId: "STRING_VALUE",
 * //       ReceiptHandle: "STRING_VALUE",
 * //       MD5OfBody: "STRING_VALUE",
 * //       Body: "STRING_VALUE",
 * //       Attributes: { // MessageSystemAttributeMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       MD5OfMessageAttributes: "STRING_VALUE",
 * //       MessageAttributes: { // MessageBodyAttributeMap
 * //         "<keys>": { // MessageAttributeValue
 * //           StringValue: "STRING_VALUE",
 * //           BinaryValue: new Uint8Array(),
 * //           StringListValues: [ // StringList
 * //             "STRING_VALUE",
 * //           ],
 * //           BinaryListValues: [ // BinaryList
 * //             new Uint8Array(),
 * //           ],
 * //           DataType: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ReceiveMessageCommandInput - {@link ReceiveMessageCommandInput}
 * @returns {@link ReceiveMessageCommandOutput}
 * @see {@link ReceiveMessageCommandInput} for command's `input` shape.
 * @see {@link ReceiveMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>When the request to a queue is not HTTPS and SigV4.</p>
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
 * @throws {@link OverLimit} (client fault)
 *  <p>The specified action violates a limit. For example, <code>ReceiveMessage</code>
 *             returns this error if the maximum number of in flight messages is reached and
 *                 <code>AddPermission</code> returns this error if the maximum number of permissions
 *             for the queue is reached.</p>
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
export class ReceiveMessageCommand extends $Command
  .classBuilder<
    ReceiveMessageCommandInput,
    ReceiveMessageCommandOutput,
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
      getReceiveMessagePlugin(config),
    ];
  })
  .s("AmazonSQS", "ReceiveMessage", {})
  .n("SQSClient", "ReceiveMessageCommand")
  .f(void 0, void 0)
  .ser(se_ReceiveMessageCommand)
  .de(de_ReceiveMessageCommand)
  .build() {}
