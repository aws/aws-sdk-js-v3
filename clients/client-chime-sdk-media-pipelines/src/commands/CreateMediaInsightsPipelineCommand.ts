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
  CreateMediaInsightsPipelineRequest,
  CreateMediaInsightsPipelineRequestFilterSensitiveLog,
  CreateMediaInsightsPipelineResponse,
  CreateMediaInsightsPipelineResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_CreateMediaInsightsPipelineCommand,
  se_CreateMediaInsightsPipelineCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateMediaInsightsPipelineCommand}.
 */
export interface CreateMediaInsightsPipelineCommandInput extends CreateMediaInsightsPipelineRequest {}
/**
 * @public
 *
 * The output of {@link CreateMediaInsightsPipelineCommand}.
 */
export interface CreateMediaInsightsPipelineCommandOutput
  extends CreateMediaInsightsPipelineResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a media insights pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, CreateMediaInsightsPipelineCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, CreateMediaInsightsPipelineCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // CreateMediaInsightsPipelineRequest
 *   MediaInsightsPipelineConfigurationArn: "STRING_VALUE", // required
 *   KinesisVideoStreamSourceRuntimeConfiguration: { // KinesisVideoStreamSourceRuntimeConfiguration
 *     Streams: [ // Streams // required
 *       { // StreamConfiguration
 *         StreamArn: "STRING_VALUE", // required
 *         FragmentNumber: "STRING_VALUE",
 *         StreamChannelDefinition: { // StreamChannelDefinition
 *           NumberOfChannels: Number("int"), // required
 *           ChannelDefinitions: [ // ChannelDefinitions
 *             { // ChannelDefinition
 *               ChannelId: Number("int"), // required
 *               ParticipantRole: "AGENT" || "CUSTOMER",
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *     MediaEncoding: "pcm", // required
 *     MediaSampleRate: Number("int"), // required
 *   },
 *   MediaInsightsRuntimeMetadata: { // MediaInsightsRuntimeMetadata
 *     "<keys>": "STRING_VALUE",
 *   },
 *   KinesisVideoStreamRecordingSourceRuntimeConfiguration: { // KinesisVideoStreamRecordingSourceRuntimeConfiguration
 *     Streams: [ // RecordingStreamList // required
 *       { // RecordingStreamConfiguration
 *         StreamArn: "STRING_VALUE",
 *       },
 *     ],
 *     FragmentSelector: { // FragmentSelector
 *       FragmentSelectorType: "ProducerTimestamp" || "ServerTimestamp", // required
 *       TimestampRange: { // TimestampRange
 *         StartTimestamp: new Date("TIMESTAMP"), // required
 *         EndTimestamp: new Date("TIMESTAMP"), // required
 *       },
 *     },
 *   },
 *   S3RecordingSinkRuntimeConfiguration: { // S3RecordingSinkRuntimeConfiguration
 *     Destination: "STRING_VALUE", // required
 *     RecordingFileFormat: "Wav" || "Opus", // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE",
 * };
 * const command = new CreateMediaInsightsPipelineCommand(input);
 * const response = await client.send(command);
 * // { // CreateMediaInsightsPipelineResponse
 * //   MediaInsightsPipeline: { // MediaInsightsPipeline
 * //     MediaPipelineId: "STRING_VALUE",
 * //     MediaPipelineArn: "STRING_VALUE",
 * //     MediaInsightsPipelineConfigurationArn: "STRING_VALUE",
 * //     Status: "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused" || "NotStarted",
 * //     KinesisVideoStreamSourceRuntimeConfiguration: { // KinesisVideoStreamSourceRuntimeConfiguration
 * //       Streams: [ // Streams // required
 * //         { // StreamConfiguration
 * //           StreamArn: "STRING_VALUE", // required
 * //           FragmentNumber: "STRING_VALUE",
 * //           StreamChannelDefinition: { // StreamChannelDefinition
 * //             NumberOfChannels: Number("int"), // required
 * //             ChannelDefinitions: [ // ChannelDefinitions
 * //               { // ChannelDefinition
 * //                 ChannelId: Number("int"), // required
 * //                 ParticipantRole: "AGENT" || "CUSTOMER",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //       MediaEncoding: "pcm", // required
 * //       MediaSampleRate: Number("int"), // required
 * //     },
 * //     MediaInsightsRuntimeMetadata: { // MediaInsightsRuntimeMetadata
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     KinesisVideoStreamRecordingSourceRuntimeConfiguration: { // KinesisVideoStreamRecordingSourceRuntimeConfiguration
 * //       Streams: [ // RecordingStreamList // required
 * //         { // RecordingStreamConfiguration
 * //           StreamArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       FragmentSelector: { // FragmentSelector
 * //         FragmentSelectorType: "ProducerTimestamp" || "ServerTimestamp", // required
 * //         TimestampRange: { // TimestampRange
 * //           StartTimestamp: new Date("TIMESTAMP"), // required
 * //           EndTimestamp: new Date("TIMESTAMP"), // required
 * //         },
 * //       },
 * //     },
 * //     S3RecordingSinkRuntimeConfiguration: { // S3RecordingSinkRuntimeConfiguration
 * //       Destination: "STRING_VALUE", // required
 * //       RecordingFileFormat: "Wav" || "Opus", // required
 * //     },
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     ElementStatuses: [ // MediaInsightsPipelineElementStatuses
 * //       { // MediaInsightsPipelineElementStatus
 * //         Type: "AmazonTranscribeCallAnalyticsProcessor" || "VoiceAnalyticsProcessor" || "AmazonTranscribeProcessor" || "KinesisDataStreamSink" || "LambdaFunctionSink" || "SqsQueueSink" || "SnsTopicSink" || "S3RecordingSink" || "VoiceEnhancementSink",
 * //         Status: "NotStarted" || "NotSupported" || "Initializing" || "InProgress" || "Failed" || "Stopping" || "Stopped" || "Paused",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateMediaInsightsPipelineCommandInput - {@link CreateMediaInsightsPipelineCommandInput}
 * @returns {@link CreateMediaInsightsPipelineCommandOutput}
 * @see {@link CreateMediaInsightsPipelineCommandInput} for command's `input` shape.
 * @see {@link CreateMediaInsightsPipelineCommandOutput} for command's `response` shape.
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
export class CreateMediaInsightsPipelineCommand extends $Command<
  CreateMediaInsightsPipelineCommandInput,
  CreateMediaInsightsPipelineCommandOutput,
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
  constructor(readonly input: CreateMediaInsightsPipelineCommandInput) {
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
  ): Handler<CreateMediaInsightsPipelineCommandInput, CreateMediaInsightsPipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateMediaInsightsPipelineCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "CreateMediaInsightsPipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateMediaInsightsPipelineRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateMediaInsightsPipelineResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "ChimeSDKMediaPipelinesService",
        operation: "CreateMediaInsightsPipeline",
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
  private serialize(input: CreateMediaInsightsPipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateMediaInsightsPipelineCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateMediaInsightsPipelineCommandOutput> {
    return de_CreateMediaInsightsPipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
