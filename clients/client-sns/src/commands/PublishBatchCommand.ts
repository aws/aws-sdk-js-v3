// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { PublishBatchInput, PublishBatchResponse } from "../models/models_0";
import { de_PublishBatchCommand, se_PublishBatchCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Publishes up to ten messages to the specified topic. This is a batch version of
 *                 <code>Publish</code>. For FIFO topics, multiple messages within a single batch are
 *             published in the order they are sent, and messages are deduplicated within the batch and
 *             across batches for 5 minutes.</p>
 *          <p>The result of publishing each message is reported individually in the response.
 *             Because the batch request can result in a combination of successful and unsuccessful
 *             actions, you should check for batch errors even when the call returns an HTTP status
 *             code of <code>200</code>.</p>
 *          <p>The maximum allowed individual message size and the maximum total payload size (the
 *             sum of the individual lengths of all of the batched messages) are both 256 KB (262,144
 *             bytes). </p>
 *          <p>Some actions take lists of parameters. These lists are specified using the
 *                 <code>param.n</code> notation. Values of <code>n</code> are integers starting from
 *             1. For example, a parameter list with two elements looks like this: </p>
 *          <p>&AttributeName.1=first</p>
 *          <p>&AttributeName.2=second</p>
 *          <p>If you send a batch message to a topic, Amazon SNS publishes the batch message to each
 *             endpoint that is subscribed to the topic. The format of the batch message depends on the
 *             notification protocol for each subscribed endpoint.</p>
 *          <p>When a <code>messageId</code> is returned, the batch message is saved and Amazon SNS
 *             immediately delivers the message to subscribers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, PublishBatchCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, PublishBatchCommand } = require("@aws-sdk/client-sns"); // CommonJS import
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
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link BatchEntryIdsNotDistinctException} (client fault)
 *  <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
 *
 * @throws {@link BatchRequestTooLongException} (client fault)
 *  <p>The length of all the batch messages put together is more than the limit.</p>
 *
 * @throws {@link EmptyBatchRequestException} (client fault)
 *  <p>The batch request doesn't contain any entries.</p>
 *
 * @throws {@link EndpointDisabledException} (client fault)
 *  <p>Exception error indicating endpoint disabled.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidBatchEntryIdException} (client fault)
 *  <p>The <code>Id</code> of a batch entry in a batch request doesn't abide by the specification. </p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated constraints.</p>
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
 *
 * @throws {@link KMSAccessDeniedException} (client fault)
 *  <p>The ciphertext references a key that doesn't exist or that you don't have access
 *             to.</p>
 *
 * @throws {@link KMSDisabledException} (client fault)
 *  <p>The request was rejected because the specified Amazon Web Services KMS key isn't
 *             enabled.</p>
 *
 * @throws {@link KMSInvalidStateException} (client fault)
 *  <p>The request was rejected because the state of the specified resource isn't valid for
 *             this request. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">Key states of Amazon Web Services KMS keys</a> in the <i>Key Management Service Developer
 *                 Guide</i>.</p>
 *
 * @throws {@link KMSNotFoundException} (client fault)
 *  <p>The request was rejected because the specified entity or resource can't be
 *             found.</p>
 *
 * @throws {@link KMSOptInRequired} (client fault)
 *  <p>The Amazon Web Services access key ID needs a subscription for the service.</p>
 *
 * @throws {@link KMSThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. For more information about
 *             throttling, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/limits.html#requests-per-second">Limits</a> in
 *             the <i>Key Management Service Developer Guide.</i>
 *          </p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link PlatformApplicationDisabledException} (client fault)
 *  <p>Exception error indicating platform application disabled.</p>
 *
 * @throws {@link TooManyEntriesInBatchRequestException} (client fault)
 *  <p>The batch request contains more entries than permissible.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a parameter in the request is invalid.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class PublishBatchCommand extends $Command
  .classBuilder<
    PublishBatchCommandInput,
    PublishBatchCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "PublishBatch", {})
  .n("SNSClient", "PublishBatchCommand")
  .f(void 0, void 0)
  .ser(se_PublishBatchCommand)
  .de(de_PublishBatchCommand)
  .build() {
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
