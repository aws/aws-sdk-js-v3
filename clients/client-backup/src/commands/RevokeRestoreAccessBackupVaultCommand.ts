// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RevokeRestoreAccessBackupVaultInput } from "../models/models_0";
import { RevokeRestoreAccessBackupVault } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RevokeRestoreAccessBackupVaultCommand}.
 */
export interface RevokeRestoreAccessBackupVaultCommandInput extends RevokeRestoreAccessBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link RevokeRestoreAccessBackupVaultCommand}.
 */
export interface RevokeRestoreAccessBackupVaultCommandOutput extends __MetadataBearer {}

/**
 * <p>Revokes access to a restore access backup vault, removing the ability to restore from its recovery points and permanently deleting the vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, RevokeRestoreAccessBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, RevokeRestoreAccessBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // RevokeRestoreAccessBackupVaultInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RestoreAccessBackupVaultArn: "STRING_VALUE", // required
 *   RequesterComment: "STRING_VALUE",
 * };
 * const command = new RevokeRestoreAccessBackupVaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RevokeRestoreAccessBackupVaultCommandInput - {@link RevokeRestoreAccessBackupVaultCommandInput}
 * @returns {@link RevokeRestoreAccessBackupVaultCommandOutput}
 * @see {@link RevokeRestoreAccessBackupVaultCommandInput} for command's `input` shape.
 * @see {@link RevokeRestoreAccessBackupVaultCommandOutput} for command's `response` shape.
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
export class RevokeRestoreAccessBackupVaultCommand extends $Command
  .classBuilder<
    RevokeRestoreAccessBackupVaultCommandInput,
    RevokeRestoreAccessBackupVaultCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "RevokeRestoreAccessBackupVault", {})
  .n("BackupClient", "RevokeRestoreAccessBackupVaultCommand")
  .sc(RevokeRestoreAccessBackupVault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RevokeRestoreAccessBackupVaultInput;
      output: {};
    };
    sdk: {
      input: RevokeRestoreAccessBackupVaultCommandInput;
      output: RevokeRestoreAccessBackupVaultCommandOutput;
    };
  };
}
