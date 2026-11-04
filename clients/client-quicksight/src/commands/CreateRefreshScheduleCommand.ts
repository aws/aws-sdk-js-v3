// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRefreshScheduleRequest, CreateRefreshScheduleResponse } from "../models/models_3";
import { CreateRefreshSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRefreshScheduleCommand}.
 */
export interface CreateRefreshScheduleCommandInput extends CreateRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link CreateRefreshScheduleCommand}.
 */
export interface CreateRefreshScheduleCommandOutput extends CreateRefreshScheduleResponse, __MetadataBearer {}

/**
 * Creates a refresh schedule for a dataset. You can create up to 5 different schedules for a single dataset.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, CreateRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, CreateRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // CreateRefreshScheduleRequest
 *   DataSetId: "STRING_VALUE", // required
 *   AwsAccountId: "STRING_VALUE", // required
 *   Schedule: { // RefreshSchedule
 *     ScheduleId: "STRING_VALUE", // required
 *     ScheduleFrequency: { // RefreshFrequency
 *       Interval: "MINUTE15" || "MINUTE30" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY", // required
 *       RefreshOnDay: { // ScheduleRefreshOnEntity
 *         DayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 *         DayOfMonth: "STRING_VALUE",
 *       },
 *       Timezone: "STRING_VALUE",
 *       TimeOfTheDay: "STRING_VALUE",
 *     },
 *     StartAfterDateTime: new Date("TIMESTAMP"),
 *     RefreshType: "INCREMENTAL_REFRESH" || "FULL_REFRESH", // required
 *     Arn: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // CreateRefreshScheduleResponse
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * //   ScheduleId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateRefreshScheduleCommandInput - {@link CreateRefreshScheduleCommandInput}
 * @returns {@link CreateRefreshScheduleCommandOutput}
 * @see {@link CreateRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link CreateRefreshScheduleCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have access to this item. The provided credentials couldn't be validated. You might not be authorized to carry out the request. Make sure that your account is authorized to use the Amazon Quick Sight service, that your policies have the correct permissions, and that you are using the correct credentials.
 *
 * @throws {@link InternalFailureException} (server fault)
 *
 * An internal failure occurred.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One or more parameters has a value that isn't valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * A limit is exceeded.
 *
 * @throws {@link PreconditionNotMetException} (client fault)
 *
 * One or more preconditions aren't met.
 *
 * @throws {@link ResourceExistsException} (client fault)
 *
 * The resource specified already exists.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more resources can't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Access is throttled.
 *
 * @throws {@link QuickSightServiceException}
 *
 * Base exception class for all service exceptions from QuickSight service.
 *
 * @public
 */
export class CreateRefreshScheduleCommand extends command<CreateRefreshScheduleCommandInput, CreateRefreshScheduleCommandOutput>(
  _ep0,
  _mw0,
  "CreateRefreshSchedule",
  CreateRefreshSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRefreshScheduleRequest;
      output: CreateRefreshScheduleResponse;
    };
    sdk: {
      input: CreateRefreshScheduleCommandInput;
      output: CreateRefreshScheduleCommandOutput;
    };
  };
}
