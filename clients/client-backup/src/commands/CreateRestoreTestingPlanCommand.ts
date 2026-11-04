// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRestoreTestingPlanInput, CreateRestoreTestingPlanOutput } from "../models/models_0";
import { CreateRestoreTestingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRestoreTestingPlanCommand}.
 */
export interface CreateRestoreTestingPlanCommandInput extends CreateRestoreTestingPlanInput {}
/**
 * @public
 *
 * The output of {@link CreateRestoreTestingPlanCommand}.
 */
export interface CreateRestoreTestingPlanCommandOutput extends CreateRestoreTestingPlanOutput, __MetadataBearer {}

/**
 * Creates a restore testing plan.
 *
 * The first of two steps to create a restore testing plan. After this request is successful, finish the procedure using CreateRestoreTestingSelection.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, CreateRestoreTestingPlanCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, CreateRestoreTestingPlanCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * // import type { BackupClientConfig } from "@aws-sdk/client-backup";
 * const config = {}; // type is BackupClientConfig
 * const client = new BackupClient(config);
 * const input = { // CreateRestoreTestingPlanInput
 *   CreatorRequestId: "STRING_VALUE",
 *   RestoreTestingPlan: { // RestoreTestingPlanForCreate
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
 *     RestoreTestingPlanName: "STRING_VALUE", // required
 *     ScheduleExpression: "STRING_VALUE", // required
 *     ScheduleExpressionTimezone: "STRING_VALUE",
 *     StartWindowHours: Number("int"),
 *   },
 *   Tags: { // SensitiveStringMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRestoreTestingPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreateRestoreTestingPlanOutput
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   RestoreTestingPlanArn: "STRING_VALUE", // required
 * //   RestoreTestingPlanName: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateRestoreTestingPlanCommandInput - {@link CreateRestoreTestingPlanCommandInput}
 * @returns {@link CreateRestoreTestingPlanCommandOutput}
 * @see {@link CreateRestoreTestingPlanCommandInput} for command's `input` shape.
 * @see {@link CreateRestoreTestingPlanCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *
 * The required resource already exists.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Backup can't perform the action that you requested until it finishes performing a previous action. Try again later.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * Indicates that something is wrong with a parameter's value. For example, the value is out of range.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit in the request has been exceeded; for example, a maximum number of items allowed in a request.
 *
 * @throws {@link MissingParameterValueException} (client fault)
 *
 * Indicates that a required parameter is missing.
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
export class CreateRestoreTestingPlanCommand extends command<CreateRestoreTestingPlanCommandInput, CreateRestoreTestingPlanCommandOutput>(
  _ep0,
  _mw0,
  "CreateRestoreTestingPlan",
  CreateRestoreTestingPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRestoreTestingPlanInput;
      output: CreateRestoreTestingPlanOutput;
    };
    sdk: {
      input: CreateRestoreTestingPlanCommandInput;
      output: CreateRestoreTestingPlanCommandOutput;
    };
  };
}
