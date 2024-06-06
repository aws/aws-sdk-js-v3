// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListQueuesRequest, ListQueuesResult } from "../models/models_0";
import { de_ListQueuesCommand, se_ListQueuesCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListQueuesCommand}.
 */
export interface ListQueuesCommandInput extends ListQueuesRequest {}
/**
 * @public
 *
 * The output of {@link ListQueuesCommand}.
 */
export interface ListQueuesCommandOutput extends ListQueuesResult, __MetadataBearer {}

/**
 * <p>Returns a list of your queues in the current region. The response includes a maximum
 *             of 1,000 results. If you specify a value for the optional <code>QueueNamePrefix</code>
 *             parameter, only queues with a name that begins with the specified value are
 *             returned.</p>
 *          <p> The <code>listQueues</code> methods supports pagination. Set parameter
 *                 <code>MaxResults</code> in the request to specify the maximum number of results to
 *             be returned in the response. If you do not set <code>MaxResults</code>, the response
 *             includes a maximum of 1,000 results. If you set <code>MaxResults</code> and there are
 *             additional results to display, the response includes a value for <code>NextToken</code>.
 *             Use <code>NextToken</code> as a parameter in your next request to
 *                 <code>listQueues</code> to receive the next page of results. </p>
 *          <note>
 *             <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, ListQueuesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, ListQueuesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * const client = new SQSClient(config);
 * const input = { // ListQueuesRequest
 *   QueueNamePrefix: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListQueuesCommand(input);
 * const response = await client.send(command);
 * // { // ListQueuesResult
 * //   QueueUrls: [ // QueueUrlList
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQueuesCommandInput - {@link ListQueuesCommandInput}
 * @returns {@link ListQueuesCommandOutput}
 * @see {@link ListQueuesCommandInput} for command's `input` shape.
 * @see {@link ListQueuesCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The <code>accountId</code> is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>When the request to a queue is not HTTPS and SigV4.</p>
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
export class ListQueuesCommand extends $Command
  .classBuilder<
    ListQueuesCommandInput,
    ListQueuesCommandOutput,
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
  .s("AmazonSQS", "ListQueues", {})
  .n("SQSClient", "ListQueuesCommand")
  .f(void 0, void 0)
  .ser(se_ListQueuesCommand)
  .de(de_ListQueuesCommand)
  .build() {}
