// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutBackupVaultLockConfigurationInput } from "../models/models_0";
import { PutBackupVaultLockConfiguration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutBackupVaultLockConfigurationCommand}.
 */
export interface PutBackupVaultLockConfigurationCommandInput extends PutBackupVaultLockConfigurationInput {}
/**
 * @public
 *
 * The output of {@link PutBackupVaultLockConfigurationCommand}.
 */
export interface PutBackupVaultLockConfigurationCommandOutput extends __MetadataBearer {}

/**
 * Applies Backup Vault Lock to a backup vault, preventing attempts to delete any recovery point stored in or created in a backup vault. Vault Lock also prevents attempts to update the lifecycle policy that controls the retention period of any recovery point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and maximum retention period for future backup and copy jobs that target a backup vault.
 *
 * > **Note:** Backup Vault Lock has been assessed by Cohasset Associates for use in environments that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about how Backup Vault Lock relates to these regulations, see the [Cohasset Associates Compliance Assessment.](https://docs.aws.amazon.com/aws-backup/latest/devguide/samples/cohassetreport.zip)
 *
 * For more information, see [Backup Vault Lock](https://docs.aws.amazon.com/aws-backup/latest/devguide/vault-lock.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, PutBackupVaultLockConfigurationCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, PutBackupVaultLockConfigurationCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // PutBackupVaultLockConfigurationInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   MinRetentionDays: Number("long"),
 *   MaxRetentionDays: Number("long"),
 *   ChangeableForDays: Number("long"),
 * };
 * const command = new PutBackupVaultLockConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutBackupVaultLockConfigurationCommandInput - {@link PutBackupVaultLockConfigurationCommandInput}
 * @returns {@link PutBackupVaultLockConfigurationCommandOutput}
 * @see {@link PutBackupVaultLockConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutBackupVaultLockConfigurationCommandOutput} for command's `response` shape.
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
export class PutBackupVaultLockConfigurationCommand extends command<PutBackupVaultLockConfigurationCommandInput, PutBackupVaultLockConfigurationCommandOutput>(
  _ep0,
  _mw0,
  "PutBackupVaultLockConfiguration",
  PutBackupVaultLockConfiguration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutBackupVaultLockConfigurationInput;
      output: {};
    };
    sdk: {
      input: PutBackupVaultLockConfigurationCommandInput;
      output: PutBackupVaultLockConfigurationCommandOutput;
    };
  };
}
