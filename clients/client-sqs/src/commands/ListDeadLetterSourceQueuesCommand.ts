// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListDeadLetterSourceQueuesRequest, ListDeadLetterSourceQueuesResult } from "../models/models_0";
import { de_ListDeadLetterSourceQueuesCommand, se_ListDeadLetterSourceQueuesCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

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
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>When the request to a queue is not HTTPS and SigV4.</p>
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
export class ListDeadLetterSourceQueuesCommand extends $Command
  .classBuilder<
    ListDeadLetterSourceQueuesCommandInput,
    ListDeadLetterSourceQueuesCommandOutput,
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
    ];
  })
  .s("AmazonSQS", "ListDeadLetterSourceQueues", {})
  .n("SQSClient", "ListDeadLetterSourceQueuesCommand")
  .f(void 0, void 0)
  .ser(se_ListDeadLetterSourceQueuesCommand)
  .de(de_ListDeadLetterSourceQueuesCommand)
  .build() {}
