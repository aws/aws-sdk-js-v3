// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeBackupJobInput, DescribeBackupJobOutput } from "../models/models_0";
import { DescribeBackupJob } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeBackupJobCommand}.
 */
export interface DescribeBackupJobCommandInput extends DescribeBackupJobInput {}
/**
 * @public
 *
 * The output of {@link DescribeBackupJobCommand}.
 */
export interface DescribeBackupJobCommandOutput extends DescribeBackupJobOutput, __MetadataBearer {}

/**
 * <p>Returns backup job details for the specified <code>BackupJobId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeBackupJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeBackupJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DescribeBackupJobInput
 *   BackupJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeBackupJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeBackupJobOutput
 * //   AccountId: "STRING_VALUE",
 * //   BackupJobId: "STRING_VALUE",
 * //   BackupVaultName: "STRING_VALUE",
 * //   RecoveryPointLifecycle: { // Lifecycle
 * //     MoveToColdStorageAfterDays: Number("long"),
 * //     DeleteAfterDays: Number("long"),
 * //     OptInToArchiveForSupportedResources: true || false,
 * //     DeleteAfterEvent: "DELETE_AFTER_COPY",
 * //   },
 * //   BackupVaultArn: "STRING_VALUE",
 * //   VaultType: "STRING_VALUE",
 * //   VaultLockState: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   EncryptionKeyArn: "STRING_VALUE",
 * //   IsEncrypted: true || false,
 * //   ResourceArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CompletionDate: new Date("TIMESTAMP"),
 * //   State: "CREATED" || "PENDING" || "RUNNING" || "ABORTING" || "ABORTED" || "COMPLETED" || "FAILED" || "EXPIRED" || "PARTIAL",
 * //   StatusMessage: "STRING_VALUE",
 * //   PercentDone: "STRING_VALUE",
 * //   BackupSizeInBytes: Number("long"),
 * //   IamRoleArn: "STRING_VALUE",
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
 * //   ResourceType: "STRING_VALUE",
 * //   BytesTransferred: Number("long"),
 * //   ExpectedCompletionDate: new Date("TIMESTAMP"),
 * //   StartBy: new Date("TIMESTAMP"),
 * //   BackupOptions: { // BackupOptions
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * //   BackupType: "STRING_VALUE",
 * //   ParentJobId: "STRING_VALUE",
 * //   IsParent: true || false,
 * //   NumberOfChildJobs: Number("long"),
 * //   ChildJobsInState: { // BackupJobChildJobsInState
 * //     "<keys>": Number("long"),
 * //   },
 * //   ResourceName: "STRING_VALUE",
 * //   InitiationDate: new Date("TIMESTAMP"),
 * //   MessageCategory: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeBackupJobCommandInput - {@link DescribeBackupJobCommandInput}
 * @returns {@link DescribeBackupJobCommandOutput}
 * @see {@link DescribeBackupJobCommandInput} for command's `input` shape.
 * @see {@link DescribeBackupJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link DependencyFailureException} (server fault)
 *  <p>A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.</p>
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
export class DescribeBackupJobCommand extends $Command
  .classBuilder<
    DescribeBackupJobCommandInput,
    DescribeBackupJobCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "DescribeBackupJob", {})
  .n("BackupClient", "DescribeBackupJobCommand")
  .sc(DescribeBackupJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeBackupJobInput;
      output: DescribeBackupJobOutput;
    };
    sdk: {
      input: DescribeBackupJobCommandInput;
      output: DescribeBackupJobCommandOutput;
    };
  };
}
