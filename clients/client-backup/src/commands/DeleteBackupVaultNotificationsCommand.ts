// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBackupVaultNotificationsInput } from "../models/models_0";
import { DeleteBackupVaultNotifications$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes event notifications for the specified backup vault.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultNotificationsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultNotificationsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
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
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * A resource that is required for the action doesn't exist.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The request failed due to a temporary failure of the server.
 *
 * @throws {@link BackupServiceException}
 *
 * Base exception class for all service exceptions from Backup service.
 *
 * @public
 */
export class DeleteBackupVaultNotificationsCommand extends command<DeleteBackupVaultNotificationsCommandInput, DeleteBackupVaultNotificationsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBackupVaultNotifications",
  DeleteBackupVaultNotifications$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupVaultNotificationsInput;
      output: {};
    };
    sdk: {
      input: DeleteBackupVaultNotificationsCommandInput;
      output: DeleteBackupVaultNotificationsCommandOutput;
    };
  };
}
