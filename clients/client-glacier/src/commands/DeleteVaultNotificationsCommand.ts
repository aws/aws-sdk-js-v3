// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlacierClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlacierClient";
import { DeleteVaultNotificationsInput } from "../models/models_0";
import { de_DeleteVaultNotificationsCommand, se_DeleteVaultNotificationsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteVaultNotificationsCommand}.
 */
export interface DeleteVaultNotificationsCommandInput extends DeleteVaultNotificationsInput {}
/**
 * @public
 *
 * The output of {@link DeleteVaultNotificationsCommand}.
 */
export interface DeleteVaultNotificationsCommandOutput extends __MetadataBearer {}

/**
 * <p>This operation deletes the notification configuration set for a vault. The operation
 *          is eventually consistent; that is, it might take some time for Amazon S3 Glacier to completely
 *          disable the notifications and you might still receive some notifications for a short time
 *          after you send the delete request.</p>
 *
 *          <p>An AWS account has full permission to perform all operations (actions). However, AWS
 *          Identity and Access Management (IAM) users don't have any permissions by default. You must
 *          grant them explicit permission to perform specific actions. For more information, see
 *          <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/using-iam-with-amazon-glacier.html">Access
 *             Control Using AWS Identity and Access Management (IAM)</a>.</p>
 *          <p> For conceptual information and underlying REST API, see <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/configuring-notifications.html">Configuring Vault
 *             Notifications in Amazon S3 Glacier</a> and <a href="https://docs.aws.amazon.com/amazonglacier/latest/dev/api-vault-notifications-delete.html">Delete Vault
 *             Notification Configuration </a> in the Amazon S3 Glacier Developer Guide. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlacierClient, DeleteVaultNotificationsCommand } from "@aws-sdk/client-glacier"; // ES Modules import
 * // const { GlacierClient, DeleteVaultNotificationsCommand } = require("@aws-sdk/client-glacier"); // CommonJS import
 * const client = new GlacierClient(config);
 * const input = { // DeleteVaultNotificationsInput
 *   accountId: "STRING_VALUE", // required
 *   vaultName: "STRING_VALUE", // required
 * };
 * const command = new DeleteVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteVaultNotificationsCommandInput - {@link DeleteVaultNotificationsCommandInput}
 * @returns {@link DeleteVaultNotificationsCommandOutput}
 * @see {@link DeleteVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link DeleteVaultNotificationsCommandOutput} for command's `response` shape.
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
 * @public
 * @example To delete the notification configuration set for a vault
 * ```javascript
 * // The example deletes the notification configuration set for the vault named examplevault.
 * const input = {
 *   "accountId": "-",
 *   "vaultName": "examplevault"
 * };
 * const command = new DeleteVaultNotificationsCommand(input);
 * await client.send(command);
 * // example id: to-delete-the-notification-configuration-set-for-a-vault-1481840646090
 * ```
 *
 */
export class DeleteVaultNotificationsCommand extends $Command
  .classBuilder<
    DeleteVaultNotificationsCommandInput,
    DeleteVaultNotificationsCommandOutput,
    GlacierClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GlacierClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Glacier", "DeleteVaultNotifications", {})
  .n("GlacierClient", "DeleteVaultNotificationsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteVaultNotificationsCommand)
  .de(de_DeleteVaultNotificationsCommand)
  .build() {}
