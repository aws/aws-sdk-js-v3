// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRestoreJobInput, DescribeRestoreJobOutput } from "../models/models_0";
import { DescribeRestoreJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeRestoreJobCommand}.
 */
export interface DescribeRestoreJobCommandInput extends DescribeRestoreJobInput {}
/**
 * @public
 *
 * The output of {@link DescribeRestoreJobCommand}.
 */
export interface DescribeRestoreJobCommandOutput extends DescribeRestoreJobOutput, __MetadataBearer {}

/**
 * Returns metadata associated with a restore job that is specified by a job ID.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DescribeRestoreJobCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DescribeRestoreJobCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // DescribeRestoreJobInput
 *   RestoreJobId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRestoreJobCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRestoreJobOutput
 * //   AccountId: "STRING_VALUE",
 * //   RestoreJobId: "STRING_VALUE",
 * //   RecoveryPointArn: "STRING_VALUE",
 * //   SourceResourceArn: "STRING_VALUE",
 * //   BackupVaultArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   CompletionDate: new Date("TIMESTAMP"),
 * //   Status: "PENDING" || "RUNNING" || "COMPLETED" || "ABORTED" || "FAILED",
 * //   StatusMessage: "STRING_VALUE",
 * //   PercentDone: "STRING_VALUE",
 * //   BackupSizeInBytes: Number("long"),
 * //   IamRoleArn: "STRING_VALUE",
 * //   ExpectedCompletionTimeMinutes: Number("long"),
 * //   CreatedResourceArn: "STRING_VALUE",
 * //   ResourceType: "STRING_VALUE",
 * //   RecoveryPointCreationDate: new Date("TIMESTAMP"),
 * //   CreatedBy: { // RestoreJobCreator
 * //     RestoreTestingPlanArn: "STRING_VALUE",
 * //   },
 * //   ValidationStatus: "FAILED" || "SUCCESSFUL" || "TIMED_OUT" || "VALIDATING",
 * //   ValidationStatusMessage: "STRING_VALUE",
 * //   DeletionStatus: "DELETING" || "FAILED" || "SUCCESSFUL",
 * //   DeletionStatusMessage: "STRING_VALUE",
 * //   IsParent: true || false,
 * //   ParentJobId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRestoreJobCommandInput - {@link DescribeRestoreJobCommandInput}
 * @returns {@link DescribeRestoreJobCommandOutput}
 * @see {@link DescribeRestoreJobCommandInput} for command's `input` shape.
 * @see {@link DescribeRestoreJobCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link DependencyFailureException} (server fault)
 *
 * A dependent Amazon Web Services service or resource returned an error to the Backup service, and the action cannot be completed.
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
export class DescribeRestoreJobCommand extends command<DescribeRestoreJobCommandInput, DescribeRestoreJobCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRestoreJob",
  DescribeRestoreJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRestoreJobInput;
      output: DescribeRestoreJobOutput;
    };
    sdk: {
      input: DescribeRestoreJobCommandInput;
      output: DescribeRestoreJobCommandOutput;
    };
  };
}
