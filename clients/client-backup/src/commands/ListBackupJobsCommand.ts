// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListBackupJobsInput, ListBackupJobsOutput } from "../models/models_0";
import { ListBackupJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListBackupJobsCommand}.
 */
export interface ListBackupJobsCommandInput extends ListBackupJobsInput {}
/**
 * @public
 *
 * The output of {@link ListBackupJobsCommand}.
 */
export interface ListBackupJobsCommandOutput extends ListBackupJobsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing backup jobs for an authenticated account for the last 30
 *          days. For a longer period of time, consider using these <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/monitoring.html">monitoring tools</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListBackupJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListBackupJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListBackupJobsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ByResourceArn: "STRING_VALUE",
 *   ByState: "CREATED" || "PENDING" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETED" || "FAILED" || "EXPIRED" || "PARTIAL",
 *   ByBackupVaultName: "STRING_VALUE",
 *   ByCreatedBefore: new Date("TIMESTAMP"),
 *   ByCreatedAfter: new Date("TIMESTAMP"),
 *   ByResourceType: "STRING_VALUE",
 *   ByAccountId: "STRING_VALUE",
 *   ByCompleteAfter: new Date("TIMESTAMP"),
 *   ByCompleteBefore: new Date("TIMESTAMP"),
 *   ByParentJobId: "STRING_VALUE",
 *   ByMessageCategory: "STRING_VALUE",
 * };
 * const command = new ListBackupJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListBackupJobsOutput
 * //   BackupJobs: [ // BackupJobsList
 * //     { // BackupJob
 * //       AccountId: "STRING_VALUE",
 * //       BackupJobId: "STRING_VALUE",
 * //       BackupVaultName: "STRING_VALUE",
 * //       BackupVaultArn: "STRING_VALUE",
 * //       VaultType: "STRING_VALUE",
 * //       VaultLockState: "STRING_VALUE",
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       RecoveryPointLifecycle: { // Lifecycle
 * //         MoveToColdStorageAfterDays: Number("long"),
 * //         DeleteAfterDays: Number("long"),
 * //         OptInToArchiveForSupportedResources: true || false,
 * //         DeleteAfterEvent: "DELETE_AFTER_COPY",
 * //       },
 * //       EncryptionKeyArn: "STRING_VALUE",
 * //       IsEncrypted: true || false,
 * //       ResourceArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CompletionDate: new Date("TIMESTAMP"),
 * //       State: "CREATED" || "PENDING" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETED" || "FAILED" || "EXPIRED" || "PARTIAL",
 * //       StatusMessage: "STRING_VALUE",
 * //       PercentDone: "STRING_VALUE",
 * //       BackupSizeInBytes: Number("long"),
 * //       IamRoleArn: "STRING_VALUE",
 * //       CreatedBy: { // RecoveryPointCreator
 * //         BackupPlanId: "STRING_VALUE",
 * //         BackupPlanArn: "STRING_VALUE",
 * //         BackupPlanName: "STRING_VALUE",
 * //         BackupPlanVersion: "STRING_VALUE",
 * //         BackupRuleId: "STRING_VALUE",
 * //         BackupRuleName: "STRING_VALUE",
 * //         BackupRuleCron: "STRING_VALUE",
 * //         BackupRuleTimezone: "STRING_VALUE",
 * //       },
 * //       ExpectedCompletionDate: new Date("TIMESTAMP"),
 * //       StartBy: new Date("TIMESTAMP"),
 * //       ResourceType: "STRING_VALUE",
 * //       BytesTransferred: Number("long"),
 * //       BackupOptions: { // BackupOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       BackupType: "STRING_VALUE",
 * //       ParentJobId: "STRING_VALUE",
 * //       IsParent: true || false,
 * //       ResourceName: "STRING_VALUE",
 * //       InitiationDate: new Date("TIMESTAMP"),
 * //       MessageCategory: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBackupJobsCommandInput - {@link ListBackupJobsCommandInput}
 * @returns {@link ListBackupJobsCommandOutput}
 * @see {@link ListBackupJobsCommandInput} for command's `input` shape.
 * @see {@link ListBackupJobsCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class ListBackupJobsCommand extends $Command
  .classBuilder<
    ListBackupJobsCommandInput,
    ListBackupJobsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListBackupJobs", {})
  .n("BackupClient", "ListBackupJobsCommand")
  .sc(ListBackupJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBackupJobsInput;
      output: ListBackupJobsOutput;
    };
    sdk: {
      input: ListBackupJobsCommandInput;
      output: ListBackupJobsCommandOutput;
    };
  };
}
