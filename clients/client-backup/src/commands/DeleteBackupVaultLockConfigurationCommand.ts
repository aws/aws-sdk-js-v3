// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBackupVaultLockConfigurationInput } from "../models/models_0";
import { DeleteBackupVaultLockConfiguration } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes Backup Vault Lock from a backup vault specified by a backup vault
 *          name.</p>
 *          <p>If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using
 *          API operations, and you will receive an <code>InvalidRequestException</code> if you attempt
 *          to do so. For more information, see <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html">Vault Lock</a> in the
 *                <i>Backup Developer Guide</i>.</p>
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
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
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
 *
 * @public
 */
export class DeleteBackupVaultLockConfigurationCommand extends $Command
  .classBuilder<
    DeleteBackupVaultLockConfigurationCommandInput,
    DeleteBackupVaultLockConfigurationCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DeleteBackupVaultLockConfiguration", {})
  .n("BackupClient", "DeleteBackupVaultLockConfigurationCommand")
  .sc(DeleteBackupVaultLockConfiguration)
  .build() {
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
