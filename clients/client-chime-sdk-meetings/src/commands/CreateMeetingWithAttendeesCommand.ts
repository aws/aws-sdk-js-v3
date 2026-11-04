// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateMeetingWithAttendeesRequest, CreateMeetingWithAttendeesResponse } from "../models/models_0";
import { CreateMeetingWithAttendees$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMeetingWithAttendeesCommand}.
 */
export interface CreateMeetingWithAttendeesCommandInput extends CreateMeetingWithAttendeesRequest {}
/**
 * @public
 *
 * The output of {@link CreateMeetingWithAttendeesCommand}.
 */
export interface CreateMeetingWithAttendeesCommandOutput extends CreateMeetingWithAttendeesResponse, __MetadataBearer {}

/**
 * Creates a new Amazon Chime SDK meeting in the specified media Region, with attendees. For more information about specifying media Regions, see [Available Regions](https://docs.aws.amazon.com/chime-sdk/latest/dg/sdk-available-regions) and [Using meeting Regions](https://docs.aws.amazon.com/chime-sdk/latest/dg/chime-sdk-meetings-regions.html), both in the *Amazon Chime SDK Developer Guide*. For more information about the Amazon Chime SDK, see [Using the Amazon Chime SDK](https://docs.aws.amazon.com/chime-sdk/latest/dg/meetings-sdk.html) in the *Amazon Chime SDK Developer Guide*.
 *
 * > **Note:**
 * >
 * > If you use this API in conjuction with the and APIs, and you don't specify the `MeetingFeatures.Content.MaxResolution` or `MeetingFeatures.Video.MaxResolution` parameters, the following defaults are used:
 * >
 * > - Content.MaxResolution: FHD
 * > - Video.MaxResolution: HD
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, CreateMeetingWithAttendeesCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, CreateMeetingWithAttendeesCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * // import type { ChimeSDKMeetingsClientConfig } from "@aws-sdk/client-chime-sdk-meetings";
 * const config = {}; // type is ChimeSDKMeetingsClientConfig
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // CreateMeetingWithAttendeesRequest
 *   ClientRequestToken: "STRING_VALUE", // required
 *   MediaRegion: "STRING_VALUE", // required
 *   MeetingHostId: "STRING_VALUE",
 *   ExternalMeetingId: "STRING_VALUE", // required
 *   MeetingFeatures: { // MeetingFeaturesConfiguration
 *     Audio: { // AudioFeatures
 *       EchoReduction: "AVAILABLE" || "UNAVAILABLE",
 *     },
 *     Video: { // VideoFeatures
 *       MaxResolution: "None" || "HD" || "FHD",
 *     },
 *     Content: { // ContentFeatures
 *       MaxResolution: "None" || "FHD" || "UHD",
 *     },
 *     Attendee: { // AttendeeFeatures
 *       MaxCount: Number("int"),
 *     },
 *   },
 *   NotificationsConfiguration: { // NotificationsConfiguration
 *     LambdaFunctionArn: "STRING_VALUE",
 *     SnsTopicArn: "STRING_VALUE",
 *     SqsQueueArn: "STRING_VALUE",
 *   },
 *   Attendees: [ // CreateMeetingWithAttendeesRequestItemList // required
 *     { // CreateAttendeeRequestItem
 *       ExternalUserId: "STRING_VALUE", // required
 *       Capabilities: { // AttendeeCapabilities
 *         Audio: "SendReceive" || "Send" || "Receive" || "None", // required
 *         Video: "SendReceive" || "Send" || "Receive" || "None", // required
 *         Content: "SendReceive" || "Send" || "Receive" || "None", // required
 *       },
 *     },
 *   ],
 *   PrimaryMeetingId: "STRING_VALUE",
 *   TenantIds: [ // TenantIdList
 *     "STRING_VALUE",
 *   ],
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   MediaPlacementNetworkType: "Ipv4Only" || "DualStack",
 * };
 * const command = new CreateMeetingWithAttendeesCommand(input);
 * const response = await client.send(command);
 * // { // CreateMeetingWithAttendeesResponse
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
 * //   Attendees: [ // AttendeeList
 * //     { // Attendee
 * //       ExternalUserId: "STRING_VALUE",
 * //       AttendeeId: "STRING_VALUE",
 * //       JoinToken: "STRING_VALUE",
 * //       Capabilities: { // AttendeeCapabilities
 * //         Audio: "SendReceive" || "Send" || "Receive" || "None", // required
 * //         Video: "SendReceive" || "Send" || "Receive" || "None", // required
 * //         Content: "SendReceive" || "Send" || "Receive" || "None", // required
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // BatchCreateAttendeeErrorList
 * //     { // CreateAttendeeError
 * //       ExternalUserId: "STRING_VALUE",
 * //       ErrorCode: "STRING_VALUE",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param CreateMeetingWithAttendeesCommandInput - {@link CreateMeetingWithAttendeesCommandInput}
 * @returns {@link CreateMeetingWithAttendeesCommandOutput}
 * @see {@link CreateMeetingWithAttendeesCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingWithAttendeesCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class CreateMeetingWithAttendeesCommand extends command<CreateMeetingWithAttendeesCommandInput, CreateMeetingWithAttendeesCommandOutput>(
  _ep0,
  _mw0,
  "CreateMeetingWithAttendees",
  CreateMeetingWithAttendees$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMeetingWithAttendeesRequest;
      output: CreateMeetingWithAttendeesResponse;
    };
    sdk: {
      input: CreateMeetingWithAttendeesCommandInput;
      output: CreateMeetingWithAttendeesCommandOutput;
    };
  };
}
