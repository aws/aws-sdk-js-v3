// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { GetVaultNotificationsInput, GetVaultNotificationsOutput } from "../models/models_0";
import { GetVaultNotifications } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>This operation retrieves the <code>notification-configuration</code> subresource of
 *          the specified vault.</p>
 *
 *          <p>For information about setting a notification configuration on a vault, see <a>SetVaultNotifications</a>. If a notification configuration for a vault is not
 *          set, the operation returns a <code>404 Not Found</code> error. For more information about
 *          vault notifications, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
 *             Notifications in Amazon S3 Glacier</a>. </p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *             <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access Control Using
 *             AWS Identity and Access Management (IAM)</a>.</p>
 *          <p>For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
 *             Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-get.html">Get Vault Notification
 *             Configuration </a> in the <i>Amazon Glacier Developer Guide</i>. </p>
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
 *  <p>Returned if a parameter of the request is incorrectly specified.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Returned if a required header or parameter is missing from the request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Returned if the specified resource (such as a vault, upload ID, or job ID) doesn't
 *          exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>Returned if the service cannot complete the request.</p>
 *
 * @throws {@link GlacierServiceException}
 * <p>Base exception class for all service exceptions from Glacier service.</p>
 *
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
export class GetVaultNotificationsCommand extends $Command
  .classBuilder<
    GetVaultNotificationsCommandInput,
    GetVaultNotificationsCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Glacier", "GetVaultNotifications", {})
  .n("GlacierClient", "GetVaultNotificationsCommand")
  .sc(GetVaultNotifications)
  .build() {
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
