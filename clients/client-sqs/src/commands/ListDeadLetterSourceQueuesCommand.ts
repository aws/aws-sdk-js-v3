// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDeadLetterSourceQueuesRequest, ListDeadLetterSourceQueuesResult } from "../models/models_0";
import { ListDeadLetterSourceQueues$ } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeadLetterSourceQueuesCommand}.
 */
export interface ListDeadLetterSourceQueuesCommandInput extends ListDeadLetterSourceQueuesRequest {}
/**
 * @public
 *
 * The output of {@link ListDeadLetterSourceQueuesCommand}.
 */
export interface ListDeadLetterSourceQueuesCommandOutput extends ListDeadLetterSourceQueuesResult, __MetadataBearer {}

/**
 * <p>Returns a list of your queues that have the <code>RedrivePolicy</code> queue attribute
 *             configured with a dead-letter queue.</p>
 *          <p> The <code>ListDeadLetterSourceQueues</code> methods supports pagination. Set
 *             parameter <code>MaxResults</code> in the request to specify the maximum number of
 *             results to be returned in the response. If you do not set <code>MaxResults</code>, the
 *             response includes a maximum of 1,000 results. If you set <code>MaxResults</code> and
 *             there are additional results to display, the response includes a value for
 *                 <code>NextToken</code>. Use <code>NextToken</code> as a parameter in your next
 *             request to <code>ListDeadLetterSourceQueues</code> to receive the next page of results. </p>
 *          <p>For more information about using dead-letter queues, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">Using Amazon SQS Dead-Letter Queues</a> in the <i>Amazon SQS Developer
 *                 Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListDeadLetterSourceQueuesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListDeadLetterSourceQueuesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // ListDeadLetterSourceQueuesRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDeadLetterSourceQueuesCommand(input);
 * const response = await client.send(command);
 * // { // ListDeadLetterSourceQueuesResult
 * //   queueUrls: [ // QueueUrlList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeadLetterSourceQueuesCommandInput - {@link ListDeadLetterSourceQueuesCommandInput}
 * @returns {@link ListDeadLetterSourceQueuesCommandOutput}
 * @see {@link ListDeadLetterSourceQueuesCommandInput} for command's `input` shape.
 * @see {@link ListDeadLetterSourceQueuesCommandOutput} for command's `response` shape.
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
export class ListDeadLetterSourceQueuesCommand extends $Command
  .classBuilder<
    ListDeadLetterSourceQueuesCommandInput,
    ListDeadLetterSourceQueuesCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSQS", "ListDeadLetterSourceQueues", {})
  .n("SQSClient", "ListDeadLetterSourceQueuesCommand")
  .sc(ListDeadLetterSourceQueues$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeadLetterSourceQueuesRequest;
      output: ListDeadLetterSourceQueuesResult;
    };
    sdk: {
      input: ListDeadLetterSourceQueuesCommandInput;
      output: ListDeadLetterSourceQueuesCommandOutput;
    };
  };
}
