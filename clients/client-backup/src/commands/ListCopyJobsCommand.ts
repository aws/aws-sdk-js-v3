// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListCopyJobsInput, ListCopyJobsOutput } from "../models/models_0";
import { ListCopyJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCopyJobsCommand}.
 */
export interface ListCopyJobsCommandInput extends ListCopyJobsInput {}
/**
 * @public
 *
 * The output of {@link ListCopyJobsCommand}.
 */
export interface ListCopyJobsCommandOutput extends ListCopyJobsOutput, __MetadataBearer {}

/**
 * <p>Returns metadata about your copy jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListCopyJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListCopyJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListCopyJobsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ByResourceArn: "STRING_VALUE",
 *   ByState: "CREATED" || "RUNNING" || "COMPLETED" || "FAILED" || "PARTIAL",
 *   ByCreatedBefore: new Date("TIMESTAMP"),
 *   ByCreatedAfter: new Date("TIMESTAMP"),
 *   ByResourceType: "STRING_VALUE",
 *   ByDestinationVaultArn: "STRING_VALUE",
 *   ByAccountId: "STRING_VALUE",
 *   ByCompleteBefore: new Date("TIMESTAMP"),
 *   ByCompleteAfter: new Date("TIMESTAMP"),
 *   ByParentJobId: "STRING_VALUE",
 *   ByMessageCategory: "STRING_VALUE",
 *   BySourceRecoveryPointArn: "STRING_VALUE",
 * };
 * const command = new ListCopyJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListCopyJobsOutput
 * //   CopyJobs: [ // CopyJobsList
 * //     { // CopyJob
 * //       AccountId: "STRING_VALUE",
 * //       CopyJobId: "STRING_VALUE",
 * //       SourceBackupVaultArn: "STRING_VALUE",
 * //       SourceRecoveryPointArn: "STRING_VALUE",
 * //       DestinationBackupVaultArn: "STRING_VALUE",
 * //       DestinationVaultType: "STRING_VALUE",
 * //       DestinationVaultLockState: "STRING_VALUE",
 * //       DestinationRecoveryPointArn: "STRING_VALUE",
 * //       DestinationEncryptionKeyArn: "STRING_VALUE",
 * //       DestinationRecoveryPointLifecycle: { // Lifecycle
 * //         MoveToColdStorageAfterDays: Number("long"),
 * //         DeleteAfterDays: Number("long"),
 * //         OptInToArchiveForSupportedResources: true || false,
 * //         DeleteAfterEvent: "DELETE_AFTER_COPY",
 * //       },
 * //       ResourceArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CompletionDate: new Date("TIMESTAMP"),
 * //       State: "CREATED" || "RUNNING" || "COMPLETED" || "FAILED" || "PARTIAL",
 * //       StatusMessage: "STRING_VALUE",
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
 * //       CreatedByBackupJobId: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       ParentJobId: "STRING_VALUE",
 * //       IsParent: true || false,
 * //       CompositeMemberIdentifier: "STRING_VALUE",
 * //       NumberOfChildJobs: Number("long"),
 * //       ChildJobsInState: { // CopyJobChildJobsInState
 * //         "<keys>": Number("long"),
 * //       },
 * //       ResourceName: "STRING_VALUE",
 * //       MessageCategory: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCopyJobsCommandInput - {@link ListCopyJobsCommandInput}
 * @returns {@link ListCopyJobsCommandOutput}
 * @see {@link ListCopyJobsCommandInput} for command's `input` shape.
 * @see {@link ListCopyJobsCommandOutput} for command's `response` shape.
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
export class ListCopyJobsCommand extends $Command
  .classBuilder<
    ListCopyJobsCommandInput,
    ListCopyJobsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListCopyJobs", {})
  .n("BackupClient", "ListCopyJobsCommand")
  .sc(ListCopyJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCopyJobsInput;
      output: ListCopyJobsOutput;
    };
    sdk: {
      input: ListCopyJobsCommandInput;
      output: ListCopyJobsCommandOutput;
    };
  };
}
