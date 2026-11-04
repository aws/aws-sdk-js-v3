// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBackupVaultAccessPolicyInput } from "../models/models_0";
import { DeleteBackupVaultAccessPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteBackupVaultAccessPolicyCommand}.
 */
export interface DeleteBackupVaultAccessPolicyCommandInput extends DeleteBackupVaultAccessPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteBackupVaultAccessPolicyCommand}.
 */
export interface DeleteBackupVaultAccessPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes the policy document that manages permissions on a backup vault.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteBackupVaultAccessPolicyCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteBackupVaultAccessPolicyCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DeleteBackupVaultAccessPolicyInput
 *   BackupVaultName: "STRING_VALUE", // required
 * };
 * const command = new DeleteBackupVaultAccessPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBackupVaultAccessPolicyCommandInput - {@link DeleteBackupVaultAccessPolicyCommandInput}
 * @returns {@link DeleteBackupVaultAccessPolicyCommandOutput}
 * @see {@link DeleteBackupVaultAccessPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupVaultAccessPolicyCommandOutput} for command's `response` shape.
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
export class DeleteBackupVaultAccessPolicyCommand extends command<DeleteBackupVaultAccessPolicyCommandInput, DeleteBackupVaultAccessPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBackupVaultAccessPolicy",
  DeleteBackupVaultAccessPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBackupVaultAccessPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteBackupVaultAccessPolicyCommandInput;
      output: DeleteBackupVaultAccessPolicyCommandOutput;
    };
  };
}
