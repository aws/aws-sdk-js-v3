// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKMeetingsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKMeetingsClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMeetingRequest,
  CreateMeetingRequestFilterSensitiveLog,
  CreateMeetingResponse,
  CreateMeetingResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateMeetingCommand, se_CreateMeetingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMeetingCommand}.
 */
export interface CreateMeetingCommandInput extends CreateMeetingRequest {}
/**
 * @public
 *
 * The output of {@link CreateMeetingCommand}.
 */
export interface CreateMeetingCommandOutput extends CreateMeetingResponse, __MetadataBearer {}

/**
 * <p>Creates a new Amazon Chime SDK meeting in the specified media Region with no initial attendees. For more information about specifying media Regions, see
 *            <a href="https://docs.aws.amazon.com/chime/latest/dg/chime-sdk-meetings-regions.html">Amazon Chime SDK Media Regions</a>
 *            in the <i>Amazon Chime Developer Guide</i>. For more information about the Amazon Chime SDK, see
 *            <a href="https://docs.aws.amazon.com/chime/latest/dg/meetings-sdk.html">Using the Amazon Chime SDK</a>
 *            in the
 *            <i>Amazon Chime Developer Guide</i>.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMeetingsClient, CreateMeetingCommand } from "@aws-sdk/client-chime-sdk-meetings"; // ES Modules import
 * // const { ChimeSDKMeetingsClient, CreateMeetingCommand } = require("@aws-sdk/client-chime-sdk-meetings"); // CommonJS import
 * const client = new ChimeSDKMeetingsClient(config);
 * const input = { // CreateMeetingRequest
 *   ClientRequestToken: "STRING_VALUE", // required
 *   MediaRegion: "STRING_VALUE", // required
 *   MeetingHostId: "STRING_VALUE",
 *   ExternalMeetingId: "STRING_VALUE", // required
 *   NotificationsConfiguration: { // NotificationsConfiguration
 *     LambdaFunctionArn: "STRING_VALUE",
 *     SnsTopicArn: "STRING_VALUE",
 *     SqsQueueArn: "STRING_VALUE",
 *   },
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
 * };
 * const command = new CreateMeetingCommand(input);
 * const response = await client.send(command);
 * // { // CreateMeetingResponse
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
 * @param CreateMeetingCommandInput - {@link CreateMeetingCommandInput}
 * @returns {@link CreateMeetingCommandOutput}
 * @see {@link CreateMeetingCommandInput} for command's `input` shape.
 * @see {@link CreateMeetingCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
 *
 * @public
 */
export class CreateMeetingCommand extends $Command
  .classBuilder<
    CreateMeetingCommandInput,
    CreateMeetingCommandOutput,
    ChimeSDKMeetingsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMeetingsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeMeetingsSDKService", "CreateMeeting", {})
  .n("ChimeSDKMeetingsClient", "CreateMeetingCommand")
  .f(CreateMeetingRequestFilterSensitiveLog, CreateMeetingResponseFilterSensitiveLog)
  .ser(se_CreateMeetingCommand)
  .de(de_CreateMeetingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMeetingRequest;
      output: CreateMeetingResponse;
    };
    sdk: {
      input: CreateMeetingCommandInput;
      output: CreateMeetingCommandOutput;
    };
  };
}
