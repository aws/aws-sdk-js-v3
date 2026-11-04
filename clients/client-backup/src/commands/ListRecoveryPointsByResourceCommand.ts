// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRecoveryPointsByResourceInput, ListRecoveryPointsByResourceOutput } from "../models/models_0";
import { ListRecoveryPointsByResource$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRecoveryPointsByResourceCommand}.
 */
export interface ListRecoveryPointsByResourceCommandInput extends ListRecoveryPointsByResourceInput {}
/**
 * @public
 *
 * The output of {@link ListRecoveryPointsByResourceCommand}.
 */
export interface ListRecoveryPointsByResourceCommandOutput extends ListRecoveryPointsByResourceOutput, __MetadataBearer {}

/**
 * The information about the recovery points of the type specified by a resource Amazon Resource Name (ARN).
 *
 * > **Note:** For Amazon EFS and Amazon EC2, this action only lists recovery points created by Backup.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRecoveryPointsByResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRecoveryPointsByResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListRecoveryPointsByResourceInput
 *   ResourceArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ManagedByAWSBackupOnly: true || false,
 * };
 * const command = new ListRecoveryPointsByResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListRecoveryPointsByResourceOutput
 * //   NextToken: "STRING_VALUE",
 * //   RecoveryPoints: [ // RecoveryPointByResourceList
 * //     { // RecoveryPointByResource
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       Status: "COMPLETED" || "PARTIAL" || "DELETING" || "EXPIRED" || "AVAILABLE" || "STOPPED" || "CREATING",
 * //       StatusMessage: "STRING_VALUE",
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       BackupSizeBytes: Number("long"),
 * //       BackupVaultName: "STRING_VALUE",
 * //       IsParent: true || false,
 * //       ParentRecoveryPointArn: "STRING_VALUE",
 * //       ResourceName: "STRING_VALUE",
 * //       VaultType: "BACKUP_VAULT" || "LOGICALLY_AIR_GAPPED_BACKUP_VAULT" || "RESTORE_ACCESS_BACKUP_VAULT",
 * //       IndexStatus: "PENDING" || "ACTIVE" || "FAILED" || "DELETING",
 * //       IndexStatusMessage: "STRING_VALUE",
 * //       EncryptionKeyType: "AWS_OWNED_KMS_KEY" || "CUSTOMER_MANAGED_KMS_KEY",
 * //       AggregatedScanResult: { // AggregatedScanResult
 * //         FailedScan: true || false,
 * //         Findings: [ // ScanFindings
 * //           "MALWARE",
 * //         ],
 * //         LastComputed: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListRecoveryPointsByResourceCommandInput - {@link ListRecoveryPointsByResourceCommandInput}
 * @returns {@link ListRecoveryPointsByResourceCommandOutput}
 * @see {@link ListRecoveryPointsByResourceCommandInput} for command's `input` shape.
 * @see {@link ListRecoveryPointsByResourceCommandOutput} for command's `response` shape.
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
export class ListRecoveryPointsByResourceCommand extends command<ListRecoveryPointsByResourceCommandInput, ListRecoveryPointsByResourceCommandOutput>(
  _ep0,
  _mw0,
  "ListRecoveryPointsByResource",
  ListRecoveryPointsByResource$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRecoveryPointsByResourceInput;
      output: ListRecoveryPointsByResourceOutput;
    };
    sdk: {
      input: ListRecoveryPointsByResourceCommandInput;
      output: ListRecoveryPointsByResourceCommandOutput;
    };
  };
}
