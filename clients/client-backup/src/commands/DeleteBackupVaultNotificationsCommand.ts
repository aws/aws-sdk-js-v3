// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBackupVaultNotificationsInput } from "../models/models_0";
import {
  de_DeleteBackupVaultNotificationsCommand,
  se_DeleteBackupVaultNotificationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackupVaultNotificationsCommand}.
 */
export interface DeleteBackupVaultNotificationsCommandInput extends DeleteBackupVaultNotificationsInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupVaultNotificationsCommand}.
 */
export interface DeleteBackupVaultNotificationsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes event notifications for the specified backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultNotificationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultNotificationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupVaultNotificationsInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupVaultNotificationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBackupVaultNotificationsCommandInput - {@link DeleteBackupVaultNotificationsCommandInput}
 * @returns {@link DeleteBackupVaultNotificationsCommandOutput}
 * @see {@link DeleteBackupVaultNotificationsCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultNotificationsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A resource that is required for the action doesn't exist.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The request failed due to a temporary failure of the server.</p>
 *
 * @throws {@link BackupServiceException}
 * <p>Base exception class for all service exceptions from Backup service.</p>
 *
 * @public
 */
export class DeleteBackupVaultNotificationsCommand extends $Command
  .classBuilder<
    DeleteBackupVaultNotificationsCommandInput,
    DeleteBackupVaultNotificationsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "DeleteBackupVaultNotifications", {})
  .n("BackupClient", "DeleteBackupVaultNotificationsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteBackupVaultNotificationsCommand)
  .de(de_DeleteBackupVaultNotificationsCommand)
  .build() {}
