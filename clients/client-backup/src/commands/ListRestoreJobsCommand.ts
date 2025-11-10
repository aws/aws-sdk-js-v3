// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRestoreJobsInput, ListRestoreJobsOutput } from "../models/models_0";
import { ListRestoreJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRestoreJobsCommand}.
 */
export interface ListRestoreJobsCommandInput extends ListRestoreJobsInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreJobsCommand}.
 */
export interface ListRestoreJobsCommandOutput extends ListRestoreJobsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of jobs that Backup initiated to restore a saved resource,
 *          including details about the recovery process.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListRestoreJobsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   ByAccountId: "STRING_VALUE",
 *   ByResourceType: "STRING_VALUE",
 *   ByCreatedBefore: new Date("TIMESTAMP"),
 *   ByCreatedAfter: new Date("TIMESTAMP"),
 *   ByStatus: "PENDING" || "RUNNING" || "COMPLETED" || "ABORTED" || "FAILED",
 *   ByCompleteBefore: new Date("TIMESTAMP"),
 *   ByCompleteAfter: new Date("TIMESTAMP"),
 *   ByRestoreTestingPlanArn: "STRING_VALUE",
 *   ByParentJobId: "STRING_VALUE",
 * };
 * const command = new ListRestoreJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreJobsOutput
 * //   RestoreJobs: [ // RestoreJobsList
 * //     { // RestoreJobsListMember
 * //       AccountId: "STRING_VALUE",
 * //       RestoreJobId: "STRING_VALUE",
 * //       RecoveryPointArn: "STRING_VALUE",
 * //       SourceResourceArn: "STRING_VALUE",
 * //       BackupVaultArn: "STRING_VALUE",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       CompletionDate: new Date("TIMESTAMP"),
 * //       Status: "PENDING" || "RUNNING" || "COMPLETED" || "ABORTED" || "FAILED",
 * //       StatusMessage: "STRING_VALUE",
 * //       PercentDone: "STRING_VALUE",
 * //       BackupSizeInBytes: Number("long"),
 * //       IamRoleArn: "STRING_VALUE",
 * //       ExpectedCompletionTimeMinutes: Number("long"),
 * //       CreatedResourceArn: "STRING_VALUE",
 * //       ResourceType: "STRING_VALUE",
 * //       RecoveryPointCreationDate: new Date("TIMESTAMP"),
 * //       IsParent: true || false,
 * //       ParentJobId: "STRING_VALUE",
 * //       CreatedBy: { // RestoreJobCreator
 * //         RestoreTestingPlanArn: "STRING_VALUE",
 * //       },
 * //       ValidationStatus: "FAILED" || "SUCCESSFUL" || "TIMED_OUT" || "VALIDATING",
 * //       ValidationStatusMessage: "STRING_VALUE",
 * //       DeletionStatus: "DELETING" || "FAILED" || "SUCCESSFUL",
 * //       DeletionStatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRestoreJobsCommandInput - {@link ListRestoreJobsCommandInput}
 * @returns {@link ListRestoreJobsCommandOutput}
 * @see {@link ListRestoreJobsCommandInput} for command's `input` shape.
 * @see {@link ListRestoreJobsCommandOutput} for command's `response` shape.
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
export class ListRestoreJobsCommand extends $Command
  .classBuilder<
    ListRestoreJobsCommandInput,
    ListRestoreJobsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListRestoreJobs", {})
  .n("BackupClient", "ListRestoreJobsCommand")
  .sc(ListRestoreJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRestoreJobsInput;
      output: ListRestoreJobsOutput;
    };
    sdk: {
      input: ListRestoreJobsCommandInput;
      output: ListRestoreJobsCommandOutput;
    };
  };
}
