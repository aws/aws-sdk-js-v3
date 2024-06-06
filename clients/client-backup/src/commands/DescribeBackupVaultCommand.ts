// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeBackupVaultInput, DescribeBackupVaultOutput } from "../models/models_0";
import { de_DescribeBackupVaultCommand, se_DescribeBackupVaultCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBackupVaultCommand}.
 */
export interface DescribeBackupVaultCommandInput extends DescribeBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link DescribeBackupVaultCommand}.
 */
export interface DescribeBackupVaultCommandOutput extends DescribeBackupVaultOutput, __MetadataBearer {}

/**
 * <p>Returns metadata about a backup vault specified by its name.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DescribeBackupVaultInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   BackupVaultAccountId: "STRING_VALUE",
 * };
 * const command = new DescribeBackupVaultCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBackupVaultOutput
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   VaultType: "BACKUP_VAULT" || "LOGICALLY_AIR_GAPPED_BACKUP_VAULT",
 * //   EncryptionKeyArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CreatorRequestId: "STRING_VALUE",
 * //   NumberOfRecoveryPoints: Number("long"),
 * //   Locked: true || false,
 * //   MinRetentionDays: Number("long"),
 * //   MaxRetentionDays: Number("long"),
 * //   LockDate: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param DescribeBackupVaultCommandInput - {@link DescribeBackupVaultCommandInput}
 * @returns {@link DescribeBackupVaultCommandOutput}
 * @see {@link DescribeBackupVaultCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupVaultCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribeBackupVaultCommand extends $Command
  .classBuilder<
    DescribeBackupVaultCommandInput,
    DescribeBackupVaultCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("CryoControllerUserManager", "DescribeBackupVault", {})
  .n("BackupClient", "DescribeBackupVaultCommand")
  .f(void 0, void 0)
  .ser(se_DescribeBackupVaultCommand)
  .de(de_DescribeBackupVaultCommand)
  .build() {}
