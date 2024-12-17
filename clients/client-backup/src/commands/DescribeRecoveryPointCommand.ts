// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRecoveryPointInput, DescribeRecoveryPointOutput } from "../models/models_0";
import { de_DescribeRecoveryPointCommand, se_DescribeRecoveryPointCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRecoveryPointCommand}.
 */
export interface DescribeRecoveryPointCommandInput extends DescribeRecoveryPointInput {}
/**
 * @public
 *
 * The output of {@link DescribeRecoveryPointCommand}.
 */
export interface DescribeRecoveryPointCommandOutput extends DescribeRecoveryPointOutput, __MetadataBearer {}

/**
 * <p>Returns metadata associated with a recovery point, including ID, status, encryption, and
 *          lifecycle.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // DescribeRecoveryPointInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   RecoveryPointArn: "STRING_VALUE", // required
 *   BackupVaultAccountId: "STRING_VALUE",
 * };
 * const command = new DescribeRecoveryPointCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRecoveryPointOutput
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   BackupVaultName: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   SourceBackupVaultArn: "STRING_VALUE",
 * //   ResourceArn: "STRING_VALUE",
 * //   ResourceType: "STRING_VALUE",
 * //   CreatedBy: { // RecoveryPointCreator
 * //     BackupPlanId: "STRING_VALUE",
 * //     BackupPlanArn: "STRING_VALUE",
 * //     BackupPlanVersion: "STRING_VALUE",
 * //     BackupRuleId: "STRING_VALUE",
 * //   },
 * //   IamRoleArn: "STRING_VALUE",
 * //   Status: "COMPLETED" || "PARTIAL" || "DELETING" || "EXPIRED",
 * //   StatusMessage: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CompletionDate: new Date("TIMESTAMP"),
 * //   BackupSizeInBytes: Number("long"),
 * //   CalculatedLifecycle: { // CalculatedLifecycle
 * //     MoveToColdStorageAt: new Date("TIMESTAMP"),
 * //     DeleteAt: new Date("TIMESTAMP"),
 * //   },
 * //   Lifecycle: { // Lifecycle
 * //     MoveToColdStorageAfterDays: Number("long"),
 * //     DeleteAfterDays: Number("long"),
 * //     OptInToArchiveForSupportedResources: true || false,
 * //   },
 * //   EncryptionKeyArn: "STRING_VALUE",
 * //   IsEncrypted: true || false,
 * //   StorageClass: "WARM" || "COLD" || "DELETED",
 * //   LastRestoreTime: new Date("TIMESTAMP"),
 * //   ParentRecoveryPointArn: "STRING_VALUE",
 * //   CompositeMemberIdentifier: "STRING_VALUE",
 * //   IsParent: true || false,
 * //   ResourceName: "STRING_VALUE",
 * //   VaultType: "BACKUP_VAULT" || "LOGICALLY_AIR_GAPPED_BACKUP_VAULT",
 * //   IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //   IndexStatusMessage: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRecoveryPointCommandInput - {@link DescribeRecoveryPointCommandInput}
 * @returns {@link DescribeRecoveryPointCommandOutput}
 * @see {@link DescribeRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DescribeRecoveryPointCommandOutput} for command's `response` shape.
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
export class DescribeRecoveryPointCommand extends $Command
  .classBuilder<
    DescribeRecoveryPointCommandInput,
    DescribeRecoveryPointCommandOutput,
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
  .s("CryoControllerUserManager", "DescribeRecoveryPoint", {})
  .n("BackupClient", "DescribeRecoveryPointCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRecoveryPointCommand)
  .de(de_DescribeRecoveryPointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRecoveryPointInput;
      output: DescribeRecoveryPointOutput;
    };
    sdk: {
      input: DescribeRecoveryPointCommandInput;
      output: DescribeRecoveryPointCommandOutput;
    };
  };
}
