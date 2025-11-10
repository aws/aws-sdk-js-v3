// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateQueueRequest, CreateQueueResult } from "../models/models_0";
import { CreateQueue } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandInput extends CreateQueueRequest {}
/**
 * @public
 *
 * The output of {@link CreateQueueCommand}.
 */
export interface CreateQueueCommandOutput extends CreateQueueResult, __MetadataBearer {}

/**
 * <p>Creates a new standard or FIFO queue. You can pass one or more attributes in
 *             the request. Keep the following in mind:</p>
 *          <ul>
 *             <li>
 *                <p>If you don't specify the <code>FifoQueue</code> attribute, Amazon SQS creates a standard queue.</p>
 *                <note>
 *                   <p>You can't change the queue type after you create it and you can't convert
 *                         an existing standard queue into a FIFO queue. You must either create a new
 *                         FIFO queue for your application or delete your existing standard queue and
 *                         recreate it as a FIFO queue. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/FIFO-queues.html#FIFO-queues-moving">Moving From a standard queue to a FIFO queue</a> in the
 *                             <i>Amazon SQS Developer Guide</i>. </p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>If you don't provide a value for an attribute, the queue is created with the
 *                     default value for the attribute.</p>
 *             </li>
 *             <li>
 *                <p>If you delete a queue, you must wait at least 60 seconds before creating a
 *                     queue with the same name.</p>
 *             </li>
 *          </ul>
 *          <p>To successfully create a new queue, you must provide a queue name that adheres to the
 *                 <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/limits-queues.html">limits
 *                 related to queues</a> and is unique within the scope of your queues.</p>
 *          <note>
 *             <p>After you create a queue, you must wait at least one second after the queue is
 *                 created to be able to use the queue.</p>
 *          </note>
 *          <p>To retrieve the URL of a queue, use the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_GetQueueUrl.html">
 *                <code>GetQueueUrl</code>
 *             </a> action. This action only requires the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html#API_CreateQueue_RequestSyntax">
 *                <code>QueueName</code>
 *             </a> parameter.</p>
 *          <p>When creating queues, keep the following points in mind:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify the name of an existing queue and provide the exact same names
 *                     and values for all its attributes, the <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_CreateQueue.html">
 *                      <code>CreateQueue</code>
 *                   </a> action will return the URL of the
 *                     existing queue instead of creating a new one.</p>
 *             </li>
 *             <li>
 *                <p>If you attempt to create a queue with a name that already exists but with
 *                     different attribute names or values, the <code>CreateQueue</code> action will
 *                     return an error. This ensures that existing queues are not inadvertently
 *                     altered.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, CreateQueueCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, CreateQueueCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // CreateQueueRequest
 *   QueueName: "STRING_VALUE", // required
 *   Attributes: { // QueueAttributeMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateQueueCommand(input);
 * const response = await client.send(command);
 * // { // CreateQueueResult
 * //   QueueUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateQueueCommandInput - {@link CreateQueueCommandInput}
 * @returns {@link CreateQueueCommandOutput}
 * @see {@link CreateQueueCommandInput} for command's `input` shape.
 * @see {@link CreateQueueCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The specified ID is invalid.</p>
 *
 * @throws {@link InvalidAttributeName} (client fault)
 *  <p>The specified attribute doesn't exist.</p>
 *
 * @throws {@link InvalidAttributeValue} (client fault)
 *  <p>A queue attribute value is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
 *
 * @throws {@link QueueDeletedRecently} (client fault)
 *  <p>You must wait 60 seconds after deleting a queue before you can create another queue
 *             with the same name.</p>
 *
 * @throws {@link QueueNameExists} (client fault)
 *  <p>A queue with this name already exists. Amazon SQS returns this error only if the request
 *             includes attributes whose values differ from those of the existing queue.</p>
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
export class CreateQueueCommand extends $Command
  .classBuilder<
    CreateQueueCommandInput,
    CreateQueueCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSQS", "CreateQueue", {})
  .n("SQSClient", "CreateQueueCommand")
  .sc(CreateQueue)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateQueueRequest;
      output: CreateQueueResult;
    };
    sdk: {
      input: CreateQueueCommandInput;
      output: CreateQueueCommandOutput;
    };
  };
}
