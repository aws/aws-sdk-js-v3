// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBackupVaultLockConfigurationInput } from "../models/models_0";
import { DeleteBackupVaultLockConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBackupVaultLockConfigurationCommand}.
 */
export interface DeleteBackupVaultLockConfigurationCommandInput extends DeleteBackupVaultLockConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupVaultLockConfigurationCommand}.
 */
export interface DeleteBackupVaultLockConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Deletes Backup Vault Lock from a backup vault specified by a backup vault name.
 *
 * If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using API operations, and you will receive an `InvalidRequestException` if you attempt to do so. For more information, see [Vault Lock](https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html) in the *Backup Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultLockConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultLockConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupVaultLockConfigurationInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupVaultLockConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBackupVaultLockConfigurationCommandInput - {@link DeleteBackupVaultLockConfigurationCommandInput}
 * @returns {@link DeleteBackupVaultLockConfigurationCommandOutput}
 * @see {@link DeleteBackupVaultLockConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultLockConfigurationCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * Indicates that something is wrong with the input to the request. For example, a parameter is of the wrong type.
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
export class DeleteBackupVaultLockConfigurationCommand extends command<DeleteBackupVaultLockConfigurationCommandInput, DeleteBackupVaultLockConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBackupVaultLockConfiguration",
  DeleteBackupVaultLockConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupVaultLockConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteBackupVaultLockConfigurationCommandInput;
      output: DeleteBackupVaultLockConfigurationCommandOutput;
    };
  };
}
