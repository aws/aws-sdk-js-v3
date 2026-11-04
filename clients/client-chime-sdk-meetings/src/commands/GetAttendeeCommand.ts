// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAttendeeRequest, GetAttendeeResponse } from "../models/models_0";
import { GetAttendee$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAttendeeCommand}.
 */
export interface GetAttendeeCommandInput extends GetAttendeeRequest {}
/**
 * @public
 *
 * The output of {@link GetAttendeeCommand}.
 */
export interface GetAttendeeCommandOutput extends GetAttendeeResponse, __MetadataBearer {}

/**
 * Gets the Amazon Chime SDK attendee details for a specified meeting ID and attendee ID. For more information about the Amazon Chime SDK, see [Using the Amazon Chime SDK](https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html) in the *Amazon Chime Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, GetAttendeeCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, GetAttendeeCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // GetAttendeeRequest
 *   MeetingId: "STRING_VALUE", // required
 *   AttendeeId: "STRING_VALUE", // required
 * };
 * const command = new GetAttendeeCommand(input);
 * const response = await client.send(command);
 * // { // GetAttendeeResponse
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
 * @param GetAttendeeCommandInput - {@link GetAttendeeCommandInput}
 * @returns {@link GetAttendeeCommandOutput}
 * @see {@link GetAttendeeCommandInput} for command's `input` shape.
 * @see {@link GetAttendeeCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMeetingsClientResolvedConfig | config} for ChimeSDKMeetingsClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
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
export class GetAttendeeCommand extends command<GetAttendeeCommandInput, GetAttendeeCommandOutput>(
  _ep0,
  _mw0,
  "GetAttendee",
  GetAttendee$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAttendeeRequest;
      output: GetAttendeeResponse;
    };
    sdk: {
      input: GetAttendeeCommandInput;
      output: GetAttendeeCommandOutput;
    };
  };
}
