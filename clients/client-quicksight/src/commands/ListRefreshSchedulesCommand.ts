// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListRefreshSchedulesRequest, ListRefreshSchedulesResponse } from "../models/models_5";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";
import { ListRefreshSchedules } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRefreshSchedulesCommand}.
 */
export interface ListRefreshSchedulesCommandInput extends ListRefreshSchedulesRequest {}
/**
 * @public
 *
 * The output of {@link ListRefreshSchedulesCommand}.
 */
export interface ListRefreshSchedulesCommandOutput extends ListRefreshSchedulesResponse, __MetadataBearer {}

/**
 * <p>Lists the refresh schedules of a dataset. Each dataset can have up to 5 schedules. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QuickSightClient, ListRefreshSchedulesCommand } from "@aws-sdk/client-quicksight"; // ES Modules import
 * // const { QuickSightClient, ListRefreshSchedulesCommand } = require("@aws-sdk/client-quicksight"); // CommonJS import
 * // import type { QuickSightClientConfig } from "@aws-sdk/client-quicksight";
 * const config = {}; // type is QuickSightClientConfig
 * const client = new QuickSightClient(config);
 * const input = { // ListRefreshSchedulesRequest
 *   AwsAccountId: "STRING_VALUE", // required
 *   DataSetId: "STRING_VALUE", // required
 * };
 * const command = new ListRefreshSchedulesCommand(input);
 * const response = await client.send(command);
 * // { // ListRefreshSchedulesResponse
 * //   RefreshSchedules: [ // RefreshSchedules
 * //     { // RefreshSchedule
 * //       ScheduleId: "STRING_VALUE", // required
 * //       ScheduleFrequency: { // RefreshFrequency
 * //         Interval: "MINUTE15" || "MINUTE30" || "HOURLY" || "DAILY" || "WEEKLY" || "MONTHLY", // required
 * //         RefreshOnDay: { // ScheduleRefreshOnEntity
 * //           DayOfWeek: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 * //           DayOfMonth: "STRING_VALUE",
 * //         },
 * //         Timezone: "STRING_VALUE",
 * //         TimeOfTheDay: "STRING_VALUE",
 * //       },
 * //       StartAfterDateTime: new Date("TIMESTAMP"),
 * //       RefreshType: "INCREMENTAL_REFRESH" || "FULL_REFRESH", // required
 * //       Arn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Status: Number("int"),
 * //   RequestId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRefreshSchedulesCommandInput - {@link ListRefreshSchedulesCommandInput}
 * @returns {@link ListRefreshSchedulesCommandOutput}
 * @see {@link ListRefreshSchedulesCommandInput} for command's `input` shape.
 * @see {@link ListRefreshSchedulesCommandOutput} for command's `response` shape.
 * @see {@link QuickSightClientResolvedConfig | config} for QuickSightClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have access to this item. The provided credentials couldn't be
 * 			validated. You might not be authorized to carry out the request. Make sure that your
 * 			account is authorized to use the Amazon Quick Sight service, that your policies have the
 * 			correct permissions, and that you are using the correct credentials.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>An internal failure occurred.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One or more parameters has a value that isn't valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>A limit is exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Access is throttled.</p>
 *
 * @throws {@link QuickSightServiceException}
 * <p>Base exception class for all service exceptions from QuickSight service.</p>
 *
 *
 * @public
 */
export class ListRefreshSchedulesCommand extends $Command
  .classBuilder<
    ListRefreshSchedulesCommandInput,
    ListRefreshSchedulesCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("QuickSight_20180401", "ListRefreshSchedules", {})
  .n("QuickSightClient", "ListRefreshSchedulesCommand")
  .sc(ListRefreshSchedules)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRefreshSchedulesRequest;
      output: ListRefreshSchedulesResponse;
    };
    sdk: {
      input: ListRefreshSchedulesCommandInput;
      output: ListRefreshSchedulesCommandOutput;
    };
  };
}
