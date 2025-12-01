// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListQueuesRequest, ListQueuesResult } from "../models/models_0";
import { ListQueues } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

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
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
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
 *  <p>The specified ID is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
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
export class ListQueuesCommand extends $Command
  .classBuilder<
    ListQueuesCommandInput,
    ListQueuesCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSQS", "ListQueues", {})
  .n("SQSClient", "ListQueuesCommand")
  .sc(ListQueues)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQueuesRequest;
      output: ListQueuesResult;
    };
    sdk: {
      input: ListQueuesCommandInput;
      output: ListQueuesCommandOutput;
    };
  };
}
