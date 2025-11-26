// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMediaCapturePipelineRequest, CreateMediaCapturePipelineResponse } from "../models/models_0";
import { CreateMediaCapturePipeline } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaCapturePipelineCommand}.
 */
export interface CreateMediaCapturePipelineCommandInput extends CreateMediaCapturePipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaCapturePipelineCommand}.
 */
export interface CreateMediaCapturePipelineCommandOutput extends CreateMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * <p>Creates a media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaCapturePipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaCapturePipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // CreateMediaCapturePipelineRequest
 *   SourceType: "ChimeSdkMeeting", // required
 *   SourceArn: "STRING_VALUE", // required
 *   SinkType: "S3Bucket", // required
 *   SinkArn: "STRING_VALUE", // required
 *   ClientRequestToken: "STRING_VALUE",
 *   ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConfiguration
 *     SourceConfiguration: { // SourceConfiguration
 *       SelectedVideoStreams: { // SelectedVideoStreams
 *         AttendeeIds: [ // AttendeeIdList
 *           "STRING_VALUE",
 *         ],
 *         ExternalUserIds: [ // ExternalUserIdList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     ArtifactsConfiguration: { // ArtifactsConfiguration
 *       Audio: { // AudioArtifactsConfiguration
 *         MuxType: "AudioOnly" || "AudioWithActiveSpeakerVideo" || "AudioWithCompositedVideo", // required
 *       },
 *       Video: { // VideoArtifactsConfiguration
 *         State: "Enabled" || "Disabled", // required
 *         MuxType: "VideoOnly",
 *       },
 *       Content: { // ContentArtifactsConfiguration
 *         State: "Enabled" || "Disabled", // required
 *         MuxType: "ContentOnly",
 *       },
 *       CompositedVideo: { // CompositedVideoArtifactsConfiguration
 *         Layout: "GridView",
 *         Resolution: "HD" || "FHD",
 *         GridViewConfiguration: { // GridViewConfiguration
 *           ContentShareLayout: "PresenterOnly" || "Horizontal" || "Vertical" || "ActiveSpeakerOnly", // required
 *           PresenterOnlyConfiguration: { // PresenterOnlyConfiguration
 *             PresenterPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 *           },
 *           ActiveSpeakerOnlyConfiguration: { // ActiveSpeakerOnlyConfiguration
 *             ActiveSpeakerPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 *           },
 *           HorizontalLayoutConfiguration: { // HorizontalLayoutConfiguration
 *             TileOrder: "JoinSequence" || "SpeakerSequence",
 *             TilePosition: "Top" || "Bottom",
 *             TileCount: Number("int"),
 *             TileAspectRatio: "STRING_VALUE",
 *           },
 *           VerticalLayoutConfiguration: { // VerticalLayoutConfiguration
 *             TileOrder: "JoinSequence" || "SpeakerSequence",
 *             TilePosition: "Left" || "Right",
 *             TileCount: Number("int"),
 *             TileAspectRatio: "STRING_VALUE",
 *           },
 *           VideoAttribute: { // VideoAttribute
 *             CornerRadius: Number("int"),
 *             BorderColor: "Black" || "Blue" || "Red" || "Green" || "White" || "Yellow",
 *             HighlightColor: "Black" || "Blue" || "Red" || "Green" || "White" || "Yellow",
 *             BorderThickness: Number("int"),
 *           },
 *           CanvasOrientation: "Landscape" || "Portrait",
 *         },
 *       },
 *     },
 *   },
 *   SseAwsKeyManagementParams: { // SseAwsKeyManagementParams
 *     AwsKmsKeyId: "STRING_VALUE", // required
 *     AwsKmsEncryptionContext: "STRING_VALUE",
 *   },
 *   SinkIamRoleArn: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaCapturePipelineResponse
 * //   MediaCapturePipeline: { // MediaCapturePipeline
 * //     MediaPipelineId: "STRING_VALUE",
 * //     MediaPipelineArn: "STRING_VALUE",
 * //     SourceType: "ChimeSdkMeeting",
 * //     SourceArn: "STRING_VALUE",
 * //     Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused" || "NotStarted",
 * //     SinkType: "S3Bucket",
 * //     SinkArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConfiguration
 * //       SourceConfiguration: { // SourceConfiguration
 * //         SelectedVideoStreams: { // SelectedVideoStreams
 * //           AttendeeIds: [ // AttendeeIdList
 * //             "STRING_VALUE",
 * //           ],
 * //           ExternalUserIds: [ // ExternalUserIdList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       ArtifactsConfiguration: { // ArtifactsConfiguration
 * //         Audio: { // AudioArtifactsConfiguration
 * //           MuxType: "AudioOnly" || "AudioWithActiveSpeakerVideo" || "AudioWithCompositedVideo", // required
 * //         },
 * //         Video: { // VideoArtifactsConfiguration
 * //           State: "Enabled" || "Disabled", // required
 * //           MuxType: "VideoOnly",
 * //         },
 * //         Content: { // ContentArtifactsConfiguration
 * //           State: "Enabled" || "Disabled", // required
 * //           MuxType: "ContentOnly",
 * //         },
 * //         CompositedVideo: { // CompositedVideoArtifactsConfiguration
 * //           Layout: "GridView",
 * //           Resolution: "HD" || "FHD",
 * //           GridViewConfiguration: { // GridViewConfiguration
 * //             ContentShareLayout: "PresenterOnly" || "Horizontal" || "Vertical" || "ActiveSpeakerOnly", // required
 * //             PresenterOnlyConfiguration: { // PresenterOnlyConfiguration
 * //               PresenterPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 * //             },
 * //             ActiveSpeakerOnlyConfiguration: { // ActiveSpeakerOnlyConfiguration
 * //               ActiveSpeakerPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 * //             },
 * //             HorizontalLayoutConfiguration: { // HorizontalLayoutConfiguration
 * //               TileOrder: "JoinSequence" || "SpeakerSequence",
 * //               TilePosition: "Top" || "Bottom",
 * //               TileCount: Number("int"),
 * //               TileAspectRatio: "STRING_VALUE",
 * //             },
 * //             VerticalLayoutConfiguration: { // VerticalLayoutConfiguration
 * //               TileOrder: "JoinSequence" || "SpeakerSequence",
 * //               TilePosition: "Left" || "Right",
 * //               TileCount: Number("int"),
 * //               TileAspectRatio: "STRING_VALUE",
 * //             },
 * //             VideoAttribute: { // VideoAttribute
 * //               CornerRadius: Number("int"),
 * //               BorderColor: "Black" || "Blue" || "Red" || "Green" || "White" || "Yellow",
 * //               HighlightColor: "Black" || "Blue" || "Red" || "Green" || "White" || "Yellow",
 * //               BorderThickness: Number("int"),
 * //             },
 * //             CanvasOrientation: "Landscape" || "Portrait",
 * //           },
 * //         },
 * //       },
 * //     },
 * //     SseAwsKeyManagementParams: { // SseAwsKeyManagementParams
 * //       AwsKmsKeyId: "STRING_VALUE", // required
 * //       AwsKmsEncryptionContext: "STRING_VALUE",
 * //     },
 * //     SinkIamRoleArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMediaCapturePipelineCommandInput - {@link CreateMediaCapturePipelineCommandInput}
 * @returns {@link CreateMediaCapturePipelineCommandOutput}
 * @see {@link CreateMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMediaPipelinesServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMediaPipelines service.</p>
 *
 *
 * @public
 */
export class CreateMediaCapturePipelineCommand extends $Command
  .classBuilder<
    CreateMediaCapturePipelineCommandInput,
    CreateMediaCapturePipelineCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "CreateMediaCapturePipeline", {})
  .n("ChimeSDKMediaPipelinesClient", "CreateMediaCapturePipelineCommand")
  .sc(CreateMediaCapturePipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMediaCapturePipelineRequest;
      output: CreateMediaCapturePipelineResponse;
    };
    sdk: {
      input: CreateMediaCapturePipelineCommandInput;
      output: CreateMediaCapturePipelineCommandOutput;
    };
  };
}
