// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetVaultNotificationsInput } from "../models/models_0";
import { SetVaultNotifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetVaultNotificationsCommand}.
 */
export interface SetVaultNotificationsCommandInput extends SetVaultNotificationsInput {}
/**
 * @public
 *
 * The output of {@link SetVaultNotificationsCommand}.
 */
export interface SetVaultNotificationsCommandOutput extends __MetadataBearer {}

/**
 * This operation configures notifications that will be sent when specific events happen to a vault. By default, you don't get any notifications.
 *
 * To configure vault notifications, send a PUT request to the `notification-configuration` subresource of the vault. The request should include a JSON document that provides an Amazon SNS topic and specific events for which you want Amazon Glacier to send notifications to the topic.
 *
 * Amazon SNS topics must grant permission to the vault to be allowed to publish notifications to the topic. You can configure a vault to publish a notification for the following vault events:
 *
 * - **ArchiveRetrievalCompleted** This event occurs when a job that was initiated for an archive retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob.
 * - **InventoryRetrievalCompleted** This event occurs when a job that was initiated for an inventory retrieval is completed (InitiateJob). The status of the completed job can be "Succeeded" or "Failed". The notification sent to the SNS topic is the same output as returned from DescribeJob.
 *
 * An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).
 *
 * For conceptual information and underlying REST API, see [Configuring Vault Notifications in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html) and [Set Vault Notification Configuration](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-put.html) in the *Amazon Glacier Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, SetVaultNotificationsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, SetVaultNotificationsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // SetVaultNotificationsInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 *   vaultNotificationConfig: { // VaultNotificationConfig
 *     SNSTopic: "STRING_VALUE",
 *     Events: [ // NotificationEventList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SetVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetVaultNotificationsCommandInput - {@link SetVaultNotificationsCommandInput}
 * @returns {@link SetVaultNotificationsCommandOutput}
 * @see {@link SetVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link SetVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link GlacierClientResolvedConfig | config} for GlacierClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Returned if a parameter of the request is incorrectly specified.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Returned if a required header or parameter is missing from the request.
 *
 * @throws {@link NoLongerSupportedException} (client fault)
 *
 * Returned if the request was made by a customer with no Amazon Glacier storage. The request is denied as the API is no longer supported for new customers. Please use Amazon S3 Glacier storage classes instead.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * Returned if the service cannot complete the request.
 *
 * @throws {@link GlacierServiceException}
 *
 * Base exception class for all service exceptions from Glacier service.
 *
 * @example To configure a vault to post a message to an Amazon SNS topic when jobs complete
 * ```javascript
 * // The example sets the examplevault notification configuration.
 * const input = {
 *   accountId: "-",
 *   vaultName: "examplevault",
 *   vaultNotificationConfig: {
 *     Events: [
 *       "ArchiveRetrievalCompleted",
 *       "InventoryRetrievalCompleted"
 *     ],
 *     SNSTopic: "arn:aws:sns:us-west-2:012345678901:mytopic"
 *   }
 * };
 * const command = new SetVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class SetVaultNotificationsCommand extends command<SetVaultNotificationsCommandInput, SetVaultNotificationsCommandOutput>(
  _ep0,
  _mw0,
  "SetVaultNotifications",
  SetVaultNotifications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetVaultNotificationsInput;
      output: {};
    };
    sdk: {
      input: SetVaultNotificationsCommandInput;
      output: SetVaultNotificationsCommandOutput;
    };
  };
}
