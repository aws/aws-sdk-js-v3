// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateRefreshScheduleRequest, CreateRefreshScheduleResponse } from "../models/models_3";
import { de_CreateRefreshScheduleCommand, se_CreateRefreshScheduleCommand } from "../protocols/Aws_restJson1";
import { QuickSightClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QuickSightClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a refresh schedule for a dataset. You can create up to 5 different schedules for a single dataset.</p>
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
 * @throws {@link PreconditionNotMetException} (client fault)
 *  <p>One or more preconditions aren't met.</p>
 *
 * @throws {@link ResourceExistsException} (client fault)
 *  <p>The resource specified already exists. </p>
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
export class CreateRefreshScheduleCommand extends $Command
  .classBuilder<
    CreateRefreshScheduleCommandInput,
    CreateRefreshScheduleCommandOutput,
    QuickSightClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QuickSightClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("QuickSight_20180401", "CreateRefreshSchedule", {})
  .n("QuickSightClient", "CreateRefreshScheduleCommand")
  .f(void 0, void 0)
  .ser(se_CreateRefreshScheduleCommand)
  .de(de_CreateRefreshScheduleCommand)
  .build() {
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
