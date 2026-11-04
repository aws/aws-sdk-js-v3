// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRestoreTestingPlanInput, UpdateRestoreTestingPlanOutput } from "../models/models_0";
import { UpdateRestoreTestingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * This request will send changes to your specified restore testing plan. `RestoreTestingPlanName` cannot be updated after it is created.
 *
 * `RecoveryPointSelection` can contain:
 *
 * - `Algorithm`
 * - `ExcludeVaults`
 * - `IncludeVaults`
 * - `RecoveryPointTypes`
 * - `SelectionWindowDays`
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, UpdateRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, UpdateRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
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
 *
 * Backup can't perform the action that you requested until it finishes performing a previous action. Try again later.
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
export class UpdateRestoreTestingPlanCommand extends command<UpdateRestoreTestingPlanCommandInput, UpdateRestoreTestingPlanCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRestoreTestingPlan",
  UpdateRestoreTestingPlan$
) {
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
