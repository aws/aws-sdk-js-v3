// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateAttendeeCapabilitiesRequest, UpdateAttendeeCapabilitiesResponse } from "../models/models_0";
import { UpdateAttendeeCapabilities$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * The capabilities that you want to update.
 *
 * > **Note:** You use the capabilities with a set of values that control what the capabilities can do, such as `SendReceive` data. For more information about those values, see .
 *
 * When using capabilities, be aware of these corner cases:
 *
 * - If you specify `MeetingFeatures:Video:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Video` will be rejected with `ValidationError 400`.
 * - If you specify `MeetingFeatures:Content:MaxResolution:None` when you create a meeting, all API requests that include `SendReceive`, `Send`, or `Receive` for `AttendeeCapabilities:Content` will be rejected with `ValidationError 400`.
 * - You can't set `content` capabilities to `SendReceive` or `Receive` unless you also set `video` capabilities to `SendReceive` or `Receive`. If you don't set the `video` capability to receive, the response will contain an HTTP 400 Bad Request status code. However, you can set your `video` capability to receive and you set your `content` capability to not receive.
 * - If meeting features is defined as `Video:MaxResolution:None` but `Content:MaxResolution` is defined as something other than `None` and attendee capabilities are not defined in the API request, then the default attendee video capability is set to `Receive` and attendee content capability is set to `SendReceive`. This is because content `SendReceive` requires video to be at least `Receive`.
 * - When you change an `audio` capability from `None` or `Receive` to `Send` or `SendReceive` , and if the attendee left their microphone unmuted, audio will flow from the attendee to the other meeting participants.
 * - When you change a `video` or `content` capability from `None` or `Receive` to `Send` or `SendReceive` , and if the attendee turned on their video or content streams, remote attendees can receive those streams, but only after media renegotiation between the client and the Amazon Chime back-end server.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, UpdateAttendeeCapabilitiesCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, UpdateAttendeeCapabilitiesCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request have been made simultaneously.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedException} (client fault)
 *
 * The user isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKMeetingsServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMeetings service.
 *
 * @public
 */
export class UpdateAttendeeCapabilitiesCommand extends command<UpdateAttendeeCapabilitiesCommandInput, UpdateAttendeeCapabilitiesCommandOutput>(
  _ep0,
  _mw0,
  "UpdateAttendeeCapabilities",
  UpdateAttendeeCapabilities$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAttendeeCapabilitiesRequest;
      output: UpdateAttendeeCapabilitiesResponse;
    };
    sdk: {
      input: UpdateAttendeeCapabilitiesCommandInput;
      output: UpdateAttendeeCapabilitiesCommandOutput;
    };
  };
}
