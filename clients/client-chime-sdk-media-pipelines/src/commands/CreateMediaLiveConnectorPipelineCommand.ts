// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  CreateMediaLiveConnectorPipelineRequest,
  CreateMediaLiveConnectorPipelineResponse,
} from "../models/models_0";
import { CreateMediaLiveConnectorPipeline$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateMediaLiveConnectorPipelineCommand}.
 */
export interface CreateMediaLiveConnectorPipelineCommandInput extends CreateMediaLiveConnectorPipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaLiveConnectorPipelineCommand}.
 */
export interface CreateMediaLiveConnectorPipelineCommandOutput extends CreateMediaLiveConnectorPipelineResponse, __MetadataBearer {}

/**
 * Creates a media live connector pipeline in an Amazon Chime SDK meeting.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaLiveConnectorPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaLiveConnectorPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // CreateMediaLiveConnectorPipelineRequest
 *   Sources: [ // LiveConnectorSourceList // required
 *     { // LiveConnectorSourceConfiguration
 *       SourceType: "ChimeSdkMeeting", // required
 *       ChimeSdkMeetingLiveConnectorConfiguration: { // ChimeSdkMeetingLiveConnectorConfiguration
 *         Arn: "STRING_VALUE", // required
 *         MuxType: "AudioWithCompositedVideo" || "AudioWithActiveSpeakerVideo", // required
 *         CompositedVideo: { // CompositedVideoArtifactsConfiguration
 *           Layout: "GridView",
 *           Resolution: "HD" || "FHD",
 *           GridViewConfiguration: { // GridViewConfiguration
 *             ContentShareLayout: "PresenterOnly" || "Horizontal" || "Vertical" || "ActiveSpeakerOnly", // required
 *             PresenterOnlyConfiguration: { // PresenterOnlyConfiguration
 *               PresenterPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 *             },
 *             ActiveSpeakerOnlyConfiguration: { // ActiveSpeakerOnlyConfiguration
 *               ActiveSpeakerPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 *             },
 *             HorizontalLayoutConfiguration: { // HorizontalLayoutConfiguration
 *               TileOrder: "JoinSequence" || "SpeakerSequence",
 *               TilePosition: "Top" || "Bottom",
 *               TileCount: Number("int"),
 *               TileAspectRatio: "STRING_VALUE",
 *             },
 *             VerticalLayoutConfiguration: { // VerticalLayoutConfiguration
 *               TileOrder: "JoinSequence" || "SpeakerSequence",
 *               TilePosition: "Left" || "Right",
 *               TileCount: Number("int"),
 *               TileAspectRatio: "STRING_VALUE",
 *             },
 *             VideoAttribute: { // VideoAttribute
 *               CornerRadius: Number("int"),
 *               BorderColor: "Black" || "Blue" || "Red" || "Green" || "White" || "Yellow",
 *               HighlightColor: "Black" || "Blue" || "Red" || "Green" || "White" || "Yellow",
 *               BorderThickness: Number("int"),
 *             },
 *             CanvasOrientation: "Landscape" || "Portrait",
 *           },
 *         },
 *         SourceConfiguration: { // SourceConfiguration
 *           SelectedVideoStreams: { // SelectedVideoStreams
 *             AttendeeIds: [ // AttendeeIdList
 *               "STRING_VALUE",
 *             ],
 *             ExternalUserIds: [ // ExternalUserIdList
 *               "STRING_VALUE",
 *             ],
 *           },
 *         },
 *       },
 *     },
 *   ],
 *   Sinks: [ // LiveConnectorSinkList // required
 *     { // LiveConnectorSinkConfiguration
 *       SinkType: "RTMP", // required
 *       RTMPConfiguration: { // LiveConnectorRTMPConfiguration
 *         Url: "STRING_VALUE", // required
 *         AudioChannels: "Stereo" || "Mono",
 *         AudioSampleRate: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMediaLiveConnectorPipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaLiveConnectorPipelineResponse
 * //   MediaLiveConnectorPipeline: { // MediaLiveConnectorPipeline
 * //     Sources: [ // LiveConnectorSourceList
 * //       { // LiveConnectorSourceConfiguration
 * //         SourceType: "ChimeSdkMeeting", // required
 * //         ChimeSdkMeetingLiveConnectorConfiguration: { // ChimeSdkMeetingLiveConnectorConfiguration
 * //           Arn: "STRING_VALUE", // required
 * //           MuxType: "AudioWithCompositedVideo" || "AudioWithActiveSpeakerVideo", // required
 * //           CompositedVideo: { // CompositedVideoArtifactsConfiguration
 * //             Layout: "GridView",
 * //             Resolution: "HD" || "FHD",
 * //             GridViewConfiguration: { // GridViewConfiguration
 * //               ContentShareLayout: "PresenterOnly" || "Horizontal" || "Vertical" || "ActiveSpeakerOnly", // required
 * //               PresenterOnlyConfiguration: { // PresenterOnlyConfiguration
 * //                 PresenterPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 * //               },
 * //               ActiveSpeakerOnlyConfiguration: { // ActiveSpeakerOnlyConfiguration
 * //                 ActiveSpeakerPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 * //               },
 * //               HorizontalLayoutConfiguration: { // HorizontalLayoutConfiguration
 * //                 TileOrder: "JoinSequence" || "SpeakerSequence",
 * //                 TilePosition: "Top" || "Bottom",
 * //                 TileCount: Number("int"),
 * //                 TileAspectRatio: "STRING_VALUE",
 * //               },
 * //               VerticalLayoutConfiguration: { // VerticalLayoutConfiguration
 * //                 TileOrder: "JoinSequence" || "SpeakerSequence",
 * //                 TilePosition: "Left" || "Right",
 * //                 TileCount: Number("int"),
 * //                 TileAspectRatio: "STRING_VALUE",
 * //               },
 * //               VideoAttribute: { // VideoAttribute
 * //                 CornerRadius: Number("int"),
 * //                 BorderColor: "Black" || "Blue" || "Red" || "Green" || "White" || "Yellow",
 * //                 HighlightColor: "Black" || "Blue" || "Red" || "Green" || "White" || "Yellow",
 * //                 BorderThickness: Number("int"),
 * //               },
 * //               CanvasOrientation: "Landscape" || "Portrait",
 * //             },
 * //           },
 * //           SourceConfiguration: { // SourceConfiguration
 * //             SelectedVideoStreams: { // SelectedVideoStreams
 * //               AttendeeIds: [ // AttendeeIdList
 * //                 "STRING_VALUE",
 * //               ],
 * //               ExternalUserIds: [ // ExternalUserIdList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //           },
 * //         },
 * //       },
 * //     ],
 * //     Sinks: [ // LiveConnectorSinkList
 * //       { // LiveConnectorSinkConfiguration
 * //         SinkType: "RTMP", // required
 * //         RTMPConfiguration: { // LiveConnectorRTMPConfiguration
 * //           Url: "STRING_VALUE", // required
 * //           AudioChannels: "Stereo" || "Mono",
 * //           AudioSampleRate: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     MediaPipelineId: "STRING_VALUE",
 * //     MediaPipelineArn: "STRING_VALUE",
 * //     Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused" || "NotStarted",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMediaLiveConnectorPipelineCommandInput - {@link CreateMediaLiveConnectorPipelineCommandInput}
 * @returns {@link CreateMediaLiveConnectorPipelineCommandOutput}
 * @see {@link CreateMediaLiveConnectorPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaLiveConnectorPipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
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
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMediaPipelines service.
 *
 * @public
 */
export class CreateMediaLiveConnectorPipelineCommand extends command<CreateMediaLiveConnectorPipelineCommandInput, CreateMediaLiveConnectorPipelineCommandOutput>(
  _ep0,
  _mw0,
  "CreateMediaLiveConnectorPipeline",
  CreateMediaLiveConnectorPipeline$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMediaLiveConnectorPipelineRequest;
      output: CreateMediaLiveConnectorPipelineResponse;
    };
    sdk: {
      input: CreateMediaLiveConnectorPipelineCommandInput;
      output: CreateMediaLiveConnectorPipelineCommandOutput;
    };
  };
}
