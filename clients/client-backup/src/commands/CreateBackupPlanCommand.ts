// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateBackupPlanInput, CreateBackupPlanOutput } from "../models/models_0";
import { CreateBackupPlan } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateBackupPlanCommand}.
 */
export interface CreateBackupPlanCommandInput extends CreateBackupPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateBackupPlanCommand}.
 */
export interface CreateBackupPlanCommandOutput extends CreateBackupPlanOutput, __MetadataBearer {}

/**
 * <p>Creates a backup plan using a backup plan name and backup rules. A backup plan is a
 *          document that contains information that Backup uses to schedule tasks that
 *          create recovery points for resources.</p>
 *          <p>If you call <code>CreateBackupPlan</code> with a plan that already exists, you receive
 *          an <code>AlreadyExistsException</code> exception.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateBackupPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateBackupPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateBackupPlanInput
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
 *   BackupPlanTags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 *   CreatorRequestId: "STRING_VALUE",
 * };
 * const command = new CreateBackupPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateBackupPlanOutput
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
 * @param CreateBackupPlanCommandInput - {@link CreateBackupPlanCommandInput}
 * @returns {@link CreateBackupPlanCommandOutput}
 * @see {@link CreateBackupPlanCommandInput} for command's `input` shape.
 * @see {@link CreateBackupPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The required resource already exists.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>Indicates that something is wrong with a parameter's value. For example, the value is
 *          out of range.</p>
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
export class CreateBackupPlanCommand extends $Command
  .classBuilder<
    CreateBackupPlanCommandInput,
    CreateBackupPlanCommandOutput,
    BackupClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BackupClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CryoControllerUserManager", "CreateBackupPlan", {})
  .n("BackupClient", "CreateBackupPlanCommand")
  .sc(CreateBackupPlan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateBackupPlanInput;
      output: CreateBackupPlanOutput;
    };
    sdk: {
      input: CreateBackupPlanCommandInput;
      output: CreateBackupPlanCommandOutput;
    };
  };
}
