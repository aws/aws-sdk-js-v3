// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetQueueAttributesRequest } from "../models/models_0";
import { SetQueueAttributes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Sets the value of one or more queue attributes, like a policy. When you change a queue's attributes, the change can take up to 60 seconds for most of the attributes to propagate throughout the Amazon SQS system. Changes made to the `MessageRetentionPeriod` attribute can take up to 15 minutes and will impact existing messages in the queue potentially causing them to be expired and deleted if the `MessageRetentionPeriod` is reduced below the age of existing messages.
 *
 * > **Note:**
 * >
 * > - In the future, new attributes might be added. If you write code that calls this action, we recommend that you structure your code so that it can handle new attributes gracefully.
 * > - Cross-account permissions don't apply to this action. For more information, see [Grant cross-account permissions to a role and a username](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name) in the *Amazon SQS Developer Guide*.
 * > - To remove the ability to change queue permissions, you must deny permission to the `AddPermission`, `RemovePermission`, and `SetQueueAttributes` actions in your IAM policy.
 *
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
 *
 * The specified ID is invalid.
 *
 * @throws {@link InvalidAttributeName} (client fault)
 *
 * The specified attribute doesn't exist.
 *
 * @throws {@link InvalidAttributeValue} (client fault)
 *
 * A queue attribute value is invalid.
 *
 * @throws {@link InvalidSecurity} (client fault)
 *
 * The request was not made over HTTPS or did not use SigV4 for signing.
 *
 * @throws {@link OverLimit} (client fault)
 *
 * The specified action violates a limit. For example, `ReceiveMessage` returns this error if the maximum number of in flight messages is reached and `AddPermission` returns this error if the maximum number of permissions for the queue is reached.
 *
 * @throws {@link QueueDoesNotExist} (client fault)
 *
 * Ensure that the `QueueUrl` is correct and that the queue has not been deleted.
 *
 * @throws {@link RequestThrottled} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * - Exceeds the permitted request rate for the queue or for the recipient of the request.
 * - Ensure that the request rate is within the Amazon SQS limits for sending messages. For more information, see [Amazon SQS quotas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html#quotas-requests) in the *Amazon SQS Developer Guide*.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * Error code 400. Unsupported operation.
 *
 * @throws {@link SQSServiceException}
 *
 * Base exception class for all service exceptions from SQS service.
 *
 * @public
 */
export class SetQueueAttributesCommand extends command<SetQueueAttributesCommandInput, SetQueueAttributesCommandOutput>(
  _ep0,
  _mw0,
  "SetQueueAttributes",
  SetQueueAttributes$
) {
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
