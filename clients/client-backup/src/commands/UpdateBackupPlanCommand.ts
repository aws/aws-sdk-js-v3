// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateBackupPlanInput, UpdateBackupPlanOutput } from "../models/models_0";
import { UpdateBackupPlan } from "../schemas/schemas_2_Backup";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateBackupPlanCommand}.
 */
export interface UpdateBackupPlanCommandInput extends UpdateBackupPlanInput {}
/**
 * @public
 *
 * The output of {@link UpdateBackupPlanCommand}.
 */
export interface UpdateBackupPlanCommandOutput extends UpdateBackupPlanOutput, __MetadataBearer {}

/**
 * <p>Updates the specified backup plan. The new version is uniquely identified by its ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // UpdateBackupPlanInput
 *   BackupPlanId: "STRING_VALUE", // required
 *   BackupPlan: { // BackupPlanInput
 *     BackupPlanName: "STRING_VALUE", // required
 *     Rules: [ // BackupRulesInput // required
 *       { // BackupRuleInput
 *         RuleName: "STRING_VALUE", // required
 *         TargetBackupVaultName: "STRING_VALUE", // required
 *         ScheduleExpression: "STRING_VALUE",
 *         StartWindowMinutes: Number("long"),
 *         CompletionWindowMinutes: Number("long"),
 *         Lifecycle: { // Lifecycle
 *           MoveToColdStorageAfterDays: Number("long"),
 *           DeleteAfterDays: Number("long"),
 *           OptInToArchiveForSupportedResources: true || false,
 *         },
 *         RecoveryPointTags: { // Tags
 *           "<keys>": "STRING_VALUE",
 *         },
 *         CopyActions: [ // CopyActions
 *           { // CopyAction
 *             Lifecycle: {
 *               MoveToColdStorageAfterDays: Number("long"),
 *               DeleteAfterDays: Number("long"),
 *               OptInToArchiveForSupportedResources: true || false,
 *             },
 *             DestinationBackupVaultArn: "STRING_VALUE", // required
 *           },
 *         ],
 *         EnableContinuousBackup: true || false,
 *         ScheduleExpressionTimezone: "STRING_VALUE",
 *         IndexActions: [ // IndexActions
 *           { // IndexAction
 *             ResourceTypes: [ // ResourceTypes
 *               "STRING_VALUE",
 *             ],
 *           },
 *         ],
 *       },
 *     ],
 *     AdvancedBackupSettings: [ // AdvancedBackupSettings
 *       { // AdvancedBackupSetting
 *         ResourceType: "STRING_VALUE",
 *         BackupOptions: { // BackupOptions
 *           "<keys>": "STRING_VALUE",
 *         },
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateBackupPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdateBackupPlanOutput
 * //   BackupPlanId: "STRING_VALUE",
 * //   BackupPlanArn: "STRING_VALUE",
 * //   CreationDate: new Date("TIMESTAMP"),
 * //   VersionId: "STRING_VALUE",
 * //   AdvancedBackupSettings: [ // AdvancedBackupSettings
 * //     { // AdvancedBackupSetting
 * //       ResourceType: "STRING_VALUE",
 * //       BackupOptions: { // BackupOptions
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param UpdateBackupPlanCommandInput - {@link UpdateBackupPlanCommandInput}
 * @returns {@link UpdateBackupPlanCommandOutput}
 * @see {@link UpdateBackupPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateBackupPlanCommandOutput} for command's `response` shape.
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
export class UpdateBackupPlanCommand extends $Command
  .classBuilder<
    UpdateBackupPlanCommandInput,
    UpdateBackupPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "UpdateBackupPlan", {})
  .n("BackupClient", "UpdateBackupPlanCommand")
  .sc(UpdateBackupPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateBackupPlanInput;
      output: UpdateBackupPlanOutput;
    };
    sdk: {
      input: UpdateBackupPlanCommandInput;
      output: UpdateBackupPlanCommandOutput;
    };
  };
}
