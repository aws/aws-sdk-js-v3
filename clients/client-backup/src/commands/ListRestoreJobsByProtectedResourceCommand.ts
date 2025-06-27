// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRestoreJobsByProtectedResourceInput, ListRestoreJobsByProtectedResourceOutput } from "../models/models_0";
import {
  de_ListRestoreJobsByProtectedResourceCommand,
  se_ListRestoreJobsByProtectedResourceCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRestoreJobsByProtectedResourceCommand}.
 */
export interface ListRestoreJobsByProtectedResourceCommandInput extends ListRestoreJobsByProtectedResourceInput {}
/**
 * @public
 *
 * The output of {@link ListRestoreJobsByProtectedResourceCommand}.
 */
export interface ListRestoreJobsByProtectedResourceCommandOutput
  extends ListRestoreJobsByProtectedResourceOutput,
    __MetadataBearer {}

/**
 * <p>This returns restore jobs that contain the specified protected resource.</p>
 *          <p>You must include <code>ResourceArn</code>. You can optionally include
 *             <code>NextToken</code>, <code>ByStatus</code>, <code>MaxResults</code>,
 *             <code>ByRecoveryPointCreationDateAfter</code> , and
 *             <code>ByRecoveryPointCreationDateBefore</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListRestoreJobsByProtectedResourceCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListRestoreJobsByProtectedResourceCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // ListRestoreJobsByProtectedResourceInput
 *   ResourceArn: "STRING_VALUE", // required
 *   ByStatus: "PENDING" || "RUNNING" || "COMPLETED" || "ABORTED" || "FAILED",
 *   ByRecoveryPointCreationDateAfter: new Date("TIMESTAMP"),
 *   ByRecoveryPointCreationDateBefore: new Date("TIMESTAMP"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRestoreJobsByProtectedResourceCommand(input);
 * const response = await client.send(command);
 * // { // ListRestoreJobsByProtectedResourceOutput
 * //   RestoreJobs: [ // RestoreJobsList
 * //     { // RestoreJobsListMember
 * //       AccountId: "STRING_VALUE",
 * //       RestoreJobId: "STRING_VALUE",
 * //       RecoveryPointArn: "STRING_VALUE",
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
 * @param ListRestoreJobsByProtectedResourceCommandInput - {@link ListRestoreJobsByProtectedResourceCommandInput}
 * @returns {@link ListRestoreJobsByProtectedResourceCommandOutput}
 * @see {@link ListRestoreJobsByProtectedResourceCommandInput} for command's `input` shape.
 * @see {@link ListRestoreJobsByProtectedResourceCommandOutput} for command's `response` shape.
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
export class ListRestoreJobsByProtectedResourceCommand extends $Command
  .classBuilder<
    ListRestoreJobsByProtectedResourceCommandInput,
    ListRestoreJobsByProtectedResourceCommandOutput,
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
  .s("CryoControllerUserManager", "ListRestoreJobsByProtectedResource", {})
  .n("BackupClient", "ListRestoreJobsByProtectedResourceCommand")
  .f(void 0, void 0)
  .ser(se_ListRestoreJobsByProtectedResourceCommand)
  .de(de_ListRestoreJobsByProtectedResourceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRestoreJobsByProtectedResourceInput;
      output: ListRestoreJobsByProtectedResourceOutput;
    };
    sdk: {
      input: ListRestoreJobsByProtectedResourceCommandInput;
      output: ListRestoreJobsByProtectedResourceCommandOutput;
    };
  };
}
