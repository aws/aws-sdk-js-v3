// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetBackupPlanFromTemplateInput,
  GetBackupPlanFromTemplateOutput,
  GetBackupPlanFromTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_GetBackupPlanFromTemplateCommand, se_GetBackupPlanFromTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBackupPlanFromTemplateCommand}.
 */
export interface GetBackupPlanFromTemplateCommandInput extends GetBackupPlanFromTemplateInput {}
/**
 * @public
 *
 * The output of {@link GetBackupPlanFromTemplateCommand}.
 */
export interface GetBackupPlanFromTemplateCommandOutput extends GetBackupPlanFromTemplateOutput, __MetadataBearer {}

/**
 * <p>Returns the template specified by its <code>templateId</code> as a backup plan.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromTemplateCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromTemplateCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // GetBackupPlanFromTemplateInput
 *   BackupPlanTemplateId: "STRING_VALUE", // required
 * };
 * const command = new GetBackupPlanFromTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupPlanFromTemplateOutput
 * //   BackupPlanDocument: { // BackupPlan
 * //     BackupPlanName: "STRING_VALUE", // required
 * //     Rules: [ // BackupRules // required
 * //       { // BackupRule
 * //         RuleName: "STRING_VALUE", // required
 * //         TargetBackupVaultName: "STRING_VALUE", // required
 * //         ScheduleExpression: "STRING_VALUE",
 * //         StartWindowMinutes: Number("long"),
 * //         CompletionWindowMinutes: Number("long"),
 * //         Lifecycle: { // Lifecycle
 * //           MoveToColdStorageAfterDays: Number("long"),
 * //           DeleteAfterDays: Number("long"),
 * //           OptInToArchiveForSupportedResources: true || false,
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
 * //   },
 * // };
 *
 * ```
 *
 * @param GetBackupPlanFromTemplateCommandInput - {@link GetBackupPlanFromTemplateCommandInput}
 * @returns {@link GetBackupPlanFromTemplateCommandOutput}
 * @see {@link GetBackupPlanFromTemplateCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromTemplateCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetBackupPlanFromTemplateCommand extends $Command
  .classBuilder<
    GetBackupPlanFromTemplateCommandInput,
    GetBackupPlanFromTemplateCommandOutput,
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
  .s("CryoControllerUserManager", "GetBackupPlanFromTemplate", {})
  .n("BackupClient", "GetBackupPlanFromTemplateCommand")
  .f(void 0, GetBackupPlanFromTemplateOutputFilterSensitiveLog)
  .ser(se_GetBackupPlanFromTemplateCommand)
  .de(de_GetBackupPlanFromTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackupPlanFromTemplateInput;
      output: GetBackupPlanFromTemplateOutput;
    };
    sdk: {
      input: GetBackupPlanFromTemplateCommandInput;
      output: GetBackupPlanFromTemplateCommandOutput;
    };
  };
}
