// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVaultNotificationsInput, GetVaultNotificationsOutput } from "../models/models_0";
import { GetVaultNotifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVaultNotificationsCommand}.
 */
export interface GetVaultNotificationsCommandInput extends GetVaultNotificationsInput {}
/**
 * @public
 *
 * The output of {@link GetVaultNotificationsCommand}.
 */
export interface GetVaultNotificationsCommandOutput extends GetVaultNotificationsOutput, __MetadataBearer {}

/**
 * This operation retrieves the `notification-configuration` subresource of the specified vault.
 *
 * For information about setting a notification configuration on a vault, see SetVaultNotifications. If a notification configuration for a vault is not set, the operation returns a `404 Not Found` error. For more information about vault notifications, see [Configuring Vault Notifications in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html).
 *
 * An AWS account has full permission to perform all operations (actions). However, AWS Identity and Access Management (IAM) users don't have any permissions by default. You must grant them explicit permission to perform specific actions. For more information, see [Access Control Using AWS Identity and Access Management (IAM)](https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html).
 *
 * For conceptual information and underlying REST API, see [Configuring Vault Notifications in Amazon Glacier](https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html) and [Get Vault Notification Configuration](https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html) in the *Amazon Glacier Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, GetVaultNotificationsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, GetVaultNotificationsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * // import type { GlacierClientConfig } from "@aws-sdk/client-glacier";
 * const config = {}; // type is GlacierClientConfig
 * const client = new GlacierClient(config);
 * const input = { // GetVaultNotificationsInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new GetVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * // { // GetVaultNotificationsOutput
 * //   vaultNotificationConfig: { // VaultNotificationConfig
 * //     SNSTopic: "STRING_VALUE",
 * //     Events: [ // NotificationEventList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVaultNotificationsCommandInput - {@link GetVaultNotificationsCommandInput}
 * @returns {@link GetVaultNotificationsCommandOutput}
 * @see {@link GetVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link GetVaultNotificationsCommandOutput} for command's `response` shape.
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
 * @example To get the notification-configuration for the specified vault
 * ```javascript
 * // The example retrieves the notification-configuration for the vault named my-vault.
 * const input = {
 *   accountId: "-",
 *   vaultName: "my-vault"
 * };
 * const command = new GetVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   vaultNotificationConfig: {
 *     Events: [
 *       "InventoryRetrievalCompleted",
 *       "ArchiveRetrievalCompleted"
 *     ],
 *     SNSTopic: "arn:aws:sns:us-west-2:0123456789012:my-vault"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetVaultNotificationsCommand extends command<GetVaultNotificationsCommandInput, GetVaultNotificationsCommandOutput>(
  _ep0,
  _mw0,
  "GetVaultNotifications",
  GetVaultNotifications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVaultNotificationsInput;
      output: GetVaultNotificationsOutput;
    };
    sdk: {
      input: GetVaultNotificationsCommandInput;
      output: GetVaultNotificationsCommandOutput;
    };
  };
}
