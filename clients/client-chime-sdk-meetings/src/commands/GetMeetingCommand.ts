// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMeetingRequest, GetMeetingResponse } from "../models/models_0";
import { GetMeeting$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMeetingCommand}.
 */
export interface GetMeetingCommandInput extends GetMeetingRequest {}
/**
 * @public
 *
 * The output of {@link GetMeetingCommand}.
 */
export interface GetMeetingCommandOutput extends GetMeetingResponse, __MetadataBearer {}

/**
 * Gets the Amazon Chime SDK meeting details for the specified meeting ID. For more information about the Amazon Chime SDK, see [Using the Amazon Chime SDK](https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html) in the *Amazon Chime Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, GetMeetingCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, GetMeetingCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // GetMeetingRequest
 *   MeetingId: "STRING_VALUE", // required
 * };
 * const command = new GetMeetingCommand(input);
 * const response = await client.send(command);
 * // { // GetMeetingResponse
 * //   Meeting: { // Meeting
 * //     MeetingId: "STRING_VALUE",
 * //     MeetingHostId: "STRING_VALUE",
 * //     ExternalMeetingId: "STRING_VALUE",
 * //     MediaRegion: "STRING_VALUE",
 * //     MediaPlacement: { // MediaPlacement
 * //       AudioHostUrl: "STRING_VALUE",
 * //       AudioFallbackUrl: "STRING_VALUE",
 * //       SignalingUrl: "STRING_VALUE",
 * //       TurnControlUrl: "STRING_VALUE",
 * //       ScreenDataUrl: "STRING_VALUE",
 * //       ScreenViewingUrl: "STRING_VALUE",
 * //       ScreenSharingUrl: "STRING_VALUE",
 * //       EventIngestionUrl: "STRING_VALUE",
 * //     },
 * //     MeetingFeatures: { // MeetingFeaturesConfiguration
 * //       Audio: { // AudioFeatures
 * //         EchoReduction: "AVAILABLE" || "UNAVAILABLE",
 * //       },
 * //       Video: { // VideoFeatures
 * //         MaxResolution: "None" || "HD" || "FHD",
 * //       },
 * //       Content: { // ContentFeatures
 * //         MaxResolution: "None" || "FHD" || "UHD",
 * //       },
 * //       Attendee: { // AttendeeFeatures
 * //         MaxCount: Number("int"),
 * //       },
 * //     },
 * //     PrimaryMeetingId: "STRING_VALUE",
 * //     TenantIds: [ // TenantIdList
 * //       "STRING_VALUE",
 * //     ],
 * //     MeetingArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMeetingCommandInput - {@link GetMeetingCommandInput}
 * @returns {@link GetMeetingCommandOutput}
 * @see {@link GetMeetingCommandInput} for command's `input` shape.
 * @see {@link GetMeetingCommandOutput} for command's `response` shape.
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
export class GetMeetingCommand extends command<GetMeetingCommandInput, GetMeetingCommandOutput>(
  _ep0,
  _mw0,
  "GetMeeting",
  GetMeeting$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMeetingRequest;
      output: GetMeetingResponse;
    };
    sdk: {
      input: GetMeetingCommandInput;
      output: GetMeetingCommandOutput;
    };
  };
}
