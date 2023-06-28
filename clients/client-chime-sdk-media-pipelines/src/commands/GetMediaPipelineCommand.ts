// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  GetMediaPipelineRequest,
  GetMediaPipelineResponse,
  GetMediaPipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetMediaPipelineCommand, se_GetMediaPipelineCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMediaPipelineCommand}.
 */
export interface GetMediaPipelineCommandInput extends GetMediaPipelineRequest {}
/**
 * @public
 *
 * The output of {@link GetMediaPipelineCommand}.
 */
export interface GetMediaPipelineCommandOutput extends GetMediaPipelineResponse, __MetadataBearer {}

/**
 * @public
 * <p>Gets an existing media pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, GetMediaPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, GetMediaPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // GetMediaPipelineRequest
 *   MediaPipelineId: "STRING_VALUE", // required
 * };
 * const command = new GetMediaPipelineCommand(input);
 * const response = await client.send(command);
 * // { // GetMediaPipelineResponse
 * //   MediaPipeline: { // MediaPipeline
 * //     MediaCapturePipeline: { // MediaCapturePipeline
 * //       MediaPipelineId: "STRING_VALUE",
 * //       MediaPipelineArn: "STRING_VALUE",
 * //       SourceType: "ChimeSdkMeeting",
 * //       SourceArn: "STRING_VALUE",
 * //       Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused",
 * //       SinkType: "S3Bucket",
 * //       SinkArn: "STRING_VALUE",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConfiguration
 * //         SourceConfiguration: { // SourceConfiguration
 * //           SelectedVideoStreams: { // SelectedVideoStreams
 * //             AttendeeIds: [ // AttendeeIdList
 * //               "STRING_VALUE",
 * //             ],
 * //             ExternalUserIds: [ // ExternalUserIdList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         },
 * //         ArtifactsConfiguration: { // ArtifactsConfiguration
 * //           Audio: { // AudioArtifactsConfiguration
 * //             MuxType: "AudioOnly" || "AudioWithActiveSpeakerVideo" || "AudioWithCompositedVideo", // required
 * //           },
 * //           Video: { // VideoArtifactsConfiguration
 * //             State: "Enabled" || "Disabled", // required
 * //             MuxType: "VideoOnly",
 * //           },
 * //           Content: { // ContentArtifactsConfiguration
 * //             State: "Enabled" || "Disabled", // required
 * //             MuxType: "ContentOnly",
 * //           },
 * //           CompositedVideo: { // CompositedVideoArtifactsConfiguration
 * //             Layout: "GridView",
 * //             Resolution: "HD" || "FHD",
 * //             GridViewConfiguration: { // GridViewConfiguration
 * //               ContentShareLayout: "PresenterOnly" || "Horizontal" || "Vertical", // required
 * //               PresenterOnlyConfiguration: { // PresenterOnlyConfiguration
 * //                 PresenterPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 * //               },
 * //             },
 * //           },
 * //         },
 * //       },
 * //     },
 * //     MediaLiveConnectorPipeline: { // MediaLiveConnectorPipeline
 * //       Sources: [ // LiveConnectorSourceList
 * //         { // LiveConnectorSourceConfiguration
 * //           SourceType: "ChimeSdkMeeting", // required
 * //           ChimeSdkMeetingLiveConnectorConfiguration: { // ChimeSdkMeetingLiveConnectorConfiguration
 * //             Arn: "STRING_VALUE", // required
 * //             MuxType: "AudioWithCompositedVideo" || "AudioWithActiveSpeakerVideo", // required
 * //             CompositedVideo: {
 * //               Layout: "GridView",
 * //               Resolution: "HD" || "FHD",
 * //               GridViewConfiguration: {
 * //                 ContentShareLayout: "PresenterOnly" || "Horizontal" || "Vertical", // required
 * //                 PresenterOnlyConfiguration: {
 * //                   PresenterPosition: "TopLeft" || "TopRight" || "BottomLeft" || "BottomRight",
 * //                 },
 * //               },
 * //             },
 * //             SourceConfiguration: {
 * //               SelectedVideoStreams: {
 * //                 AttendeeIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 ExternalUserIds: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Sinks: [ // LiveConnectorSinkList
 * //         { // LiveConnectorSinkConfiguration
 * //           SinkType: "RTMP", // required
 * //           RTMPConfiguration: { // LiveConnectorRTMPConfiguration
 * //             Url: "STRING_VALUE", // required
 * //             AudioChannels: "Stereo" || "Mono",
 * //             AudioSampleRate: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       MediaPipelineId: "STRING_VALUE",
 * //       MediaPipelineArn: "STRING_VALUE",
 * //       Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     MediaConcatenationPipeline: { // MediaConcatenationPipeline
 * //       MediaPipelineId: "STRING_VALUE",
 * //       MediaPipelineArn: "STRING_VALUE",
 * //       Sources: [ // ConcatenationSourceList
 * //         { // ConcatenationSource
 * //           Type: "MediaCapturePipeline", // required
 * //           MediaCapturePipelineSourceConfiguration: { // MediaCapturePipelineSourceConfiguration
 * //             MediaPipelineArn: "STRING_VALUE", // required
 * //             ChimeSdkMeetingConfiguration: { // ChimeSdkMeetingConcatenationConfiguration
 * //               ArtifactsConfiguration: { // ArtifactsConcatenationConfiguration
 * //                 Audio: { // AudioConcatenationConfiguration
 * //                   State: "Enabled", // required
 * //                 },
 * //                 Video: { // VideoConcatenationConfiguration
 * //                   State: "Enabled" || "Disabled", // required
 * //                 },
 * //                 Content: { // ContentConcatenationConfiguration
 * //                   State: "Enabled" || "Disabled", // required
 * //                 },
 * //                 DataChannel: { // DataChannelConcatenationConfiguration
 * //                   State: "Enabled" || "Disabled", // required
 * //                 },
 * //                 TranscriptionMessages: { // TranscriptionMessagesConcatenationConfiguration
 * //                   State: "Enabled" || "Disabled", // required
 * //                 },
 * //                 MeetingEvents: { // MeetingEventsConcatenationConfiguration
 * //                   State: "Enabled" || "Disabled", // required
 * //                 },
 * //                 CompositedVideo: { // CompositedVideoConcatenationConfiguration
 * //                   State: "Enabled" || "Disabled", // required
 * //                 },
 * //               },
 * //             },
 * //           },
 * //         },
 * //       ],
 * //       Sinks: [ // ConcatenationSinkList
 * //         { // ConcatenationSink
 * //           Type: "S3Bucket", // required
 * //           S3BucketSinkConfiguration: { // S3BucketSinkConfiguration
 * //             Destination: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused",
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     MediaInsightsPipeline: { // MediaInsightsPipeline
 * //       MediaPipelineId: "STRING_VALUE",
 * //       MediaPipelineArn: "STRING_VALUE",
 * //       MediaInsightsPipelineConfigurationArn: "STRING_VALUE",
 * //       Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused",
 * //       KinesisVideoStreamSourceRuntimeConfiguration: { // KinesisVideoStreamSourceRuntimeConfiguration
 * //         Streams: [ // Streams // required
 * //           { // StreamConfiguration
 * //             StreamArn: "STRING_VALUE", // required
 * //             FragmentNumber: "STRING_VALUE",
 * //             StreamChannelDefinition: { // StreamChannelDefinition
 * //               NumberOfChannels: Number("int"), // required
 * //               ChannelDefinitions: [ // ChannelDefinitions
 * //                 { // ChannelDefinition
 * //                   ChannelId: Number("int"), // required
 * //                   ParticipantRole: "AGENT" || "CUSTOMER",
 * //                 },
 * //               ],
 * //             },
 * //           },
 * //         ],
 * //         MediaEncoding: "pcm", // required
 * //         MediaSampleRate: Number("int"), // required
 * //       },
 * //       MediaInsightsRuntimeMetadata: { // MediaInsightsRuntimeMetadata
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       KinesisVideoStreamRecordingSourceRuntimeConfiguration: { // KinesisVideoStreamRecordingSourceRuntimeConfiguration
 * //         Streams: [ // RecordingStreamList // required
 * //           { // RecordingStreamConfiguration
 * //             StreamArn: "STRING_VALUE",
 * //           },
 * //         ],
 * //         FragmentSelector: { // FragmentSelector
 * //           FragmentSelectorType: "ProducerTimestamp" || "ServerTimestamp", // required
 * //           TimestampRange: { // TimestampRange
 * //             StartTimestamp: new Date("TIMESTAMP"), // required
 * //             EndTimestamp: new Date("TIMESTAMP"), // required
 * //           },
 * //         },
 * //       },
 * //       S3RecordingSinkRuntimeConfiguration: { // S3RecordingSinkRuntimeConfiguration
 * //         Destination: "STRING_VALUE", // required
 * //         RecordingFileFormat: "Wav" || "Opus", // required
 * //       },
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMediaPipelineCommandInput - {@link GetMediaPipelineCommandInput}
 * @returns {@link GetMediaPipelineCommandOutput}
 * @see {@link GetMediaPipelineCommandInput} for command's `input` shape.
 * @see {@link GetMediaPipelineCommandOutput} for command's `response` shape.
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
 */
export class GetMediaPipelineCommand extends $Command<
  GetMediaPipelineCommandInput,
  GetMediaPipelineCommandOutput,
  ChimeSDKMediaPipelinesClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: GetMediaPipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeSDKMediaPipelinesClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetMediaPipelineCommandInput, GetMediaPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMediaPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "GetMediaPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMediaPipelineResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: GetMediaPipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetMediaPipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetMediaPipelineCommandOutput> {
    return de_GetMediaPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
