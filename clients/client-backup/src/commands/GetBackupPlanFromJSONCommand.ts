// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetBackupPlanFromJSONInput, GetBackupPlanFromJSONOutput } from "../models/models_0";
import { GetBackupPlanFromJSON } from "../schemas/schemas_2_Backup";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetBackupPlanFromJSONCommand}.
 */
export interface GetBackupPlanFromJSONCommandInput extends GetBackupPlanFromJSONInput {}
/**
 * @public
 *
 * The output of {@link GetBackupPlanFromJSONCommand}.
 */
export interface GetBackupPlanFromJSONCommandOutput extends GetBackupPlanFromJSONOutput, __MetadataBearer {}

/**
 * <p>Returns a valid JSON document specifying a backup plan or an error.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, GetBackupPlanFromJSONCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, GetBackupPlanFromJSONCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // GetBackupPlanFromJSONInput
 *   BackupPlanTemplateJson: "STRING_VALUE", // required
 * };
 * const command = new GetBackupPlanFromJSONCommand(input);
 * const response = await client.send(command);
 * // { // GetBackupPlanFromJSONOutput
 * //   BackupPlan: { // BackupPlan
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
 * @param GetBackupPlanFromJSONCommandInput - {@link GetBackupPlanFromJSONCommandInput}
 * @returns {@link GetBackupPlanFromJSONCommandOutput}
 * @see {@link GetBackupPlanFromJSONCommandInput} for command's `input` shape.
 * @see {@link GetBackupPlanFromJSONCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>Indicates that something is wrong with the input to the request. For example, a
 *          parameter is of the wrong type.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit in the request has been exceeded; for example, a maximum number of items allowed
 *          in a request.</p>
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *  <p>Indicates that a required parameter is missing.</p>
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
export class GetBackupPlanFromJSONCommand extends $Command
  .classBuilder<
    GetBackupPlanFromJSONCommandInput,
    GetBackupPlanFromJSONCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "GetBackupPlanFromJSON", {})
  .n("BackupClient", "GetBackupPlanFromJSONCommand")
  .sc(GetBackupPlanFromJSON)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBackupPlanFromJSONInput;
      output: GetBackupPlanFromJSONOutput;
    };
    sdk: {
      input: GetBackupPlanFromJSONCommandInput;
      output: GetBackupPlanFromJSONCommandOutput;
    };
  };
}
