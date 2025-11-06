// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListBackupVaultsInput, ListBackupVaultsOutput } from "../models/models_0";
import { de_ListBackupVaultsCommand, se_ListBackupVaultsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBackupVaultsCommand}.
 */
export interface ListBackupVaultsCommandInput extends ListBackupVaultsInput {}
/**
 * @public
 *
 * The output of {@link ListBackupVaultsCommand}.
 */
export interface ListBackupVaultsCommandOutput extends ListBackupVaultsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of recovery point storage containers along with information about
 *          them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupVaultsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupVaultsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListBackupVaultsInput
 *   ByVaultType: "BACKUP_VAULT" || "LOGICALLY_AIR_GAPPED_BACKUP_VAULT" || "RESTORE_ACCESS_BACKUP_VAULT",
 *   ByShared: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListBackupVaultsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupVaultsOutput
 * //   BackupVaultList: [ // BackupVaultList
 * //     { // BackupVaultListMember
 * //       BackupVaultName: "STRING_VALUE",
 * //       BackupVaultArn: "STRING_VALUE",
 * //       VaultType: "BACKUP_VAULT" || "LOGICALLY_AIR_GAPPED_BACKUP_VAULT" || "RESTORE_ACCESS_BACKUP_VAULT",
 * //       VaultState: "CREATING" || "AVAILABLE" || "FAILED",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       CreatorRequestId: "STRING_VALUE",
 * //       NumberOfRecoveryPoints: Number("long"),
 * //       Locked: true || false,
 * //       MinRetentionDays: Number("long"),
 * //       MaxRetentionDays: Number("long"),
 * //       LockDate: new Date("TIMESTAMP"),
 * //       EncryptionKeyType: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KMS_KEY",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackupVaultsCommandInput - {@link ListBackupVaultsCommandInput}
 * @returns {@link ListBackupVaultsCommandOutput}
 * @see {@link ListBackupVaultsCommandInput} for command's `input` shape.
 * @see {@link ListBackupVaultsCommandOutput} for command's `response` shape.
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
export class ListBackupVaultsCommand extends $Command
  .classBuilder<
    ListBackupVaultsCommandInput,
    ListBackupVaultsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "ListBackupVaults", {})
  .n("BackupClient", "ListBackupVaultsCommand")
  .f(void 0, void 0)
  .ser(se_ListBackupVaultsCommand)
  .de(de_ListBackupVaultsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupVaultsInput;
      output: ListBackupVaultsOutput;
    };
    sdk: {
      input: ListBackupVaultsCommandInput;
      output: ListBackupVaultsCommandOutput;
    };
  };
}
