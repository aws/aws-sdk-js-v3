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
  GetMediaInsightsPipelineConfigurationRequest,
  GetMediaInsightsPipelineConfigurationResponse,
  GetMediaInsightsPipelineConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetMediaInsightsPipelineConfigurationCommand,
  se_GetMediaInsightsPipelineConfigurationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetMediaInsightsPipelineConfigurationCommand}.
 */
export interface GetMediaInsightsPipelineConfigurationCommandInput
  extends GetMediaInsightsPipelineConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link GetMediaInsightsPipelineConfigurationCommand}.
 */
export interface GetMediaInsightsPipelineConfigurationCommandOutput
  extends GetMediaInsightsPipelineConfigurationResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Gets the configuration settings for a media insights pipeline.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMediaPipelinesClient, GetMediaInsightsPipelineConfigurationCommand } from "@aws-sdk/client-chime-sdk-media-pipelines"; // ES Modules import
 * // const { ChimeSDKMediaPipelinesClient, GetMediaInsightsPipelineConfigurationCommand } = require("@aws-sdk/client-chime-sdk-media-pipelines"); // CommonJS import
 * const client = new ChimeSDKMediaPipelinesClient(config);
 * const input = { // GetMediaInsightsPipelineConfigurationRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new GetMediaInsightsPipelineConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // GetMediaInsightsPipelineConfigurationResponse
 * //   MediaInsightsPipelineConfiguration: { // MediaInsightsPipelineConfiguration
 * //     MediaInsightsPipelineConfigurationName: "STRING_VALUE",
 * //     MediaInsightsPipelineConfigurationArn: "STRING_VALUE",
 * //     ResourceAccessRoleArn: "STRING_VALUE",
 * //     RealTimeAlertConfiguration: { // RealTimeAlertConfiguration
 * //       Disabled: true || false,
 * //       Rules: [ // RealTimeAlertRuleList
 * //         { // RealTimeAlertRule
 * //           Type: "KeywordMatch" || "Sentiment" || "IssueDetection", // required
 * //           KeywordMatchConfiguration: { // KeywordMatchConfiguration
 * //             RuleName: "STRING_VALUE", // required
 * //             Keywords: [ // KeywordMatchWordList // required
 * //               "STRING_VALUE",
 * //             ],
 * //             Negate: true || false,
 * //           },
 * //           SentimentConfiguration: { // SentimentConfiguration
 * //             RuleName: "STRING_VALUE", // required
 * //             SentimentType: "NEGATIVE", // required
 * //             TimePeriod: Number("int"), // required
 * //           },
 * //           IssueDetectionConfiguration: { // IssueDetectionConfiguration
 * //             RuleName: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     Elements: [ // MediaInsightsPipelineConfigurationElements
 * //       { // MediaInsightsPipelineConfigurationElement
 * //         Type: "AmazonTranscribeCallAnalyticsProcessor" || "VoiceAnalyticsProcessor" || "AmazonTranscribeProcessor" || "KinesisDataStreamSink" || "LambdaFunctionSink" || "SqsQueueSink" || "SnsTopicSink" || "S3RecordingSink", // required
 * //         AmazonTranscribeCallAnalyticsProcessorConfiguration: { // AmazonTranscribeCallAnalyticsProcessorConfiguration
 * //           LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR", // required
 * //           VocabularyName: "STRING_VALUE",
 * //           VocabularyFilterName: "STRING_VALUE",
 * //           VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //           LanguageModelName: "STRING_VALUE",
 * //           EnablePartialResultsStabilization: true || false,
 * //           PartialResultsStability: "high" || "medium" || "low",
 * //           ContentIdentificationType: "PII",
 * //           ContentRedactionType: "PII",
 * //           PiiEntityTypes: "STRING_VALUE",
 * //           FilterPartialResults: true || false,
 * //           PostCallAnalyticsSettings: { // PostCallAnalyticsSettings
 * //             OutputLocation: "STRING_VALUE", // required
 * //             DataAccessRoleArn: "STRING_VALUE", // required
 * //             ContentRedactionOutput: "redacted" || "redacted_and_unredacted",
 * //             OutputEncryptionKMSKeyId: "STRING_VALUE",
 * //           },
 * //           CallAnalyticsStreamCategories: [ // CategoryNameList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //         AmazonTranscribeProcessorConfiguration: { // AmazonTranscribeProcessorConfiguration
 * //           LanguageCode: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //           VocabularyName: "STRING_VALUE",
 * //           VocabularyFilterName: "STRING_VALUE",
 * //           VocabularyFilterMethod: "remove" || "mask" || "tag",
 * //           ShowSpeakerLabel: true || false,
 * //           EnablePartialResultsStabilization: true || false,
 * //           PartialResultsStability: "high" || "medium" || "low",
 * //           ContentIdentificationType: "PII",
 * //           ContentRedactionType: "PII",
 * //           PiiEntityTypes: "STRING_VALUE",
 * //           LanguageModelName: "STRING_VALUE",
 * //           FilterPartialResults: true || false,
 * //           IdentifyLanguage: true || false,
 * //           LanguageOptions: "STRING_VALUE",
 * //           PreferredLanguage: "en-US" || "en-GB" || "es-US" || "fr-CA" || "fr-FR" || "en-AU" || "it-IT" || "de-DE" || "pt-BR",
 * //           VocabularyNames: "STRING_VALUE",
 * //           VocabularyFilterNames: "STRING_VALUE",
 * //         },
 * //         KinesisDataStreamSinkConfiguration: { // KinesisDataStreamSinkConfiguration
 * //           InsightsTarget: "STRING_VALUE",
 * //         },
 * //         S3RecordingSinkConfiguration: { // S3RecordingSinkConfiguration
 * //           Destination: "STRING_VALUE",
 * //           RecordingFileFormat: "Wav" || "Opus",
 * //         },
 * //         VoiceAnalyticsProcessorConfiguration: { // VoiceAnalyticsProcessorConfiguration
 * //           SpeakerSearchStatus: "Enabled" || "Disabled",
 * //           VoiceToneAnalysisStatus: "Enabled" || "Disabled",
 * //         },
 * //         LambdaFunctionSinkConfiguration: { // LambdaFunctionSinkConfiguration
 * //           InsightsTarget: "STRING_VALUE",
 * //         },
 * //         SqsQueueSinkConfiguration: { // SqsQueueSinkConfiguration
 * //           InsightsTarget: "STRING_VALUE",
 * //         },
 * //         SnsTopicSinkConfiguration: { // SnsTopicSinkConfiguration
 * //           InsightsTarget: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     MediaInsightsPipelineConfigurationId: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMediaInsightsPipelineConfigurationCommandInput - {@link GetMediaInsightsPipelineConfigurationCommandInput}
 * @returns {@link GetMediaInsightsPipelineConfigurationCommandOutput}
 * @see {@link GetMediaInsightsPipelineConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetMediaInsightsPipelineConfigurationCommandOutput} for command's `response` shape.
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
export class GetMediaInsightsPipelineConfigurationCommand extends $Command<
  GetMediaInsightsPipelineConfigurationCommandInput,
  GetMediaInsightsPipelineConfigurationCommandOutput,
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
  constructor(readonly input: GetMediaInsightsPipelineConfigurationCommandInput) {
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
  ): Handler<GetMediaInsightsPipelineConfigurationCommandInput, GetMediaInsightsPipelineConfigurationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetMediaInsightsPipelineConfigurationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeSDKMediaPipelinesClient";
    const commandName = "GetMediaInsightsPipelineConfigurationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: GetMediaInsightsPipelineConfigurationResponseFilterSensitiveLog,
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
    input: GetMediaInsightsPipelineConfigurationCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_GetMediaInsightsPipelineConfigurationCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetMediaInsightsPipelineConfigurationCommandOutput> {
    return de_GetMediaInsightsPipelineConfigurationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
