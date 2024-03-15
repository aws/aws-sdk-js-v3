// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateProfileRequest, UpdateProfileResponse } from "../models/models_0";
import { de_UpdateProfileCommand, se_UpdateProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandInput extends UpdateProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandOutput extends UpdateProfileResponse, __MetadataBearer {}

/**
 * <p>Updates an existing room profile by room profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, UpdateProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, UpdateProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // UpdateProfileRequest
 *   ProfileArn: "STRING_VALUE",
 *   ProfileName: "STRING_VALUE",
 *   IsDefault: true || false,
 *   Timezone: "STRING_VALUE",
 *   Address: "STRING_VALUE",
 *   DistanceUnit: "METRIC" || "IMPERIAL",
 *   TemperatureUnit: "FAHRENHEIT" || "CELSIUS",
 *   WakeWord: "ALEXA" || "AMAZON" || "ECHO" || "COMPUTER",
 *   Locale: "STRING_VALUE",
 *   SetupModeDisabled: true || false,
 *   MaxVolumeLimit: Number("int"),
 *   PSTNEnabled: true || false,
 *   DataRetentionOptIn: true || false,
 *   MeetingRoomConfiguration: { // UpdateMeetingRoomConfiguration
 *     RoomUtilizationMetricsEnabled: true || false,
 *     EndOfMeetingReminder: { // UpdateEndOfMeetingReminder
 *       ReminderAtMinutes: [ // EndOfMeetingReminderMinutesList
 *         Number("int"),
 *       ],
 *       ReminderType: "ANNOUNCEMENT_TIME_CHECK" || "ANNOUNCEMENT_VARIABLE_TIME_LEFT" || "CHIME" || "KNOCK",
 *       Enabled: true || false,
 *     },
 *     InstantBooking: { // UpdateInstantBooking
 *       DurationInMinutes: Number("int"),
 *       Enabled: true || false,
 *     },
 *     RequireCheckIn: { // UpdateRequireCheckIn
 *       ReleaseAfterMinutes: Number("int"),
 *       Enabled: true || false,
 *     },
 *     ProactiveJoin: { // UpdateProactiveJoin
 *       EnabledByMotion: true || false, // required
 *     },
 *   },
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateProfileCommandInput - {@link UpdateProfileCommandInput}
 * @returns {@link UpdateProfileCommandOutput}
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>There is a concurrent modification of resources.</p>
 *
 * @throws {@link NameInUseException} (client fault)
 *  <p>The name sent in the request is already in use.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 * @public
 * @deprecated Alexa For Business is no longer supported
 */
export class UpdateProfileCommand extends $Command
  .classBuilder<
    UpdateProfileCommandInput,
    UpdateProfileCommandOutput,
    AlexaForBusinessClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: AlexaForBusinessClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AlexaForBusiness", "UpdateProfile", {})
  .n("AlexaForBusinessClient", "UpdateProfileCommand")
  .f(void 0, void 0)
  .ser(se_UpdateProfileCommand)
  .de(de_UpdateProfileCommand)
  .build() {}
