// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ChangeMessageVisibilityBatchRequest, ChangeMessageVisibilityBatchResult } from "../models/models_0";
import { ChangeMessageVisibilityBatch$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ChangeMessageVisibilityBatchCommand}.
 */
export interface ChangeMessageVisibilityBatchCommandInput extends ChangeMessageVisibilityBatchRequest {}
/**
 * @public
 *
 * The output of {@link ChangeMessageVisibilityBatchCommand}.
 */
export interface ChangeMessageVisibilityBatchCommandOutput extends ChangeMessageVisibilityBatchResult, __MetadataBearer {}

/**
 * <p>Changes the visibility timeout of multiple messages. This is a batch version of
 *                     <code>
 *                <a>ChangeMessageVisibility</a>.</code> The result of the action
 *             on each message is reported individually in the response. You can send up to 10
 *                     <code>
 *                <a>ChangeMessageVisibility</a>
 *             </code> requests with each
 *                 <code>ChangeMessageVisibilityBatch</code> action.</p>
 *          <important>
 *             <p>Because the batch request can result in a combination of successful and unsuccessful actions, you should check for batch errors even when the call returns an HTTP status code of <code>200</code>.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ChangeMessageVisibilityBatchCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ChangeMessageVisibilityBatchCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // ChangeMessageVisibilityBatchRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   Entries: [ // ChangeMessageVisibilityBatchRequestEntryList // required
 *     { // ChangeMessageVisibilityBatchRequestEntry
 *       Id: "STRING_VALUE", // required
 *       ReceiptHandle: "STRING_VALUE", // required
 *       VisibilityTimeout: Number("int"),
 *     },
 *   ],
 * };
 * const command = new ChangeMessageVisibilityBatchCommand(input);
 * const response = await client.send(command);
 * // { // ChangeMessageVisibilityBatchResult
 * //   Successful: [ // ChangeMessageVisibilityBatchResultEntryList // required
 * //     { // ChangeMessageVisibilityBatchResultEntry
 * //       Id: "STRING_VALUE", // required
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
 * @param ChangeMessageVisibilityBatchCommandInput - {@link ChangeMessageVisibilityBatchCommandInput}
 * @returns {@link ChangeMessageVisibilityBatchCommandOutput}
 * @see {@link ChangeMessageVisibilityBatchCommandInput} for command's `input` shape.
 * @see {@link ChangeMessageVisibilityBatchCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link BatchEntryIdsNotDistinct} (client fault)
 *  <p>Two or more batch entries in the request have the same <code>Id</code>.</p>
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
export class ChangeMessageVisibilityBatchCommand extends $Command
  .classBuilder<
    ChangeMessageVisibilityBatchCommandInput,
    ChangeMessageVisibilityBatchCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSQS", "ChangeMessageVisibilityBatch", {})
  .n("SQSClient", "ChangeMessageVisibilityBatchCommand")
  .sc(ChangeMessageVisibilityBatch$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ChangeMessageVisibilityBatchRequest;
      output: ChangeMessageVisibilityBatchResult;
    };
    sdk: {
      input: ChangeMessageVisibilityBatchCommandInput;
      output: ChangeMessageVisibilityBatchCommandOutput;
    };
  };
}
