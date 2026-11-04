// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRecoveryPointInput, DescribeRecoveryPointOutput } from "../models/models_0";
import { DescribeRecoveryPoint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
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
 * //     BackupPlanName: "STRING_VALUE",
 * //     BackupPlanVersion: "STRING_VALUE",
 * //     BackupRuleId: "STRING_VALUE",
 * //     BackupRuleName: "STRING_VALUE",
 * //     BackupRuleCron: "STRING_VALUE",
 * //     BackupRuleTimezone: "STRING_VALUE",
 * //   },
 * //   IamRoleArn: "STRING_VALUE",
 * //   Status: "COMPLETED" || "PARTIAL" || "DELETING" || "EXPIRED" || "AVAILABLE" || "STOPPED" || "CREATING",
 * //   StatusMessage: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   InitiationDate: new Date("TIMESTAMP"),
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
 * //     DeleteAfterEvent: "DELETE_AFTER_COPY",
 * //   },
 * //   EncryptionKeyArn: "STRING_VALUE",
 * //   IsEncrypted: true || false,
 * //   StorageClass: "WARM" || "COLD" || "DELETED",
 * //   LastRestoreTime: new Date("TIMESTAMP"),
 * //   ParentRecoveryPointArn: "STRING_VALUE",
 * //   CompositeMemberIdentifier: "STRING_VALUE",
 * //   IsParent: true || false,
 * //   ResourceName: "STRING_VALUE",
 * //   VaultType: "BACKUP_VAULT" || "LOGICALLY_AIR_GAPPED_BACKUP_VAULT" || "RESTORE_ACCESS_BACKUP_VAULT",
 * //   IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //   IndexStatusMessage: "STRING_VALUE",
 * //   EncryptionKeyType: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KMS_KEY",
 * //   ScanResults: [ // ScanResults
 * //     { // ScanResult
 * //       MalwareScanner: "GUARDDUTY",
 * //       ScanJobState: "COMPLETED" || "COMPLETED_WITH_ISSUES" || "FAILED" || "CANCELED",
 * //       LastScanTimestamp: new Date("TIMESTAMP"),
 * //       Findings: [ // ScanFindings
 * //         "MALWARE",
 * //       ],
 * //     },
 * //   ],
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
export class DescribeRecoveryPointCommand extends command<DescribeRecoveryPointCommandInput, DescribeRecoveryPointCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRecoveryPoint",
  DescribeRecoveryPoint$
) {
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
