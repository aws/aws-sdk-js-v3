// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteBackupVaultInput } from "../models/models_0";
import { DeleteBackupVault$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes the backup vault identified by its name. A vault can be deleted only if it is empty.
 *
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
export class DeleteBackupVaultCommand extends command<DeleteBackupVaultCommandInput, DeleteBackupVaultCommandOutput>(
  _ep0,
  _mw0,
  "DeleteBackupVault",
  DeleteBackupVault$
) {
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
