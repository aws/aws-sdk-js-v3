// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeRefreshScheduleRequest, DescribeRefreshScheduleResponse } from "../models/models_4";
import { DescribeRefreshSchedule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeRefreshScheduleCommand}.
 */
export interface DescribeRefreshScheduleCommandInput extends DescribeRefreshScheduleRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRefreshScheduleCommand}.
 */
export interface DescribeRefreshScheduleCommandOutput extends DescribeRefreshScheduleResponse, __MetadataBearer {}

/**
 * Provides a summary of a refresh schedule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, DescribeRefreshScheduleCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, DescribeRefreshScheduleCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // DescribeRefreshScheduleRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 *   ScheduleId: "STRING_VALUE", // required
 * };
 * const command = new DescribeRefreshScheduleCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRefreshScheduleResponse
 * //   RefreshSchedule: { // RefreshSchedule
 * //     ScheduleId: "STRING_VALUE", // required
 * //     ScheduleFrequency: { // RefreshFrequency
 * //       Interval: "MINUTE15" || "MINUTE30" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY", // required
 * //       RefreshOnDay: { // ScheduleRefreshOnEntity
 * //         DayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //         DayOfMonth: "STRING_VALUE",
 * //       },
 * //       Timezone: "STRING_VALUE",
 * //       TimeOfTheDay: "STRING_VALUE",
 * //     },
 * //     StartAfterDateTime: new Date("TIMESTAMP"),
 * //     RefreshType: "INCREMENTAL_REFRESH" || "FULL_REFRESH", // required
 * //     Arn: "STRING_VALUE",
 * //   },
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeRefreshScheduleCommandInput - {@link DescribeRefreshScheduleCommandInput}
 * @returns {@link DescribeRefreshScheduleCommandOutput}
 * @see {@link DescribeRefreshScheduleCommandInput} for command's `input` shape.
 * @see {@link DescribeRefreshScheduleCommandOutput} for command's `response` shape.
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
export class DescribeRefreshScheduleCommand extends command<DescribeRefreshScheduleCommandInput, DescribeRefreshScheduleCommandOutput>(
  _ep0,
  _mw0,
  "DescribeRefreshSchedule",
  DescribeRefreshSchedule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRefreshScheduleRequest;
      output: DescribeRefreshScheduleResponse;
    };
    sdk: {
      input: DescribeRefreshScheduleCommandInput;
      output: DescribeRefreshScheduleCommandOutput;
    };
  };
}
