// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateAttendeeRequest, CreateAttendeeResponse } from "../models/models_0";
import { CreateAttendee$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateAttendeeCommand}.
 */
export interface CreateAttendeeCommandInput extends CreateAttendeeRequest {}
/**
 * @public
 *
 * The output of {@link CreateAttendeeCommand}.
 */
export interface CreateAttendeeCommandOutput extends CreateAttendeeResponse, __MetadataBearer {}

/**
 * Creates a new attendee for an active Amazon Chime SDK meeting. For more information about the Amazon Chime SDK, see [Using the Amazon Chime SDK](https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html) in the *Amazon Chime Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, CreateAttendeeCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, CreateAttendeeCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // CreateAttendeeRequest
 *   MeetingId: "STRING_VALUE", // required
 *   ExternalUserId: "STRING_VALUE", // required
 *   Capabilities: { // AttendeeCapabilities
 *     Audio: "SendReceive" || "Send" || "Receive" || "None", // required
 *     Video: "SendReceive" || "Send" || "Receive" || "None", // required
 *     Content: "SendReceive" || "Send" || "Receive" || "None", // required
 *   },
 * };
 * const command = new CreateAttendeeCommand(input);
 * const response = await client.send(command);
 * // { // CreateAttendeeResponse
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
 * @param CreateAttendeeCommandInput - {@link CreateAttendeeCommandInput}
 * @returns {@link CreateAttendeeCommandOutput}
 * @see {@link CreateAttendeeCommandInput} for command's `input` shape.
 * @see {@link CreateAttendeeCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
 * @throws {@link UnprocessableEntityException} (client fault)
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 *
 * @throws {@link ChimeSDKMeetingsServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMeetings service.
 *
 * @public
 */
export class CreateAttendeeCommand extends command<CreateAttendeeCommandInput, CreateAttendeeCommandOutput>(
  _ep0,
  _mw0,
  "CreateAttendee",
  CreateAttendee$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAttendeeRequest;
      output: CreateAttendeeResponse;
    };
    sdk: {
      input: CreateAttendeeCommandInput;
      output: CreateAttendeeCommandOutput;
    };
  };
}
