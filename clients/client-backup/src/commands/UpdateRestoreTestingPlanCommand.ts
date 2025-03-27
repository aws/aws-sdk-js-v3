// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRestoreTestingPlanInput, UpdateRestoreTestingPlanOutput } from "../models/models_0";
import { de_UpdateRestoreTestingPlanCommand, se_UpdateRestoreTestingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRestoreTestingPlanCommand}.
 */
export interface UpdateRestoreTestingPlanCommandInput extends UpdateRestoreTestingPlanInput {}
/**
 * @public
 *
 * The output of {@link UpdateRestoreTestingPlanCommand}.
 */
export interface UpdateRestoreTestingPlanCommandOutput extends UpdateRestoreTestingPlanOutput, __MetadataBearer {}

/**
 * <p>This request will send changes to your specified restore testing
 *          plan. <code>RestoreTestingPlanName</code>
 *          cannot be updated after it is created.</p>
 *          <p>
 *             <code>RecoveryPointSelection</code> can contain:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>Algorithm</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludeVaults</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>IncludeVaults</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RecoveryPointTypes</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SelectionWindowDays</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const input = { // UpdateRestoreTestingPlanInput
 *   RestoreTestingPlan: { // RestoreTestingPlanForUpdate
 *     RecoveryPointSelection: { // RestoreTestingRecoveryPointSelection
 *       Algorithm: "LATEST_WITHIN_WINDOW" || "RANDOM_WITHIN_WINDOW",
 *       ExcludeVaults: [ // stringList
 *         "STRING_VALUE",
 *       ],
 *       IncludeVaults: [
 *         "STRING_VALUE",
 *       ],
 *       RecoveryPointTypes: [ // RestoreTestingRecoveryPointTypeList
 *         "CONTINUOUS" || "SNAPSHOT",
 *       ],
 *       SelectionWindowDays: Number("int"),
 *     },
 *     ScheduleExpression: "STRING_VALUE",
 *     ScheduleExpressionTimezone: "STRING_VALUE",
 *     StartWindowHours: Number("int"),
 *   },
 *   RestoreTestingPlanName: "STRING_VALUE", // required
 * };
 * const command = new UpdateRestoreTestingPlanCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRestoreTestingPlanOutput
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   RestoreTestingPlanArn: "STRING_VALUE", // required
 * //   RestoreTestingPlanName: "STRING_VALUE", // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param UpdateRestoreTestingPlanCommandInput - {@link UpdateRestoreTestingPlanCommandInput}
 * @returns {@link UpdateRestoreTestingPlanCommandOutput}
 * @see {@link UpdateRestoreTestingPlanCommandInput} for command's `input` shape.
 * @see {@link UpdateRestoreTestingPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Backup can't perform the action that you requested until it finishes
 *          performing a previous action. Try again later.</p>
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
export class UpdateRestoreTestingPlanCommand extends $Command
  .classBuilder<
    UpdateRestoreTestingPlanCommandInput,
    UpdateRestoreTestingPlanCommandOutput,
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
  .s("CryoControllerUserManager", "UpdateRestoreTestingPlan", {})
  .n("BackupClient", "UpdateRestoreTestingPlanCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRestoreTestingPlanCommand)
  .de(de_UpdateRestoreTestingPlanCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRestoreTestingPlanInput;
      output: UpdateRestoreTestingPlanOutput;
    };
    sdk: {
      input: UpdateRestoreTestingPlanCommandInput;
      output: UpdateRestoreTestingPlanCommandOutput;
    };
  };
}
