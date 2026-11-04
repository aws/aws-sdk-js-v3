// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw3, command } from "../commandBuilder";
import type { SendMessageRequest, SendMessageResult } from "../models/models_0";
import { SendMessage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SendMessageCommand}.
 */
export interface SendMessageCommandInput extends SendMessageRequest {}
/**
 * @public
 *
 * The output of {@link SendMessageCommand}.
 */
export interface SendMessageCommandOutput extends SendMessageResult, __MetadataBearer {}

/**
 * Delivers a message to the specified queue.
 *
 * > **Important:**
 * >
 * > A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed. For more information, see the [W3C specification for characters](http://www.w3.org/TR/REC-xml/#charsets).
 * >
 * > `#x9` | `#xA` | `#xD` | `#x20` to `#xD7FF` | `#xE000` to `#xFFFD` | `#x10000` to `#x10FFFF`
 * >
 * > If a message contains characters outside the allowed set, Amazon SQS rejects the message and returns an InvalidMessageContents error. Ensure that your message body includes only valid characters to avoid this exception.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // SendMessageRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   MessageBody: "STRING_VALUE", // required
 *   DelaySeconds: Number("int"),
 *   MessageAttributes: { // MessageBodyAttributeMap
 *     "<keys>": { // MessageAttributeValue
 *       StringValue: "STRING_VALUE",
 *       BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       StringListValues: [ // StringList
 *         "STRING_VALUE",
 *       ],
 *       BinaryListValues: [ // BinaryList
 *         new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       ],
 *       DataType: "STRING_VALUE", // required
 *     },
 *   },
 *   MessageSystemAttributes: { // MessageBodySystemAttributeMap
 *     "<keys>": { // MessageSystemAttributeValue
 *       StringValue: "STRING_VALUE",
 *       BinaryValue: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       StringListValues: [
 *         "STRING_VALUE",
 *       ],
 *       BinaryListValues: [
 *         new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       ],
 *       DataType: "STRING_VALUE", // required
 *     },
 *   },
 *   MessageDeduplicationId: "STRING_VALUE",
 *   MessageGroupId: "STRING_VALUE",
 * };
 * const command = new SendMessageCommand(input);
 * const response = await client.send(command);
 * // { // SendMessageResult
 * //   MD5OfMessageBody: "STRING_VALUE",
 * //   MD5OfMessageAttributes: "STRING_VALUE",
 * //   MD5OfMessageSystemAttributes: "STRING_VALUE",
 * //   MessageId: "STRING_VALUE",
 * //   SequenceNumber: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SendMessageCommandInput - {@link SendMessageCommandInput}
 * @returns {@link SendMessageCommandOutput}
 * @see {@link SendMessageCommandInput} for command's `input` shape.
 * @see {@link SendMessageCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *
 * The specified ID is invalid.
 *
 * @throws {@link InvalidMessageContents} (client fault)
 *
 * The message contains characters outside the allowed set.
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
export class SendMessageCommand extends command<SendMessageCommandInput, SendMessageCommandOutput>(
  _ep0,
  _mw3,
  "SendMessage",
  SendMessage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendMessageRequest;
      output: SendMessageResult;
    };
    sdk: {
      input: SendMessageCommandInput;
      output: SendMessageCommandOutput;
    };
  };
}
