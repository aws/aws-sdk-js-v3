// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AddPermissionRequest } from "../models/models_0";
import { AddPermission$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AddPermissionCommand}.
 */
export interface AddPermissionCommandInput extends AddPermissionRequest {}
/**
 * @public
 *
 * The output of {@link AddPermissionCommand}.
 */
export interface AddPermissionCommandOutput extends __MetadataBearer {}

/**
 * Adds a permission to a queue for a specific [principal](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#P). This allows sharing access to the queue.
 *
 * When you create a queue, you have full control access rights for the queue. Only you, the owner of the queue, can grant or deny permissions to the queue. For more information about these permissions, see [Allow Developers to Write Messages to a Shared Queue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue) in the *Amazon SQS Developer Guide*.
 *
 * > **Note:**
 * >
 * > - `AddPermission` generates a policy for you. You can use `SetQueueAttributes` to upload your policy. For more information, see [Using Custom Policies with the Amazon SQS Access Policy Language](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-creating-custom-policies.html) in the *Amazon SQS Developer Guide*.
 * > - An Amazon SQS policy can have a maximum of seven actions per statement.
 * > - To remove the ability to change queue permissions, you must deny permission to the `AddPermission`, `RemovePermission`, and `SetQueueAttributes` actions in your IAM policy.
 * > - Amazon SQS `AddPermission` does not support adding a non-account principal.
 *
 * > **Note:** Cross-account permissions don't apply to this action. For more information, see [Grant cross-account permissions to a role and a username](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-customer-managed-policy-examples.html#grant-cross-account-permissions-to-role-and-user-name) in the *Amazon SQS Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, AddPermissionCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, AddPermissionCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // AddPermissionRequest
 *   QueueUrl: "STRING_VALUE", // required
 *   Label: "STRING_VALUE", // required
 *   AWSAccountIds: [ // AWSAccountIdList // required
 *     "STRING_VALUE",
 *   ],
 *   Actions: [ // ActionNameList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AddPermissionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AddPermissionCommandInput - {@link AddPermissionCommandInput}
 * @returns {@link AddPermissionCommandOutput}
 * @see {@link AddPermissionCommandInput} for command's `input` shape.
 * @see {@link AddPermissionCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *
 * The specified ID is invalid.
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
export class AddPermissionCommand extends command<AddPermissionCommandInput, AddPermissionCommandOutput>(
  _ep0,
  _mw0,
  "AddPermission",
  AddPermission$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AddPermissionRequest;
      output: {};
    };
    sdk: {
      input: AddPermissionCommandInput;
      output: AddPermissionCommandOutput;
    };
  };
}
