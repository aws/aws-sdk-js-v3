// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ChangeMessageVisibilityRequest } from "../models/models_0";
import { ChangeMessageVisibility } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ChangeMessageVisibilityCommand}.
 */
export interface ChangeMessageVisibilityCommandInput extends ChangeMessageVisibilityRequest {}
/**
 * @public
 *
 * The output of {@link ChangeMessageVisibilityCommand}.
 */
export interface ChangeMessageVisibilityCommandOutput extends __MetadataBearer {}

/**
 * <p>Changes the visibility timeout of a specified message in a queue to a new value. The
 *             default visibility timeout for a message is 30 seconds. The minimum is 0 seconds. The
 *             maximum is 12 hours. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-visibility-timeout.html">Visibility Timeout</a> in the <i>Amazon SQS Developer
 *             Guide</i>.</p>
 *          <p>For example, if the default timeout for a queue is 60 seconds, 15 seconds have elapsed
 *             since you received the message, and you send a ChangeMessageVisibility call with
 *                 <code>VisibilityTimeout</code> set to 10 seconds, the 10 seconds begin to count from
 *             the time that you make the <code>ChangeMessageVisibility</code> call. Thus, any attempt
 *             to change the visibility timeout or to delete that message 10 seconds after you
 *             initially change the visibility timeout (a total of 25 seconds) might result in an
 *             error.</p>
 *          <p>An Amazon SQS message has three basic states:</p>
 *          <ol>
 *             <li>
 *                <p>Sent to a queue by a producer.</p>
 *             </li>
 *             <li>
 *                <p>Received from the queue by a consumer.</p>
 *             </li>
 *             <li>
 *                <p>Deleted from the queue.</p>
 *             </li>
 *          </ol>
 *          <p>A message is considered to be <i>stored</i> after it is sent to a queue by a producer, but not yet received from the queue by a consumer (that is, between states 1 and 2). There is no limit to the number of stored messages.
 *     A message is considered to be <i>in flight</i> after it is received from a queue by a consumer, but not yet deleted from the queue (that is, between states 2 and 3). There is a limit to the number of in flight messages.</p>
 *          <p>Limits that apply to in flight messages are unrelated to the <i>unlimited</i> number of stored messages.</p>
 *          <p>For most standard queues (depending on queue traffic and message backlog), there can be a maximum of approximately 120,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue).
 *     If you reach this limit, Amazon SQS returns the <code>OverLimit</code> error message.
 *     To avoid reaching the limit, you should delete messages from the queue after they're processed. You can also increase the number of queues you use to process your messages.
 *     To request a limit increase, <a href="https://console.aws.amazon.com/support/home#/case/create?issueType=service-limit-increase&limitType=service-code-sqs">file a support request</a>.</p>
 *          <p>For FIFO queues, there can be a maximum of 120,000 in flight messages (received from a queue by a consumer, but not yet deleted from the queue). If you reach this limit, Amazon SQS returns no error messages.</p>
 *          <important>
 *             <p>If you attempt to set the <code>VisibilityTimeout</code> to a value greater than
 *                 the maximum time left, Amazon SQS returns an error. Amazon SQS doesn't automatically
 *                 recalculate and increase the timeout to the maximum remaining time.</p>
 *             <p>Unlike with a queue, when you change the visibility timeout for a specific message
 *                 the timeout value is applied immediately but isn't saved in memory for that message.
 *                 If you don't delete a message after it is received, the visibility timeout for the
 *                 message reverts to the original timeout value (not to the value you set using the
 *                     <code>ChangeMessageVisibility</code> action) the next time the message is
 *                 received.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ChangeMessageVisibilityCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ChangeMessageVisibilityCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // ChangeMessageVisibilityRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   ReceiptHandle: "STRING_VALUE", // required
 *   VisibilityTimeout: Number("int"), // required
 * };
 * const command = new ChangeMessageVisibilityCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ChangeMessageVisibilityCommandInput - {@link ChangeMessageVisibilityCommandInput}
 * @returns {@link ChangeMessageVisibilityCommandOutput}
 * @see {@link ChangeMessageVisibilityCommandInput} for command's `input` shape.
 * @see {@link ChangeMessageVisibilityCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The specified ID is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
 *
 * @throws {@link MessageNotInflight} (client fault)
 *  <p>The specified message isn't in flight.</p>
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *  <p>Ensure that the <code>QueueUrl</code> is correct and that the queue has not been
 *             deleted.</p>
 *
 * @throws {@link ReceiptHandleIsInvalid} (client fault)
 *  <p>The specified receipt handle isn't valid.</p>
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
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 *
 * @public
 */
export class ChangeMessageVisibilityCommand extends $Command
  .classBuilder<
    ChangeMessageVisibilityCommandInput,
    ChangeMessageVisibilityCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSQS", "ChangeMessageVisibility", {})
  .n("SQSClient", "ChangeMessageVisibilityCommand")
  .sc(ChangeMessageVisibility)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChangeMessageVisibilityRequest;
      output: {};
    };
    sdk: {
      input: ChangeMessageVisibilityCommandInput;
      output: ChangeMessageVisibilityCommandOutput;
    };
  };
}
