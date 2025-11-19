// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListScanJobsInput, ListScanJobsOutput } from "../models/models_0";
import { ListScanJobs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListScanJobsCommand}.
 */
export interface ListScanJobsCommandInput extends ListScanJobsInput {}
/**
 * @public
 *
 * The output of {@link ListScanJobsCommand}.
 */
export interface ListScanJobsCommandOutput extends ListScanJobsOutput, __MetadataBearer {}

/**
 * <p>Returns a list of existing scan jobs for an authenticated account for the last 30 days.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, ListScanJobsCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, ListScanJobsCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // ListScanJobsInput
 *   ByAccountId: "STRING_VALUE",
 *   ByBackupVaultName: "STRING_VALUE",
 *   ByCompleteAfter: new Date("TIMESTAMP"),
 *   ByCompleteBefore: new Date("TIMESTAMP"),
 *   ByMalwareScanner: "GUARDDUTY",
 *   ByRecoveryPointArn: "STRING_VALUE",
 *   ByResourceArn: "STRING_VALUE",
 *   ByResourceType: "EBS" || "EC2" || "S3",
 *   ByScanResultStatus: "NO_THREATS_FOUND" || "THREATS_FOUND",
 *   ByState: "CANCELED" || "COMPLETED" || "COMPLETED_WITH_ISSUES" || "CREATED" || "FAILED" || "RUNNING",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListScanJobsCommand(input);
 * const response = await client.send(command);
 * // { // ListScanJobsOutput
 * //   NextToken: "STRING_VALUE",
 * //   ScanJobs: [ // ScanJobs // required
 * //     { // ScanJob
 * //       AccountId: "STRING_VALUE", // required
 * //       BackupVaultArn: "STRING_VALUE", // required
 * //       BackupVaultName: "STRING_VALUE", // required
 * //       CompletionDate: new Date("TIMESTAMP"),
 * //       CreatedBy: { // ScanJobCreator
 * //         BackupPlanArn: "STRING_VALUE", // required
 * //         BackupPlanId: "STRING_VALUE", // required
 * //         BackupPlanVersion: "STRING_VALUE", // required
 * //         BackupRuleId: "STRING_VALUE", // required
 * //       },
 * //       CreationDate: new Date("TIMESTAMP"), // required
 * //       IamRoleArn: "STRING_VALUE", // required
 * //       MalwareScanner: "GUARDDUTY", // required
 * //       RecoveryPointArn: "STRING_VALUE", // required
 * //       ResourceArn: "STRING_VALUE", // required
 * //       ResourceName: "STRING_VALUE", // required
 * //       ResourceType: "EBS" || "EC2" || "S3", // required
 * //       ScanBaseRecoveryPointArn: "STRING_VALUE",
 * //       ScanId: "STRING_VALUE",
 * //       ScanJobId: "STRING_VALUE", // required
 * //       ScanMode: "FULL_SCAN" || "INCREMENTAL_SCAN", // required
 * //       ScanResult: { // ScanResultInfo
 * //         ScanResultStatus: "NO_THREATS_FOUND" || "THREATS_FOUND", // required
 * //       },
 * //       ScannerRoleArn: "STRING_VALUE", // required
 * //       State: "CANCELED" || "COMPLETED" || "COMPLETED_WITH_ISSUES" || "CREATED" || "FAILED" || "RUNNING",
 * //       StatusMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListScanJobsCommandInput - {@link ListScanJobsCommandInput}
 * @returns {@link ListScanJobsCommandOutput}
 * @see {@link ListScanJobsCommandInput} for command's `input` shape.
 * @see {@link ListScanJobsCommandOutput} for command's `response` shape.
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
export class ListScanJobsCommand extends $Command
  .classBuilder<
    ListScanJobsCommandInput,
    ListScanJobsCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "ListScanJobs", {})
  .n("BackupClient", "ListScanJobsCommand")
  .sc(ListScanJobs)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListScanJobsInput;
      output: ListScanJobsOutput;
    };
    sdk: {
      input: ListScanJobsCommandInput;
      output: ListScanJobsCommandOutput;
    };
  };
}
