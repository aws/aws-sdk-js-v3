// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRecoveryPointsByBackupVaultInput, ListRecoveryPointsByBackupVaultOutput } from "../models/models_0";
import {
  de_ListRecoveryPointsByBackupVaultCommand,
  se_ListRecoveryPointsByBackupVaultCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRecoveryPointsByBackupVaultCommand}.
 */
export interface ListRecoveryPointsByBackupVaultCommandInput extends ListRecoveryPointsByBackupVaultInput {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPointsByBackupVaultCommand}.
 */
export interface ListRecoveryPointsByBackupVaultCommandOutput
  extends ListRecoveryPointsByBackupVaultOutput,
    __MetadataBearer {}

/**
 * <p>Returns detailed information about the recovery points stored in a backup vault.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByBackupVaultCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByBackupVaultCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BackupClient(config);
 * const input = { // ListRecoveryPointsByBackupVaultInput
 *   BackupVaultName: "STRING_VALUE", // required
 *   BackupVaultAccountId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ByResourceArn: "STRING_VALUE",
 *   ByResourceType: "STRING_VALUE",
 *   ByBackupPlanId: "STRING_VALUE",
 *   ByCreatedBefore: new Date("TIMESTAMP"),
 *   ByCreatedAfter: new Date("TIMESTAMP"),
 *   ByParentRecoveryPointArn: "STRING_VALUE",
 * };
 * const command = new ListRecoveryPointsByBackupVaultCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPointsByBackupVaultOutput
 * //   NextToken: "STRING_VALUE",
 * //   RecoveryPoints: [ // RecoveryPointByBackupVaultList
 * //     { // RecoveryPointByBackupVault
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       BackupVaultName: "STRING_VALUE",
 * //       BackupVaultArn: "STRING_VALUE",
 * //       SourceBackupVaultArn: "STRING_VALUE",
 * //       ResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       CreatedBy: { // RecoveryPointCreator
 * //         BackupPlanId: "STRING_VALUE",
 * //         BackupPlanArn: "STRING_VALUE",
 * //         BackupPlanVersion: "STRING_VALUE",
 * //         BackupRuleId: "STRING_VALUE",
 * //       },
 * //       IamRoleArn: "STRING_VALUE",
 * //       Status: "COMPLETED" || "PARTIAL" || "DELETING" || "EXPIRED",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CompletionDate: new Date("TIMESTAMP"),
 * //       BackupSizeInBytes: Number("long"),
 * //       CalculatedLifecycle: { // CalculatedLifecycle
 * //         MoveToColdStorageAt: new Date("TIMESTAMP"),
 * //         DeleteAt: new Date("TIMESTAMP"),
 * //       },
 * //       Lifecycle: { // Lifecycle
 * //         MoveToColdStorageAfterDays: Number("long"),
 * //         DeleteAfterDays: Number("long"),
 * //         OptInToArchiveForSupportedResources: true || false,
 * //       },
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       IsEncrypted: true || false,
 * //       LastRestoreTime: new Date("TIMESTAMP"),
 * //       ParentRecoveryPointArn: "STRING_VALUE",
 * //       CompositeMemberIdentifier: "STRING_VALUE",
 * //       IsParent: true || false,
 * //       ResourceName: "STRING_VALUE",
 * //       VaultType: "BACKUP_VAULT" || "LOGICALLY_AIR_GAPPED_BACKUP_VAULT",
 * //       IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //       IndexStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecoveryPointsByBackupVaultCommandInput - {@link ListRecoveryPointsByBackupVaultCommandInput}
 * @returns {@link ListRecoveryPointsByBackupVaultCommandOutput}
 * @see {@link ListRecoveryPointsByBackupVaultCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByBackupVaultCommandOutput} for command's `response` shape.
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
export class ListRecoveryPointsByBackupVaultCommand extends $Command
  .classBuilder<
    ListRecoveryPointsByBackupVaultCommandInput,
    ListRecoveryPointsByBackupVaultCommandOutput,
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
  .s("CryoControllerUserManager", "ListRecoveryPointsByBackupVault", {})
  .n("BackupClient", "ListRecoveryPointsByBackupVaultCommand")
  .f(void 0, void 0)
  .ser(se_ListRecoveryPointsByBackupVaultCommand)
  .de(de_ListRecoveryPointsByBackupVaultCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecoveryPointsByBackupVaultInput;
      output: ListRecoveryPointsByBackupVaultOutput;
    };
    sdk: {
      input: ListRecoveryPointsByBackupVaultCommandInput;
      output: ListRecoveryPointsByBackupVaultCommandOutput;
    };
  };
}
