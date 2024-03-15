// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetProfileRequest, GetProfileResponse } from "../models/models_0";
import { de_GetProfileCommand, se_GetProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetProfileCommand}.
 */
export interface GetProfileCommandInput extends GetProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetProfileCommand}.
 */
export interface GetProfileCommandOutput extends GetProfileResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated Alexa For Business is no longer supported
 *
 * <p>Gets the details of a room profile by profile ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, GetProfileCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, GetProfileCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // GetProfileRequest
 *   ProfileArn: "STRING_VALUE",
 * };
 * const command = new GetProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetProfileResponse
 * //   Profile: { // Profile
 * //     ProfileArn: "STRING_VALUE",
 * //     ProfileName: "STRING_VALUE",
 * //     IsDefault: true || false,
 * //     Address: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     DistanceUnit: "METRIC" || "IMPERIAL",
 * //     TemperatureUnit: "FAHRENHEIT" || "CELSIUS",
 * //     WakeWord: "ALEXA" || "AMAZON" || "ECHO" || "COMPUTER",
 * //     Locale: "STRING_VALUE",
 * //     SetupModeDisabled: true || false,
 * //     MaxVolumeLimit: Number("int"),
 * //     PSTNEnabled: true || false,
 * //     DataRetentionOptIn: true || false,
 * //     AddressBookArn: "STRING_VALUE",
 * //     MeetingRoomConfiguration: { // MeetingRoomConfiguration
 * //       RoomUtilizationMetricsEnabled: true || false,
 * //       EndOfMeetingReminder: { // EndOfMeetingReminder
 * //         ReminderAtMinutes: [ // EndOfMeetingReminderMinutesList
 * //           Number("int"),
 * //         ],
 * //         ReminderType: "ANNOUNCEMENT_TIME_CHECK" || "ANNOUNCEMENT_VARIABLE_TIME_LEFT" || "CHIME" || "KNOCK",
 * //         Enabled: true || false,
 * //       },
 * //       InstantBooking: { // InstantBooking
 * //         DurationInMinutes: Number("int"),
 * //         Enabled: true || false,
 * //       },
 * //       RequireCheckIn: { // RequireCheckIn
 * //         ReleaseAfterMinutes: Number("int"),
 * //         Enabled: true || false,
 * //       },
 * //       ProactiveJoin: { // ProactiveJoin
 * //         EnabledByMotion: true || false,
 * //       },
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetProfileCommandInput - {@link GetProfileCommandInput}
 * @returns {@link GetProfileCommandOutput}
 * @see {@link GetProfileCommandInput} for command's `input` shape.
 * @see {@link GetProfileCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource is not found.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class GetProfileCommand extends $Command
  .classBuilder<
    GetProfileCommandInput,
    GetProfileCommandOutput,
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
  .s("AlexaForBusiness", "GetProfile", {})
  .n("AlexaForBusinessClient", "GetProfileCommand")
  .f(void 0, void 0)
  .ser(se_GetProfileCommand)
  .de(de_GetProfileCommand)
  .build() {}
