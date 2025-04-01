// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetQueueUrlRequest, GetQueueUrlResult } from "../models/models_0";
import { de_GetQueueUrlCommand, se_GetQueueUrlCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetQueueUrlCommand}.
 */
export interface GetQueueUrlCommandInput extends GetQueueUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueUrlCommand}.
 */
export interface GetQueueUrlCommandOutput extends GetQueueUrlResult, __MetadataBearer {}

/**
 * <p>The <code>GetQueueUrl</code> API returns the URL of an existing Amazon SQS queue. This is
 *             useful when you know the queue's name but need to retrieve its URL for further
 *             operations.</p>
 *          <p>To access a queue owned by another Amazon Web Services account, use the
 *                 <code>QueueOwnerAWSAccountId</code> parameter to specify the account ID of the
 *             queue's owner. Note that the queue owner must grant you the necessary permissions to
 *             access the queue. For more information about accessing shared queues, see the
 *                     <code>
 *                <a>AddPermission</a>
 *             </code> API or <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue">Allow developers to write messages to a shared queue</a> in the <i>Amazon SQS
 *                 Developer Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, GetQueueUrlCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, GetQueueUrlCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // GetQueueUrlRequest
 *   QueueName: "STRING_VALUE", // required
 *   QueueOwnerAWSAccountId: "STRING_VALUE",
 * };
 * const command = new GetQueueUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueUrlResult
 * //   QueueUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueueUrlCommandInput - {@link GetQueueUrlCommandInput}
 * @returns {@link GetQueueUrlCommandOutput}
 * @see {@link GetQueueUrlCommandInput} for command's `input` shape.
 * @see {@link GetQueueUrlCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The specified ID is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
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
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 *
 * @public
 */
export class GetQueueUrlCommand extends $Command
  .classBuilder<
    GetQueueUrlCommandInput,
    GetQueueUrlCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSQS", "GetQueueUrl", {})
  .n("SQSClient", "GetQueueUrlCommand")
  .f(void 0, void 0)
  .ser(se_GetQueueUrlCommand)
  .de(de_GetQueueUrlCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueueUrlRequest;
      output: GetQueueUrlResult;
    };
    sdk: {
      input: GetQueueUrlCommandInput;
      output: GetQueueUrlCommandOutput;
    };
  };
}
