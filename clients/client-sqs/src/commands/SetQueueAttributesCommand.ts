// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SetQueueAttributesRequest } from "../models/models_0";
import { de_SetQueueAttributesCommand, se_SetQueueAttributesCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetQueueAttributesCommand}.
 */
export interface SetQueueAttributesCommandInput extends SetQueueAttributesRequest {}
/**
 * @public
 *
 * The output of {@link SetQueueAttributesCommand}.
 */
export interface SetQueueAttributesCommandOutput extends __MetadataBearer {}

/**
 * <p>Sets the value of one or more queue attributes, like a policy. When you change a
 *             queue's attributes, the change can take up to 60 seconds for most of the attributes to
 *             propagate throughout the Amazon SQS system. Changes made to the
 *                 <code>MessageRetentionPeriod</code> attribute can take up to 15 minutes and will
 *             impact existing messages in the queue potentially causing them to be expired and deleted
 *             if the <code>MessageRetentionPeriod</code> is reduced below the age of existing
 *             messages.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.</p>
 *                </li>
 *                <li>
 *                   <p>Cross-account permissions don't apply to this action. For more information,
 * see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name">Grant
 * cross-account permissions to a role and a username</a> in the <i>Amazon SQS Developer Guide</i>.</p>
 *                </li>
 *                <li>
 *                   <p>To remove the ability to change queue permissions, you must deny permission to the <code>AddPermission</code>, <code>RemovePermission</code>, and <code>SetQueueAttributes</code> actions in your IAM policy.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, SetQueueAttributesCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, SetQueueAttributesCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // SetQueueAttributesRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   Attributes: { // QueueAttributeMap // required
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new SetQueueAttributesCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetQueueAttributesCommandInput - {@link SetQueueAttributesCommandInput}
 * @returns {@link SetQueueAttributesCommandOutput}
 * @see {@link SetQueueAttributesCommandInput} for command's `input` shape.
 * @see {@link SetQueueAttributesCommandOutput} for command's `response` shape.
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
 * @throws {@link OverLimit} (client fault)
 *  <p>The specified action violates a limit. For example, <code>ReceiveMessage</code>
 *             returns this error if the maximum number of in flight messages is reached and
 *                 <code>AddPermission</code> returns this error if the maximum number of permissions
 *             for the queue is reached.</p>
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
export class SetQueueAttributesCommand extends $Command
  .classBuilder<
    SetQueueAttributesCommandInput,
    SetQueueAttributesCommandOutput,
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
  .s("AmazonSQS", "SetQueueAttributes", {})
  .n("SQSClient", "SetQueueAttributesCommand")
  .f(void 0, void 0)
  .ser(se_SetQueueAttributesCommand)
  .de(de_SetQueueAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetQueueAttributesRequest;
      output: {};
    };
    sdk: {
      input: SetQueueAttributesCommandInput;
      output: SetQueueAttributesCommandOutput;
    };
  };
}
