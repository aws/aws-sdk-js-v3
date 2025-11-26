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
import type { GetMediaCapturePipelineRequest, GetMediaCapturePipelineResponse } from "../models/models_0";
import { GetMediaCapturePipeline } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMediaCapturePipelineCommand}.
 */
export interface GetMediaCapturePipelineCommandInput extends GetMediaCapturePipelineRequest {}
/**
 * @public
 *
 * The output of {@link GetMediaCapturePipelineCommand}.
 */
export interface GetMediaCapturePipelineCommandOutput extends GetMediaCapturePipelineResponse, __MetadataBearer {}

/**
 * <p>Gets an existing media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, GetMediaCapturePipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, GetMediaCapturePipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * // import type { ChimeSDKMediaPipelinesClientConfig } from "@aws-sdk/client-chime-sdk-media-pipelines";
 * const config = {}; // type is ChimeSDKMediaPipelinesClientConfig
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // GetMediaCapturePipelineRequest
 *   MediaPipelineId: "STRING_VALUE", // required
 * };
 * const command = new GetMediaCapturePipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetMediaCapturePipelineResponse
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
 * @param GetMediaCapturePipelineCommandInput - {@link GetMediaCapturePipelineCommandInput}
 * @returns {@link GetMediaCapturePipelineCommandOutput}
 * @see {@link GetMediaCapturePipelineCommandInput} for command's `input` shape.
 * @see {@link GetMediaCapturePipelineCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMediaPipelinesClientResolvedConfig | config} for ChimeSDKMediaPipelinesClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class GetMediaCapturePipelineCommand extends $Command
  .classBuilder<
    GetMediaCapturePipelineCommandInput,
    GetMediaCapturePipelineCommandOutput,
    ChimeSDKMediaPipelinesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMediaPipelinesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKMediaPipelinesService", "GetMediaCapturePipeline", {})
  .n("ChimeSDKMediaPipelinesClient", "GetMediaCapturePipelineCommand")
  .sc(GetMediaCapturePipeline)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMediaCapturePipelineRequest;
      output: GetMediaCapturePipelineResponse;
    };
    sdk: {
      input: GetMediaCapturePipelineCommandInput;
      output: GetMediaCapturePipelineCommandOutput;
    };
  };
}
