// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKMeetingsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateAttendeeCapabilitiesRequest,
  UpdateAttendeeCapabilitiesResponse,
  UpdateAttendeeCapabilitiesResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateAttendeeCapabilitiesCommand, se_UpdateAttendeeCapabilitiesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAttendeeCapabilitiesCommand}.
 */
export interface UpdateAttendeeCapabilitiesCommandInput extends UpdateAttendeeCapabilitiesRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAttendeeCapabilitiesCommand}.
 */
export interface UpdateAttendeeCapabilitiesCommandOutput extends UpdateAttendeeCapabilitiesResponse, __MetadataBearer {}

/**
 * <p>The capabilities that you want to update.</p>
 *          <note>
 *             <p>You use the capabilities with a set of values that control what the capabilities can do, such as <code>SendReceive</code> data. For more information about those values, see
 *             .</p>
 *          </note>
 *          <p>When using capabilities, be aware of these corner cases:</p>
 *          <ul>
 *             <li>
 *                <p>If you specify <code>MeetingFeatures:Video:MaxResolution:None</code> when you create a meeting, all API requests
 *                     that include <code>SendReceive</code>, <code>Send</code>, or <code>Receive</code> for <code>AttendeeCapabilities:Video</code> will be rejected with <code>ValidationError 400</code>.</p>
 *             </li>
 *             <li>
 *                <p>If you specify <code>MeetingFeatures:Content:MaxResolution:None</code> when you create a meeting, all API requests that include <code>SendReceive</code>, <code>Send</code>, or
 *                     <code>Receive</code> for <code>AttendeeCapabilities:Content</code> will be rejected with <code>ValidationError 400</code>.</p>
 *             </li>
 *             <li>
 *                <p>You can't set <code>content</code> capabilities to <code>SendReceive</code> or <code>Receive</code> unless you also set <code>video</code> capabilities to <code>SendReceive</code>
 *                     or <code>Receive</code>. If you don't set the <code>video</code> capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your <code>video</code> capability
 *                     to receive and you set your <code>content</code> capability to not receive.</p>
 *             </li>
 *             <li>
 *                <p>When you change an <code>audio</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
 *                     and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.</p>
 *             </li>
 *             <li>
 *                <p>When you change a <code>video</code> or <code>content</code> capability from <code>None</code> or <code>Receive</code> to <code>Send</code> or <code>SendReceive</code> ,
 *                     and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, UpdateAttendeeCapabilitiesCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, UpdateAttendeeCapabilitiesCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // UpdateAttendeeCapabilitiesRequest
 *   MeetingId: "STRING_VALUE", // required
 *   AttendeeId: "STRING_VALUE", // required
 *   Capabilities: { // AttendeeCapabilities
 *     Audio: "SendReceive" || "Send" || "Receive" || "None", // required
 *     Video: "SendReceive" || "Send" || "Receive" || "None", // required
 *     Content: "SendReceive" || "Send" || "Receive" || "None", // required
 *   },
 * };
 * const command = new UpdateAttendeeCapabilitiesCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAttendeeCapabilitiesResponse
 * //   Attendee: { // Attendee
 * //     ExternalUserId: "STRING_VALUE",
 * //     AttendeeId: "STRING_VALUE",
 * //     JoinToken: "STRING_VALUE",
 * //     Capabilities: { // AttendeeCapabilities
 * //       Audio: "SendReceive" || "Send" || "Receive" || "None", // required
 * //       Video: "SendReceive" || "Send" || "Receive" || "None", // required
 * //       Content: "SendReceive" || "Send" || "Receive" || "None", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAttendeeCapabilitiesCommandInput - {@link UpdateAttendeeCapabilitiesCommandInput}
 * @returns {@link UpdateAttendeeCapabilitiesCommandOutput}
 * @see {@link UpdateAttendeeCapabilitiesCommandInput} for command's `input` shape.
 * @see {@link UpdateAttendeeCapabilitiesCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request have been made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>The user isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKMeetingsServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMeetings service.</p>
 *
 * @public
 */
export class UpdateAttendeeCapabilitiesCommand extends $Command
  .classBuilder<
    UpdateAttendeeCapabilitiesCommandInput,
    UpdateAttendeeCapabilitiesCommandOutput,
    ChimeSDKMeetingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMeetingsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeMeetingsSDKService", "UpdateAttendeeCapabilities", {})
  .n("ChimeSDKMeetingsClient", "UpdateAttendeeCapabilitiesCommand")
  .f(void 0, UpdateAttendeeCapabilitiesResponseFilterSensitiveLog)
  .ser(se_UpdateAttendeeCapabilitiesCommand)
  .de(de_UpdateAttendeeCapabilitiesCommand)
  .build() {}
