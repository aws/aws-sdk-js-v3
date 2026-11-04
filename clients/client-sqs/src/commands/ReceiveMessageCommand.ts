// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw1, command } from "../commandBuilder";
import type { ReceiveMessageRequest, ReceiveMessageResult } from "../models/models_0";
import { ReceiveMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Retrieves one or more messages (up to 10), from the specified queue. Using the `WaitTimeSeconds` parameter enables long-poll support. For more information, see [Amazon SQS Long Polling](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-long-polling.html) in the *Amazon SQS Developer Guide*.
 *
 * Short poll is the default behavior where a weighted random set of machines is sampled on a `ReceiveMessage` call. Therefore, only the messages on the sampled machines are returned. If the number of messages in the queue is small (fewer than 1,000), you most likely get fewer messages than you requested per `ReceiveMessage` call. If the number of messages in the queue is extremely small, you might not receive any messages in a particular `ReceiveMessage` response. If this happens, repeat the request.
 *
 * For each message returned, the response includes the following:
 *
 * - The message body.
 * - An MD5 digest of the message body. For information about MD5, see [RFC1321](https://www.ietf.org/rfc/rfc1321.txt).
 * - The `MessageId` you received when you sent the message to the queue.
 * - The receipt handle.
 * - The message attributes.
 * - An MD5 digest of the message attributes.
 *
 * The receipt handle is the identifier you must provide when deleting the message. For more information, see [Queue and Message Identifiers](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-queue-message-identifiers.html) in the *Amazon SQS Developer Guide*.
 *
 * You can provide the `VisibilityTimeout` parameter in your request. The parameter is applied to the messages that Amazon SQS returns in the response. If you don't include the parameter, the overall visibility timeout for the queue is used for the returned messages. The default visibility timeout for a queue is 30 seconds.
 *
 * > **Note:** In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ReceiveMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ReceiveMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
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
 *
 * The specified ID is invalid.
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
 * @throws {@link OverLimit} (client fault)
 *
 * The specified action violates a limit. For example, `ReceiveMessage` returns this error if the maximum number of in flight messages is reached and `AddPermission` returns this error if the maximum number of permissions for the queue is reached.
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
export class ReceiveMessageCommand extends command<ReceiveMessageCommandInput, ReceiveMessageCommandOutput>(
  _ep0,
  _mw1,
  "ReceiveMessage",
  ReceiveMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ReceiveMessageRequest;
      output: ReceiveMessageResult;
    };
    sdk: {
      input: ReceiveMessageCommandInput;
      output: ReceiveMessageCommandOutput;
    };
  };
}
