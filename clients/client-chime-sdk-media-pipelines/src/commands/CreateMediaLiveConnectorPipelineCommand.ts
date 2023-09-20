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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ChimeSDKMediaPipelinesClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMediaPipelinesClient";
import {
  CreateMediaLiveConnectorPipelineRequest,
  CreateMediaLiveConnectorPipelineRequestFilterSensitiveLog,
  CreateMediaLiveConnectorPipelineResponse,
  CreateMediaLiveConnectorPipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateMediaLiveConnectorPipelineCommand,
  se_CreateMediaLiveConnectorPipelineCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
export interface CreateMediaLiveConnectorPipelineCommandOutput
  extends CreateMediaLiveConnectorPipelineResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a media live connector pipeline in an Amazon Chime SDK meeting.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaLiveConnectorPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaLiveConnectorPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
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
 */
export class CreateMediaLiveConnectorPipelineCommand extends $Command<
  CreateMediaLiveConnectorPipelineCommandInput,
  CreateMediaLiveConnectorPipelineCommandOutput,
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
  constructor(readonly input: CreateMediaLiveConnectorPipelineCommandInput) {
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
  ): Handler<CreateMediaLiveConnectorPipelineCommandInput, CreateMediaLiveConnectorPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaLiveConnectorPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaLiveConnectorPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaLiveConnectorPipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaLiveConnectorPipelineResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKMediaPipelinesService",
        operation: "CreateMediaLiveConnectorPipeline",
      },
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
  private serialize(
    input: CreateMediaLiveConnectorPipelineCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateMediaLiveConnectorPipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaLiveConnectorPipelineCommandOutput> {
    return de_CreateMediaLiveConnectorPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
