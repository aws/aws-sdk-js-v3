// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateHoursOfOperationOverrideRequest, CreateHoursOfOperationOverrideResponse } from "../models/models_0";
import { CreateHoursOfOperationOverride$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateHoursOfOperationOverrideCommand}.
 */
export interface CreateHoursOfOperationOverrideCommandInput extends CreateHoursOfOperationOverrideRequest {}
/**
 * @public
 *
 * The output of {@link CreateHoursOfOperationOverrideCommand}.
 */
export interface CreateHoursOfOperationOverrideCommandOutput extends CreateHoursOfOperationOverrideResponse, __MetadataBearer {}

/**
 * Creates an hours of operation override in an Connect Customer hours of operation resource.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateHoursOfOperationOverrideCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateHoursOfOperationOverrideCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // CreateHoursOfOperationOverrideRequest
 *   InstanceId: "STRING_VALUE", // required
 *   HoursOfOperationId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Config: [ // HoursOfOperationOverrideConfigList // required
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
 *   EffectiveFrom: "STRING_VALUE", // required
 *   EffectiveTill: "STRING_VALUE", // required
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
 * const command = new CreateHoursOfOperationOverrideCommand(input);
 * const response = await client.send(command);
 * // { // CreateHoursOfOperationOverrideResponse
 * //   HoursOfOperationOverrideId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateHoursOfOperationOverrideCommandInput - {@link CreateHoursOfOperationOverrideCommandInput}
 * @returns {@link CreateHoursOfOperationOverrideCommandOutput}
 * @see {@link CreateHoursOfOperationOverrideCommandInput} for command's `input` shape.
 * @see {@link CreateHoursOfOperationOverrideCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The allowed limit for the resource has been exceeded.
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
export class CreateHoursOfOperationOverrideCommand extends command<CreateHoursOfOperationOverrideCommandInput, CreateHoursOfOperationOverrideCommandOutput>(
  _ep0,
  _mw0,
  "CreateHoursOfOperationOverride",
  CreateHoursOfOperationOverride$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateHoursOfOperationOverrideRequest;
      output: CreateHoursOfOperationOverrideResponse;
    };
    sdk: {
      input: CreateHoursOfOperationOverrideCommandInput;
      output: CreateHoursOfOperationOverrideCommandOutput;
    };
  };
}
