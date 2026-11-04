// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PublishBatchInput, PublishBatchResponse } from "../models/models_0";
import { PublishBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PublishBatchCommand}.
 */
export interface PublishBatchCommandInput extends PublishBatchInput {}
/**
 * @public
 *
 * The output of {@link PublishBatchCommand}.
 */
export interface PublishBatchCommandOutput extends PublishBatchResponse, __MetadataBearer {}

/**
 * Publishes up to 10 messages to the specified topic in a single batch. This is a batch version of the `Publish` API. If you try to send more than 10 messages in a single batch request, you will receive a `TooManyEntriesInBatchRequest` exception.
 *
 * For FIFO topics, multiple messages within a single batch are published in the order they are sent, and messages are deduplicated within the batch and across batches for five minutes.
 *
 * The result of publishing each message is reported individually in the response. Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of 200.
 *
 * By default, the maximum allowed individual message size and the maximum total payload size (the sum of the individual lengths of all of the batched messages) are both 256 KiB (262,144 bytes). To publish larger batches, set the topic's `MaximumMessageSize` attribute, which supports values up to 1 MiB (1,048,576 bytes). The combined size of all messages in the batch, including each message's body and attributes, must not exceed the topic's `MaximumMessageSize`.
 *
 * For more information, see [Large message payloads](https://docs.aws.amazon.com/sns/latest/dg/large-message-payloads.html) in the *Amazon SNS Developer Guide.*
 *
 * > **Important:** The `PublishBatch` API can send up to 10 messages at a time. If you attempt to send more than 10 messages in one request, you will encounter a `TooManyEntriesInBatchRequest` exception. In such cases, split your messages into multiple requests, each containing no more than 10 messages.
 *
 * Some actions take lists of parameters. These lists are specified using the `param.n` notation. Values of `n` are integers starting from **1**. For example, a parameter list with two elements looks like this:
 *
 * `&AttributeName.1=first`
 *
 * `&AttributeName.2=second`
 *
 * If you send a batch message to a topic, Amazon SNS publishes the batch message to each endpoint that is subscribed to the topic. The format of the batch message depends on the notification protocol for each subscribed endpoint.
 *
 * When a `messageId` is returned, the batch message is saved, and Amazon SNS immediately delivers the message to subscribers.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, PublishBatchCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, PublishBatchCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // PublishBatchInput
 *   TopicArn: "STRING_VALUE", // required
 *   PublishBatchRequestEntries: [ // PublishBatchRequestEntryList // required
 *     { // PublishBatchRequestEntry
 *       Id: "STRING_VALUE", // required
 *       Message: "STRING_VALUE", // required
 *       Subject: "STRING_VALUE",
 *       MessageStructure: "STRING_VALUE",
 *       MessageAttributes: { // MessageAttributeMap
 *         "<keys>": { // MessageAttributeValue
 *           DataType: "STRING_VALUE", // required
 *           StringValue: "STRING_VALUE",
 *           BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *         },
 *       },
 *       MessageDeduplicationId: "STRING_VALUE",
 *       MessageGroupId: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PublishBatchCommand(input);
 * const response = await client.send(command);
 * // { // PublishBatchResponse
 * //   Successful: [ // PublishBatchResultEntryList
 * //     { // PublishBatchResultEntry
 * //       Id: "STRING_VALUE",
 * //       MessageId: "STRING_VALUE",
 * //       SequenceNumber: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Failed: [ // BatchResultErrorEntryList
 * //     { // BatchResultErrorEntry
 * //       Id: "STRING_VALUE", // required
 * //       Code: "STRING_VALUE", // required
 * //       Message: "STRING_VALUE",
 * //       SenderFault: true || false, // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PublishBatchCommandInput - {@link PublishBatchCommandInput}
 * @returns {@link PublishBatchCommandOutput}
 * @see {@link PublishBatchCommandInput} for command's `input` shape.
 * @see {@link PublishBatchCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *
 * Indicates that the user has been denied access to the requested resource.
 *
 * @throws {@link BatchEntryIdsNotDistinctException} (client fault)
 *
 * Two or more batch entries in the request have the same `Id`.
 *
 * @throws {@link BatchRequestTooLongException} (client fault)
 *
 * The length of all the batch messages put together is more than the limit.
 *
 * @throws {@link EmptyBatchRequestException} (client fault)
 *
 * The batch request doesn't contain any entries.
 *
 * @throws {@link EndpointDisabledException} (client fault)
 *
 * Exception error indicating endpoint disabled.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Indicates an internal service error.
 *
 * @throws {@link InvalidBatchEntryIdException} (client fault)
 *
 * The `Id` of a batch entry in a batch request doesn't abide by the specification.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that a request parameter does not comply with the associated constraints.
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *
 * The credential signature isn't valid. You must use an HTTPS endpoint and sign your request using Signature Version 4.
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *
 * The ciphertext references a key that doesn't exist or that you don't have access to.
 *
 * @throws {@link KMSDisabledException} (client fault)
 *
 * The request was rejected because the specified Amazon Web Services KMS key isn't enabled.
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *
 * The request was rejected because the state of the specified resource isn't valid for this request. For more information, see [Key states of Amazon Web Services KMS keys](https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html) in the *Key Management Service Developer Guide*.
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *
 * The request was rejected because the specified entity or resource can't be found.
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *
 * The Amazon Web Services access key ID needs a subscription for the service.
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *
 * The request was denied due to request throttling. For more information about throttling, see [Limits](https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second) in the *Key Management Service Developer Guide.*
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * Indicates that the requested resource does not exist.
 *
 * @throws {@link PlatformApplicationDisabledException} (client fault)
 *
 * Exception error indicating platform application disabled.
 *
 * @throws {@link TooManyEntriesInBatchRequestException} (client fault)
 *
 * The batch request contains more entries than permissible (more than 10).
 *
 * @throws {@link ValidationException} (client fault)
 *
 * Indicates that a parameter in the request is invalid.
 *
 * @throws {@link SNSServiceException}
 *
 * Base exception class for all service exceptions from SNS service.
 *
 * @public
 */
export class PublishBatchCommand extends command<PublishBatchCommandInput, PublishBatchCommandOutput>(
  _ep0,
  _mw0,
  "PublishBatch",
  PublishBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PublishBatchInput;
      output: PublishBatchResponse;
    };
    sdk: {
      input: PublishBatchCommandInput;
      output: PublishBatchCommandOutput;
    };
  };
}
