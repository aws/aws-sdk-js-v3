// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteBackupVaultInput } from "../models/models_0";
import { DeleteBackupVault } from "../schemas/schemas_39_DeleteBackupVault";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBackupVaultCommand}.
 */
export interface DeleteBackupVaultCommandInput extends DeleteBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupVaultCommand}.
 */
export interface DeleteBackupVaultCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the backup vault identified by its name. A vault can be deleted only if it is
 *          empty.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupVaultInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupVaultCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBackupVaultCommandInput - {@link DeleteBackupVaultCommandInput}
 * @returns {@link DeleteBackupVaultCommandOutput}
 * @see {@link DeleteBackupVaultCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultCommandOutput} for command's `response` shape.
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
export class DeleteBackupVaultCommand extends $Command
  .classBuilder<
    DeleteBackupVaultCommandInput,
    DeleteBackupVaultCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DeleteBackupVault", {})
  .n("BackupClient", "DeleteBackupVaultCommand")
  .sc(DeleteBackupVault)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupVaultInput;
      output: {};
    };
    sdk: {
      input: DeleteBackupVaultCommandInput;
      output: DeleteBackupVaultCommandOutput;
    };
  };
}
