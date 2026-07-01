// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRestoreAccessBackupVaultsInput, ListRestoreAccessBackupVaultsOutput } from "../models/models_0";
import { ListRestoreAccessBackupVaults$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRestoreAccessBackupVaultsCommand}.
 */
export interface ListRestoreAccessBackupVaultsCommandInput extends ListRestoreAccessBackupVaultsInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreAccessBackupVaultsCommand}.
 */
export interface ListRestoreAccessBackupVaultsCommandOutput extends ListRestoreAccessBackupVaultsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of restore access backup vaults associated with a specified backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreAccessBackupVaultsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreAccessBackupVaultsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListRestoreAccessBackupVaultsInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRestoreAccessBackupVaultsCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreAccessBackupVaultsOutput
 * //   NextToken: "STRING_VALUE",
 * //   RestoreAccessBackupVaults: [ // RestoreAccessBackupVaultList
 * //     { // RestoreAccessBackupVaultListMember
 * //       RestoreAccessBackupVaultArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       ApprovalDate: new Date("TIMESTAMP"),
 * //       VaultState: "CREATING" || "AVAILABLE" || "FAILED",
 * //       LatestRevokeRequest: { // LatestRevokeRequest
 * //         MpaSessionArn: "STRING_VALUE",
 * //         Status: "PENDING" || "FAILED",
 * //         StatusMessage: "STRING_VALUE",
 * //         InitiationDate: new Date("TIMESTAMP"),
 * //         ExpiryDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRestoreAccessBackupVaultsCommandInput - {@link ListRestoreAccessBackupVaultsCommandInput}
 * @returns {@link ListRestoreAccessBackupVaultsCommandOutput}
 * @see {@link ListRestoreAccessBackupVaultsCommandInput} for command's `input` shape.
 * @see {@link ListRestoreAccessBackupVaultsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListRestoreAccessBackupVaultsCommand extends command<ListRestoreAccessBackupVaultsCommandInput, ListRestoreAccessBackupVaultsCommandOutput>(
  _ep0,
  _mw0,
  "ListRestoreAccessBackupVaults",
  ListRestoreAccessBackupVaults$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRestoreAccessBackupVaultsInput;
      output: ListRestoreAccessBackupVaultsOutput;
    };
    sdk: {
      input: ListRestoreAccessBackupVaultsCommandInput;
      output: ListRestoreAccessBackupVaultsCommandOutput;
    };
  };
}
