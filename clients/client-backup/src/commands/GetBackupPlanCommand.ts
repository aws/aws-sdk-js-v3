// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetBackupPlanInput, GetBackupPlanOutput } from "../models/models_0";
import { GetBackupPlan } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBackupPlanCommand}.
 */
export interface GetBackupPlanCommandInput extends GetBackupPlanInput {}
/**
 * @public
 *
 * The output of {@link GetBackupPlanCommand}.
 */
export interface GetBackupPlanCommandOutput extends GetBackupPlanOutput, __MetadataBearer {}

/**
 * <p>Returns <code>BackupPlan</code> details for the specified <code>BackupPlanId</code>. The
 *          details are the body of a backup plan in JSON format, in addition to plan metadata.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetBackupPlanInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   VersionId: "STRING_VALUE",
 *   MaxScheduledRunsPreview: Number("int"),
 * };
 * const command = new GetBackupPlanCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupPlanOutput
 * //   BackupPlan: { // BackupPlan
 * //     BackupPlanName: "STRING_VALUE", // required
 * //     Rules: [ // BackupRules // required
 * //       { // BackupRule
 * //         RuleName: "STRING_VALUE", // required
 * //         TargetBackupVaultName: "STRING_VALUE", // required
 * //         TargetLogicallyAirGappedBackupVaultArn: "STRING_VALUE",
 * //         ScheduleExpression: "STRING_VALUE",
 * //         StartWindowMinutes: Number("long"),
 * //         CompletionWindowMinutes: Number("long"),
 * //         Lifecycle: { // Lifecycle
 * //           MoveToColdStorageAfterDays: Number("long"),
 * //           DeleteAfterDays: Number("long"),
 * //           OptInToArchiveForSupportedResources: true || false,
 * //           DeleteAfterEvent: "DELETE_AFTER_COPY",
 * //         },
 * //         RecoveryPointTags: { // Tags
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //         RuleId: "STRING_VALUE",
 * //         CopyActions: [ // CopyActions
 * //           { // CopyAction
 * //             Lifecycle: {
 * //               MoveToColdStorageAfterDays: Number("long"),
 * //               DeleteAfterDays: Number("long"),
 * //               OptInToArchiveForSupportedResources: true || false,
 * //               DeleteAfterEvent: "DELETE_AFTER_COPY",
 * //             },
 * //             DestinationBackupVaultArn: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         EnableContinuousBackup: true || false,
 * //         ScheduleExpressionTimezone: "STRING_VALUE",
 * //         IndexActions: [ // IndexActions
 * //           { // IndexAction
 * //             ResourceTypes: [ // ResourceTypes
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         ScanActions: [ // ScanActions
 * //           { // ScanAction
 * //             MalwareScanner: "GUARDDUTY",
 * //             ScanMode: "FULL_SCAN" || "INCREMENTAL_SCAN",
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     AdvancedBackupSettings: [ // AdvancedBackupSettings
 * //       { // AdvancedBackupSetting
 * //         ResourceType: "STRING_VALUE",
 * //         BackupOptions: { // BackupOptions
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     ScanSettings: [ // ScanSettings
 * //       { // ScanSetting
 * //         MalwareScanner: "GUARDDUTY",
 * //         ResourceTypes: [
 * //           "STRING_VALUE",
 * //         ],
 * //         ScannerRoleArn: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   BackupPlanId: "STRING_VALUE",
 * //   BackupPlanArn: "STRING_VALUE",
 * //   VersionId: "STRING_VALUE",
 * //   CreatorRequestId: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   DeletionDate: new Date("TIMESTAMP"),
 * //   LastExecutionDate: new Date("TIMESTAMP"),
 * //   AdvancedBackupSettings: [
 * //     {
 * //       ResourceType: "STRING_VALUE",
 * //       BackupOptions: {
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   ScheduledRunsPreview: [ // ScheduledRunsPreview
 * //     { // ScheduledPlanExecutionMember
 * //       ExecutionTime: new Date("TIMESTAMP"),
 * //       RuleId: "STRING_VALUE",
 * //       RuleExecutionType: "CONTINUOUS" || "SNAPSHOTS" || "CONTINUOUS_AND_SNAPSHOTS",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetBackupPlanCommandInput - {@link GetBackupPlanCommandInput}
 * @returns {@link GetBackupPlanCommandOutput}
 * @see {@link GetBackupPlanCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanCommandOutput} for command's `response` shape.
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
export class GetBackupPlanCommand extends $Command
  .classBuilder<
    GetBackupPlanCommandInput,
    GetBackupPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "GetBackupPlan", {})
  .n("BackupClient", "GetBackupPlanCommand")
  .sc(GetBackupPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackupPlanInput;
      output: GetBackupPlanOutput;
    };
    sdk: {
      input: GetBackupPlanCommandInput;
      output: GetBackupPlanCommandOutput;
    };
  };
}
