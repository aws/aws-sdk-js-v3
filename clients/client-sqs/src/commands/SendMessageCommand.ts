// smithy-typescript generated code
import { getSendMessagePlugin } from "@aws-sdk/middleware-sdk-sqs";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SendMessageRequest, SendMessageResult } from "../models/models_0";
import { de_SendMessageCommand, se_SendMessageCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Delivers a message to the specified queue.</p>
 *          <important>
 *             <p>A message can include only XML, JSON, and unformatted text. The following Unicode characters are allowed:</p>
 *             <p>
 *                <code>#x9</code> | <code>#xA</code> | <code>#xD</code> | <code>#x20</code> to <code>#xD7FF</code> | <code>#xE000</code> to <code>#xFFFD</code> | <code>#x10000</code> to <code>#x10FFFF</code>
 *             </p>
 *             <p>Any characters not included in this list will be rejected. For more information, see the <a href="http://www.w3.org/TR/REC-xml/#charsets">W3C specification for characters</a>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, SendMessageCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
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
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidMessageContents} (client fault)
 *  <p>The message contains characters outside the allowed set.</p>
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
export class SendMessageCommand extends $Command
  .classBuilder<
    SendMessageCommandInput,
    SendMessageCommandOutput,
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
      getSendMessagePlugin(config),
    ];
  })
  .s("AmazonSQS", "SendMessage", {})
  .n("SQSClient", "SendMessageCommand")
  .f(void 0, void 0)
  .ser(se_SendMessageCommand)
  .de(de_SendMessageCommand)
  .build() {}
