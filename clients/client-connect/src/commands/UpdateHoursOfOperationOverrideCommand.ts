// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateHoursOfOperationOverrideRequest } from "../models/models_3";
import { UpdateHoursOfOperationOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateHoursOfOperationOverrideCommand}.
 */
export interface UpdateHoursOfOperationOverrideCommandInput extends UpdateHoursOfOperationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link UpdateHoursOfOperationOverrideCommand}.
 */
export interface UpdateHoursOfOperationOverrideCommandOutput extends __MetadataBearer {}

/**
 * Update the hours of operation override.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateHoursOfOperationOverrideCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateHoursOfOperationOverrideCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateHoursOfOperationOverrideRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   HoursOfOperationOverrideId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Config: [ // HoursOfOperationOverrideConfigList
 *     { // HoursOfOperationOverrideConfig
 *       Day: "SUNDAY" || "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY",
 *       StartTime: { // OverrideTimeSlice
 *         Hours: Number("int"), // required
 *         Minutes: Number("int"), // required
 *       },
 *       EndTime: {
 *         Hours: Number("int"), // required
 *         Minutes: Number("int"), // required
 *       },
 *     },
 *   ],
 *   EffectiveFrom: "STRING_VALUE",
 *   EffectiveTill: "STRING_VALUE",
 *   RecurrenceConfig: { // RecurrenceConfig
 *     RecurrencePattern: { // RecurrencePattern
 *       Frequency: "WEEKLY" || "MONTHLY" || "YEARLY", // required
 *       Interval: Number("int"), // required
 *       ByMonth: [ // MonthList
 *         Number("int"),
 *       ],
 *       ByMonthDay: [ // MonthDayList
 *         Number("int"),
 *       ],
 *       ByWeekdayOccurrence: [ // WeekdayOccurrenceList
 *         Number("int"),
 *       ],
 *     },
 *   },
 *   OverrideType: "STANDARD" || "OPEN" || "CLOSED",
 * };
 * const command = new UpdateHoursOfOperationOverrideCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateHoursOfOperationOverrideCommandInput - {@link UpdateHoursOfOperationOverrideCommandInput}
 * @returns {@link UpdateHoursOfOperationOverrideCommandOutput}
 * @see {@link UpdateHoursOfOperationOverrideCommandInput} for command's `input` shape.
 * @see {@link UpdateHoursOfOperationOverrideCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link ConditionalOperationFailedException} (client fault)
 *
 * Request processing failed because dependent condition failed.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *
 * A resource with the specified name already exists.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
 *
 * @public
 */
export class UpdateHoursOfOperationOverrideCommand extends command<UpdateHoursOfOperationOverrideCommandInput, UpdateHoursOfOperationOverrideCommandOutput>(
  _ep0,
  _mw0,
  "UpdateHoursOfOperationOverride",
  UpdateHoursOfOperationOverride$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateHoursOfOperationOverrideRequest;
      output: {};
    };
    sdk: {
      input: UpdateHoursOfOperationOverrideCommandInput;
      output: UpdateHoursOfOperationOverrideCommandOutput;
    };
  };
}
